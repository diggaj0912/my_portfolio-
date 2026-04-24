import { Github } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111] to-[#050505] border border-white/5 shrink-0 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
          <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Available for Fall Internships</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium tracking-tight leading-[1.1] mb-4 text-white">
          Building AI systems<br />
          <span className="text-zinc-500">that move fast.</span>
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-8">
          I'm Diggaj Sharma, an engineer focused on scalable architectures, computer vision, and developer ecosystems.
        </p>
        <div className="flex items-center gap-3">
           <a href="https://github.com/diggaj0912" target="_blank" rel="noreferrer" className="w-[46px] h-[46px] rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
           </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 shrink-0">
         <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col justify-center">
            <div className="text-2xl font-display text-white mb-1">63K+</div>
            <div className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">Dataset Size</div>
         </div>
         <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col justify-center">
            <div className="text-2xl font-display text-white mb-1">30fps</div>
            <div className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">Real-time inference</div>
         </div>
      </div>
    </>
  );
}
