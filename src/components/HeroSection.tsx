import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-50 leading-tight tracking-tight">
            Stop Wasting Time on
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Manual Work
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your team is drowning in repetitive tasks. Disconnected tools. Manual data entry. Hours lost to processes that could be automated.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-slate-400">
            AI isn't magic. It's systems thinking applied to your business.
          </p>

          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            Request Your Free Automation Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-sm text-slate-500">
            No commitment. Just clarity on what's possible.
          </p>
        </div>

        <div className="pt-8 grid grid-cols-3 gap-8 mt-12 border-t border-slate-700">
          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-400">500+</p>
            <p className="text-sm text-slate-400">Automations Built</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-400">15+</p>
            <p className="text-sm text-slate-400">Years Combined</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-400">20+</p>
            <p className="text-sm text-slate-400">Industries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
