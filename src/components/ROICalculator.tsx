import { useState } from 'react';

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [manualHours, setManualHours] = useState(15);

  const hoursReclaimed = Math.round(teamSize * manualHours * 52 * 0.60);
  const scaledImpact = hoursReclaimed * 65;
  const efficiencyGain = ((manualHours / 40) * 100).toFixed(1);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-DE').format(value);
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
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">Hours Reclaimed / Year</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{formatNumber(hoursReclaimed)}</p>
              </div>
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">Scaled Impact Value</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{formatCurrency(scaledImpact)}</p>
              </div>
              <div className="bg-[#0D1117] border border-[#30363D] p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2">
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider font-semibold">Efficiency Gain</p>
                <p className="text-3xl font-bold text-[#2F81F7]">{efficiencyGain}%</p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] italic">
            *Based on an average fully-loaded hourly rate of €65
          </p>
        </div>
      </div>
    </section>
  );
}
