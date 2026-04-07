import { Navbar } from '../components/Navbar';
import { AuditRequestForm } from '../components/AuditRequestForm';
import { Reveal } from '../components/Reveal';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#E6EDF3] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Let's look at your operations.
              </h1>
              <p className="text-xl text-[#7D8590] max-w-2xl mx-auto">
                Request a free automation audit. No pitch. No pressure. Just clarity.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="standard-card rounded-2xl p-8 md:p-12 shadow-2xl">
              <AuditRequestForm />
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="py-12 border-t border-[#30363D] mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2F81F7] rounded flex items-center justify-center font-bold text-white">S</div>
            <span className="text-xl font-serif font-bold">Systemic AI</span>
          </div>
          <p className="text-[#7D8590] text-sm">
            © {new Date().getFullYear()} Systemic AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
