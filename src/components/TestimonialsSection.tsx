import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    name: 'Marco Veld',
    company: 'Veld & Co. — B2B Wholesale',
    quote: '[Testimonial — replace with real quote from Marco after delivery]',
    placeholder: true,
  },
  {
    name: '[Name]',
    company: '[Company]',
    quote: '[Testimonial — to be replaced with real client feedback]',
    placeholder: true,
  },
  {
    name: '[Name]',
    company: '[Company]',
    quote: '[Testimonial — to be replaced with real client feedback]',
    placeholder: true,
  },
];

export function TestimonialsSection() {
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
              <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">CLIENT RESULTS</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              What our <span className="text-accent-blue">clients say.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-2xl reveal-initial ${isVisible ? 'reveal-visible' : ''}`}
              style={{
                backgroundColor: '#161B22',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {t.placeholder && (
                <div
                  className="absolute top-3 right-3 px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'rgba(251,191,36,0.12)',
                    color: '#fbbf24',
                    border: '1px solid rgba(251,191,36,0.28)',
                    fontSize: '9px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  Placeholder
                </div>
              )}

              {/* Quote mark */}
              <div
                className="text-4xl font-black leading-none mb-4 select-none"
                style={{ color: 'rgba(47,129,247,0.25)', fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              <p className="text-[var(--text-muted)] text-sm italic leading-relaxed mb-6">{t.quote}</p>

              <div className="border-t pt-4" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <p className="text-white font-black text-sm">{t.name}</p>
                <p className="text-[var(--text-muted)] text-xs mt-0.5">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
