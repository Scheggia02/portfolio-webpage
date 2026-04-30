import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./components/Home.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { ProjectPage } from "./components/ProjectPage.jsx";
import { projects } from "./data/portfolio.js";

export default function App() {
  const [page, setPage] = useState("home");
  const selectedProject = projects[page];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={setPage} />

      <main className="mx-auto max-w-5xl p-6">
        {page === "home" ? (
          <Home onOpen={setPage} />
        ) : (
          <ProjectPage project={selectedProject} />
        )}
      </main>

      <Footer />
    </div>
  );
}