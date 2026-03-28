import { ArrowRight } from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-50">
            Stop Wondering.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Start Automating.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your free automation audit is the first step to understanding what's actually possible in your business.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={onCTAClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            Request Your Free Automation Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-slate-400">
            Takes 5 minutes. No credit card. No commitment.
          </p>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500">
            We'll follow up within 24 hours to confirm we received your request and outline the next steps. Questions? We're here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
