import { CheckCircle2, XCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function QualificationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="who-its-for" ref={sectionRef} className="bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,209,255,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-32 space-y-6">
          <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
            <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black animate-fade-in">PARTNERSHIP</p>
          </div>
          <h2 className={`reveal-initial ${isVisible ? 'reveal-visible' : ''}`}>Is this service <span className="text-accent-blue">right for you?</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* For Column */}
          <div className={`premium-card gradient-border reveal-initial ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="mb-10 flex items-center gap-4">
              <span className="w-12 h-12 rounded-[1rem] bg-accent-blue/20 flex items-center justify-center shadow-[0_0_20px_rgba(0,209,255,0.2)]">
                <CheckCircle2 className="w-6 h-6 text-accent-blue" />
              </span>
              This is for you if:
            </h3>
            <ul className="space-y-8">
              {[
                "You're a local service provider without a professional website",
                "You want something live within a week",
                "You want a fixed price with no hidden costs",
                "You'd rather focus on your business than build a site yourself"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-6 text-xl">
                  <CheckCircle2 className="w-6 h-6 text-accent-blue mt-1.5 flex-shrink-0" />
                  <span className="text-[var(--text-muted)] group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Column */}
          <div className={`premium-card opacity-90 reveal-initial ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h3 className="mb-10 flex items-center gap-4">
              <span className="w-12 h-12 rounded-[1rem] bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-500/60" />
              </span>
              This is not for you if:
            </h3>
            <ul className="space-y-8">
              {[
                "You need a complex web app or e-commerce platform",
                "You want to be involved in every design decision",
                "You're looking for the cheapest option on the market"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-6 text-xl">
                  <XCircle className="w-6 h-6 text-red-500/40 mt-1.5 flex-shrink-0" />
                  <span className="text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-40 text-center max-w-3xl mx-auto space-y-8 reveal-initial ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="text-4xl text-white font-black">
            Ready to get started?
          </p>
          <p className="text-2xl leading-relaxed text-[var(--text-muted)]">
            Book a call today and let's discuss how we can build your new professional home.
          </p>
        </div>
      </div>
    </section>
  );
}

