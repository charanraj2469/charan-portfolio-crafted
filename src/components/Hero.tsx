
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm mb-8">
                <span className="text-sm font-medium text-primary">✨ Available for new opportunities</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
                Hi, I'm{" "}
                <span className="font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Charan Raj
                </span>
                <span className="inline-block ml-4 animate-bounce">👋</span>
              </h1>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-muted-foreground tracking-wide">
                Full Stack Developer crafting digital experiences
                <br className="hidden md:block" />
                with React, Node.js & Modern Web Technologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto font-medium tracking-wide px-10 py-4 text-lg rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto font-medium tracking-wide px-10 py-4 text-lg rounded-full border-2 border-primary/30 hover:border-primary/50 backdrop-blur-sm hover:bg-primary/5 transition-all duration-300"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
}
