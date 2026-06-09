import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-dark-alt">
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

        <div
          ref={cardRef}
          className={`max-w-[700px] mx-auto reveal-right-initial ${isVisible ? 'reveal-right-visible' : ''}`}
        >
          <div
            className="relative p-10 rounded-2xl text-center"
            style={{
              backgroundColor: '#161B22',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Large opening quote mark */}
            <div
              className="font-black select-none mb-2"
              style={{
                color: '#2F81F7',
                fontSize: '7rem',
                lineHeight: '0.7',
                fontFamily: 'Georgia, "Times New Roman", serif',
              }}
            >
              &ldquo;
            </div>

            {/* 5 stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" viewBox="0 0 20 20" fill="#f59e0b">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p
              className="text-white font-semibold leading-relaxed mb-8"
              style={{ fontSize: '1.3rem' }}
            >
              Erik built our website in less than a week. Clean design, clear structure, and he thought along about what our customers want to see. Highly recommended.
            </p>

            {/* Avatar + name + company */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 text-white font-black text-sm"
                style={{ backgroundColor: '#2F81F7', boxShadow: '0 0 16px rgba(47,129,247,0.4)' }}
              >
                CB
              </div>
              <div className="text-left">
                <p className="text-white font-black text-sm leading-tight">Can Boke</p>
                <p className="text-xs mt-0.5" style={{ color: '#7D8590' }}>
                  Actie Airport Taxi — actieairporttaxi.nl
                </p>
              </div>
            </div>

            {/* Result tag */}
            <div className="flex justify-center">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black"
                style={{
                  backgroundColor: 'rgba(47,129,247,0.12)',
                  border: '1px solid rgba(47,129,247,0.3)',
                  color: '#2F81F7',
                }}
              >
                Website delivered in 5 days ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
