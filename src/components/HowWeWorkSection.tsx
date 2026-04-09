import { Search, Wrench, TrendingUp } from 'lucide-react';
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
      icon: Search,
      title: "We map your operation first",
      body: "Before writing a single line of automation, we spend time understanding exactly how your team works today — the tools, the handoffs, the gaps."
    },
    {
      icon: Wrench,
      title: "We build on what you already have",
      body: "No ripping out your stack. We connect your existing tools — CRM, email, spreadsheets — and make them talk to each other automatically."
    },
    {
      icon: TrendingUp,
      title: "We measure and iterate",
      body: "Every automation ships with clear metrics. We track what's working, fix what isn't, and improve over time — not just once."
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 px-6 bg-[#0D1117] overflow-hidden">
      <div className="max-w-6xl mx-auto container-custom">
        <div className="mb-20 space-y-4">
          <p className="text-[11px] font-bold text-[#2F81F7] tracking-[0.2em] uppercase">OUR METHOD</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#E6EDF3] tracking-tight">How we actually do it.</h2>
          <p className="text-lg text-[#8B949E] font-sans max-w-2xl leading-relaxed">
            Not black-box AI. Real systems, built on your existing tools.
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
