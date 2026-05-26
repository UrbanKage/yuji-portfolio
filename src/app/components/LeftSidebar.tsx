import React from "react";
import { CyberPanel } from "./CyberPanel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  User, 
  Terminal, 
  Briefcase, 
  Code2, 
  Clock, 
  Wifi, 
  Heart, 
  ChevronRight,
  Monitor
} from "lucide-react";
import { motion } from "motion/react";

const NAV_ITEMS = [
  { id: "status", label: "STATUS", subtitle: "Overview", icon: User },
  { id: "skills", label: "SKILLS", subtitle: "Abilities", icon: Code2 },
  { id: "experience", label: "EXPERIENCE", subtitle: "Quest Log", icon: Briefcase },
  { id: "work", label: "WORK PROOF", subtitle: "Modules", icon: Terminal },
];

export const LeftSidebar = () => {
  const [activeTab, setActiveTab] = React.useState("status");

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* App Header */}
      <div className="flex flex-col gap-1 px-2">
        <h1 className="font-['Press_Start_2P'] text-lg text-[var(--cyber-text)] tracking-tighter">
          UJWAL DEEP.EXE
        </h1>
        <div className="flex items-center gap-2 text-[var(--cyber-text-muted)] font-['Silkscreen'] text-[10px]">
          <Monitor size={12} />
          <span>SYSTEM STATUS INTERFACE</span>
          <span className="ml-auto opacity-50">v1.0.0</span>
        </div>
      </div>

      {/* Illustration Panel */}
      <CyberPanel className="p-0 h-48 sm:h-64 flex-shrink-0" glowColor="neon">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuaWdodCUyMGNpdHklMjBhbmltZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Nzk2OTkwOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cyberpunk Cityscape"
          className="w-full h-full object-cover opacity-80 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--cyber-panel)] to-transparent" />
      </CyberPanel>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab(item.id)}
            className={`group relative flex items-center gap-3 p-3 rounded-lg border transition-all ${
              activeTab === item.id
                ? "bg-[var(--cyber-neon)]/20 border-[var(--cyber-neon)] shadow-[0_0_15px_rgba(156,79,173,0.4)]"
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            <item.icon 
              size={18} 
              className={activeTab === item.id ? "text-[var(--cyber-neon)]" : "text-[var(--cyber-text-muted)]"} 
            />
            <div className="flex flex-col items-start text-left">
              <span className={`font-['Press_Start_2P'] text-[9px] ${activeTab === item.id ? "text-[var(--cyber-text)]" : "text-[var(--cyber-text-muted)]"}`}>
                {item.label}
              </span>
              <span className="font-['Silkscreen'] text-[8px] text-[var(--cyber-text-muted)] uppercase tracking-wider">
                {item.subtitle}
              </span>
            </div>
            {activeTab === item.id && (
              <ChevronRight size={14} className="ml-auto text-[var(--cyber-neon)]" />
            )}
          </motion.button>
        ))}
      </div>

      {/* System Info & Welcome */}
      <div className="flex flex-col gap-2 mt-auto">
        <div className="grid grid-cols-2 gap-2">
          <CyberPanel className="p-3" title="SYSTEM TIME">
            <div className="flex items-center gap-2">
              <Clock size={12} className="text-[var(--cyber-amber)]" />
              <span className="font-['Press_Start_2P'] text-[9px] text-[var(--cyber-text)]">01:47 AM</span>
            </div>
          </CyberPanel>
          <CyberPanel className="p-3" title="LOCATOR">
            <div className="flex items-center gap-2">
              <span className="font-['Press_Start_2P'] text-[9px] text-[var(--cyber-green)]">HYD_IN</span>
            </div>
          </CyberPanel>
        </div>

        <CyberPanel className="p-3" title="CONTACT_INTEL">
           <div className="flex flex-col gap-2 font-['Silkscreen'] text-[9px]">
              <div className="flex justify-between items-center text-[var(--cyber-text-muted)]">
                <span>EMAIL:</span>
                <span className="text-[var(--cyber-text)]">purplemist1714@gmail.com</span>
              </div>
              <div className="flex justify-between items-center text-[var(--cyber-text-muted)]">
                <span>GITHUB:</span>
                <span className="text-[var(--cyber-cyan)]">UrbanKage</span>
              </div>
           </div>
        </CyberPanel>
      </div>

      {/* Sidebar Footer Log */}
      <div className="py-2 px-1 border-t border-white/10 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)]">
          <span className="text-[var(--cyber-neon)] mr-2">&gt; SYSTEM LOG</span>
          Everything is a learning. Keep leveling up. System core operational. [OK]
        </div>
      </div>
    </div>
  );
};
