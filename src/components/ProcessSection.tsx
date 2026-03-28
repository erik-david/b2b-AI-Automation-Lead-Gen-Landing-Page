import { ArrowRight } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'You Share Your Challenges',
      description: 'Tell us about your biggest operational headaches. Which processes drain the most time? What tools do you currently use?',
    },
    {
      number: '02',
      title: 'We Review Your Workflows',
      description: 'We analyze your processes and look for automation opportunities. No implementation yet—just honest assessment of what\'s viable.',
    },
    {
      number: '03',
      title: 'We Create a Clear Plan',
      description: 'You get a detailed report showing specific automations we could build, realistic timelines, and estimated impact on your team.',
    },
    {
      number: '04',
      title: 'You Decide What\'s Next',
      description: 'Armed with clarity and zero pressure. Some clients move forward, others use the insights to build in-house. Both are wins.',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
            How the Audit Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A straightforward process designed to give you clarity, not commitments.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, idx) => (
            <div key={idx} className="animate-slide-up" style={{ animationDelay: `${0.1 * (idx + 1)}s` }}>
              <div className="flex gap-8 items-start pb-12 md:pb-16">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-slate-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden md:flex flex-col items-center -mr-8">
                    <ArrowRight className="w-6 h-6 text-slate-600 transform -rotate-90 mt-16" />
                  </div>
                )}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block h-0 border-l border-slate-700 ml-8 mb-8"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-slate-800 border border-slate-700 rounded-lg animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-xl font-bold text-slate-50 mb-3">Timeline</h3>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center gap-3">
              <span className="font-semibold text-blue-400">3-5 days:</span> We dive into your workflows
            </li>
            <li className="flex items-center gap-3">
              <span className="font-semibold text-blue-400">7-10 days:</span> You receive a detailed report
            </li>
            <li className="flex items-center gap-3">
              <span className="font-semibold text-blue-400">Week 2:</span> We discuss findings on a call
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
