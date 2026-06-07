import { useEffect, useRef, useState } from 'react';
import { Phone, Code2, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
  {
    number: '01',
    Icon: Phone,
    title: 'The Call',
    body: 'We talk for 15 minutes. You tell us about your business, your goals, and your current situation. No pitch, just questions.',
  },
  {
    number: '02',
    Icon: Code2,
    title: 'The Build',
    body: 'We design and build your website in 5-7 days. Design, copy structure, and development — all included.',
  },
  {
    number: '03',
    Icon: Rocket,
    title: 'Go Live',
    body: 'You get a fully deployed website with full ownership. No monthly fees, no lock-in.',
  },
];

export function HowWeWorkSection() {
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
    <section id="how-it-works" ref={sectionRef} className="bg-dark">
      <div className="container-custom">
        <div className="text-center mb-20 space-y-4 headline-glow">
          <Reveal>
            <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
              <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">HOW IT WORKS</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              From zero to <span className="text-accent-blue">live</span> in 7 days.
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Horizontal timeline connector — visible on md+ */}
          <div
            className="hidden md:block absolute left-0 right-0 pointer-events-none"
            style={{
              top: '4rem',
              height: '1px',
              background: 'linear-gradient(90deg, transparent 6%, rgba(47,129,247,0.3) 25%, rgba(47,129,247,0.3) 75%, transparent 94%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map(({ number, Icon, title, body }, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
                  transitionDelay: `${idx * 150}ms`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center"
                  style={{
                    backgroundColor: '#2F81F7',
                    boxShadow: '0 0 20px rgba(47,129,247,0.5)',
                  }}
                >
                  <span className="text-white text-xs font-black">{idx + 1}</span>
                </div>

                {/* Large background number */}
                <div
                  className="text-7xl font-black leading-none mb-5 select-none"
                  style={{
                    color: 'rgba(47,129,247,0.1)',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {number}
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(47,129,247,0.12)',
                      border: '1px solid rgba(47,129,247,0.2)',
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: '#2F81F7' }} />
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight">{title}</h3>
                </div>

                <p className="text-[var(--text-muted)] leading-relaxed text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
