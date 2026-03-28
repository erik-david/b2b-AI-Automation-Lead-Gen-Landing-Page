import { Briefcase, Zap, Globe } from 'lucide-react';

export function CredibilitySection() {
  const credentials = [
    {
      icon: Zap,
      label: '500+ Automations',
      description: 'Successful production systems built and deployed',
    },
    {
      icon: Briefcase,
      label: 'B2B Focused',
      description: 'Deep experience with businesses, not solo projects',
    },
    {
      icon: Globe,
      label: '20+ Industries',
      description: 'Finance, manufacturing, SaaS, healthcare, logistics, and more',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50">
            Built on Real Experience
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We don't promise shortcuts. We deliver practical systems that work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-slate-800 border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <Icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-50 mb-2">
                  {cred.label}
                </h3>
                <p className="text-slate-400">
                  {cred.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 bg-slate-800 border border-slate-700 rounded-lg">
            <h3 className="text-xl font-bold text-slate-50 mb-4">Our Approach</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Start with your actual workflows, not templates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Identify what matters to your bottom line</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Build systems that actually integrate with your tools</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-slate-800 border border-slate-700 rounded-lg">
            <h3 className="text-xl font-bold text-slate-50 mb-4">What You Get</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Honest assessment of your workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Specific opportunities with realistic timelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Clear next steps, with zero pressure</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
