/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import BackgroundElements from './components/BackgroundElements';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import DevRel from './components/DevRel';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'contact'>('portfolio');

  return (
    <div className="h-screen bg-[#050505] text-[#e5e7eb] font-sans selection:bg-[#3b82f6]/30 selection:text-white p-4 md:p-6 flex flex-col overflow-hidden relative z-0">
      <BackgroundElements />
      
      <div className="max-w-[1400px] mx-auto w-full flex flex-col h-full overflow-hidden">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'portfolio' ? (
          <main className="flex flex-col lg:flex-row flex-1 gap-6 overflow-hidden">
            {/* Left Column */}
            <div className="lg:w-1/4 flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar pb-6">
              <Hero />
            </div>

            {/* Center Column */}
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar pb-6">
              <Projects />
              <Skills />
            </div>

            {/* Right Column */}
            <div className="lg:w-[28%] flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar pb-6">
              <DevRel />
              <About />
            </div>
          </main>
        ) : (
          <main className="flex-1 flex items-center justify-center overflow-y-auto custom-scrollbar p-0 md:p-6 pb-20">
            <div className="max-w-xl w-full">
              <Contact />
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
