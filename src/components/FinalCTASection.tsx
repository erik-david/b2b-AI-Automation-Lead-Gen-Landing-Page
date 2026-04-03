interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 bg-[#0D1117] border-t border-[#30363D] text-center">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="space-y-6">
          <h2 className="text-5xl md:text-7xl font-serif text-[#E6EDF3] leading-tight">
            Ready to see what's possible?
          </h2>
          <p className="text-xl md:text-2xl text-[#7D8590] max-w-2xl mx-auto leading-relaxed font-sans">
            No pitch. No pressure. Just an honest look at your operations.
          </p>
        </div>

        <div className="space-y-8 flex flex-col items-center">
          <button
            onClick={onCTAClick}
            className="px-10 py-5 bg-[#2F81F7] text-white font-medium text-lg rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200"
          >
            Request Your Free Automation Audit
          </button>
          
          <p className="text-sm text-[#7D8590] uppercase tracking-widest font-sans">
            Spots are limited to 3 audits per month.
          </p>
        </div>
      </div>
    </section>
  );
}
