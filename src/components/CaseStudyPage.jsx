import { motion } from "framer-motion";
import { MediaGallery } from "./MediaGallery.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function CaseStudyPage({ caseStudy }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-10">
      <div>
        <p className="text-sm font-medium uppercase text-cyan-200/80">Technical Case Study</p>
        <h1 className="mt-2 text-3xl font-bold">{caseStudy.title}</h1>
        <p className="mt-1 text-zinc-400">{caseStudy.type}</p>
      </div>

      <section>
        <SectionTitle title="Goal" />
        <p className="mt-3 text-sm leading-6 text-zinc-300">{caseStudy.goal}</p>
      </section>

      <section>
        <SectionTitle title="Media" />
        <MediaGallery items={caseStudy.media} />
      </section>

      <section>
        <SectionTitle title="Architecture" />
        <div className="mt-4 grid gap-3">
          {caseStudy.architecture.map((point) => (
            <article key={point} className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <p className="text-sm leading-6 text-zinc-300">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Code Snippet" subtitle={caseStudy.codeTitle} />
        <pre className="mt-4 overflow-auto rounded-lg border border-white/10 bg-black p-4 text-xs leading-5 text-zinc-300">
          <code>{caseStudy.code}</code>
        </pre>
      </section>

      <section>
        <SectionTitle title="Tradeoffs" />
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          {caseStudy.tradeoffs.map((tradeoff) => (
            <li key={tradeoff}>{tradeoff}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle title="Outcome" />
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
          {caseStudy.outcome.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle title="Tech Stack" />
        <div className="mt-3 flex flex-wrap gap-2">
          {caseStudy.tech.map((technology) => (
            <span key={technology} className="rounded border border-white/10 px-2 py-1 text-xs">
              {technology}
            </span>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
