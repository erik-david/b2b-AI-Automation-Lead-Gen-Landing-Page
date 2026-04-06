import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QualificationSection } from './components/QualificationSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { FinalCTASection } from './components/FinalCTASection';
import { FormModal } from './components/FormModal';
import { Reveal } from './components/Reveal';
import { ROICalculator } from './components/ROICalculator';
import Contact from './pages/Contact';

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
    <div className="min-h-screen relative overflow-hidden bg-[#0D1117] text-[#E6EDF3]">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <HeroSection onCTAClick={handleOpenForm} />
            
            <Reveal><QualificationSection /></Reveal>
            <Reveal><ROICalculator /></Reveal>
            <Reveal><ProcessSection /></Reveal>
            <Reveal><CredibilitySection /></Reveal>
            <Reveal><FinalCTASection /></Reveal>
            
            <FormModal isOpen={isFormOpen} onClose={handleCloseForm} />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
