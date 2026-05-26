import React from "react";
import { Music, Activity, Quote, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const Footer = () => {
  return (
    <footer className="h-10 border-t border-white/10 bg-black/60 backdrop-blur-md flex items-center px-4 gap-8 overflow-hidden">
      {/* Left: System Log */}
      <div className="flex-1 hidden md:flex items-center gap-2 overflow-hidden">
        <Activity size={12} className="text-[var(--cyber-green)]" />
        <div className="whitespace-nowrap font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)]">
          <span className="text-[var(--cyber-green)] mr-2">SYS_STATUS:</span>
          All modules operational. Connection secure. Tracking progress...
        </div>
      </div>

      {/* Center: Now Playing */}
      <div className="flex items-center gap-3 px-4 border-x border-white/5 h-full bg-white/5">
        <div className="flex gap-[2px] h-3 items-end">
          {[0.6, 0.8, 0.4, 0.9, 0.5, 0.7].map((h, i) => (
            <div 
              key={i} 
              className="w-[2px] bg-[var(--cyber-neon)] animate-bounce" 
              style={{ 
                height: `${h * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.5 + Math.random()}s`
              }} 
            />
          ))}
        </div>
        <div className="flex flex-col">
          <span className="font-['Silkscreen'] text-[7px] text-[var(--cyber-text-muted)] uppercase leading-none">NOW PLAYING</span>
          <span className="font-['Press_Start_2P'] text-[7px] text-[var(--cyber-neon)] leading-none mt-1">Lo-Fi Night Drive</span>
        </div>
      </div>

      {/* Right: Motto & Mascot */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <div className="hidden lg:flex items-center gap-4 mr-4">
          <a href="https://github.com/UrbanKage" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-['Silkscreen'] text-[8px] text-[var(--cyber-cyan)] hover:text-white transition-colors">
            <ExternalLink size={10} />
            GITHUB/URBANKAGE
          </a>
          <div className="w-px h-4 bg-white/10" />
          <p className="font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)] italic">
            Curiosity is the quest.
          </p>
        </div>
        <div className="w-8 h-8 flex-shrink-0 relative group">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1772786077434-b634c0d76a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMHB1cnBsZSUyMGNhdCUyMG1hc2NvdHxlbnwxfHx8fDE3Nzk2OTkwOTF8MA"
            alt="Pixel Cat Mascot"
            className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(156,79,173,0.8)]"
          />
          <div className="absolute -top-10 right-0 bg-[var(--cyber-panel)] border border-[var(--cyber-neon)] p-2 rounded scale-0 group-hover:scale-100 transition-transform origin-bottom-right">
            <span className="font-['Silkscreen'] text-[8px] text-[var(--cyber-neon)] whitespace-nowrap">MEOW_WORLD.EXE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
