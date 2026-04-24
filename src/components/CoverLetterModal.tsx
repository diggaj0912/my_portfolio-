import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'fsd' | 'devrel';
}

export default function CoverLetterModal({ isOpen, onClose, type }: CoverLetterModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-[#fafafa] text-zinc-900 rounded-2xl shadow-2xl custom-scrollbar flex flex-col">
        <div className="sticky top-0 right-0 p-4 flex justify-end gap-2 bg-gradient-to-b from-[#fafafa] via-[#fafafa] to-transparent z-10">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors text-black font-medium text-sm"
          >
             <Download size={16} />
             <span className="hidden sm:inline">Save as PDF</span>
          </button>
          <button 
            onClick={onClose} 
            className="p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors text-black"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Document Content */}
        <div id="cover-letter-content" className="px-8 sm:px-20 pb-20 pt-4 font-sans bg-white selection:bg-blue-200 selection:text-black min-h-[1056px] w-full max-w-[816px] mx-auto shadow-sm my-4 border border-zinc-200">
           <h1 className="text-4xl text-center tracking-[0.2em] font-serif uppercase mb-4 font-light mt-12">Diggaj Sharma</h1>
           <div className="text-center text-xs tracking-[0.15em] text-zinc-600 mb-12 uppercase flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 font-medium">
             <span>diggaj912@gmail.com</span>
             <span className="hidden sm:inline">|</span>
             <span>Gurugram</span>
             <span className="hidden sm:inline">|</span>
             <span>9599113874</span>
           </div>
           
           <div className="flex flex-col sm:flex-row justify-between items-start mb-8 text-sm font-semibold border-b border-zinc-200 pb-4">
             <div>RE: Application for {type === 'fsd' ? 'Full Stack Developer' : 'Developer Relations (DevRel)'} Role</div>
             <div className="mt-2 sm:mt-0 font-normal">23 April, 2026</div>
           </div>

           {type === 'fsd' ? (
             <div className="space-y-6 text-[13.5px] leading-[1.8] text-zinc-800 font-light">
               <p>I am writing to express my interest in technical roles within your organization. With a strong foundation in <span className="font-semibold">full-stack development and AI-driven systems</span>, I focus on building scalable, real-world solutions that combine performance, usability, and impact.</p>
               <p>I have worked on five major projects, including two self-initiated products and three government-associated solutions, each valued at approximately ₹5 lakhs, contributing to real-world problem-solving at scale.</p>
               
               <div>
                 <h2 className="text-sm font-bold mb-2 uppercase tracking-wider text-zinc-900 border-b border-zinc-100 pb-1 inline-block">Self-initiated projects</h2>
                 <div className="mb-4 mt-2">
                   <p className="font-semibold mb-1">1. VoxAI – Voice-Controlled Project Agent</p>
                   <p className="mb-2 italic text-zinc-600">A fully functional voice-driven project management system with a modern GUI, enabling users to manage files and workflows using natural language commands.</p>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Achieved 3–5x faster audio processing using NumPy optimization</li>
                     <li>Improved response time by ~40% and execution speed by ~50%</li>
                     <li>Built with Python, Tkinter, and speech recognition APIs</li>
                     <li>Features real-time mic feedback, activity logs, and command execution</li>
                   </ul>
                 </div>
                 
                 <div>
                   <p className="font-semibold mb-1">2. Climbly – AI-Powered Career Advisor</p>
                   <p className="mb-2 italic text-zinc-600">A cross-platform AI platform (Flutter + Google Gemini) designed to guide users in career planning and skill development.</p>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Supports Android, iOS, Web, and Desktop</li>
                     <li>Includes AI-driven career advice, resume analysis, and personalized learning paths</li>
                     <li>Optimized for &lt;3s startup time, low memory usage, and real-time inference</li>
                   </ul>
                 </div>
               </div>

               <div className="pt-2">
                 <h2 className="text-sm font-bold mb-2 uppercase tracking-wider text-zinc-900 border-b border-zinc-100 pb-1 inline-block">Government & Research Projects</h2>
                 <div className="mb-4 mt-2">
                   <p className="font-semibold mb-1">1. Dental Age Detection (AI Research System)</p>
                   <p className="mb-2 italic text-zinc-600">A dual-pipeline AI system for dental age estimation using panoramic X-rays.</p>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Built on YOLO-based detection with 89.2% accuracy (mAP@0.5)</li>
                     <li>Processed 63,000+ medical image samples</li>
                     <li>Developed frontend (React + TypeScript) and ensured HIPAA-compliant data handling</li>
                   </ul>
                 </div>

                 <div className="mb-4">
                   <p className="font-semibold mb-1">2. Bus Saheli – Real-Time Gender Detection System</p>
                   <p className="mb-2 italic text-zinc-600">A computer vision-based safety system using InsightFace + SCRFD.</p>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Achieved 30+ FPS on GPU and 90%+ accuracy</li>
                     <li>Designed for real-time deployment using ONNX Runtime</li>
                   </ul>
                 </div>

                 <div>
                   <p className="font-semibold mb-1">3. krypticVoid – Secure Data Wiping System (SIH Project)</p>
                   <p className="mb-2 italic text-zinc-600">A cross-platform secure data erasure solution addressing India’s e-waste and data privacy challenges.</p>
                   <ul className="list-disc pl-5 space-y-1">
                     <li>Supports DoD, NIST, and Gutmann standards</li>
                     <li>Generates tamper-proof certificates for compliance</li>
                     <li>Built using C++, Flutter, and system-level architecture</li>
                   </ul>
                 </div>
               </div>

               <div className="pt-2">
                  <p>In addition to my technical work, I am a <span className="font-semibold">National-Level Hackathon Winner</span> (CodeSangam 2024), where I collaborated in a high-pressure environment to design and deliver an innovative solution, demonstrating strong problem-solving and teamwork capabilities.</p>
                  
                  <p className="mt-4">Through these experiences, I have developed strong expertise in:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Full stack development (Next.js, React, Flutter, backend systems)</li>
                    <li>AI/ML integration and real-time systems</li>
                    <li>Performance optimization and scalable architecture</li>
                    <li>Building production-level applications with real-world impact</li>
                  </ul>

                  <p className="mt-4 text-zinc-900 font-medium">What sets me apart is my ability to combine technical depth with execution speed, ensuring that ideas move efficiently from concept to deployment.</p>
                  
                  <p className="mt-4">I am highly motivated to contribute to impactful technical initiatives and would welcome the opportunity to bring my skills to your team.</p>
                  
                  <p className="mt-4">Thank you for your time and consideration.</p>
               </div>
               
               <div className="mt-12">
                 <p>Best regards,</p>
                 <p className="font-bold mt-2 text-base text-black">Diggaj Sharma</p>
               </div>
             </div>
           ) : (
             <div className="space-y-6 text-[13.5px] leading-[1.8] text-zinc-800 font-light">
               <p>Dear Sir/Madam,</p>
               <p>I’m reaching out with a strong interest in contributing to your Developer Relations efforts. I’ve been actively working at the intersection of developers, community, and product, with a consistent focus on driving real developer adoption through trust and value.</p>
               <p>Currently, I work in Developer Relations at <span className="font-semibold">Snorkel AI</span>, where I support developers in understanding and adopting AI-driven workflows while contributing to community engagement and feedback loops. Prior to this, I worked with <span className="font-semibold">nQ-Swap</span> in a DevRel capacity, focusing on onboarding and early-stage developer support.</p>
               <p>What differentiates my approach is that I don’t treat DevRel as just events or content — I approach it as <span className="font-semibold">developer experience engineering</span>, where every initiative is designed to reduce friction and improve developer outcomes.</p>
               
               <div>
                 <p className="mb-2">Alongside this, I’ve built and led multiple developer communities:</p>
                 <ul className="list-disc pl-5 space-y-1">
                   <li><span className="font-semibold">Founder & Lead at DevStorm</span> — leading a community that organizes hackathons across India, focused on enabling builders to collaborate, learn, and ship projects in high-energy environments</li>
                   <li><span className="font-semibold">Community Lead at ASI:ONE Gurugram</span> and <span className="font-semibold">Community Manager at Builder’s Space</span>, driving engagement and supporting hundreds of developers and students</li>
                   <li><span className="font-semibold">Core Team Member at DezHub India</span>, contributing to community growth and developer-focused initiatives</li>
                   <li>Active contributions through <span className="font-semibold">GDG on Campus (PR role)</span>, <span className="font-semibold">Microsoft Learn Student Ambassador</span>, and <span className="font-semibold">Google programs</span>, supporting ecosystem-wide engagement</li>
                 </ul>
               </div>

               <div>
                 <p className="mb-2">I have also contributed extensively to the hackathon ecosystem as a judge and mentor across <span className="font-semibold">10+ hackathons</span>, including:</p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 pl-5 list-disc mb-2">
                   <li>Hackfest (~200 participants)</li>
                   <li>Techstasy 1.0 (~200 participants)</li>
                   <li>Techstasy 2.0 (~500 participants)</li>
                   <li>Hackstasy (~150 participants)</li>
                   <li>Buildathon (~200 participants)</li>
                   <li>HackVerse (~200 participants)</li>
                   <li>CodeRush (~200 participants)</li>
                 </ul>
                 <ul className="list-disc pl-5 space-y-1">
                   <li>Along with several other campus and community-led hackathons</li>
                 </ul>
               </div>

               <p>Through these experiences, I’ve worked closely with early-stage builders — helping them refine ideas, overcome technical blockers, and ship better solutions under time constraints.</p>

               <div>
                 <p className="mb-2">Across my DevRel and community work, my impact has been centered on:</p>
                 <ul className="list-disc pl-5 space-y-1">
                   <li><span className="font-semibold">Developer onboarding & activation</span> → helping users move from curiosity to real usage</li>
                   <li><span className="font-semibold">Community retention</span> → driving consistent engagement through value-driven interactions</li>
                   <li><span className="font-semibold">Feedback loops</span> → bridging developers and product teams to improve usability and adoption</li>
                 </ul>
               </div>

               <p>Technically, I come from a frontend development background (Next.js, JavaScript), which allows me to understand developer pain points firsthand and communicate solutions effectively.</p>
               <p>I also bring an execution mindset — whether it’s leading hackathons, scaling communities, or supporting developers 1:1, I focus on outcomes, not just activity.</p>
               <p>I’m particularly interested in roles where DevRel is treated as a growth function, focused on turning developers into long-term advocates.</p>
               <p>I'd love to explore how I can contribute to your team.</p>

               <div className="mt-8">
                 <p>Best regards,</p>
                 <p className="font-bold mt-2 text-base text-black">Diggaj Sharma</p>
               </div>
             </div>
           )}
        </div>
      </div>
      
      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #cover-letter-content, #cover-letter-content * {
            visibility: visible;
          }
          #cover-letter-content {
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
            padding: 0;
            border: none;
            box-shadow: none;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
