"use client";

import { SectionWrapper } from "./section-wrapper";

export function ProfessionalSummary() {
  return (
    <SectionWrapper className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-pastel-pink pb-2">
        Professional Summary
      </h2>
      <p className="text-foreground/90 leading-relaxed">
        Product Implementation Engineer with a business-first approach to
        technical problem-solving. Known for translating complex technical
        concepts into actionable solutions that stakeholders actually understand
        and use. Spent years helping enterprise customers troubleshoot
        integration challenges, building documentation that people read instead
        of ignoring, and identifying critical issues before they impact revenue.
        Currently exploring the intersection of AI and business automation while
        seeking opportunities to make a tangible impact on product
        implementation and customer success.
      </p>
    </SectionWrapper>
  );
}
