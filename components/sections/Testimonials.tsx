"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Aravindhan's innovative approach to problem-solving and deep understanding of AI technologies made him an invaluable asset to our team.",
    author: "Project Lead",
    role: "PNB Metlife Hackathon"
  },
  {
    text: "His work on the Kavalar Eye project demonstrated exceptional skills in both mobile development and AI implementation.",
    author: "Mentor",
    role: "SRM Hackathon"
  },
  {
    text: "Aravindhan's presentation skills and technical knowledge as a guest speaker were truly impressive.",
    author: "Director",
    role: "Brainy Blooms School"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 left-6" />
              <div className="relative">
                <blockquote className="text-lg mb-4 pt-8 px-4">
                  "{testimonial.text}"
                </blockquote>
                <footer className="text-right">
                  <cite className="not-italic">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </cite>
                </footer>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}