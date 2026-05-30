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
    <section id="who-its-for" ref={sectionRef} className="py-32 px-6 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Column */}
          <div className={`p-8 standard-card rounded-[6px] space-y-8 reveal-initial reveal-slide-left ${isVisible ? 'reveal-visible' : ''}`}>
            <h3 className="text-3xl font-serif text-[#E6EDF3]">This is for you if:</h3>
            <ul className="space-y-6">
              {[
                "You're a local service provider without a professional website",
                "You want something live within a week",
                "You want a fixed price with no hidden costs",
                "You'd rather focus on your business than build a site yourself"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-[#E6EDF3]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#2F81F7] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Column */}
          <div className={`p-8 standard-card rounded-[6px] space-y-8 opacity-70 reveal-initial reveal-slide-right ${isVisible ? 'reveal-visible' : ''}`}>
            <h3 className="text-3xl font-serif text-[#E6EDF3]">This is not for you if:</h3>
            <ul className="space-y-6">
              {[
                "You need a complex web app or e-commerce platform",
                "You want to be involved in every design decision",
                "You're looking for the cheapest option on the market"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-[#7D8590]">
                  <XCircle className="w-5 h-5 text-[#F85149]/60 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-32 text-center max-w-[520px] mx-auto space-y-3 reveal-initial reveal-slide-up ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="text-[18px] text-[#E6EDF3] font-medium font-['DM_Sans',sans-serif]">
            Ready to get started?
          </p>
          <p className="text-[15px] text-[#7D8590] leading-relaxed font-['DM_Sans',sans-serif]">
            Book a call today and let's discuss your new website.
          </p>
        </div>
      </div>
    </section>
  );
}
