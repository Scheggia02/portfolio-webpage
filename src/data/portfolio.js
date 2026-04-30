export const projects = {
  dreamcatcher: {
    title: "Dreamcatcher",
    icon: "building",
    type: "Large-scale Unreal Engine platform",
    role: "Unreal Engine Engineer (Junior to Mid)",
    website: {
      label: "Visit ZURU Tech",
      url: "https://www.zuru.tech/",
    },
    overview:
      "A real-time architectural and MEP visualization platform focused on high-fidelity rendering, simulation systems, and large-scale scene management.",
    media: [
      {
        type: "video",
        title: "Large Scene Walkthrough",
        caption:
          "Short capture slot for a high-fidelity architectural scene, camera movement, and real-time rendering quality.",
        note: "Use this for a sanitized demo clip or rebuilt sample if production footage is restricted.",
      },
      {
        type: "image",
        title: "Runtime Entity Debug View",
        caption:
          "Screenshot slot for entity lifetime, spawning, or inspection overlays in a dense environment.",
        note: "Best for showing the engineering problem visually before explaining the lifecycle system.",
      },
      {
        type: "image",
        title: "Mesh Builder Output",
        caption:
          "Before/after or generated-geometry capture showing custom mesh generation for architectural workflows.",
        note: "Pair this with implementation notes around data flow, mesh sections, and integration constraints.",
      },
    ],
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
    icon: "swords",
    type: "Open-world action RPG",
    role: "Solo Developer / Systems Engineer",
    website: {
      label: "Visit AKEN Website",
      url: "https://project-aken.crd.co/",
    },
    overview:
      "A third-person fantasy MMO focused on scalable gameplay systems and modular architecture.",
    media: [
      {
        type: "video",
        title: "Combat Loop Capture",
        caption:
          "Gameplay clip slot for movement, targeting, ability activation, and moment-to-moment combat readability.",
        note: "A 20-40 second clip with debug UI briefly enabled would give strong AAA-facing signal.",
      },
      {
        type: "image",
        title: "Ability System Debug HUD",
        caption:
          "Screenshot slot for resources, cooldowns, ability state, and gameplay feedback during a combat scenario.",
        note: "Use this to connect design goals with concrete runtime state and systems ownership.",
      },
      {
        type: "image",
        title: "World Systems Prototype",
        caption:
          "Capture slot for NPCs, quests, encounters, or scalable world-system prototypes.",
        note: "This can become a small gallery item for showing broader MMO architecture work.",
      },
    ],
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

export const caseStudies = {
  aiBehaviorPrototype: {
    title: "AI Behavior Prototype",
    icon: "brain",
    type: "Gameplay AI systems",
    summary: "Explored modular decision-making, behavior tree composition, and scalable AI state flow.",
    goal:
      "Design a flexible enemy AI foundation that can support different archetypes without duplicating behavior logic across characters.",
    media: [
      {
        type: "video",
        title: "Behavior Tree Debug Capture",
        caption:
          "Clip slot for patrol, perception changes, investigation, and combat state transitions with debug overlays.",
        note: "Keep the clip short and let the overlay prove why the agent changes intent.",
      },
      {
        type: "image",
        title: "Decision Flow Diagram",
        caption:
          "Diagram slot for sensing, intent selection, behavior tree tasks, and action execution boundaries.",
        note: "A simple recreated diagram is useful when real project screenshots are unavailable.",
      },
      {
        type: "image",
        title: "Perception Tuning View",
        caption:
          "Screenshot slot for AI perception ranges, target scoring, or designer-facing tuning values.",
        note: "This helps reviewers see iteration tooling, not only runtime behavior.",
      },
    ],
    architecture: [
      "Separated sensing, decision selection, and action execution into focused components",
      "Used behavior tree tasks for high-level flow while keeping reusable gameplay logic in C++ services",
      "Designed state transitions around explicit intent so designers can tune behavior without editing core code",
    ],
    codeTitle: "Reusable AI Intent Selection",
    code: `UCombatIntent UEnemyDecisionComponent::SelectIntent(const FAIContext& Context) const
{
    if (Context.ThreatLevel > HighThreatThreshold && Context.HealthPercent < RetreatHealthPercent)
    {
        return UCombatIntent::Retreat;
    }

    if (Context.HasLineOfSight && Context.DistanceToTarget < AttackRange)
    {
        return UCombatIntent::Attack;
    }

    return Context.LastKnownTargetLocation.IsSet()
        ? UCombatIntent::Investigate
        : UCombatIntent::Patrol;
}`,
    tradeoffs: [
      "Kept decision rules readable instead of over-generalizing into a black-box scoring system too early",
      "Favored composable components so new enemy types can override only the pieces they need",
      "Prioritized debug visibility because AI iteration speed depends on understanding why an agent made a choice",
    ],
    outcome: [
      "Established a clean prototype shape for multiple enemy archetypes",
      "Improved debuggability of AI decisions and behavior transitions",
      "Created a foundation suitable for expanding into perception, combat roles, and group behavior",
    ],
    tech: ["Unreal Engine", "C++", "Behavior Trees", "Gameplay AI"],
  },
  abilitySystemTestbed: {
    title: "Ability System Testbed",
    icon: "bolt",
    type: "Gameplay ability architecture",
    summary: "Designed a flexible ability execution framework for cooldowns, costs, targeting, and effects.",
    goal:
      "Prototype an ability pipeline that keeps gameplay rules modular while supporting fast iteration on combat design.",
    media: [
      {
        type: "video",
        title: "Ability Activation Clip",
        caption:
          "Clip slot for activation, targeting validation, resource cost, cooldown feedback, and effect application.",
        note: "Show one complete ability pass from input to outcome, ideally with a compact debug overlay.",
      },
      {
        type: "image",
        title: "Activation Pipeline Diagram",
        caption:
          "Diagram slot for validation, cost commit, execution, effect application, and cooldown ownership.",
        note: "This is the best place to show that the system is modular rather than a one-off ability script.",
      },
      {
        type: "image",
        title: "Data-Driven Ability Definition",
        caption:
          "Screenshot slot for ability data, tuning values, target rules, or designer-facing configuration.",
        note: "Use this to show how engineers and designers would safely iterate on combat behavior.",
      },
    ],
    architecture: [
      "Modeled ability activation as a small pipeline: validate, commit cost, execute, apply effects, start cooldown",
      "Kept cost and cooldown logic separate from ability effects so designers can combine them freely",
      "Used data-driven definitions to reduce hard-coded gameplay behavior across individual abilities",
    ],
    codeTitle: "Ability Activation Pipeline",
    code: `bool UAbilityRunner::TryActivateAbility(const FAbilitySpec& Ability, AActor* Target)
{
    if (!Ability.Cost->CanPay(Owner) || !Ability.Targeting->IsValidTarget(Owner, Target))
    {
        return false;
    }

    Ability.Cost->Commit(Owner);
    Ability.Effect->Apply(Owner, Target);
    Cooldowns.Start(Ability.Id, Ability.CooldownSeconds);

    return true;
}`,
    tradeoffs: [
      "Used a lightweight custom prototype rather than full production complexity for faster experimentation",
      "Kept systems data-driven while preserving C++ ownership for performance-critical gameplay rules",
      "Designed the pipeline so networking, prediction, and animation hooks can be added later without rewriting activation flow",
    ],
    outcome: [
      "Created a reusable ability flow for combat experiments",
      "Made resource costs, cooldowns, and target checks easier to test independently",
      "Defined an architecture that can evolve toward a larger RPG or MMO combat framework",
    ],
    tech: ["Unreal Engine", "C++", "Gameplay Systems", "Combat"],
  },
};
