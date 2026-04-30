import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MediaGallery } from "./MediaGallery.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectPage({ project }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-1 text-zinc-400">{project.role}</p>
        {project.website ? (
          <a
            href={project.website.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-200 transition hover:border-cyan-200/40 hover:bg-cyan-200/10 hover:text-white"
          >
            {project.website.label}
            <ExternalLink size={15} strokeWidth={1.8} aria-hidden="true" />
          </a>
        ) : null}
      </div>

      <section>
        <SectionTitle title="Overview" />
        <p className="mt-3 text-sm leading-6 text-zinc-300">{project.overview}</p>
      </section>

      <section>
        <SectionTitle title="Media" />
        <MediaGallery items={project.media} />
      </section>

      <section>
        <SectionTitle title="Technical Systems" />
        <div className="mt-4 space-y-6">
          {project.systems.map((system) => (
            <article key={system.title} className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">{system.title}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                {system.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Challenges & Solutions" />
        <div className="mt-4 space-y-4">
          {project.challenges.map((challenge) => (
            <article key={challenge.problem} className="rounded-lg border border-white/10 p-4">
              <p className="text-sm">
                <strong>Challenge:</strong> {challenge.problem}
              </p>
              <p className="mt-2 text-sm">
                <strong>Solution:</strong> {challenge.solution}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Impact" />
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
          {project.impact.map((impact) => (
            <li key={impact}>{impact}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle title="Code Example" />
        <pre className="mt-4 overflow-auto rounded-lg border border-white/10 bg-black p-4 text-xs">
{`// Example structure
class EntityManager {
  void Spawn();
  void Destroy();
};`}
        </pre>
      </section>

      <section>
        <SectionTitle title="Tech Stack" />
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((technology) => (
            <span key={technology} className="rounded border border-white/10 px-2 py-1 text-xs">
              {technology}
            </span>
          ))}
        </div>
      </section>
    </motion.div>
  );
}