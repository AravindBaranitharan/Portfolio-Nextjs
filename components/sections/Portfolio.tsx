"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MySamantha.ai",
    description: "AI personal assistant for personal growth and emotional support.",
    image: "/samantha.png",
    liveUrl: "https://mysamantha.ai",
    githubUrl: "https://github.com/AravindBaranitharan",
    tech: ["Machine Learning", "GPT-4", "NLP"]
  },
  {
    title: "AURA MED",
    description: "Smart pill dispenser addressing medical nonadherence with IoT integration.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com/AravindBaranitharan",
    tech: ["Flutter", "IoT", "Arduino", "Firebase", "Fusion 360"]
  },
  {
    title: "The Decors",
    description: "A furniture-based brand website built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    liveUrl: "https://thedecors.in",
    githubUrl: "https://github.com/AravindBaranitharan",
    tech: ["HTML", "JavaScript", "CSS", "Bootstrap"]
  },
  {
    title: "Kavalar Eye",
    description: "Mobile app for deepfake detection using CNN and Flutter.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=2000&auto=format&fit=crop",
    githubUrl: "https://github.com/AravindBaranitharan",
    tech: ["Flutter", "Python", "CNN", "Flask"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}