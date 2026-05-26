import React from "react";
import { CyberPanel } from "./CyberPanel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Target, 
  Zap, 
  Shield, 
  Brain, 
  Lock,
  Heart,
  ChevronRight
} from "lucide-react";
import { motion } from "motion/react";

import imgAvatar from "../../imports/ChatGPT_Image_May_26__2026__04_30_15_PM-1.png";

const ATTRIBUTES = [
  { label: "CURIOSITY", value: 95, icon: Brain, color: "var(--cyber-neon)" },
  { label: "QA ANALYSIS", value: 88, icon: Zap, color: "var(--cyber-cyan)" },
  { label: "WORKFLOW OPTIMIZATION", value: 85, icon: Shield, color: "var(--cyber-cyan)" },
  { label: "AI INTEGRATION", value: 72, icon: Target, color: "var(--cyber-amber)" },
];

const OBJECTIVES = [
  "Refining QA & System Validation methodologies.",
  "Advancing AI-assisted workflow optimization.",
  "Exploring Gameplay Interaction & Stability Analysis.",
  "Bridging psychological insights with technical support."
];

export const CenterColumn = () => {
  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto no-scrollbar pb-10">
      {/* View Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 font-['Silkscreen'] text-xs text-[var(--cyber-text)] uppercase tracking-[0.2em]">
          <span>STATUS</span>
          <span className="text-[var(--cyber-text-muted)]">|</span>
          <span className="text-[var(--cyber-neon)]">Overview</span>
        </div>
        <div className="h-0.5 w-full bg-gradient-to-r from-[var(--cyber-neon)]/50 to-transparent" />
      </div>

      {/* Player Profile */}
      <CyberPanel title="PLAYER PROFILE" className="relative">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 border-2 border-[var(--cyber-neon)] p-1 rounded-sm bg-black/40 overflow-hidden relative group">
            <ImageWithFallback
              src={imgAvatar}
              alt="Ujwal Deep Avatar"
              className="w-full h-full object-cover relative z-10"
            />
            {/* Visual enhancement overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyber-neon)]/20 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--cyber-neon)_0%,transparent_70%)] opacity-20" />
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                { label: "NAME", value: "UJWAL DEEP" },
                { label: "CLASS", value: "SYSTEMS EXPLORER" },
                { label: "FOCUS", value: "QA • TECH • AI" },
                { label: "STATUS", value: "ACTIVE", isStatus: true },
              ].map((info) => (
                <div key={info.label} className="flex flex-col">
                  <span className="font-['Silkscreen'] text-[8px] text-[var(--cyber-text-muted)] mb-1">
                    {info.label} :
                  </span>
                  <span className={`font-['Press_Start_2P'] text-[9px] ${info.isStatus ? "text-[var(--cyber-green)]" : "text-[var(--cyber-text)]"}`}>
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-2 p-3 bg-white/5 border border-white/10 rounded relative">
              <p className="font-['Silkscreen'] text-[10px] text-[var(--cyber-text)] leading-relaxed italic">
                “I kept asking why, and that’s still how I learn, test, and build better things.”
              </p>
              <Heart size={14} className="absolute -bottom-2 -right-2 text-[var(--cyber-pink)] fill-[var(--cyber-pink)] blur-[1px]" />
            </div>
          </div>
        </div>
      </CyberPanel>

      {/* Active Objectives */}
      <CyberPanel title="ACTIVE OBJECTIVES" glowColor="cyan">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-3 flex-1">
            {OBJECTIVES.map((obj, i) => (
              <div key={i} className="flex items-start gap-2 group">
                <ChevronRight size={14} className="mt-0.5 text-[var(--cyber-cyan)] flex-shrink-0" />
                <span className="font-['Silkscreen'] text-[10px] text-[var(--cyber-text)] group-hover:text-[var(--cyber-cyan)] transition-colors">
                  {obj}
                </span>
              </div>
            ))}
          </div>
          <div className="w-20 h-20 flex-shrink-0 opacity-20 hidden sm:block">
            <Target className="w-full h-full text-[var(--cyber-cyan)] animate-pulse" />
          </div>
        </div>
      </CyberPanel>

      {/* System Attributes */}
      <CyberPanel title="SYSTEM ATTRIBUTES" glowColor="amber">
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.label} className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <attr.icon size={12} className="text-[var(--cyber-text-muted)]" />
                    <span className="font-['Silkscreen'] text-[9px] text-[var(--cyber-text)]">{attr.label}</span>
                  </div>
                  <span className="font-['Press_Start_2P'] text-[9px] text-[var(--cyber-text)]">{attr.value}</span>
                </div>
                <div className="h-2 w-full bg-white/5 border border-white/10 p-[1px]">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${attr.value}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full" 
                    style={{ backgroundColor: attr.color }} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 p-3 bg-[var(--cyber-neon)]/5 border border-[var(--cyber-neon)]/30 rounded flex flex-col gap-2">
            <div className="flex justify-between font-['Silkscreen'] text-[9px]">
              <span className="text-[var(--cyber-amber)]">LEVEL 05</span>
              <span className="text-[var(--cyber-text-muted)]">SYSTEM XP 1320 / 2500 XP</span>
              <span className="text-[var(--cyber-text-muted)]">NEXT LVL 06</span>
            </div>
            <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden p-[1px] border border-white/5">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "52.8%" }}
                className="h-full bg-gradient-to-r from-[var(--cyber-neon)] to-[var(--cyber-pink)]"
              />
            </div>
          </div>
        </div>
      </CyberPanel>

      {/* Work Proof (Project) */}
      <CyberPanel title="WORK PROOF | SYSTEM STABILITY" glowColor="pink">
        <div className="flex items-center gap-6 py-2">
          <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center bg-black/40 border border-[var(--cyber-pink)] relative rounded-sm overflow-hidden">
             <ImageWithFallback
                src="https://images.unsplash.com/photo-1632809199725-72a4245e846b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
                alt="Project Icon"
                className="w-full h-full object-cover"
              />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-['Press_Start_2P'] text-[9px] text-[var(--cyber-text)] tracking-wider uppercase">NFS UNBOUND CRASH ANALYSIS</h3>
            <p className="font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)]">
              Stability validation & troubleshooting for gaming systems. Identified root causes and validated successful fixes.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <span className="font-['Silkscreen'] text-[8px] text-[var(--cyber-pink)] px-2 py-0.5 border border-[var(--cyber-pink)]/30 bg-[var(--cyber-pink)]/5 uppercase">Debugging</span>
              <span className="font-['Silkscreen'] text-[8px] text-[var(--cyber-cyan)] px-2 py-0.5 border border-[var(--cyber-cyan)]/30 bg-[var(--cyber-cyan)]/5 uppercase">Stability</span>
            </div>
          </div>
        </div>
      </CyberPanel>
    </div>
  );
};
