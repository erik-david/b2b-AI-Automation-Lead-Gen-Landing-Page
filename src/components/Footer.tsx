import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Book a call', href: '/contact' },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0a0f14',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left — wordmark + tagline */}
          <div>
            <Link to="/" className="inline-block text-white font-black text-2xl tracking-tighter">
              Systemic<span style={{ color: '#2F81F7' }}>AI</span>
            </Link>
            <p className="text-[var(--text-muted)] text-sm mt-3 max-w-xs leading-relaxed">
              Custom websites for Dutch service providers — delivered in 5-7 days.
            </p>
          </div>

          {/* Center — nav links */}
          <div className="flex flex-col md:flex-row md:justify-center gap-5">
            {navLinks.map((link) =>
              link.href.startsWith('/') && !link.href.includes('#') ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-black uppercase text-[var(--text-muted)] hover:text-white transition-colors"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-black uppercase text-[var(--text-muted)] hover:text-white transition-colors"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right — built by + LinkedIn */}
          <div className="flex items-center md:justify-end gap-3">
            <p className="text-sm text-[var(--text-muted)]">Built by Erik de Jong</p>
            <a
              href="https://linkedin.com/in/erikdejong"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-white transition-colors"
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs text-[var(--text-muted)]">
            © 2026 Systemic AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
