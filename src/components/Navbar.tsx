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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled 
          ? 'bg-[#0D1117]/80 backdrop-blur-md py-3 border-b border-[#30363D]' 
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
        <button 
          className="md:hidden text-[#E6EDF3] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0D1117] border-b border-[#30363D] animate-fade-in p-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="block text-lg font-medium text-[#E6EDF3] py-2 border-b border-[#30363D] last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-[#30363D]">
            <Link
              to="/contact"
              className="block w-full text-center py-4 bg-[#2F81F7] text-white font-medium text-lg rounded-[50px] hover:bg-[#1F6FEB]"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Free Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
