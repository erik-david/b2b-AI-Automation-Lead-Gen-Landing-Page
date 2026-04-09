import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const words = ["Manual Work", "Data Entry", "Onboarding", "Disconnected Tools", "Repetitive Tasks"];
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 2000;

  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const speed = 0.3 + Math.random() * 0.5;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1.5 + Math.random() * 1.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      if (document.visibilityState === 'hidden') {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0D1117';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse Repel
        if (!isMobile) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            const force = (100 - distance) / 100;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 1.5;
            p.y += Math.sin(angle) * force * 1.5;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#2F81F7';
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const opacity = 1 - (dist / 150);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(47, 129, 247, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 animate-fade-in relative overflow-hidden hero-padding">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      />
      
      <div className="max-w-6xl mx-auto relative z-[1] container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 text-center lg:text-left">
          {/* Left Content */}
          <div className="flex-1 space-y-12">
            <div className="space-y-8">
              <h1 
                className="text-[40px] md:text-6xl lg:text-[84px] font-bold text-[var(--text-primary)] leading-[1.1] md:leading-[1.05] tracking-[-0.03em] font-serif max-w-[320px] md:max-w-[800px] lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left"
              >
                Stop Wasting Time on{' '}
                <div className="min-h-[1.4em] block md:inline-block">
                  <span className="text-[#2F81F7] inline-block min-w-[200px] md:min-w-[400px]">
                    {text}
                    <span className="animate-pulse font-light ml-1">|</span>
                  </span>
                </div>
              </h1>

              <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                AI isn't a gimmick. It's a system. We help you replace manual work and disconnected tools with seamless, high-performance automation.
              </p>
            </div>

            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <button
                onClick={onCTAClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-[15px] md:text-lg font-semibold text-white rounded-[50px] transition-all duration-300 group hover:shadow-[0_10px_40px_-10px_rgba(47,129,247,0.5)] hover:scale-[1.02] active:scale-[0.98] w-full max-w-fit border-0 outline-none relative overflow-hidden whitespace-nowrap"
                style={{
                  background: 'linear-gradient(135deg, #1557b0, #2F81F7, #1a6fd4)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                Request Your Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Mockup (Desktop only) */}
          <div 
            className={`hidden lg:block flex-1 max-w-sm transition-all duration-[800ms] ease-out delay-[400ms] ${
              cardVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[60px]'
            }`}
          >
            <div className="glass-card rounded-2xl p-6 border-[#30363D] shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--text-primary)]">Automation Report</span>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-glow" />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    <span>Manual hours saved</span>
                    <span className="text-[var(--text-primary)]">
                      {cardVisible ? <HeroCounter end={1240} duration={1200} delay={800} /> : 0} hrs
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#0D1117] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2F81F7] rounded-full transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) delay-[800ms]"
                      style={{ width: cardVisible ? '85%' : '0%' }}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    <span>Workflows automated</span>
                    <span className="text-[var(--text-primary)]">
                      {cardVisible ? <HeroCounter end={8} duration={1200} delay={1000} /> : 0}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#0D1117] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2F81F7] rounded-full transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) delay-[1000ms]"
                      style={{ width: cardVisible ? '65%' : '0%' }}
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    <span>Cost reduction</span>
                    <span className="text-[var(--text-primary)]">
                      {cardVisible ? <HeroCounter end={34} duration={1200} delay={1200} /> : 0}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#0D1117] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#2F81F7] rounded-full transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) delay-[1200ms]"
                      style={{ width: cardVisible ? '72%' : '0%' }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#30363D]/50 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#2F81F7]/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#2F81F7]" />
                </div>
                <span className="text-[12px] text-[var(--text-muted)]">System active and optimizing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Counters */}
        <div className="pt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <p className="text-[42px] font-bold text-[#2F81F7]">
              <HeroCounter end={500} suffix="+" duration={2000} />
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold mt-2">Custom Automations Built</p>
          </div>
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <p className="text-[42px] font-bold text-[#2F81F7]">
              <HeroCounter end={15} suffix="+" duration={1000} />
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold mt-2">Years Exp.</p>
          </div>
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <p className="text-[42px] font-bold text-[#2F81F7]">
              <HeroCounter end={20} suffix="+" duration={1200} />
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--text-muted)] font-bold mt-2">Industries</p>
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
      const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  const formattedCount = count.toLocaleString();

  return <span ref={ref}>{formattedCount}{suffix}</span>;
}

