export const projects = {
  dreamcatcher: {
    title: "Dreamcatcher",
    type: "Large-scale Unreal Engine platform",
    role: "Unreal Engine Engineer (Junior to Mid)",
    overview:
      "A real-time architectural and MEP visualization platform focused on high-fidelity rendering, simulation systems, and large-scale scene management.",
    systems: [
      {
        title: "Entity Lifecycle System (FMS)",
        points: [
          "Improved entity lifetime handling across dynamic environments",
          "Optimized spawning and destruction logic",
          "Increased stability in large-scale scenes",
        ],
      },
      {
        title: "Custom Mesh Builder",
        points: [
          "Developed runtime/static mesh generation system",
          "Supported architectural and MEP workflows",
          "Integrated across multiple teams",
        ],
      },
      {
        title: "Simulation & Visualization",
        points: [
          "Worked on X-ray visualization systems",
          "Contributed to seismic simulation features",
          "Supported inspection workflows",
        ],
      },
    ],
    challenges: [
      {
        problem: "Handling large volumes of dynamic entities",
        solution: "Refactored lifecycle and spawning logic to improve stability and reduce overhead",
      },
      {
        problem: "Cross-team system integration",
        solution: "Designed modular components compatible with multiple pipelines",
      },
    ],
    impact: [
      "Improved runtime stability in complex scenes",
      "Enabled scalable workflows for architectural and MEP systems",
    ],
    tech: ["Unreal Engine", "C++", "Blueprint"],
  },
  aken: {
    title: "AKEN",
    type: "Open-world action RPG",
    role: "Solo Developer / Systems Engineer",
    overview:
      "A third-person fantasy MMO focused on scalable gameplay systems and modular architecture.",
    systems: [
      {
        title: "Dual Resource System",
        points: [
          "Mana consumption directly impacts health",
          "Introduces risk/reward gameplay dynamics",
        ],
      },
      {
        title: "Combat Architecture",
        points: ["Ability-driven combat system", "Modular and scalable design"],
      },
      {
        title: "World Systems",
        points: ["NPCs, quests, and encounters", "Designed for MMO scalability"],
      },
    ],
    challenges: [
      {
        problem: "Designing scalable systems for long-term expansion",
        solution: "Built modular and extensible gameplay architecture",
      },
    ],
    impact: ["Established foundation for scalable MMO systems"],
    tech: ["Unreal Engine", "C++"],
  },
};

export const experiments = [
  {
    title: "AI Behavior Prototype",
    desc: "Explored modular AI decision systems and behavior trees",
  },
  {
    title: "Ability System Testbed",
    desc: "Designed flexible ability execution framework",
  },
];