interface AuditOfferSectionProps {
  onCTAClick: () => void;
}

export function AuditOfferSection({ onCTAClick }: AuditOfferSectionProps) {
  return (
    <section id="audit" className="py-32 px-6 bg-[#0D1117]">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#E6EDF3]">Free Automation Audit</h2>
          <p className="text-xl text-[#7D8590] leading-relaxed font-sans">
            Our audit is a deep-dive into your current operations. We review your workflows, identify hidden bottlenecks, and map out exactly where automation can have the most impact. 
            <br /><br />
            The goal is to provide value and clarity, even if we never work together again. You'll walk away with a clear understanding of what’s possible for your business.
          </p>
        </div>

        <div className="p-10 border border-[#30363D] bg-[#161B22] rounded-[6px] space-y-4 animate-slide-up">
          <p className="text-xl md:text-2xl font-serif text-[#E6EDF3] leading-snug">
            "This audit is free because we'd rather give you clarity upfront than sell you something that doesn't fit."
          </p>
        </div>

        <div className="flex flex-col items-center pt-8">
          <button
            onClick={onCTAClick}
            className="px-10 py-5 bg-[#2F81F7] text-white font-medium text-lg rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200"
          >
            Request Your Free Automation Audit
          </button>
        </div>
      </div>
    </section>
  );
}
