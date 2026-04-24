import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VoxAI",
    tags: "Voice AI",
    description: "Voice-driven agent using NLP. Reduces latency for developer workflows.",
    metrics: [
      { label: "Latency", value: "40% lower" },
      { label: "Processing", value: "3x faster" }
    ],
  },
  {
    title: "Climbly",
    tags: "Mobile Native",
    description: "Cross-platform career advisory AI engine for rapid resume analysis.",
    metrics: [
      { label: "Startup", value: "<3s Boot" },
      { label: "Engine", value: "Gemini Pro" }
    ],
  },
  {
    title: "Dental Age OS",
    tags: "Healthcare AI",
    description: "Production-ready CV system for forensic bone age estimation.",
    metrics: [
      { label: "Accuracy", value: "89.2% mAP" },
      { label: "Status", value: "HIPAA Compliant" }
    ],
  },
  {
    title: "Bus Saheli",
    tags: "Edge Computing",
    description: "Real-time edge computer vision for automated passenger safety monitoring.",
    metrics: [
      { label: "Inference", value: "30+ FPS" },
      { label: "Platform", value: "ONNX Edge" }
    ],
  }
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col gap-4 flex-1">
      <div className="flex justify-between items-center px-4 shrink-0 mt-2">
        <h2 className="font-mono uppercase text-[10px] text-zinc-500 tracking-widest">Products</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {projects.map((project) => (
          <div key={project.title} className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all relative flex flex-col h-full cursor-pointer">
             <div className="absolute top-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex gap-2">
                <a href="https://github.com/diggaj0912" target="_blank" rel="noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10">
                   <Github size={14} className="text-zinc-400" />
                </a>
                <a href="#" className="p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/10">
                   <ExternalLink size={14} className="text-zinc-400" />
                </a>
             </div>
             
            <div className="mb-4 pr-16">
              <h3 className="font-display font-medium text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <span className="text-[10px] uppercase text-zinc-500 tracking-widest font-mono block">{project.tags}</span>
            </div>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed flex-1">{project.description}</p>
            <div className="grid grid-cols-2 gap-2 mt-auto border-t border-white/5 pt-4">
              {project.metrics.map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">{m.label}</div>
                  <div className="text-white text-sm font-medium">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
