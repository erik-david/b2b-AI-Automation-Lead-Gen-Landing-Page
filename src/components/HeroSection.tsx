import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number; opacity: number }[] = [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background on canvas
      const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      grad.addColorStop(0, '#0D1117');
      grad.addColorStop(1, '#080a0e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 209, 255, ${p.opacity})`;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 250) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 209, 255, ${0.2 * (1 - dist / 250)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden py-0">
      <div className="absolute inset-0 z-0">
        <canvas 
          ref={canvasRef}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/80 to-[#0D1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,209,255,0.15),transparent_60%)]" />
      </div>
      
      <div className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-12 animate-fade-in">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-accent-blue/10 rounded-full border border-accent-blue/20 animate-slide-up">
                <p className="text-accent-blue tracking-[0.2em] uppercase text-xs font-black">
                  Premium Web Design
                </p>
              </div>
              <h1 className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                We build websites that <span className="text-accent-blue">win you clients</span>
              </h1>
              <p className="text-2xl md:text-3xl text-[var(--text-muted)] max-w-2xl mx-auto lg:mx-0 leading-tight font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Custom websites for Dutch service providers — built in <span className="text-white font-bold">5-7 days</span>, fixed price.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={onCTAClick}
                className="group relative px-12 py-6 bg-accent-blue text-black font-black rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,209,255,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 text-xl">
                  Book a free 15-min call
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div 
            className={`hidden lg:block flex-1 relative transition-all duration-1000 ease-out delay-500 ${
              cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-accent-blue/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="premium-card relative z-10 border-white/10 glass-card">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs font-bold text-accent-blue tracking-widest uppercase">Live Dashboard</span>
                </div>
                
                <div className="space-y-8">
                  <StatRow label="Loading Speed" value={98} color="var(--accent-blue)" delay={800} visible={cardVisible} />
                  <StatRow label="Performance" value={100} color="#22c55e" delay={1000} visible={cardVisible} />
                  <StatRow label="User Experience" value={95} color="#a855f7" delay={1200} visible={cardVisible} />
                </div>

                <div className="mt-10 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 rounded-full bg-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-bold">System Integrity</p>
                    <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">Operational • 99.9% Up</p>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute -top-10 -right-10 px-6 py-4 glass-card rounded-2xl border-white/10 animate-float">
                <p className="text-3xl font-black text-white">7 Days</p>
                <p className="text-[10px] uppercase font-bold text-accent">Deployment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="premium-card text-center group hover:border-accent-blue/50">
            <h4 className="text-5xl font-black text-white mb-2"><HeroCounter end={12} duration={2000} />+</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Projects Delivered</p>
          </div>
          <div className="premium-card text-center group hover:border-accent-blue/50">
            <h4 className="text-5xl font-black text-white mb-2"><HeroCounter end={5} suffix="-7" duration={1000} /></h4>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Day Launch</p>
          </div>
          <div className="premium-card text-center group hover:border-accent-blue/50">
            <h4 className="text-5xl font-black text-white mb-2">Fixed</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Pricing Model</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, color, delay, visible }: { label: string, value: number, color: string, delay: number, visible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-xs font-bold text-white uppercase tracking-wider">{label}</span>
        <span className="text-lg font-black" style={{ color }}>{visible ? <HeroCounter end={value} delay={delay} /> : 0}%</span>
      </div>
      <div className="h-1.5 bg-black/40 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full transition-all duration-[1500ms] cubic-bezier(0.2, 0.8, 0.2, 1)"
          style={{ width: visible ? `${value}%` : '0%', backgroundColor: color, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function HeroCounter({ end, duration = 2000, suffix = '', delay = 0 }: { end: number, duration?: number, suffix?: string, delay?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setHasStarted(true), delay);
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;
    let startTime: number;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}


