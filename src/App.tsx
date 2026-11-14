import { useState } from 'react';
import { CaseStudyGrid } from './components/CaseStudyGrid';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { GithubAuditSection } from './components/GithubAuditSection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InterviewPrepSection } from './components/InterviewPrepSection';
import { CASE_STUDIES, type CaseStudy, type FilterCategory } from './data/portfolioData';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('all');
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Header onOpenContact={() => setContactOpen(true)} />

      <main className="flex-1">
        <HeroSection />

        <CaseStudyGrid
          studies={CASE_STUDIES}
          selectedFilter={selectedFilter}
          onSelectFilter={setSelectedFilter}
          onSelectStudy={(study) => setActiveStudy(study)}
        />

        <ExperienceSection />

        <InterviewPrepSection onSelectStudy={(study) => setActiveStudy(study)} />

        <GithubAuditSection />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <CaseStudyModal
        study={activeStudy}
        allStudies={CASE_STUDIES}
        onClose={() => setActiveStudy(null)}
        onNavigate={(study) => setActiveStudy(study)}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
