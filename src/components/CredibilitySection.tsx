export function CredibilitySection() {
  const logos = ["Meridian", "Stackflow", "Orbis", "Vanta"];

  return (
    <section className="py-32 px-6 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-bold text-[#2F81F7]">500+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Automations Built</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-[#2F81F7]">15+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Years Combined</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold text-[#2F81F7]">20+</p>
            <p className="text-sm uppercase tracking-widest text-[#7D8590] font-sans">Industries</p>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <blockquote className="text-2xl md:text-3xl font-serif text-[#E6EDF3] italic leading-relaxed">
            "We didn't need more tools. We needed someone to look at how we actually work."
          </blockquote>
          <cite className="block text-lg text-[#7D8590] not-italic font-sans">
            — Operations Lead, Logistics Co.
          </cite>
        </div>

        {/* Wordmarks */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {logos.map((logo) => (
            <span 
              key={logo} 
              className="font-['DM_Sans'] text-[16px] font-medium tracking-[0.05em] text-[#7D8590] hover:text-[#E6EDF3] transition-colors duration-200 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
