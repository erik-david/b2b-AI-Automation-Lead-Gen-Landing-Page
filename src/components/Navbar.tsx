import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How it works', href: '/#how-it-works' },
    { label: "Who it's for", href: '/#who-its-for' },
    { label: 'Audit', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        isScrolled 
          ? 'bg-[#0D1117]/95 backdrop-blur-[12px] py-3 border-b border-white/10' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#2F81F7] rounded-[4px] flex items-center justify-center font-bold text-white text-xl">S</div>
          <span className="text-[#E6EDF3] font-serif font-bold text-xl tracking-tight">Systemic AI</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#7D8590] hover:text-[#E6EDF3] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-[#2F81F7] text-white font-medium text-sm rounded-[50px] hover:bg-[#1F6FEB] transition-all duration-200"
          >
            Request Free Audit
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-[#E6EDF3] focus:outline-none bg-transparent border-none shadow-none outline-none p-2 !bg-transparent !border-none !shadow-none !outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D1117] border-b border-[#30363D] animate-fade-in shadow-2xl overflow-hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-[16px] font-medium text-[#E6EDF3] py-4 px-6 border-b border-[#30363D]/50 last:border-0 hover:bg-[#161B22] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="p-6 bg-[#0D1117]">
              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-[#2F81F7] text-white font-medium text-[16px] rounded-[50px] hover:bg-[#1F6FEB] active:scale-[0.98] transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
