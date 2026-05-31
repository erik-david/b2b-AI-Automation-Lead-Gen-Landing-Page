import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function FinalCTASection() {
  return (
    <section className="bg-dark relative overflow-hidden py-40">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="premium-card text-center py-32 px-12 max-w-5xl mx-auto overflow-visible">
          <div className="space-y-10">
            <h2 className="leading-tight">
              Ready to build your <br />
              <span className="text-accent-blue">online presence?</span>
            </h2>
            <p className="text-2xl max-w-2xl mx-auto leading-relaxed text-[var(--text-muted)]">
              Let's create a website that actually works for your business. 
              Book your free discovery call today and go live in 7 days.
            </p>
            <div className="pt-8">
              <Link
                to="/contact"
                className="group relative px-14 py-6 bg-accent-blue text-black font-black rounded-3xl transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,209,255,0.3)] overflow-hidden inline-flex items-center gap-4 text-xl"
              >
                Book a free 15-min call
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--text-muted)] pt-12">
              NO OBLIGATION • FAST DELIVERY • FIXED PRICE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

