import { useEffect, useState, useRef } from 'react';

export function ProcessSection() {
  const projects = [
    {
      industry: "Fitness",
      description: "A high-conversion landing page for a local gym with integrated booking and member portal.",
      label: "Fitness",
      url: "https://fitness-website-psi-five.vercel.app"
    },
    {
      industry: "B2B Wholesale",
      description: "A professional catalog and inquiry system for a Dutch industrial parts supplier.",
      label: "B2B Wholesale",
      url: "https://v0-implementation-plan-review-kappa.vercel.app"
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
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 relative overflow-hidden bg-[#0D1117]">
      <div className="max-w-6xl mx-auto relative z-10 container-custom">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] tracking-tight">What we've built</h2>
          <p className="text-lg text-[var(--text-muted)] font-sans max-w-2xl mx-auto leading-relaxed">
            Real websites for real businesses. No bloat, just performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {projects.map((item, idx) => (
            <div 
              key={idx} 
              className={`standard-card rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 reveal-initial reveal-slide-up ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {/* Live Screenshot Embed */}
              <div className="aspect-video bg-[#161B22] border-b border-white/5 relative overflow-hidden group">
                <img 
                  src={`https://api.microlink.io/?url=${item.url}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={`${item.industry} project`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'absolute inset-0 flex items-center justify-center text-[#30363D] font-bold tracking-widest uppercase text-xs';
                      placeholder.innerText = 'Screenshot Loading...';
                      target.parentElement.appendChild(placeholder);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F81F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#2F81F7]/10 text-[#2F81F7] text-[11px] font-bold uppercase tracking-wider rounded-full">
                    {item.label}
                  </span>
                </div>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                  {item.description}
                </p>
                <button 
                  className="text-sm font-semibold text-[var(--text-muted)] hover:text-[#2F81F7] transition-colors inline-flex items-center gap-2 group/btn"
                >
                  View project
                  <div className="w-1 h-1 rounded-full bg-current transition-all group-hover/btn:w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
