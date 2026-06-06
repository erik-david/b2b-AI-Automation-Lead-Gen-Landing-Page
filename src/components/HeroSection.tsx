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
        ctx.fillStyle = `rgba(47, 129, 247, ${p.opacity})`;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 250) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(47, 129, 247, ${0.2 * (1 - dist / 250)})`;
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
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-0">
      <div className="absolute inset-0 z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/80 to-[#0D1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(47,129,247,0.15),transparent_60%)]" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-12 animate-fade-in">
            <div className="space-y-8">
              <h1 className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Dutch businesses deserve better websites.{' '}
                <span className="text-accent-blue">We build them.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-[var(--text-muted)] max-w-2xl mx-auto lg:mx-0 leading-tight font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Custom websites for Dutch service providers — built in <span className="text-white font-bold">5-7 days</span>, fixed price.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={onCTAClick}
                className="group relative px-12 py-6 text-white font-black rounded-lg transition-all hover:scale-105 active:scale-95 overflow-hidden"
                style={{ backgroundColor: '#2F81F7', boxShadow: '0 20px 50px rgba(47,129,247,0.4)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1a6fd4'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#2F81F7'}
              >
                <span className="relative z-10 flex items-center gap-3 text-xl">
                  Book a free 15-min call
                  <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>

          {/* Right Visual — Live project card */}
          <div
            className={`hidden lg:block flex-1 relative transition-all duration-1000 ease-out delay-500 ${
              cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-8 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(47,129,247,0.08)' }} />
              <div
                className="relative z-10 rounded-2xl p-10 max-w-sm w-full border border-white/10"
                style={{ backgroundColor: '#161B22', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                  </span>
                  <span className="text-green-400 text-xs font-black uppercase tracking-widest">LIVE</span>
                </div>
                <p className="text-2xl font-black text-white mb-1">Veld & Co.</p>
                <p className="text-sm text-[var(--text-muted)] mb-6">B2B Wholesale — Netherlands</p>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-sm text-[var(--text-muted)]">Delivered in <span className="text-white font-bold">6 days</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="premium-card text-center group hover:border-accent-blue/50">
            <h4 className="text-5xl font-black text-white mb-2">2</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Websites Built</p>
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


