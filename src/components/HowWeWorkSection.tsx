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
      title: "The Call",
      label: "STEP 1",
      body: "We talk for 15 minutes. You tell us about your business, your goals, and your current situation. No pitch, just questions.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
      alt: "Person in conversation"
    },
    {
      title: "The Build",
      label: "STEP 2",
      body: "We design and build your website in 5-7 days. Design, copy structure, and development — all included.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000",
      alt: "Someone working on a laptop"
    },
    {
      title: "Go Live",
      label: "STEP 3",
      body: "You get a fully deployed website with full ownership. No monthly fees, no lock-in.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
      alt: "Website live on a laptop screen"
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="p-0 bg-dark overflow-hidden">
      {steps.map((step, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[80vh] border-b border-[var(--border-subtle)]`}
        >
          {/* Text Side */}
          <div className="flex-1 flex items-center justify-center p-12 lg:p-24 bg-dark">
            <div className={`max-w-xl space-y-8 reveal-initial ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-accent-blue flex items-center justify-center text-accent-blue font-bold text-sm">
                  {idx + 1}
                </div>
                <span className="text-accent-blue font-black uppercase tracking-[0.2em] text-xs">
                  {step.label}
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-serif font-bold text-white leading-tight">
                {step.title}
              </h2>
              
              <p className="text-xl lg:text-2xl text-[var(--text-muted)] leading-relaxed font-light">
                {step.body}
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative overflow-hidden bg-zinc-900 min-h-[400px] lg:min-h-0">
            <img 
              src={step.image} 
              alt={step.alt}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out"
            />
            {/* Full-depth bottom fade into dark bg */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[#0D1117]/10 pointer-events-none" />
          </div>
        </div>
      ))}
    </section>
  );
}

