"use client";

import { Mail, Phone, MapPin, Linkedin, type LucideIcon } from "lucide-react";

type ContactInfo = {
  icon: LucideIcon;
  text: string;
  color: string;
  href?: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    text: "Victoria, BC",
    color: "text-pastel-purple",
  },
  {
    icon: Mail,
    text: "gearedcorp@gmail.com",
    href: "mailto:gearedcorp@gmail.com",
    color: "text-pastel-cyan",
  },
  {
    icon: Phone,
    text: "(778) 316-2100",
    href: "tel:+17783162100",
    color: "text-pastel-mint",
  },
  {
    icon: Linkedin,
    text: "linkedin.com/in/chrisdevelops",
    href: "https://www.linkedin.com/in/chrisdevelops/",
    color: "text-pastel-pink",
  },
];

export function ResumeHeader() {
  return (
    <header className="mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Chris Lloyd
      </h1>
      <ul className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap gap-1 sm:gap-4 text-muted-foreground text-sm md:text-base">
        {contactInfo.map((item, index) => (
          <li key={item.text} className="flex items-center gap-2">
            {index > 0 && (
              <li aria-hidden="true" className="hidden sm:block">
                •
              </li>
            )}
            <item.icon className={`w-4 h-4 ${item.color}`} />
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-rose-500 transition-colors"
                {...(item.href.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}
