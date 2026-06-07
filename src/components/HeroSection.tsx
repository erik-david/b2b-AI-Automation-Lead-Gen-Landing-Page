import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCardVisible(true), 400);
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
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/80 to-[#0D1117]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(47,129,247,0.15),transparent_60%)]" />
        {/* Dot grid texture — max opacity 0.03 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Dutch businesses deserve better websites.{' '}
                <span className="text-accent-blue">We build them.</span>
              </h1>
              <p
                className="text-xl md:text-2xl text-[var(--text-muted)] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                Custom websites for Dutch service providers — built in{' '}
                <span className="text-white font-bold">5-7 days</span>, fixed price.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={onCTAClick}
                className="group relative px-10 py-5 text-white font-black rounded-lg transition-all hover:scale-105 active:scale-95 overflow-hidden"
                style={{ backgroundColor: '#2F81F7', boxShadow: '0 20px 50px rgba(47,129,247,0.4)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1a6fd4'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#2F81F7'}
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Book a free 15-min call
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>

          {/* Right Visual — Before/After mockup */}
          <div
            className={`hidden lg:block flex-1 relative transition-all duration-1000 ease-out delay-500 ${
              cardVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
            }`}
          >
            <div className="relative flex items-center justify-center">
              <div
                className="absolute -inset-10 rounded-full blur-3xl pointer-events-none"
                style={{ backgroundColor: 'rgba(47,129,247,0.07)' }}
              />
              <div
                className="relative z-10 rounded-2xl overflow-hidden w-full max-w-md"
                style={{
                  backgroundColor: '#161B22',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Before / After split */}
                <div className="flex relative" style={{ height: '240px' }}>
                  {/* BEFORE — grayscale, text-heavy */}
                  <div className="flex-1 p-5 overflow-hidden relative" style={{ backgroundColor: '#f0eff0' }}>
                    <p className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-3">BEFORE</p>
                    {/* Simulated navbar */}
                    <div className="flex gap-1.5 mb-4 items-center">
                      <div className="h-2 bg-gray-500 rounded w-12" />
                      <div className="ml-auto flex gap-1">
                        <div className="h-1.5 bg-gray-300 rounded w-6" />
                        <div className="h-1.5 bg-gray-300 rounded w-6" />
                        <div className="h-1.5 bg-gray-300 rounded w-6" />
                      </div>
                    </div>
                    {/* Hero area */}
                    <div className="space-y-1.5">
                      <div className="h-2.5 bg-gray-500 rounded w-4/5" />
                      <div className="h-2.5 bg-gray-400 rounded w-3/5" />
                      <div className="h-1 bg-gray-300 rounded w-full mt-2" />
                      <div className="h-1 bg-gray-300 rounded w-5/6" />
                      <div className="h-1 bg-gray-300 rounded w-full" />
                      <div className="h-1 bg-gray-300 rounded w-4/5" />
                      {/* Boring button */}
                      <div className="h-5 border border-gray-400 rounded w-1/3 mt-2" />
                      {/* More text */}
                      <div className="h-px bg-gray-300 mt-3 mb-2" />
                      <div className="flex gap-1.5">
                        <div className="flex-1 h-10 bg-gray-200 rounded border border-gray-300" />
                        <div className="flex-1 h-10 bg-gray-200 rounded border border-gray-300" />
                      </div>
                    </div>
                  </div>

                  {/* Divider with arrow */}
                  <div
                    className="relative flex items-center justify-center flex-shrink-0"
                    style={{ width: '2px', backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <div
                      className="absolute w-7 h-7 rounded-full flex items-center justify-center z-10"
                      style={{
                        backgroundColor: '#2F81F7',
                        boxShadow: '0 0 16px rgba(47,129,247,0.7)',
                      }}
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* AFTER — dark, clean, modern */}
                  <div className="flex-1 p-5 overflow-hidden relative" style={{ backgroundColor: '#0d1117' }}>
                    <p
                      className="text-[8px] font-black uppercase tracking-widest mb-3"
                      style={{ color: '#2F81F7' }}
                    >
                      AFTER
                    </p>
                    {/* Clean navbar */}
                    <div className="flex gap-1.5 mb-4 items-center">
                      <div
                        className="h-2 rounded w-12"
                        style={{ background: 'linear-gradient(90deg, #2F81F7, #5aa3f9)' }}
                      />
                      <div className="ml-auto">
                        <div
                          className="h-4 rounded px-2 flex items-center"
                          style={{ backgroundColor: '#2F81F7' }}
                        >
                          <div className="h-1 w-6 bg-white/80 rounded" />
                        </div>
                      </div>
                    </div>
                    {/* Hero area */}
                    <div className="space-y-1.5">
                      <div
                        className="h-2.5 rounded w-4/5"
                        style={{ background: 'linear-gradient(90deg, #2F81F7, #7bb8ff)' }}
                      />
                      <div
                        className="h-2.5 rounded w-3/5"
                        style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
                      />
                      <div className="h-1 rounded w-full mt-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                      <div className="h-1 rounded w-5/6" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />
                      <div className="h-1 rounded w-full" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                      {/* Electric CTA button */}
                      <div
                        className="h-5 rounded w-2/5 mt-2"
                        style={{
                          backgroundColor: '#2F81F7',
                          boxShadow: '0 4px 12px rgba(47,129,247,0.5)',
                        }}
                      />
                      <div className="mt-3 flex gap-1.5">
                        <div
                          className="flex-1 h-10 rounded-lg"
                          style={{
                            backgroundColor: 'rgba(47,129,247,0.08)',
                            border: '1px solid rgba(47,129,247,0.25)',
                          }}
                        />
                        <div
                          className="flex-1 h-10 rounded-lg"
                          style={{
                            backgroundColor: 'rgba(47,129,247,0.08)',
                            border: '1px solid rgba(47,129,247,0.25)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div
                  className="text-center py-4 px-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                    This is what we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
