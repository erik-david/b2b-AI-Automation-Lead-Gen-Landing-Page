import { useState } from 'react';

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [manualHours, setManualHours] = useState(15);

  const hoursReclaimed = Math.round(teamSize * manualHours * 52 * 0.35);
  const scaledImpactValue = hoursReclaimed * 65;
  const automationRate = 35; // Locked to 35% for realistic results

  const getPaybackPeriod = (hours: number) => {
    if (hours < 500) return "3–6 months";
    if (hours < 2000) return "2–4 months";
    return "1–3 months";
  };

  const formatCurrency = (value: number) => {
    return `€${value.toLocaleString('de-DE')}`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('de-DE');
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card bg-[#161B22] border-[#30363D] p-8 md:p-12 rounded-3xl space-y-12 shadow-2xl">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)]">Automation ROI Calculator</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto">
              See how much time and money automation could reclaim for your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-[var(--text-primary)]">Team Size</label>
                  <span className="text-[var(--accent-blue)] font-bold text-lg">{teamSize} people</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="200"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#30363D] rounded-lg appearance-none cursor-pointer accent-[#2F81F7]"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-[var(--text-primary)]">Manual hours per person per week</label>
                  <span className="text-[var(--accent-blue)] font-bold text-lg">{manualHours} hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  step="1"
                  value={manualHours}
                  onChange={(e) => setManualHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#30363D] rounded-lg appearance-none cursor-pointer accent-[#2F81F7]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-1">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">Hours Reclaimed / Year</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{formatNumber(hoursReclaimed)}</p>
              </div>
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-1">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">Scaled Impact Value</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{formatCurrency(scaledImpactValue)}</p>
              </div>
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-1">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">First-Year Automation Rate</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{automationRate}%</p>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tighter">Industry average for new implementations</p>
              </div>
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-1">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">PAYBACK PERIOD</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{getPaybackPeriod(hoursReclaimed)}</p>
                <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-tighter">Estimated time to positive ROI</p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] leading-relaxed italic">
            *Calculations based on €65/hr fully-loaded cost, 35% first-year automation rate.<br />
            Results vary by workflow complexity.
          </p>
        </div>
      </div>
    </section>
  );
}
