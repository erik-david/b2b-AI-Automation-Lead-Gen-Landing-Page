import { MessageSquare, Code, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageSquare,
      title: "Step 1: We talk for 15 minutes",
      body: "You explain your business, we ask the right questions to understand your goals and constraints."
    },
    {
      icon: Code,
      title: "Step 2: We build in 5-7 days",
      body: "Design, professional copy, and technical development all included in a single, focused sprint."
    },
    {
      icon: Rocket,
      title: "Step 3: You go live",
      body: "We handle the entire deployment process and hand over full ownership of the site to you."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-dark-alt overflow-hidden">
      <div className="container-custom">
        <div className="mb-32 space-y-6 text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
            <p className="text-accent-blue tracking-[0.3em] uppercase text-xs font-black">OUR METHOD</p>
          </div>
          <h2 className={`reveal-initial ${isVisible ? 'reveal-visible' : ''}`}>How we <span className="text-accent-blue">deliver value</span></h2>
          <p className="text-2xl max-w-2xl leading-relaxed text-[var(--text-muted)]">
            A simple, transparent process designed for busy business owners who value speed and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`premium-card reveal-initial ${isVisible ? 'reveal-visible' : ''} group`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="w-20 h-20 bg-accent-blue/10 rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-accent-blue/20 transition-all duration-500 shadow-[0_0_30px_rgba(0,209,255,0.1)]">
                <step.icon className="w-10 h-10 text-accent-blue" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white leading-tight">{step.title}</h3>
                <p className="text-xl leading-relaxed text-[var(--text-muted)]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

