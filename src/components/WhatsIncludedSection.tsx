import { Paintbrush, Smartphone, Search, Mail, Globe, RefreshCw, Code2, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const items = [
  { Icon: Paintbrush, label: 'Custom design', sub: 'no templates' },
  { Icon: Smartphone, label: 'Mobile-first development', sub: null },
  { Icon: Search, label: 'SEO-ready structure', sub: null },
  { Icon: Mail, label: 'Contact form integration', sub: null },
  { Icon: Globe, label: 'Vercel deployment', sub: 'custom domain setup' },
  { Icon: RefreshCw, label: '1 round of revisions', sub: 'included' },
  { Icon: Code2, label: 'Full code ownership', sub: 'no monthly fees' },
  { Icon: Lock, label: 'No lock-in', sub: 'ever' },
];

export function WhatsIncludedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4 headline-glow">
          <Reveal>
            <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
              <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">WHAT'S INCLUDED</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              Everything you need.{' '}
              <span className="text-accent-blue">Nothing you don't.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {items.map(({ Icon, label, sub }, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 p-5 rounded-xl reveal-fade-scale-initial ${isVisible ? 'reveal-fade-scale-visible' : ''}`}
              style={{
                backgroundColor: '#161B22',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
                transitionDelay: `${i * 55}ms`,
              }}
            >
              <div
                className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'rgba(47,129,247,0.1)' }}
              >
                <Icon className="w-4 h-4" style={{ color: '#2F81F7' }} />
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">{label}</p>
                {sub && <p className="text-[var(--text-muted)] text-xs mt-0.5">{sub}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
