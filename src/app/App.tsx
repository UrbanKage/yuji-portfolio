import React from "react";
import { LeftSidebar } from "./components/LeftSidebar";
import { CenterColumn } from "./components/CenterColumn";
import { RightSidebar } from "./components/RightSidebar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[var(--cyber-bg)] text-[var(--cyber-text)] flex flex-col font-['JetBrains_Mono'] selection:bg-[var(--cyber-neon)] selection:text-white overflow-hidden">
      {/* Background Ambience / Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      {/* Glow Vignette */}
      <div className="fixed inset-0 pointer-events-none z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,7,22,0.4)_100%)] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

      {/* Main Layout Container */}
      <main className="flex-1 w-full max-w-[1536px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-6 overflow-hidden">
        
        {/* Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
          
          {/* Left Sidebar (~28%) */}
          <aside className="w-full lg:w-[28%] flex-shrink-0 lg:h-full">
            <LeftSidebar />
          </aside>

          {/* Center Content (~36%) */}
          <section className="w-full lg:w-[36%] flex-shrink-0 lg:h-full">
            <CenterColumn />
          </section>

          {/* Right Sidebar (~36%) */}
          <aside className="w-full lg:w-[36%] flex-shrink-0 lg:h-full">
            <RightSidebar />
          </aside>

        </div>
      </main>

      {/* Global Status Bar */}
      <Footer />
      
      {/* Decorative Corner Accents (Global) */}
      <div className="fixed top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--cyber-neon)] opacity-30 pointer-events-none" />
      <div className="fixed top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--cyber-neon)] opacity-30 pointer-events-none" />
      <div className="fixed bottom-12 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--cyber-neon)] opacity-30 pointer-events-none" />
      <div className="fixed bottom-12 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--cyber-neon)] opacity-30 pointer-events-none" />
    </div>
  );
}

export default App;
