export default function DevRel() {
  return (
    <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] flex-shrink-0 flex flex-col relative overflow-hidden group">
      {/* Abstract background element */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none"></div>
      
      <h2 className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono mb-8 relative z-10">Product Evangelism</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-8 relative z-10">
        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
          <div className="text-3xl font-display font-medium text-white mb-1">1k+</div>
          <div className="text-[10px] uppercase text-zinc-500 font-mono tracking-wider">Devs Mentored</div>
        </div>
        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
          <div className="text-3xl font-display font-medium text-white mb-1">10+</div>
          <div className="text-[10px] uppercase text-zinc-500 font-mono tracking-wider">Hackathons</div>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t border-white/5 relative z-10 flex-1">
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium text-white">Founder, DevStorm</div>
          <div className="text-xs text-zinc-500">Scaling developer events across India</div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-medium text-white">DevRel, Snorkel AI</div>
          <div className="text-xs text-zinc-500">Community management & tooling</div>
        </div>
      </div>
    </div>
  );
}
