import { CheckCircle2, XCircle } from 'lucide-react';

export function QualificationSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
            Is This Right For You?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We work best with businesses that fit a specific profile. Let's be honest about fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-500 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-slate-50">This Is For You If:</h3>
            </div>

            <ul className="space-y-4">
              {[
                'You have real business processes with manual, repetitive steps',
                'Your team uses multiple disconnected tools and systems',
                'You want clarity before investing in automation',
                'You\'re willing to be involved in identifying opportunities',
                'ROI matters more to you than cutting-edge technology',
                'You think systematically about how work gets done',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-8 h-8 text-slate-500 flex-shrink-0" />
              <h3 className="text-2xl font-bold text-slate-50">Not For You If:</h3>
            </div>

            <ul className="space-y-4">
              {[
                'You\'re looking for a "magic button" solution',
                'You haven\'t identified any actual inefficiencies',
                'You expect automation to solve vague problems',
                'You want results without any team involvement',
                'You\'re exploring AI just to say you\'re "doing AI"',
                'You need instant implementation without planning',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400">
                  <span className="inline-block w-1.5 h-1.5 bg-slate-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-950 border border-blue-900 rounded-lg text-center space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-slate-300">
            <strong className="text-slate-50">Unsure if this is a fit?</strong> That's exactly what the audit is for. We'll be honest about what's possible for your specific situation.
          </p>
        </div>
      </div>
    </section>
  );
}
