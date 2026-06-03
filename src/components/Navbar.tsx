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
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 ${
        isScrolled 
          ? 'py-4' 
          : 'py-8'
      }`}
      style={{ borderTop: '1px solid #2F81F7' }}
    >
      <div className={`max-w-6xl mx-auto flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-2xl ${
        isScrolled 
          ? 'bg-bg-secondary/80 backdrop-blur-xl border border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-xl group-hover:scale-110 transition-transform" style={{ backgroundColor: '#2F81F7', boxShadow: '0 0 24px rgba(47,129,247,0.4)' }}>S</div>
          <span className="text-white font-black text-2xl tracking-tighter">Systemic <span className="text-accent-blue">AI</span></span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-xs font-black uppercase text-[var(--text-muted)] hover:text-accent-blue transition-colors"
              style={{ letterSpacing: '0.05em' }}
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 text-white font-black text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
            style={{ backgroundColor: '#2F81F7' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1a6fd4'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#2F81F7'}
          >
            Book a call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-white focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-6 right-6 mt-4 bg-bg-secondary/95 backdrop-blur-2xl border border-white/10 rounded-3xl animate-fade-in shadow-2xl overflow-hidden transition-all duration-500 origin-top ${
        isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-xl font-bold text-white hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5">
            <Link
              to="/contact"
              className="block w-full text-center py-5 text-white font-black text-xl rounded-lg active:scale-95 transition-all"
              style={{ backgroundColor: '#2F81F7' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

