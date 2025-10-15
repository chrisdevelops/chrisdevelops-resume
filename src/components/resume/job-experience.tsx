"use client";

import type { ReactNode } from "react";

interface JobExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  sections: ReadonlyArray<{
    readonly title: string;
    readonly items: readonly string[];
    readonly color: string;
  }>;
  techStack: string;
}

export function JobExperience({
  title,
  company,
  location,
  period,
  description,
  sections,
  techStack,
}: JobExperienceProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">
            {company} | {location}
          </p>
        </div>
        <p className="text-muted-foreground mt-1 md:mt-0">{period}</p>
      </div>
      <p className="text-foreground/90 mb-4 italic">{description}</p>

      {sections.map((section) => (
        <div key={section.title}>
          <h4 className={`text-lg font-semibold ${section.color} mb-2`}>
            {section.title}
          </h4>
          <ul className="list-disc list-outside ml-5 mb-4 space-y-1 text-foreground/90">
            {section.items.map((item) => (
              <li key={item.substring(0, 50)}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <p className="text-sm text-muted-foreground">
        <strong className="text-foreground">Technical Stack:</strong>{" "}
        {techStack}
      </p>
    </div>
  );
}
