import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CaseStudyVeldCo() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3]">
      {/* Top bar */}
      <div className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#7D8590] hover:text-white transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Systemic<span className="text-[#2F81F7]">AI</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">

        {/* Header */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(47,129,247,0.12)', color: '#2F81F7', border: '1px solid rgba(47,129,247,0.3)' }}
            >
              B2B Wholesale
            </span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-green-400 text-xs font-black uppercase tracking-widest">Live</span>
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: '1' }}>
            Veld & Co.
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Industry</p>
              <p className="text-white font-semibold">B2B Wholesale</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Delivery</p>
              <p className="text-white font-semibold">6 days</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Status</p>
              <p className="text-green-400 font-semibold">Live</p>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <img
            src="/wholesale.png"
            alt="Veld & Co. website screenshot"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Brief */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7D8590]">The Brief</p>
          </div>
          <p className="text-xl md:text-2xl text-[#7D8590] leading-relaxed max-w-3xl">
            Veld & Co. needed a professional B2B wholesale catalog website to reach independent Dutch
            retailers. They had no online presence and were losing deals to competitors with better websites.
          </p>
        </div>

        {/* Tech stack */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7D8590]">Tech Stack</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Built with', value: 'React + Vite' },
              { label: 'Styling', value: 'Tailwind CSS' },
              { label: 'Deployment', value: 'Vercel' },
              { label: 'CMS', value: 'None — fully static' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-5 border border-white/10"
                style={{ backgroundColor: '#161B22' }}
              >
                <p className="text-xs font-black uppercase tracking-widest text-[#7D8590] mb-2">{item.label}</p>
                <p className="text-white font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7D8590]">Process</p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 'Step 1',
                title: 'Discovery call',
                days: 'Day 1',
                body: 'Mapped out their product catalog, target audience, and key conversion goal.',
              },
              {
                step: 'Step 2',
                title: 'Design & Build',
                days: 'Days 2–5',
                body: 'Built the full site with dark green color scheme matching their brand identity.',
              },
              {
                step: 'Step 3',
                title: 'Review & Launch',
                days: 'Days 6–7',
                body: 'Client feedback, final adjustments, custom domain setup, Vercel deployment.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-7 rounded-2xl border border-white/10"
                style={{ backgroundColor: '#161B22' }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#2F81F7] flex items-center justify-center text-[#2F81F7] font-black text-sm">
                  {idx + 1}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-black uppercase tracking-widest text-[#2F81F7]">{item.step}</p>
                    <span className="text-[#7D8590] text-xs">·</span>
                    <p className="text-xs font-semibold text-[#7D8590]">{item.days}</p>
                  </div>
                  <p className="text-white font-bold text-lg">{item.title}</p>
                  <p className="text-[#7D8590] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Result */}
        <div
          className="rounded-2xl p-10 text-center border border-[#2F81F7]/20"
          style={{ backgroundColor: 'rgba(47,129,247,0.06)' }}
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2F81F7] mb-4">Result</p>
          <p className="text-2xl md:text-3xl font-black text-white">
            "A professional B2B catalog site live in 6 days."
          </p>
        </div>

        {/* Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#7D8590] hover:text-white transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to main site
          </Link>
          <Link
            to="/contact"
            className="group relative px-10 py-5 text-white font-black rounded-lg transition-all hover:scale-105 active:scale-95 overflow-hidden inline-flex items-center gap-3"
            style={{ backgroundColor: '#2F81F7', boxShadow: '0 16px 40px rgba(47,129,247,0.35)' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#1a6fd4')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#2F81F7')}
          >
            Start your project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </Link>
        </div>
      </div>
    </div>
  );
}
