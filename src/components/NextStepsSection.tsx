export function NextStepsSection() {
  const steps = [
    {
      title: 'Short intro call',
      description: 'We start with a 15-minute conversation to understand your current operations and goals.'
    },
    {
      title: 'No sales pitch',
      description: 'The call is about your business, not our services. We only talk about implementation if it makes sense for you.'
    },
    {
      title: 'Clear recommendation',
      description: 'Within a week, you get a clear breakdown of where automation can provide the most value.'
    },
    {
      title: 'You decide what to do next',
      description: 'No pressure, no follow-up spam. You take the findings and decide if you want to proceed.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#0D1117] border-t border-[#30363D]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#E6EDF3]">What happens next.</h2>
          <p className="text-xl text-[#7D8590] font-sans max-w-2xl">
            Steps after you request your free automation audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="space-y-6 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-sm font-bold text-[#2F81F7] tracking-[0.2em] uppercase">
                Step {idx + 1}
              </div>
              <h3 className="text-2xl font-serif text-[#E6EDF3] leading-tight">
                {step.title}
              </h3>
              <p className="text-[#7D8590] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
