import React from "react";
import { cn } from "../../lib/utils";

interface CyberPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  glowColor?: "neon" | "pink" | "cyan" | "green" | "amber";
  variant?: "default" | "muted" | "bordered";
}

export const CyberPanel: React.FC<CyberPanelProps> = ({
  children,
  title,
  glowColor = "neon",
  variant = "default",
  className,
  ...props
}) => {
  const glowColors = {
    neon: "border-[var(--cyber-neon)] shadow-[0_0_10px_rgba(156,79,173,0.3)]",
    pink: "border-[var(--cyber-pink)] shadow-[0_0_10px_rgba(228,106,166,0.3)]",
    cyan: "border-[var(--cyber-cyan)] shadow-[0_0_10px_rgba(50,138,218,0.3)]",
    green: "border-[var(--cyber-green)] shadow-[0_0_10px_rgba(47,135,93,0.3)]",
    amber: "border-[var(--cyber-amber)] shadow-[0_0_10px_rgba(229,139,82,0.3)]",
  };

  return (
    <div
      className={cn(
        "relative bg-[var(--cyber-panel)] border-[1px] rounded-lg overflow-hidden flex flex-col transition-all duration-300",
        glowColors[glowColor],
        variant === "muted" && "opacity-60 grayscale-[0.5]",
        className
      )}
      {...props}
    >
      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {title && (
        <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between">
          <span className="font-['Silkscreen'] text-[10px] tracking-wider text-[var(--cyber-text)] uppercase">
            {title}
          </span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
          </div>
        </div>
      )}
      
      <div className="p-4 relative z-10 flex-1">
        {children}
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-inherit" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-inherit" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-inherit" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-inherit" />
    </div>
  );
};
