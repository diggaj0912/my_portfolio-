export default function Skills() {
  return (
    <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row gap-6 md:gap-12 items-start shrink-0 mt-auto">
      <div className="flex flex-wrap gap-8 w-full justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">Frontend</div>
          <div className="text-sm text-zinc-300 font-medium whitespace-nowrap">Next.js • React • TS</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">Backend</div>
          <div className="text-sm text-zinc-300 font-medium whitespace-nowrap">Node • Python • C++</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono">AI Infrastructure</div>
          <div className="text-sm text-zinc-300 font-medium whitespace-nowrap">YOLO • ONNX • Edge CV</div>
        </div>
      </div>
    </div>
  );
}
