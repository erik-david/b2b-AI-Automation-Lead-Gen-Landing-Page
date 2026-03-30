import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QualificationSection } from './components/QualificationSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { AuditOfferSection } from './components/AuditOfferSection';
import { NextStepsSection } from './components/NextStepsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FormModal } from './components/FormModal';
import { Reveal } from './components/Reveal';

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
    <div className="min-h-screen">
      <Navbar onCTAClick={handleOpenForm} />
      <HeroSection onCTAClick={handleOpenForm} />
      
      <Reveal><QualificationSection /></Reveal>
      <Reveal><ProcessSection /></Reveal>
      <Reveal><CredibilitySection /></Reveal>
      <Reveal><AuditOfferSection onCTAClick={handleOpenForm} /></Reveal>
      <Reveal><NextStepsSection /></Reveal>
      <Reveal><FinalCTASection onCTAClick={handleOpenForm} /></Reveal>
      
      <FormModal isOpen={isFormOpen} onClose={handleCloseForm} />
    </div>
  );
}

export default App;
