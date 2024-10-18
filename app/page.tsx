"use server";
import './global/styles.css';
import Header from './components/header';
import SkillsSection from './components/skillSection';
import IDESection from './components/ideSection';
import DatabaseSection from './components/databaseSection';
import ProjectsSection from './components/projectsSection';
import Footer from './components/footer';

export default async function Page() {
  return (
      <div className="container">
        <Header />
        <main>
          <SkillsSection />
          <IDESection />
          <DatabaseSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
  );
}