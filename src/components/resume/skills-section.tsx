"use client";

import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "./section-wrapper";

const skillGroups = [
  {
    title: "Technical Skills",
    color: "pastel-purple",
    skills: [
      "React",
      "Next.js",
      "Vue",
      "Svelte",
      "Sveltekit",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "API Development",
      "Shopify",
      "Python",
      "Git",
      "CI/CD",
      "QA Automation",
      "LLM Integration",
    ],
  },
  {
    title: "Business Skills",
    color: "pastel-cyan",
    skills: [
      "Financial Analysis",
      "Vendor Negotiation",
      "Customer Success",
      "Technical Documentation",
      "Stakeholder Communication",
      "Product Thinking",
    ],
  },
  {
    title: "Approach",
    color: "pastel-pink",
    skills: [
      "Business-First Problem Solving",
      "Rapid Just-in-Time Learning",
      "Holistic Understanding of Code and Context",
      "Pragmatic Decision-Making",
    ],
  },
] as const;

export function SkillsSection() {
  return (
    <SectionWrapper className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-pastel-mint pb-2">
        Education & Skills
      </h2>

      {skillGroups.map((group) => (
        <div key={group.title} className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className={`px-3 py-1 bg-${group.color}/20 text-foreground border-${group.color}/30 hover:bg-${group.color}/30 transition-colors rounded`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
