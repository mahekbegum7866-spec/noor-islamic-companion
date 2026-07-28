import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "5mb" }));

  // Initialize Gemini API client safely
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    try {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    } catch (e) {
      console.warn("Gemini client initialization warning:", e);
    }
  }

  // API Endpoint: Mood -> Authentic Quran & Islamic Guidance
  app.post("/api/mood-guidance", async (req, res) => {
    try {
      const { mood, language } = req.body;
      if (!mood) {
        return res.status(400).json({ error: "Mood parameter is required" });
      }

      if (!ai) {
        return res.json({
          isFallback: true,
          message: "Gemini API key is not configured. Returning authentic fallback guidance.",
        });
      }

      const langMap: Record<string, string> = {
        en: "English",
        ur: "Urdu (اردو)",
        hi: "Hindi (हिंदी)",
        ar: "Arabic (العربية)",
      };

      const targetLang = langMap[language] || "English";

      const systemInstruction = `You are Noor AI, an authentic Islamic AI Companion.
CRITICAL MANDATE:
1. Use ONLY authentic Quran verses (specify Surah name and Ayah number) and Sahih/Authentic Hadiths (Bukhari, Muslim, Tirmidhi, Abu Dawud, An-Nasa'i, Ibn Majah, Ahmad).
2. NEVER invent or hallucinate any verse, Hadith, or Islamic ruling.
3. Keep tone exceptionally compassionate, calming, respectful, and hopeful.
4. Output language MUST be ${targetLang} for translations and reflections, while preserving exact Arabic text for Quranic verses and Duas.
5. Provide response strictly in JSON matching the requested schema.`;

      const prompt = `The user is currently feeling: "${mood}".
Provide Islamic spiritual solace and practical guidance for this emotion:
- Relevant Quran Verses with Arabic, English/Target Language translation, Surah name & Ayah number.
- Authentic Sahih Hadith with source reference.
- Suitable Dua from Sunnah with Arabic, Transliteration, and Translation.
- Recommended Dhikr (e.g. Istighfar, Hasbunallah, Salawat) with count.
- Gentle Islamic reflection & heart-easing reminder (2-3 sentences).`;

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              mood: { type: Type.STRING },
              reflection: { type: Type.STRING, description: "A gentle, uplifting spiritual reminder" },
              quranVerses: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    surahName: { type: Type.STRING },
                    surahNumber: { type: Type.INTEGER },
                    ayahNumber: { type: Type.INTEGER },
                    arabicText: { type: Type.STRING },
                    translation: { type: Type.STRING },
                    explanation: { type: Type.STRING },
                  },
                  required: ["surahName", "arabicText", "translation"],
                },
              },
              hadith: {
                type: Type.OBJECT,
                properties: {
                  arabicText: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  source: { type: Type.STRING, description: "e.g., Sahih al-Bukhari 6307" },
                  lesson: { type: Type.STRING },
                },
                required: ["translation", "source"],
              },
              duas: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    arabicText: { type: Type.STRING },
                    transliteration: { type: Type.STRING },
                    translation: { type: Type.STRING },
                    benefit: { type: Type.STRING },
                  },
                  required: ["arabicText", "translation"],
                },
              },
              recommendedDhikr: {
                type: Type.OBJECT,
                properties: {
                  arabicText: { type: Type.STRING },
                  transliteration: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  recommendedCount: { type: Type.INTEGER },
                  virtue: { type: Type.STRING },
                },
                required: ["arabicText", "transliteration", "translation"],
              },
            },
            required: ["mood", "reflection", "quranVerses", "hadith", "duas", "recommendedDhikr"],
          },
        },
      });

      const data = JSON.parse(response.text || "{}");
      res.json(data);
    } catch (error: any) {
      console.error("Error generating mood guidance:", error);
      res.status(500).json({
        error: "Failed to generate guidance",
        details: error.message || "Unknown error",
      });
    }
  });

  // API Endpoint: Daily AI Short Islamic Lesson
  app.post("/api/daily-lesson", async (req, res) => {
    try {
      const { topic, language } = req.body;

      if (!ai) {
        return res.json({
          isFallback: true,
          message: "Gemini API key is not configured.",
        });
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: `Provide a inspiring 1-minute daily Islamic lesson about "${topic || 'Gratitude and Patience in Islam'}" in ${language || 'English'}. Include 1 Quran verse, 1 Authentic Hadith reference, and 3 practical key takeaways. Output JSON.`,
        config: {
          systemInstruction: "You are an authentic Islamic educator. Output strictly JSON.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              quranVerse: { type: Type.STRING },
              hadithReference: { type: Type.STRING },
              lessonText: { type: Type.STRING },
              takeaways: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ["title", "quranVerse", "hadithReference", "lessonText", "takeaways"],
          },
        },
      });

      res.json(JSON.parse(response.text || "{}"));
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for dev or static server for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
