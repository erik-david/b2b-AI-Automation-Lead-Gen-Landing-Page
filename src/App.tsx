import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { WhatsIncludedSection } from './components/WhatsIncludedSection';
import { CommonQuestionsSection } from './components/CommonQuestionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import Contact from './pages/Contact';
import CaseStudyVeldCo from './pages/CaseStudyVeldCo';

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

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0D1117] text-[#E6EDF3]">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection onCTAClick={() => setIsFormOpen(true)} />
              <SectionDivider />
              <PortfolioSection />
              <SectionDivider />
              <HowWeWorkSection />
              <SectionDivider />
              <WhatsIncludedSection />
              <SectionDivider />
              <CommonQuestionsSection />
              <SectionDivider />
              <TestimonialsSection />
              <SectionDivider />
              <FinalCTASection />
              <Footer />
              <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/veld-co" element={<CaseStudyVeldCo />} />
      </Routes>
    </div>
  );
}

export default App;
