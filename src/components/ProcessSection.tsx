export function ProcessSection() {
  const steps = [
    {
      title: 'Understand the current system',
      description: 'We start by looking at how your team actually works, without judgment or complexity.'
    },
    {
      title: 'Identify bottlenecks and waste',
      description: 'We pinpoint exactly where manual tasks are slowing you down or creating disconnects.'
    },
    {
      title: 'Design practical automations',
      description: 'We map out a system that works for your specific business needs, not just a generic tool.'
    },
    {
      title: 'Decide together what makes sense',
      description: 'You get a clear recommendation, and you decide if and when to move forward.'
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#0D1117] border-y border-[#30363D]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-24 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#E6EDF3]">How it works.</h2>
          <p className="text-xl text-[#7D8590] font-sans max-w-2xl">
            A straightforward, low-pressure process designed to give you clarity on your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="p-8 bg-[#161B22] border border-[#30363D] rounded-[6px] space-y-6 animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
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
