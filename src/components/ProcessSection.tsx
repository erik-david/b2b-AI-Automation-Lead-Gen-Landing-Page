import { useEffect, useState, useRef } from 'react';

export function ProcessSection() {
  const cases = [
    {
      result: "Cut customer onboarding from 5 days to 4 hours",
      how: "We mapped their existing CRM triggers and built an automated welcome sequence that eliminated manual handoffs between sales and operations."
    },
    {
      result: "Eliminated 1,200 hours of manual data entry per year",
      how: "We connected three disconnected tools via a custom middleware layer — no new software required."
    },
    {
      result: "Reduced reporting time from 3 days to 20 minutes",
      how: "A scheduled automation now pulls, formats, and delivers their weekly operations report automatically."
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
    <section id="outcomes" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-[#0D1117]">
      <div className="max-w-6xl mx-auto relative z-10 container-custom">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] tracking-tight">Real-World Results</h2>
          <p className="text-lg text-[var(--text-muted)] font-sans max-w-2xl mx-auto leading-relaxed">
            Case examples of how we've moved operations from manual to autonomous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div 
              key={idx} 
              className={`standard-card rounded-2xl p-8 hover:-translate-y-1 reveal-initial reveal-slide-up ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {item.result}
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                {item.how}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
