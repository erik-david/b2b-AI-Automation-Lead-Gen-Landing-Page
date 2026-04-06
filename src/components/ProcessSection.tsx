import { useEffect, useState, useRef } from 'react';



export function ProcessSection() {
  const steps = [
    {
      title: 'Understand',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400'
    },
    {
      title: 'Identify',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      title: 'Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
    },
    {
      title: 'Decide',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400'
    }
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-[#0D1117]">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] tracking-tight">The Systemic Path</h2>
          <p className="text-lg text-[var(--text-muted)] font-sans max-w-2xl mx-auto leading-relaxed">
            A straightforward process designed to move your operations from manual to autonomous.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`glass-card rounded-2xl group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col h-full bg-[#161B22] border-[#30363D] ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms`, animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 w-8 h-8 bg-[#2F81F7] rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
              </div>

              <div className="p-6 flex-grow flex items-center justify-center">
                <h3 className="text-xl font-serif text-center text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
