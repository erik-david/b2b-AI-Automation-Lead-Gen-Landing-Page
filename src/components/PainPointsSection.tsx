import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const painPoints = [
  {
    icon: '❌',
    text: 'Your current website is outdated and driving customers away',
  },
  {
    icon: '❌',
    text: 'Web agencies quote €3,000+ and take 3 months to deliver',
  },
  {
    icon: '⚠️',
    text: "You don't know what you're getting until it's too late",
  },
  {
    icon: '⚠️',
    text: "You don't have time to manage a website project yourself",
  },
];

export function PainPointsSection() {
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
    <section ref={sectionRef} className="bg-dark-alt">
      <div className="container-custom">
        <div className="text-center mb-16 space-y-4 headline-glow">
          <Reveal>
            <div
              className="inline-block px-4 py-2 rounded-full"
              style={{
                backgroundColor: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.2)',
              }}
            >
              <p
                className="tracking-[0.2em] uppercase text-xs font-black"
                style={{ color: '#f87171' }}
              >
                SOUND FAMILIAR?
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              Does this sound <span className="text-accent-blue">familiar?</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 p-7 rounded-2xl reveal-left-initial ${
                isVisible ? 'reveal-left-visible' : ''
              }`}
              style={{
                backgroundColor: '#0d1117',
                border: '1px solid rgba(239,68,68,0.12)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.03)',
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5 leading-none">{point.icon}</span>
              <p
                className="leading-relaxed"
                style={{ fontSize: '1rem', color: '#7D8590' }}
              >
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
