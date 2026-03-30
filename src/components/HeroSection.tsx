import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 animate-fade-in bg-[#0D1117]">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h1 
            className="text-6xl md:text-[72px] font-bold text-[#E6EDF3] leading-[1.1] tracking-tight font-serif"
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            Stop Wasting Time on{' '}
            <span className="text-[#2F81F7]">Manual Work</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#7D8590] max-w-3xl mx-auto leading-relaxed font-sans">
            AI isn't a gimmick. It's a system. We help you replace manual work and disconnected tools with seamless, high-performance automation.
          </p>
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold bg-[#2F81F7] text-white rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200 group"
          >
            Request Your Free Automation Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm italic text-[#7D8590]">
            No forms yet. Just a 15-minute conversation.
          </p>
        </div>

        <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-[#30363D]">
          <div className="space-y-2">
            <p className="text-3xl font-bold text-[#2F81F7]">500+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Automations Built</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-[#2F81F7]">15+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Years Combined</p>
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-[#2F81F7]">20+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Industries</p>
          </div>
        </div>
      </div>
    </section>
  );
}
