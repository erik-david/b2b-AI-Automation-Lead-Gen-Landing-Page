import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 animate-fade-in relative overflow-hidden hero-padding">
      <div className="max-w-6xl mx-auto text-center space-y-16 relative z-10 mobile-gap">
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
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-[#0D1117]">
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40"></div>
        
        {/* Floating Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div 
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-float-1"
            style={{ background: 'rgba(47, 129, 247, 0.08)' }}
          />
          <div 
            className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-float-2"
            style={{ background: 'rgba(47, 129, 247, 0.05)' }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-[#0D1117] rounded-full blur-[80px]"
          />
        </div>
      </div>
    </section>
  );
}
