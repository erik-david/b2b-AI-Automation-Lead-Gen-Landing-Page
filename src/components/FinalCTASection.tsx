import { Link } from 'react-router-dom';

export function FinalCTASection() {
  return (
    <section className="py-32 px-6 bg-[#0D1117] border-t border-[#30363D] text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif text-[#E6EDF3] leading-tight">
            Ready to start your project?
          </h2>
          <p className="text-xl md:text-2xl text-[#7D8590] max-w-2xl mx-auto leading-relaxed font-sans">
            A fast, professional website is only a call away.
          </p>
        </div>

        <div className="flex flex-col items-center pt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-[#2F81F7] text-white font-medium text-lg rounded-[50px] hover:bg-[#1F6FEB] transition-all duration-200 hover:shadow-[0_10px_40px_-5px_rgba(47,129,247,0.4)]"
          >
            Book a free 15-min call →
          </Link>
        </div>
      </div>
    </section>
  );
}
