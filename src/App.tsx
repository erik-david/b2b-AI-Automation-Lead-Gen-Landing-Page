import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsIncludedSection } from './components/WhatsIncludedSection';
import { CommonQuestionsSection } from './components/CommonQuestionsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { SectionDivider } from './components/SectionDivider';
import { Footer } from './components/Footer';
import { FormModal } from './components/FormModal';
import Contact from './pages/Contact';
import CaseStudyVeldCo from './pages/CaseStudyVeldCo';
import CaseStudyActieAirportTaxi from './pages/CaseStudyActieAirportTaxi';
import CaseStudyAlexMoreno from './pages/CaseStudyAlexMoreno';

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
              <PainPointsSection />
              <SectionDivider />
              <HowWeWorkSection />
              <SectionDivider />
              <PortfolioSection />
              <SectionDivider />
              <TestimonialsSection />
              <SectionDivider />
              <WhatsIncludedSection />
              <SectionDivider />
              <CommonQuestionsSection />
              <SectionDivider />
              <FinalCTASection />
              <Footer />
              <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study/veld-co" element={<CaseStudyVeldCo />} />
        <Route path="/case-study/actie-airport-taxi" element={<CaseStudyActieAirportTaxi />} />
        <Route path="/case-study/alex-moreno" element={<CaseStudyAlexMoreno />} />
      </Routes>
    </div>
  );
}

export default App;
