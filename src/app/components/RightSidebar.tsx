import React from "react";
import { CyberPanel } from "./CyberPanel";
import { 
  Users, 
  Cpu, 
  MessageSquare, 
  Search, 
  ChevronRight,
  ExternalLink,
  History,
  Bug,
  Gamepad2,
  BrainCircuit,
  Settings,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SKILLS_DATA = [
  // SERVICE
  { name: "TECHNICAL SUPPORT", level: 5, xp: 950, maxXp: 1000, icon: Settings, color: "var(--cyber-neon)", category: "SERVICE" },
  { name: "ESCALATION HANDLING", level: 5, xp: 880, maxXp: 1000, icon: ShieldCheck, color: "var(--cyber-neon)", category: "SERVICE" },
  { name: "TICKETING SYSTEMS", level: 4, xp: 750, maxXp: 800, icon: History, color: "var(--cyber-neon)", category: "SERVICE" },
  
  // TECH / QA
  { name: "EXPLORATORY TESTING", level: 5, xp: 920, maxXp: 1000, icon: Search, color: "var(--cyber-cyan)", category: "TECH" },
  { name: "GAMEPLAY OBSERVATION", level: 4, xp: 680, maxXp: 800, icon: Gamepad2, color: "var(--cyber-cyan)", category: "TECH" },
  { name: "BUG IDENTIFICATION", level: 5, xp: 850, maxXp: 1000, icon: Bug, color: "var(--cyber-cyan)", category: "TECH" },
  
  // AI
  { name: "PROMPT ENGINEERING", level: 4, xp: 720, maxXp: 1000, icon: BrainCircuit, color: "var(--cyber-green)", category: "AI" },
  { name: "WORKFLOW OPTIMIZATION", level: 4, xp: 650, maxXp: 800, icon: Cpu, color: "var(--cyber-green)", category: "AI" },
  { name: "AI RESEARCH", level: 3, xp: 420, maxXp: 600, icon: MessageSquare, color: "var(--cyber-green)", category: "AI" },
];

const EXPERIENCES_DATA = [
  // SERVICE
  { company: "Amazon Dev Centre", role: "Technical Support Associate", years: "2022–2024", icon: History, category: "SERVICE" },
  { company: "24/7.ai", role: "Customer Service Associate", years: "2021–2022", icon: History, category: "SERVICE" },
  
  // TECH
  { company: "Metagravity", role: "Exploratory Gameplay Testing", years: "Independent", icon: Gamepad2, category: "TECH" },
  { company: "Lionbridge Studios", role: "Gameplay Testing", years: "Participation", icon: Bug, category: "TECH" },
  { company: "2XKO", role: "External Playtest", years: "Participation", icon: Search, category: "TECH" },
  
  // AI
  { company: "AI Learning Path", role: "Workflow Systems Learning", years: "2024–Present", icon: BrainCircuit, category: "AI" },
];

export const RightSidebar = () => {
  const [activeSkillTab, setActiveSkillTab] = React.useState("SERVICE");
  const [activeExpTab, setActiveExpTab] = React.useState("SERVICE");

  const filteredSkills = SKILLS_DATA.filter(s => s.category === activeSkillTab);
  const filteredExp = EXPERIENCES_DATA.filter(e => e.category === activeExpTab);

  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto no-scrollbar pb-10">
      {/* Skills Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col">
            <h2 className="font-['Silkscreen'] text-xs text-[var(--cyber-text)] uppercase tracking-[0.2em]">SKILLS</h2>
            <span className="font-['Silkscreen'] text-[9px] text-[var(--cyber-neon)]">Abilities & Progress</span>
          </div>
          <button className="font-['Silkscreen'] text-[8px] text-[var(--cyber-text-muted)] hover:text-[var(--cyber-text)] transition-colors border-b border-white/20 pb-0.5">
            VIEW ALL
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-white/5 rounded border border-white/10">
          {["SERVICE", "TECH", "AI"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSkillTab(tab)}
              className={`flex-1 font-['Press_Start_2P'] text-[7px] py-2 rounded transition-all ${
                activeSkillTab === tab 
                  ? "bg-[var(--cyber-neon)]/30 text-[var(--cyber-text)] shadow-[inset_0_0_10px_rgba(156,79,173,0.3)]" 
                  : "text-[var(--cyber-text-muted)] hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex flex-col gap-3"
            >
              {filteredSkills.map((skill) => (
                <CyberPanel key={skill.name} className="p-3" glowColor="neon">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 bg-black/40 border border-white/10 flex items-center justify-center rounded">
                      <skill.icon size={18} className="text-[var(--cyber-text-muted)]" />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex justify-between items-end mb-1">
                        <span className="font-['Silkscreen'] text-[9px] text-[var(--cyber-text)] truncate mr-2">
                          {skill.name}
                        </span>
                        <span className="font-['Press_Start_2P'] text-[7px] text-[var(--cyber-text-muted)] flex-shrink-0">
                          LVL {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 bg-white/5 border border-white/10 p-[0.5px]">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(skill.xp / skill.maxXp) * 100}%` }}
                            className="h-full"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                        <span className="font-['Silkscreen'] text-[7px] text-white/40 whitespace-nowrap">
                          {skill.xp} / {skill.maxXp} XP
                        </span>
                      </div>
                    </div>
                  </div>
                </CyberPanel>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button className="mx-auto font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)] hover:text-[var(--cyber-neon)] transition-colors flex items-center gap-2 mt-1">
          &gt; VIEW DETAILED SKILLS TREE
        </button>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col">
            <h2 className="font-['Silkscreen'] text-xs text-[var(--cyber-text)] uppercase tracking-[0.2em]">EXPERIENCE</h2>
            <span className="font-['Silkscreen'] text-[9px] text-[var(--cyber-cyan)]">Quest Log</span>
          </div>
          <button className="font-['Silkscreen'] text-[8px] text-[var(--cyber-text-muted)] hover:text-[var(--cyber-text)] transition-colors border-b border-white/20 pb-0.5">
            VIEW ALL
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-white/5 rounded border border-white/10">
          {["SERVICE", "TECH", "AI"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveExpTab(tab)}
              className={`flex-1 font-['Press_Start_2P'] text-[7px] py-2 rounded transition-all ${
                activeExpTab === tab 
                  ? "bg-[var(--cyber-cyan)]/30 text-[var(--cyber-text)] shadow-[inset_0_0_10px_rgba(50,138,218,0.3)]" 
                  : "text-[var(--cyber-text-muted)] hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-1 min-h-[150px] bg-white/5 border border-white/10 rounded overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {filteredExp.map((exp, i) => (
                <div 
                  key={exp.company + i} 
                  className={`p-4 flex items-start gap-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0`}
                >
                  <div className="w-8 h-8 flex-shrink-0 bg-[var(--cyber-cyan)]/10 border border-[var(--cyber-cyan)]/30 rounded flex items-center justify-center">
                    <exp.icon size={14} className="text-[var(--cyber-cyan)]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <div className="flex justify-between items-start">
                      <span className="font-['Press_Start_2P'] text-[8px] text-[var(--cyber-text)] leading-tight uppercase">
                        {exp.company}
                      </span>
                      <span className="font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)] flex-shrink-0">
                        {exp.years}
                      </span>
                    </div>
                    <span className="font-['Silkscreen'] text-[10px] text-[var(--cyber-text-muted)] italic">
                      {exp.role}
                    </span>
                  </div>
                </div>
              ))}
              {filteredExp.length === 0 && (
                <div className="p-8 text-center font-['Silkscreen'] text-[10px] text-[var(--cyber-text-muted)]">
                  NO DATA FOUND IN THIS MODULE.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button className="mx-auto font-['Silkscreen'] text-[9px] text-[var(--cyber-text-muted)] hover:text-[var(--cyber-cyan)] transition-colors flex items-center gap-2 mt-1">
          &gt; VIEW FULL EXPERIENCE LOG
          <ExternalLink size={10} />
        </button>
      </div>
    </div>
  );
};
