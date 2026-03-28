import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { QualificationSection } from './components/QualificationSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { AuditOfferSection } from './components/AuditOfferSection';
import { NextStepsSection } from './components/NextStepsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FormModal } from './components/FormModal';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <HeroSection onCTAClick={handleOpenForm} />
      <QualificationSection />
      <ProcessSection />
      <CredibilitySection />
      <AuditOfferSection onCTAClick={handleOpenForm} />
      <NextStepsSection />
      <FinalCTASection onCTAClick={handleOpenForm} />
      <FormModal isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;
