"use client";

import { SectionWrapper } from "./section-wrapper";
import { JobExperience } from "./job-experience";

const experienceData = [
  {
    title: "Product Implementation Engineer",
    company: "Trulioo",
    location: "Vancouver, BC (Remote)",
    period: "January 2022 - November 2024",
    description:
      "Served as the technical translator between engineering and customers for a business verification platform, focusing on solving integration challenges that blocked revenue and adoption.",
    sections: [
      {
        title: "Customer Success & Technical Support",
        color: "text-pastel-purple",
        items: [
          "Became the go-to expert for business verification integrations, translating technical API details into language that made sense for non-technical stakeholders",
          "Proactively identified and escalated critical bugs costing customers time or money, distinguishing between cosmetic issues and business-critical problems",
          "Stepped in when high-value customers hit integration roadblocks that couldn't be resolved through standard documentation",
          "Filtered and translated vague customer bug reports into specific, actionable engineering tickets with clear reproduction steps",
        ],
      },
      {
        title: "Documentation & Enablement",
        color: "text-pastel-purple",
        items: [
          "Created practical documentation that customers actually used instead of marketing materials that collected digital dust",
          "Built Postman test suites that demystified API functionality for non-developers and helped sales close deals by showing real working examples",
          "Prepared comprehensive documentation and training ahead of feature releases by learning upcoming functionality before general availability",
        ],
      },
    ],
    techStack: "Postman, Jira, Confluence, Curl, JavaScript",
  },
  {
    title: "Frontend Web Developer (Self-Employed)",
    company: "Elevate eCommerce Inc",
    location: "Langley, BC (Hybrid)",
    period: "July 2020 - January 2022",
    description:
      "Built custom Shopify stores tailored to specific business needs and workflows.",
    sections: [
      {
        title: "Custom Development & Problem-Solving",
        color: "text-pastel-cyan",
        items: [
          "Built Shopify stores from scratch or rescued underperforming themes, tailoring solutions to actual business workflows",
          "Integrated complex third-party services without breaking existing functionality",
          "Set up analytics and conversion tracking that provided actionable insights",
          "Built reusable component libraries to streamline development across multiple client projects",
        ],
      },
      {
        title: "Client Enablement & Support",
        color: "text-pastel-cyan",
        items: [
          "Trained non-technical business owners to manage and update their stores without ongoing developer help",
          "Migrated businesses from legacy e-commerce platforms to Shopify while preserving data and functionality",
        ],
      },
    ],
    techStack:
      "JavaScript, React, Next.js, Vue, Shopify/Liquid, Node, HTML/CSS/SCSS, Tailwind",
  },
  {
    title: "Full Stack Developer (Contract)",
    company: "Blue Mountain Studio",
    location: "Coquitlam, BC (Remote)",
    period: "2017 - June 2020",
    description:
      "Built websites and applications for clients across various industries.",
    sections: [
      {
        title: "Product Development & Delivery",
        color: "text-pastel-mint",
        items: [
          "Gathered requirements directly from clients to understand project needs and constraints",
          "Turned feature requests into concrete deliverables with realistic timelines",
          "Developed a complete MVP for a startup including user-facing app, admin dashboard, and backend API",
          "Identified and resolved performance bottlenecks in existing websites",
          "Managed projects from requirements gathering through deployment and maintenance",
        ],
      },
    ],
    techStack:
      "Vue, Node, Express, MongoDB, WordPress, WooCommerce, Shopify, JavaScript, PHP, HTML/CSS/SCSS, Tailwind",
  },
  {
    title: "Senior QA Engineer",
    company: "Beanstream (Acquired by Bambora)",
    location: "Victoria, BC",
    period: "March 2012 - July 2016",
    description:
      "Managed releases and quality assurance for a payment processing platform.",
    sections: [
      {
        title: "Release Management & Quality",
        color: "text-pastel-lavender",
        items: [
          "Made release decisions about feature inclusion and postponements based on quality thresholds",
          "Communicated release status to technical and business stakeholders",
          "Collaborated with developers to resolve critical issues before release",
          "Built automated testing infrastructure to catch issues early",
        ],
      },
      {
        title: "Process Improvement",
        color: "text-pastel-lavender",
        items: [
          "Created time estimates for product planning",
          "Improved CI/CD pipeline processes",
          "Wrote testable acceptance criteria from requirements",
        ],
      },
    ],
    techStack:
      "Selenium, SoapUI, Groovy Script, Python, JavaScript, Java, Jenkins, Git",
  },
  {
    title: "Technical Support Specialist",
    company: "Beanstream",
    location: "Victoria, BC",
    period: "December 2009 - March 2012",
    description:
      "Provided technical support to merchants using the payment processing platform.",
    sections: [
      {
        title: "Customer Problem-Solving",
        color: "text-pastel-coral",
        items: [
          "Troubleshot technical issues and explained solutions clearly to non-technical users",
          "Built internal tools that reduced resolution time for common issues by 50%",
          "Created documentation that helped clients resolve problems independently",
          "Identified recurring support patterns and recommended product improvements",
          "Assisted merchants with PCI compliance requirements",
        ],
      },
    ],
    techStack: "PHP, MySQL, JavaScript, jQuery, HTML/CSS, VBScript",
  },
] as const;

export function ProfessionalExperience() {
  return (
    <SectionWrapper className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-pastel-purple pb-2">
        Professional Experience
      </h2>
      {experienceData.map((job) => (
        <JobExperience key={`${job.company}-${job.title}`} {...job} />
      ))}
    </SectionWrapper>
  );
}
