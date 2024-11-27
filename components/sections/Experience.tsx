"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Founder-in-Residence",
    company: "Zemuria | Kix News",
    period: "Jan 2024 – Sept 2024",
    location: "Remote – San Francisco, CA",
    achievements: [
      "Developed Kix News for unbiased news delivery through source collation",
      "Created news aggregation model using Python, Gemini AI, and Jina AI",
      "Implemented data preprocessing pipelines for content validation",
      "Advanced the application through investment phase"
    ]
  },
  {
    title: "Full-Stack Intern",
    company: "Beyos — Beyond Sustainability",
    period: "Jul 2023 – Dec 2023",
    location: "Hybrid – Chennai",
    achievements: [
      "Built company dashboard using JavaScript, CSS, HTML, and Tailwind",
      "Integrated Firebase for real-time data via API calls",
      "Worked on R&D projects, creating flowcharts and project plans",
      "Developed ML and IoT solutions for hands-on projects"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="mt-1">{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="list-disc text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}