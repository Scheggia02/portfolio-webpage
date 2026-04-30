import { motion } from "framer-motion";
import { ArrowUpRight, Bolt, BrainCircuit, Building2, Swords } from "lucide-react";
import { caseStudies, projects } from "../data/portfolio.js";
import { SectionTitle } from "./SectionTitle.jsx";

const entryIcons = {
  bolt: Bolt,
  brain: BrainCircuit,
  building: Building2,
  swords: Swords,
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

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
          I build modular Unreal Engine gameplay and real-time systems with a focus on C++, scalable architecture, debugging workflows, and performance-conscious implementation.
        </p>
      </section>

      <section>
        <SectionTitle title="Projects" subtitle="Click to explore technical breakdowns" />
        <div className="mt-6 grid gap-6">
          {Object.entries(projects).map(([key, project], index) => {
            const ProjectIcon = entryIcons[project.icon] ?? Building2;

            return (
              <motion.button
                key={key}
                onClick={() => onOpen(key)}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.08, duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 p-6 text-left shadow-lg shadow-black/20 transition-colors hover:border-white/20 hover:bg-zinc-900/80"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-cyan-200 transition-colors group-hover:border-cyan-200/40 group-hover:bg-cyan-200/10">
                      <ProjectIcon size={19} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-zinc-400">{project.type}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{project.overview}</p>
              </motion.button>
            );
          })}
        </div>
      </section>

      <section>
        <SectionTitle
          title="Technical Case Studies"
          subtitle="Focused systems with media, code, tradeoffs, and outcomes"
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {Object.entries(caseStudies).map(([key, caseStudy], index) => {
            const CaseStudyIcon = entryIcons[caseStudy.icon] ?? BrainCircuit;

            return (
              <motion.button
                key={key}
                onClick={() => onOpen(key)}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.16 + index * 0.08, duration: 0.35, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.99 }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-5 text-left transition-colors hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/30 text-cyan-200 transition-colors group-hover:border-cyan-200/40 group-hover:bg-cyan-200/10">
                    <CaseStudyIcon size={18} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                    className="shrink-0 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-semibold">{caseStudy.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{caseStudy.type}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{caseStudy.summary}</p>
              </motion.button>
            );
          })}
        </div>
      </section>
    </div>
  );
}