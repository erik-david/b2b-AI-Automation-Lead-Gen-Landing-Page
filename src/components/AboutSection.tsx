import { User, Shield, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function AboutSection() {
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="bg-dark-alt relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_100%_50%,rgba(0,209,255,0.05),transparent_70%)]" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className={`space-y-12 reveal-initial ${isVisible ? 'reveal-visible' : ''}`}>
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20">
                <p className="text-accent-blue tracking-widest uppercase text-xs font-black">ABOUT SYSTEMIC</p>
              </div>
              <h2>High performance <br /><span className="text-accent-blue">meets clean design.</span></h2>
              <p className="text-2xl leading-relaxed text-[var(--text-muted)]">
                I'm Erik, specializing in building high-conversion websites for Dutch service providers. 
                I cut through the noise to deliver results that actually move the needle for your business.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Shield className="w-8 h-8 text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2">Predictable Results</h4>
                  <p className="text-lg">No hourly billing surprises. Just high-quality deployment with clear timelines and fixed pricing.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="w-16 h-16 rounded-2xl bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-2">Built for Conversion</h4>
                  <p className="text-lg">Every pixel and word is optimized for a single goal: turning your visitors into loyal, paying clients.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative reveal-initial ${isVisible ? 'reveal-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-[#1F6FEB]/20 to-transparent border border-white/10 flex items-center justify-center overflow-hidden premium-card">
              <User className="w-40 h-40 text-accent-blue/20" />
              {/* Photo placeholder with better styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12">
                <p className="text-white font-black text-3xl mb-1">Erik de Jong</p>
                <p className="text-accent-blue font-bold tracking-widest uppercase text-sm">Founder & Lead Developer</p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-blue/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
