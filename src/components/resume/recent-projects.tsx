"use client";

import { SectionWrapper } from "./section-wrapper";

const projects = [
  {
    title: "AI Integration & Development (2024 - Present)",
    description:
      "Spent significant time understanding AI capabilities and limitations through hands-on experimentation, focusing on practical business applications rather than hype.",
    items: [
      "Explored local language models and data residency implications for enterprise adoption, anticipating business concerns around data sovereignty",
      "Built development workflows using Claude Code with custom configurations to accelerate MVP development while maintaining code quality",
      "Established rigorous code review practices for AI-generated code, looking for security issues, hard-coded values, performance bottlenecks, and PII handling",
      "Co-founded Vizzi Voice, an AI voice agent startup for small-to-medium businesses, handling voice and SMS interactions for appointment scheduling, customer service, and sales",
    ],
  },
  {
    title: "Business Development & Entrepreneurship (2024)",
    description:
      "Developed a comprehensive business plan for health focused cafe, including financial projections, supplier negotiations, menu development with cost breakdowns, and secured financing from Futurepreneur before market conditions shifted.",
    learnings:
      "Financial modeling, business incorporation, supplier negotiation, product pricing and margins, marketing and sales, knowing when to walk away from sunk costs when fundamentals change.",
  },
] as const;

export function RecentProjects() {
  return (
    <SectionWrapper className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-pastel-coral pb-2">
        Recent Projects & Continuous Learning
      </h2>

      {projects.map((project) => (
        <div key={project.title} className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-foreground/90 mb-3 italic">
            {project.description}
          </p>
          {"items" in project && (
            <ul className="list-disc list-outside ml-5 space-y-1 text-foreground/90">
              {project.items.map((item) => (
                <li key={item.substring(0, 50)}>{item}</li>
              ))}
            </ul>
          )}
          {"learnings" in project && (
            <p className="text-foreground/90">
              <strong className="text-foreground">Key learnings:</strong>{" "}
              {project.learnings}
            </p>
          )}
        </div>
      ))}
    </SectionWrapper>
  );
}
