import { useState, useEffect } from 'react';

interface NavbarProps {
  onCTAClick: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? 'bg-[#0D1117] border-b border-[#30363D] py-3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2F81F7] rounded-[4px] flex items-center justify-center">
            <span className="text-white font-bold text-xl uppercase">A</span>
          </div>
          <span className="text-[#E6EDF3] font-semibold text-lg tracking-tight uppercase">Systemic AI</span>
        </div>
        
        <button
          onClick={onCTAClick}
          className="px-5 py-2.5 bg-[#2F81F7] text-white font-medium text-sm rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200"
        >
          Request Free Audit
        </button>
      </div>
    </nav>
  );
}
