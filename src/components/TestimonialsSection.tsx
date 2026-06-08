import { Reveal } from './Reveal';

export function TestimonialsSection() {
  return (
    <section className="bg-dark">
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

        <Reveal delay={200}>
          <div
            className="relative rounded-2xl max-w-2xl mx-auto text-center overflow-hidden"
            style={{
              backgroundColor: '#161B22',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Website preview screenshot */}
            <div className="w-full h-48 overflow-hidden border-b border-white/10">
              <img
                src="/airport-taxi.png"
                alt="actieairporttaxi.nl website preview"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="p-10">
              {/* 5 gold stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="#f59e0b"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-8 italic">
                "Erik built our website in less than a week. Clean design, clear structure, and he thought along about what our customers want to see. Highly recommended."
              </p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-6">
                <p className="text-white font-black text-sm">Can Boke</p>
                <p className="text-[var(--text-muted)] text-xs mt-1">
                  Actie Airport Taxi — actieairporttaxi.nl
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
