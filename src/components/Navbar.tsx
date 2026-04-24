export default function Navbar({ activeTab, setActiveTab }: { activeTab: 'portfolio' | 'contact', setActiveTab: (tab: 'portfolio' | 'contact') => void }) {
  return (
    <nav className="flex justify-between items-center px-4 py-6 shrink-0 z-10 relative">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
        <span className="font-display font-medium text-lg text-white">Diggaj Sharma</span>
      </div>
      <div className="flex items-center gap-2 bg-[#111] border border-white/5 rounded-full p-1.5">
        <button 
          onClick={() => setActiveTab('portfolio')}
          className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${activeTab === 'portfolio' ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'}`}
        >
          Portfolio
        </button>
        <button 
          onClick={() => setActiveTab('contact')}
          className={`px-5 py-2 text-sm font-medium rounded-full cursor-pointer transition-all ${activeTab === 'contact' ? 'text-white bg-white/10' : 'text-zinc-400 hover:text-white'}`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
