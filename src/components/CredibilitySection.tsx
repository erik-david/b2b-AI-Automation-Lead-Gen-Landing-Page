export function CredibilitySection() {
  const logos = ["Meridian", "Stackflow", "Orbis", "Vanta"];

  return (
    <section className="py-40 px-6 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--glow-blue)] rounded-full blur-[160px] opacity-20 -z-10" />

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        {/* Quote */}
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-1 bg-[var(--accent-blue)] rounded-full opacity-30" />
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif text-[var(--text-primary)] italic leading-[1.2] tracking-tight">
            "We didn't need more tools. We needed someone to look at how we <span className="text-[var(--accent-blue)]">actually</span> work."
          </blockquote>
          <div className="space-y-2">
            <cite className="block text-xl text-[var(--text-primary)] not-italic font-semibold">
              Operations Lead
            </cite>
            <p className="text-[var(--text-muted)] text-sm uppercase tracking-widest font-sans">
              Fortune 500 Logistics Company
            </p>
          </div>
        </div>

        {/* Wordmarks / Logos */}
        <div className="space-y-12">
          <p className="text-center text-xs font-bold text-[var(--text-muted)] uppercase tracking-[0.3em] opacity-60"> trusted by teams at </p>
          <div className="flex flex-wrap justify-between items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <span 
                key={logo} 
                className="font-serif text-2xl md:text-3xl font-bold tracking-tighter text-[var(--text-primary)] hover:text-[var(--accent-blue)] transition-all duration-300 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
