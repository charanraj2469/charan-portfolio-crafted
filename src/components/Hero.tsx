
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm Charan Raj 👋
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Full Stack Developer building modern web applications with React, Node.js & MongoDB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
