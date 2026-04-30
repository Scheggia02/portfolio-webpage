import { useState } from "react";
import { CaseStudyPage } from "./components/CaseStudyPage.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProjectPage } from "./components/ProjectPage.jsx";
import { caseStudies, projects } from "./data/portfolio.js";

export default function App() {
  const [page, setPage] = useState("home");
  const selectedProject = projects[page];
  const selectedCaseStudy = caseStudies[page];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={setPage} />

      <main className="mx-auto max-w-5xl p-6">
        {page === "home" || (!selectedProject && !selectedCaseStudy) ? (
          <Home onOpen={setPage} />
        ) : selectedProject ? (
          <ProjectPage project={selectedProject} />
        ) : (
          <CaseStudyPage caseStudy={selectedCaseStudy} />
        )}
      </main>

      <Footer />
    </div>
  );
}