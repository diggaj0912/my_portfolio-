import { Github, Linkedin, Mail, Phone, Instagram, FileText, Twitter } from 'lucide-react';
import { useState } from 'react';
import CoverLetterModal from './CoverLetterModal';

export default function Contact() {
  const [openResume, setOpenResume] = useState<'fsd' | 'devrel' | null>(null);
  const [activeCoverLetter, setActiveCoverLetter] = useState<'fsd' | 'devrel' | null>(null);

  const toggleResume = (type: 'fsd' | 'devrel') => {
    setOpenResume(prev => prev === type ? null : type);
  };

  return (
    <div className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col gap-10 shrink-0 shadow-2xl">
      <div className="flex flex-col gap-6 text-center items-center">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-2">
           <Mail className="text-white w-8 h-8" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-medium text-white">Let's build something together.</h2>
        <p className="text-zinc-400 text-sm max-w-[300px] leading-relaxed">
           Whether you're looking for an intern, a technical writer, or a community builder—I'd love to chat.
        </p>
      </div>

      <div className="flex justify-center gap-3 md:gap-4 flex-wrap">
        <a href="https://github.com/diggaj0912" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="GitHub">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/diggaj-sharma-575110266/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href="https://x.com/Shar77250Diggaj" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="Twitter">
          <Twitter size={20} />
        </a>
        <a href="https://www.instagram.com/sharma_diggaj/?__pwa=1" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="Instagram">
          <Instagram size={20} />
        </a>
        <a href="mailto:diggaj912@gmail.com" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="Email">
          <Mail size={20} />
        </a>
        <a href="tel:+919599113874" className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-white text-zinc-400 transition-colors hover:scale-105" title="Phone">
          <Phone size={20} />
        </a>
      </div>

      <div className="mt-4 space-y-4">
        <h3 className="text-xs text-zinc-500 uppercase tracking-widest font-mono text-center mb-6">Documents</h3>
        
        <div className="space-y-3">
          {/* FSD Resume */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all shadow-lg hover:border-white/10">
            <button 
              onClick={() => toggleResume('fsd')}
              className="w-full flex items-center justify-between p-5 text-sm font-medium text-white hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-[#3b82f6]" />
                <span className="text-base tracking-wide">Full Stack Developer</span>
              </div>
              <span className="text-zinc-500 text-xs px-3 py-1 rounded-full border border-white/5 bg-white/5">{openResume === 'fsd' ? 'Hide' : 'View'}</span>
            </button>
            {openResume === 'fsd' && (
              <div className="px-5 pb-5 pt-2 flex gap-3 border-t border-white/5 bg-white/[0.01]">
                <button onClick={() => setActiveCoverLetter('fsd')} className="flex-1 text-center py-3 text-sm font-medium text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-white/20">Cover Letter</button>
                <a href="#" className="flex-1 text-center py-3 text-sm font-medium text-white bg-blue-600/20 hover:bg-blue-600/40 rounded-xl transition-all border border-blue-500/30 text-[#60a5fa] hover:text-[#93c5fd]">Resume</a>
              </div>
            )}
          </div>

          {/* DevRel Resume */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all shadow-lg hover:border-white/10">
            <button 
              onClick={() => toggleResume('devrel')}
              className="w-full flex items-center justify-between p-5 text-sm font-medium text-white hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-[#10b981]" />
                <span className="text-base tracking-wide">Developer Relations</span>
              </div>
              <span className="text-zinc-500 text-xs px-3 py-1 rounded-full border border-white/5 bg-white/5">{openResume === 'devrel' ? 'Hide' : 'View'}</span>
            </button>
            {openResume === 'devrel' && (
              <div className="px-5 pb-5 pt-2 flex gap-3 border-t border-white/5 bg-white/[0.01]">
                <button onClick={() => setActiveCoverLetter('devrel')} className="flex-1 text-center py-3 text-sm font-medium text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 hover:border-white/20">Cover Letter</button>
                <a href="#" className="flex-1 text-center py-3 text-sm font-medium text-white bg-emerald-600/20 hover:bg-emerald-600/40 text-[#4ade80] rounded-xl transition-all border border-emerald-500/30 hover:text-[#86efac]">Resume</a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <CoverLetterModal isOpen={!!activeCoverLetter} type={activeCoverLetter || 'fsd'} onClose={() => setActiveCoverLetter(null)} />
    </div>
  );
}
