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
    <section id="how-it-works" ref={sectionRef} className="py-32 px-6 bg-[#0D1117] overflow-hidden">
      <div className="max-w-6xl mx-auto container-custom">
        <div className="mb-20 space-y-4">
          <p className="text-[11px] font-bold text-[#2F81F7] tracking-[0.2em] uppercase">OUR METHOD</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#E6EDF3] tracking-tight">How it works</h2>
          <p className="text-lg text-[#8B949E] font-sans max-w-2xl leading-relaxed">
            A simple, transparent process designed for busy business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl bg-[#161B22] border border-white/10 space-y-6 transition-all duration-[600ms] ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 bg-[#0D1117] border border-white/5 rounded-lg flex items-center justify-center">
                <step.icon className="w-6 h-6 text-[#2F81F7]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#E6EDF3]">{step.title}</h3>
                <p className="text-[#8B949E] leading-relaxed">
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
