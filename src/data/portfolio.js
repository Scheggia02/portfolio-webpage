export const projects = {
  dreamcatcher: {
    title: "Dreamcatcher",
    icon: "building",
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
    icon: "swords",
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

export const caseStudies = {
  aiBehaviorPrototype: {
    title: "AI Behavior Prototype",
    icon: "brain",
    type: "Gameplay AI systems",
    summary: "Explored modular decision-making, behavior tree composition, and scalable AI state flow.",
    goal:
      "Design a flexible enemy AI foundation that can support different archetypes without duplicating behavior logic across characters.",
    media: {
      label: "Behavior tree capture / debug video placeholder",
      notes:
        "Add a short clip showing perception changes, state transitions, and debug overlays during combat or patrol scenarios.",
    },
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
    media: {
      label: "Ability montage / targeting debug placeholder",
      notes:
        "Add a clip showing activation, targeting validation, resource cost, cooldown feedback, and effect application.",
    },
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
