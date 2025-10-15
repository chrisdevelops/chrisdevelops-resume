"use client";

import { SectionWrapper } from "./section-wrapper";

const competencies = [
  {
    title: "Problem-Solving & Troubleshooting",
    description:
      "Solve problems systematically, whether technical, operational, or customer-facing - by understanding the gap between current and desired state",
  },
  {
    title: "Cross-Functional Communication",
    description:
      "Bridge the gap between engineering, sales, product, and customers by speaking everyone's language",
  },
  {
    title: "Documentation & Enablement",
    description:
      "Build comprehensive documentation that's structured for both human understanding and AI-assisted search, serving internal operations and external implementation needs",
  },
  {
    title: "Business & Product Thinking",
    description:
      "Understand what problems technology should solve and why, not just how to implement it",
  },
  {
    title: "Technical Depth",
    description:
      "Modern web stack (React, Next.js, Node.js), APIs, QA automation, AI/LLM integration, system architecture",
  },
  {
    title: "Rapid Learning",
    description:
      "Master new technologies and business domains quickly through hands-on experimentation and pattern recognition",
  },
] as const;

export function CoreCompetencies() {
  return (
    <SectionWrapper className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-pastel-cyan pb-2">
        Core Competencies
      </h2>
      <ul className="space-y-4">
        {competencies.map((competency) => (
          <li key={competency.title} className="text-foreground/90">
            <strong className="text-foreground">{competency.title}</strong> -{" "}
            {competency.description}
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
