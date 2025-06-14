
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
              Hi, I'm{" "}
              <span className="font-bold">Charan Raj</span>
              <span className="inline-block ml-2">👋</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-muted-foreground tracking-wide">
                Full Stack Developer building modern web applications 
                <br className="hidden md:block" />
                with React, Node.js & MongoDB.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto font-medium tracking-wide px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto font-medium tracking-wide px-8 py-3"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
