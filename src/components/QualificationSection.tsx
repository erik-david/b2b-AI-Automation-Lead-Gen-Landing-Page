export function QualificationSection() {
  return (
    <section className="py-32 px-6 bg-[#0D1117]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Column */}
          <div className="p-8 bg-[#161B22] border border-[#30363D] rounded-[6px] space-y-8 animate-slide-up">
            <h3 className="text-3xl font-serif text-[#E6EDF3]">This is for you if:</h3>
            <ul className="space-y-6">
              {[
                "Businesses with real operations and workflows",
                "Teams doing repetitive manual work every day",
                "Founders who want clarity before investing in AI",
                "Companies looking for systems, not gimmicks"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-[#E6EDF3]/90">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#2F81F7] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For Column */}
          <div className="p-8 bg-[#161B22] border border-[#30363D] rounded-[6px] space-y-8 opacity-70 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-3xl font-serif text-[#E6EDF3]">This is not for you if:</h3>
            <ul className="space-y-6">
              {[
                "People looking for 'magic button' solutions",
                "Hobby projects or early-stage experiments",
                "Anyone who expects instant results without planning",
                "Those prioritizing hype over operational efficiency"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-[#7D8590]">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#30363D] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-32 text-center max-w-[520px] mx-auto space-y-3 animate-fade-in">
          <p className="text-[18px] text-[#E6EDF3] font-medium font-['DM_Sans',sans-serif]">
            Not sure if you qualify?
          </p>
          <p className="text-[15px] text-[#7D8590] leading-relaxed font-['DM_Sans',sans-serif]">
            Most of our best partners weren't sure either. 
            The audit exists exactly for that moment.
          </p>
        </div>
      </div>
    </section>
  );
}
