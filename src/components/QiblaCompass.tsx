import React, { useState, useEffect } from 'react';
import { Compass, Navigation, MapPin } from 'lucide-react';

export const QiblaCompass: React.FC = () => {
  const [heading, setHeading] = useState<number>(0);
  const [qiblaAngle, setQiblaAngle] = useState<number>(294); // Default Qibla angle relative to North (approx from South Asia/Middle East)
  const [isLive, setIsLive] = useState<boolean>(false);
  const [manualOffset, setManualOffset] = useState<number>(0);

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.alpha !== null) {
        setHeading(e.alpha);
        setIsLive(true);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    }

    return () => {
      if (window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', handleOrientation, true);
      }
    };
  }, []);

  const totalRotation = (qiblaAngle - heading + manualOffset + 360) % 360;

  return (
    <div className="bg-[#141A17] text-white p-6 rounded-3xl border border-white/5 shadow-xl text-center flex flex-col items-center">
      <div className="flex items-center gap-2 text-[#C5A059] text-sm font-semibold mb-2">
        <Compass className="w-5 h-5 animate-spin-slow" />
        <span>Qibla Direction Compass</span>
      </div>
      <p className="text-xs text-white/50 mb-6 max-w-xs">
        Point your device towards the Kaaba icon. Align the golden pointer to 294° N.
      </p>

      {/* Compass Dial */}
      <div className="relative w-56 h-56 rounded-full border-4 border-[#C5A059]/40 bg-[#0A0C0B] flex items-center justify-center shadow-inner my-2">
        {/* Cardinal Directions */}
        <span className="absolute top-2 font-bold text-xs text-[#C5A059]">N</span>
        <span className="absolute bottom-2 font-bold text-xs text-white/40">S</span>
        <span className="absolute right-2 font-bold text-xs text-white/40">E</span>
        <span className="absolute left-2 font-bold text-xs text-white/40">W</span>

        {/* Outer Ring Ticks */}
        <div className="absolute inset-2 rounded-full border border-dashed border-[#C5A059]/20" />

        {/* Rotating Kaaba Pointer Needle */}
        <div
          className="absolute w-full h-full flex items-center justify-center transition-transform duration-300 ease-out"
          style={{ transform: `rotate(${totalRotation}deg)` }}
        >
          <div className="flex flex-col items-center -mt-20">
            {/* Kaaba Symbol */}
            <div className="w-8 h-8 bg-[#C5A059] text-[#0A0C0B] font-bold rounded-lg flex items-center justify-center shadow-lg border border-[#C5A059] text-xs mb-1">
              🕋
            </div>
            <div className="w-1 h-12 bg-gradient-to-t from-[#C5A059] to-transparent rounded-full" />
          </div>
        </div>

        {/* Center Pivot */}
        <div className="w-6 h-6 rounded-full bg-[#C5A059] border-2 border-[#0A0C0B] z-10 shadow-md flex items-center justify-center">
          <Navigation className="w-3.5 h-3.5 text-[#0A0C0B] fill-[#0A0C0B]" />
        </div>
      </div>

      {/* Compass Angle Display & Adjustments */}
      <div className="mt-4 flex items-center justify-between w-full max-w-xs text-xs bg-[#0A0C0B] p-3 rounded-2xl border border-white/5">
        <div className="flex items-center gap-1.5 text-white/70">
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Kaaba Angle: <strong className="text-[#C5A059]">294° (WNW)</strong></span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setManualOffset((prev) => (prev - 15 + 360) % 360)}
            className="px-2.5 py-1 rounded-lg bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B] text-xs font-bold transition-colors"
            title="Rotate Left"
          >
            ↺
          </button>
          <button
            onClick={() => setManualOffset((prev) => (prev + 15) % 360)}
            className="px-2.5 py-1 rounded-lg bg-[#1B4332] text-[#C5A059] border border-[#C5A059]/20 hover:bg-[#C5A059] hover:text-[#0A0C0B] text-xs font-bold transition-colors"
            title="Rotate Right"
          >
            ↻
          </button>
        </div>
      </div>
      
      {!isLive && (
        <span className="text-[10px] text-[#C5A059]/80 mt-2 font-medium">
          (Interactive compass active; move dial or tilt device)
        </span>
      )}
    </div>
  );
};
