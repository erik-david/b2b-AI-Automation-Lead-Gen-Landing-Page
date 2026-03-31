import { useState, useEffect } from 'react';
import { X, FileText } from 'lucide-react';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem('exitIntentShown');
    if (shown) {
      setHasShown(true);
    }

    // Start timer for 30 seconds
    const timer = setInterval(() => {
      setTimeOnPage((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Trigger if mouse is near top of screen (y < 20px), hasn't shown yet, and spent > 30s on page
      if (e.clientY < 20 && !hasShown && timeOnPage >= 30 && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasShown, timeOnPage, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[480px] bg-[#161B22] border border-[#30363D] rounded-xl shadow-2xl p-8 space-y-8 animate-scale-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="space-y-6">
              <div className="w-12 h-12 bg-[#2F81F7]/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#2F81F7]" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-[var(--text-primary)]">Wait, before you go...</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  Is your operation ready for automation? Get our brief guide:{' '}
                  <span className="text-[#2F81F7] font-semibold">"5 Red Flags of Manual Friction"</span> and see where you're losing time.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-[var(--text-primary)] text-[#0D1117] font-bold rounded-lg hover:bg-white transition-colors duration-300"
              >
                Send Me the Guide →
              </button>

              <button
                onClick={handleClose}
                className="w-full text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                I'll just keep browsing
              </button>
            </div>
          </>
        ) : (
          <div className="py-12 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-[#2F81F7]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2F81F7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-bold text-[var(--text-primary)]">Thanks — check your inbox shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}
