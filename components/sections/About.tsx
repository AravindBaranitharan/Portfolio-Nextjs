import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground">
              I'm a passionate Full-Stack Developer and AI enthusiast based in Pondicherry, India. With a strong foundation in both front-end and back-end development, I specialize in building innovative tech solutions that make a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 text-center">
                <Code2 className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-semibold">Full-Stack</h3>
              </Card>
              <Card className="p-4 text-center">
                <Brain className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-semibold">AI/ML</h3>
              </Card>
              <Card className="p-4 text-center">
                <Rocket className="mx-auto h-8 w-8 mb-2" />
                <h3 className="font-semibold">Innovation</h3>
              </Card>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
                alt="Aravindhan R"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}