import { experiments, projects } from "../data/portfolio.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function Home({ onOpen }) {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-bold">Domenico Salernitano</h1>
        <p className="mt-2 text-zinc-400">C++ / Unreal Engine Engineer</p>
      </section>

      <section>
        <SectionTitle title="About" subtitle="C++ / Unreal Engine Systems Engineer" />
        <p className="mt-4 text-sm leading-6 text-zinc-300">
          I design and build scalable gameplay and real-time systems in Unreal Engine using C++.
          My work focuses on system architecture, performance, and maintainability across complex
          environments.
        </p>
      </section>

      <section>
        <SectionTitle title="Projects" subtitle="Click to explore technical breakdowns" />
        <div className="mt-6 grid gap-6">
          {Object.entries(projects).map(([key, project]) => (
            <button
              key={key}
              onClick={() => onOpen(key)}
              className="rounded-lg border border-white/10 p-6 text-left transition hover:bg-white/5"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-zinc-400">{project.type}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{project.overview}</p>
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Systems & Experiments" subtitle="Focused technical explorations" />
        <div className="mt-6 grid gap-4">
          {experiments.map((experiment) => (
            <article key={experiment.title} className="rounded-lg border border-white/10 p-4">
              <h3 className="font-semibold">{experiment.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{experiment.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}