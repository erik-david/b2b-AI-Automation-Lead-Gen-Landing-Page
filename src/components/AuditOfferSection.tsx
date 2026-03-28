interface AuditOfferSectionProps {
  onCTAClick: () => void;
}

export function AuditOfferSection({ onCTAClick }: AuditOfferSectionProps) {
  const features = [
    'Deep review of your current workflows',
    'Identification of top automation opportunities',
    'Realistic timeline and effort estimates',
    'Clear ROI projections',
    'Detailed written report',
    'Discussion call with our team',
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
            Your Free Automation Audit Includes:
          </h2>
          <p className="text-lg text-slate-400">
            Everything you need to make an informed decision about automation for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-slide-up">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 bg-slate-800 border border-slate-700 rounded-lg hover:border-slate-600 transition-colors"
              style={{ animationDelay: `${0.05 * (idx + 1)}s` }}
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white font-semibold text-sm">
                  ✓
                </div>
              </div>
              <span className="text-slate-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="p-8 bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-900 rounded-lg space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold text-slate-50">
              What Happens After the Audit?
            </h3>
            <p className="text-slate-300 leading-relaxed">
              You'll receive a comprehensive report with specific recommendations. From there, you have options: move forward with us, use the insights to build in-house, or file it away for later. The goal is giving you the information you need to make the right choice for your business.
            </p>
            <p className="text-slate-400 text-sm">
              This is not a sales pitch disguised as a consultation. If we find that automation isn't the right fit for your situation, we'll tell you that.
            </p>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-slate-400 mb-6">Ready to understand what's possible?</p>
            <button
              onClick={onCTAClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Request Your Free Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
