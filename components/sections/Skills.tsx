"use client";

import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 85 },
  { name: "React/Next.js", level: 88 },
  { name: "Machine Learning", level: 85 },
  { name: "Deep Learning", level: 80 },
  { name: "Full Stack Development", level: 85 },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="p-6 transition-all duration-300 hover:shadow-lg"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">
                  {hoveredSkill === skill.name ? `${skill.level}%` : ""}
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}