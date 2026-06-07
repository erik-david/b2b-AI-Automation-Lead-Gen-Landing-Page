import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export default function CaseStudyAlexMoreno() {
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
              style={{ backgroundColor: 'rgba(249,115,22,0.12)', color: '#f97316', border: '1px solid rgba(249,115,22,0.3)' }}
            >
              FITNESS
            </span>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest"
              style={{ backgroundColor: 'rgba(251,191,36,0.12)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}
            >
              PROTOTYPE
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: '1' }}>
            Alex Moreno Personal Training
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Project</p>
              <p className="text-white font-semibold">Alex Moreno Personal Training</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Delivery</p>
              <p className="text-white font-semibold">5 days</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-widest text-[#7D8590]">Status</p>
              <p className="text-[#fbbf24] font-semibold">Prototype — built to demonstrate capability</p>
            </div>
          </div>
        </div>

        {/* Hero screenshot */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#161B22] flex items-center justify-center min-h-[200px]">
          <p className="text-[#7D8590] text-sm font-semibold">fitness-website-psi-five.vercel.app</p>
        </div>

        {/* Brief */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7D8590]">The Brief</p>
          </div>
          <p className="text-xl md:text-2xl text-[#7D8590] leading-relaxed max-w-3xl">
            Alex Moreno is a personal trainer based in Barcelona offering strength and conditioning sessions.
            The goal was to build a website that communicates his no-nonsense training philosophy and converts
            visitors into booked sessions.
          </p>
        </div>

        {/* Tech stack */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7D8590]">Tech Stack</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Built with', value: 'Loveable (React)' },
              { label: 'Styling', value: 'Tailwind CSS' },
              { label: 'Deployment', value: 'Vercel' },
              { label: 'CMS', value: 'No CMS — fully static for maximum speed' },
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
                step: 'Step 1 — Concept',
                days: 'Day 1',
                body: 'Defined the target audience (busy professionals in Barcelona), the tone (direct, no fluff), and the core conversion goal: session bookings.',
              },
              {
                step: 'Step 2 — Design & Build',
                days: 'Days 2–4',
                body: 'Built the full site: hero with trainer photo, session schedule, about section, reviews, logistics info, and booking CTA. Dark theme with orange accents matching the brand.',
              },
              {
                step: 'Step 3 — Polish & Deploy',
                days: 'Day 5',
                body: 'Final refinements, mobile optimization, and Vercel deployment.',
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
            "A conversion-focused personal trainer website built in 5 days — designed to turn visitors into booked sessions."
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

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://fitness-website-psi-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded-lg text-white border border-white/20 hover:border-white/40 transition-colors"
              style={{ backgroundColor: 'transparent' }}
            >
              View live prototype
              <ExternalLink className="w-4 h-4" />
            </a>
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
    </div>
  );
}
