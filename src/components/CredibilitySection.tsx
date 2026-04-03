import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = '', prefix = '', color = 'var(--text-primary)', duration = 2000 }: { end: string, suffix?: string, prefix?: string, color?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const target = parseFloat(end.replace(/[^0-9.-]/g, ''));
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    
    window.requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <span ref={counterRef} style={{ color }} className="font-sans font-bold tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function CredibilitySection() {
  const tools = ["Meridian", "Stackflow", "Orbis", "Vanta", "Syntek", "Loopline", "Archon", "Nexus"];

  const metrics = [
    { label: "Operational Cost", value: "-67", suffix: "%", color: "#F85149" },
    { label: "Workflow Efficiency", value: "+103", suffix: "%", color: "#3FB950" },
    { label: "Hours Reclaimed", value: "+3", suffix: "h/day", color: "#3FB950" },
  ];

  return (
    <section id="who-its-for" className="py-40 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--glow-blue)] rounded-full blur-[160px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {/* Hero Image */}
        <div className="relative w-full h-[240px] rounded-lg overflow-hidden animate-fade-in group">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200" 
            alt="Operations team" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60" style={{ background: 'rgba(13, 17, 23, 0.6)' }} />
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-1 bg-[var(--accent-blue)] rounded-full opacity-30" />
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] italic leading-[1.2] tracking-tight">
            "We didn't need more tools. We needed someone to look at how we <span className="text-[var(--accent-blue)]">actually</span> work."
          </blockquote>
          <div className="space-y-2">
            <cite className="block text-xl text-[var(--text-primary)] not-italic font-semibold">
              Operations Lead
            </cite>
            <p className="text-[var(--text-muted)] text-sm uppercase tracking-widest font-sans">
              Fortune 500 Logistics Company
            </p>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-8 md:p-8 rounded-2xl bg-[#161B22] border border-[#30363D] space-y-4 hover:border-[var(--accent-blue)]/50 transition-colors duration-500 w-full">
              <p className="text-[#8B949E] font-sans text-sm uppercase tracking-widest">{metric.label}</p>
              <div className="text-[48px] md:text-5xl font-bold">
                <Counter 
                  end={metric.value} 
                  suffix={metric.suffix} 
                  color="#2F81F7"
                  prefix={metric.value.startsWith('+') ? '+' : ''}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Logo Bar */}
        <div className="space-y-12">
          <p className="text-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.3em] opacity-60"> trusted by teams at </p>
          <div className="relative fade-mask overflow-hidden py-4">
            <div className="animate-marquee flex gap-24 group hover:[animation-play-state:paused]">
              {[...tools, ...tools].map((tool, idx) => (
                <span 
                  key={idx} 
                  className="font-sans text-[15px] font-medium tracking-[0.05em] text-[#7D8590] hover:text-[var(--accent-blue)] transition-all duration-300 cursor-default whitespace-nowrap"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
