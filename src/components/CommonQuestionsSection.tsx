import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const timelineSteps = [
  { day: 'Day 1', label: 'Discovery call' },
  { day: 'Day 2–5', label: 'Design & build' },
  { day: 'Day 6–7', label: 'Review' },
  { day: 'Day 7', label: 'Live' },
];

export function CommonQuestionsSection() {
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

  const cardStyle = (delay: number) => ({
    backgroundColor: '#161B22',
    border: '1px solid rgba(255,255,255,0.05)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
    transitionDelay: `${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="bg-dark-alt">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4 headline-glow">
          <Reveal>
            <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
              <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">STRAIGHT ANSWERS</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              No fluff. Just <span className="text-accent-blue">answers.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Q1 — Timeline */}
          <div
            className={`p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
            style={cardStyle(0)}
          >
            <p className="text-[var(--text-muted)] text-xs font-black uppercase tracking-widest mb-5">
              How long does it take?
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {timelineSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="text-center">
                    <div
                      className="px-3 py-1.5 rounded-lg text-xs font-black text-white"
                      style={{
                        backgroundColor:
                          i === timelineSteps.length - 1
                            ? '#2F81F7'
                            : 'rgba(47,129,247,0.14)',
                        border: '1px solid rgba(47,129,247,0.3)',
                      }}
                    >
                      {step.day}
                    </div>
                    <p className="text-[10px] text-[var(--text-muted)] mt-1 font-medium">{step.label}</p>
                  </div>
                  {i < timelineSteps.length - 1 && (
                    <ArrowRight className="w-3 h-3 flex-shrink-0 mb-3" style={{ color: '#2F81F7' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Q2 — Pricing */}
          <div
            className={`p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
            style={cardStyle(100)}
          >
            <p className="text-[var(--text-muted)] text-xs font-black uppercase tracking-widest mb-5">
              What will it cost?
            </p>
            <p className="text-3xl font-black text-white mb-4">
              Starting from <span className="text-accent-blue">€499</span>
            </p>
            <ul className="space-y-2">
              {['Fixed price — no surprises', 'Everything included', 'No monthly fees ever'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                  <span className="text-accent-blue font-black">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Q3 — Revisions */}
          <div
            className={`p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
            style={cardStyle(200)}
          >
            <p className="text-[var(--text-muted)] text-xs font-black uppercase tracking-widest mb-5">
              What if I don't like it?
            </p>
            <p className="text-2xl font-black text-white leading-tight">
              1 revision round <span className="text-accent-blue">included.</span>
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-3 leading-relaxed">
              We don't stop until you're happy.
            </p>
          </div>

          {/* Q4 — Content */}
          <div
            className={`p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
            style={cardStyle(300)}
          >
            <p className="text-[var(--text-muted)] text-xs font-black uppercase tracking-widest mb-5">
              Do I need to provide content?
            </p>
            <p className="text-2xl font-black text-white leading-tight">
              We write the copy.{' '}
              <span className="text-accent-blue">You provide the facts.</span>
            </p>
            <p className="text-[var(--text-muted)] text-sm mt-3 leading-relaxed">
              No writing required on your end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
