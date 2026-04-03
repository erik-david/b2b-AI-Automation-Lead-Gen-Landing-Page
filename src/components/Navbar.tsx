import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onCTAClick: () => void;
}

export function Navbar({ onCTAClick }: NavbarProps) {
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
    { label: 'How it works', href: '#how-it-works' },
    { label: "Who it's for", href: '#who-its-for' },
    { label: 'Audit', href: '#audit' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled 
          ? 'bg-[var(--glass-bg)] backdrop-blur-md border-b border-[var(--card-border)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2F81F7] rounded-[4px] flex items-center justify-center">
            <span className="text-white font-bold text-xl uppercase">A</span>
          </div>
          <span className="text-[#E6EDF3] font-semibold text-lg tracking-tight uppercase">Systemic AI</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onCTAClick}
            className="px-5 py-2.5 bg-[#2F81F7] text-white font-medium text-sm rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200"
          >
            Request Free Audit
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-[var(--text-primary)] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--card-border)] animate-fade-in p-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="block text-lg font-medium text-[var(--text-primary)] py-2 border-b border-[var(--card-border)] last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
