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
      <div className="max-w-6xl mx-auto text-center space-y-16 relative z-[1] mobile-gap">
        <div className="space-y-8 mobile-gap">
          <h1 
            className="text-6xl md:text-[84px] font-bold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] font-serif"
            style={{ maxWidth: '1000px', margin: '0 auto' }}
          >
            Stop Wasting Time on{' '}
            <span className="relative inline-block md:text-center lg:text-left">
              <span className="text-[#2F81F7] inline-block min-w-[180px] md:min-w-[400px] min-h-[1.2em]">
                {text}
                <span className="animate-pulse font-light ml-1">|</span>
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed font-sans">
            AI isn't a gimmick. It's a system. We help you replace manual work and disconnected tools with seamless, high-performance automation.
          </p>
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center gap-3 px-6 py-3.5 md:px-10 md:py-5 text-[15px] md:text-lg font-semibold bg-[var(--accent-blue)] text-white rounded-lg hover:bg-[var(--accent-blue-hover)] transition-all duration-300 group shimmer hover:shadow-[0_0_30px_rgba(47,129,247,0.3)] hover:scale-[1.02] active:scale-[0.98] w-full max-w-[320px] md:max-w-none mx-auto"
          >
            Request Your Free Automation Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm italic text-[var(--text-muted)]">
            No forms yet. Just a 15-minute conversation.
          </p>
        </div>

        <div className="pt-20 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="md:col-span-2 glass-card rounded-2xl p-8 flex flex-col justify-center items-center space-y-3 mesh-bg">
            <p className="text-5xl font-bold text-[var(--accent-blue)]">500+</p>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">Custom Automations Built</p>
          </div>
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center space-y-3">
            <p className="text-4xl font-bold text-[var(--text-primary)]">15+</p>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">Years Exp.</p>
          </div>
          <div className="glass-card rounded-2xl p-8 flex flex-col justify-center items-center space-y-3">
            <p className="text-4xl font-bold text-[var(--text-primary)]">20+</p>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold">Industries</p>
          </div>
        </div>
      </div>
    </section>
  );
}

