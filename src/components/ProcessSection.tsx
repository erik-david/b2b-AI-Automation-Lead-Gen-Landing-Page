import { useEffect, useState, useRef } from 'react';

function ChatMockup() {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step === 1) {
      setIsTyping(true);
      const typingTimer = setTimeout(() => setIsTyping(false), 1500);
      return () => clearTimeout(typingTimer);
    }
  }, [step]);

  return (
    <div className="absolute -right-20 top-0 w-80 glass-card bg-[#161B22] border-[#30363D] rounded-xl overflow-hidden shadow-2xl hidden xl:block animate-fade-in">
      <div className="p-4 border-b border-[#30363D] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-[var(--text-primary)]">AI Assistant</span>
        </div>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-[#30363D] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#30363D] rounded-full" />
          <div className="w-1.5 h-1.5 bg-[#30363D] rounded-full" />
        </div>
      </div>
      <div className="p-4 space-y-4 h-[200px] flex flex-col justify-end">
        {step >= 0 && (
          <div className="flex justify-end">
            <div className="bg-[var(--accent-blue)] text-white p-3 rounded-2xl rounded-tr-none text-xs max-w-[80%] animate-slide-up">
              Which workflows are slowing us down?
            </div>
          </div>
        )}
        {(step >= 2 || (step === 1 && isTyping)) && (
          <div className="flex justify-start">
            <div className="bg-[#30363D] text-[#E6EDF3] p-3 rounded-2xl rounded-tl-none text-xs max-w-[80%] animate-fade-in relative">
              {isTyping ? (
                <span className="flex gap-1 items-center px-2 py-1">
                  <span className="typing-dot" />
                </span>
              ) : (
                "I've identified 3 high-impact areas in your operations."
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProcessSection() {
  const steps = [
    {
      title: 'Understand the current system',
      description: 'We start by looking at how your team actually works, without judgment or complexity.'
    },
    {
      title: 'Identify bottlenecks and waste',
      description: 'We pinpoint exactly where manual tasks are slowing you down or creating disconnects.'
    },
    {
      title: 'Design practical automations',
      description: 'We map out a system that works for your specific business needs, not just a generic tool.'
    },
    {
      title: 'Decide together what makes sense',
      description: 'You get a clear recommendation, and you decide if and when to move forward.'
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
    <section ref={sectionRef} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 space-y-6 relative">
          <h2 className="text-4xl md:text-6xl font-serif text-[var(--text-primary)] tracking-tight">The Systemic Path</h2>
          <p className="text-xl text-[var(--text-muted)] font-sans max-w-2xl leading-relaxed">
            A straightforward, high-precision process designed to move your operations from manual to autonomous.
          </p>
          <ChatMockup />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-[120px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#30363D] to-transparent -z-10" />
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-10 rounded-2xl space-y-8 group transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms`, animationDelay: `${idx * 150}ms` }}
            >
              {/* Background large number */}
              <div className="absolute -right-4 -bottom-4 text-[120px] font-bold text-[#8B949E] opacity-[0.05] pointer-events-none select-none leading-none">
                0{idx + 1}
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-[var(--glow-blue)] flex items-center justify-center border border-[var(--accent-blue)]/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {idx === 0 && (
                    <svg className="w-8 h-8 text-[var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.033L4 12c0 6.627 5.373 12 12 12s12-5.373 12-12l-.382-6.033z" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-8 h-8 text-[var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-8 h-8 text-[var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                  {idx === 3 && (
                    <svg className="w-8 h-8 text-[var(--accent-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                </div>
                <div className="absolute -top-2 -right-2 text-xs font-bold text-[var(--accent-blue)]/40 tabular-nums">
                  0{idx + 1}
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-2xl font-serif text-[var(--text-primary)] leading-tight group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
