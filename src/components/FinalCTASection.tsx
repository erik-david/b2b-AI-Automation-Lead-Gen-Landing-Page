import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function FinalCTASection() {
  return (
    <section className="bg-dark relative overflow-hidden py-40">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <Reveal variant="fade">
        <div className="premium-card text-center py-32 px-12 max-w-5xl mx-auto overflow-visible">
          <div className="space-y-10">
            <h2 className="leading-tight">
              Your competitors already have <br />
              <span className="text-accent-blue">a better website.</span>
            </h2>
            <p className="text-2xl max-w-2xl mx-auto leading-relaxed text-[var(--text-muted)]">
              Let's fix that. Book a free 15-min call.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="group relative px-14 py-6 text-white font-black rounded-lg transition-all hover:scale-105 active:scale-95 overflow-hidden inline-flex items-center gap-4 text-xl"
                style={{ backgroundColor: '#2F81F7', boxShadow: '0 20px 50px rgba(47,129,247,0.3)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#1a6fd4'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = '#2F81F7'}
              >
                Book a free 15-min call
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--text-muted)] pt-12">
              NO OBLIGATION • FAST DELIVERY • FIXED PRICE
            </p>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

