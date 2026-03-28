import { Mail, Calendar, FileText, ArrowRight } from 'lucide-react';

export function NextStepsSection() {
  const steps = [
    {
      icon: Mail,
      step: 'Step 1',
      title: 'You Submit Your Information',
      description: 'Tell us about your business, your challenges, and the tools you currently use.',
      timeline: 'Immediate',
    },
    {
      icon: FileText,
      step: 'Step 2',
      title: 'We Review and Audit',
      description: 'Our team dives into your workflows and identifies where automation can have the biggest impact.',
      timeline: '7-10 Days',
    },
    {
      icon: Calendar,
      step: 'Step 3',
      title: 'Discussion & Recommendations',
      description: 'We walk you through our findings, answer your questions, and discuss the path forward.',
      timeline: 'Week 2',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
            What Happens After You Request the Audit
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A transparent, straightforward process with no surprises.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative animate-slide-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="flex gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-1 h-12 bg-gradient-to-b from-slate-600 to-slate-800"></div>
                    )}
                  </div>

                  <div className="pb-12 flex-1">
                    <div className="mb-2">
                      <span className="text-sm font-semibold text-blue-400">{item.step}</span>
                      <p className="text-xs text-slate-500 mt-1">~{item.timeline}</p>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-50 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-blue-950 border border-blue-900 rounded-lg space-y-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-bold text-slate-50 flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-400" />
            What Makes This Different
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-400 text-lg leading-none">•</span>
              <span><strong className="text-slate-50">No pressure to move forward.</strong> We give you the information and you decide what's best for your business.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-400 text-lg leading-none">•</span>
              <span><strong className="text-slate-50">Transparent pricing.</strong> If we recommend building automations, you'll know exactly what it costs and what you get.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold text-blue-400 text-lg leading-none">•</span>
              <span><strong className="text-slate-50">Honest assessment.</strong> Sometimes automation isn't the answer. We'll tell you if that's the case.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
