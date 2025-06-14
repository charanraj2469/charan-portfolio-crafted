
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-background">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9]">
                Hi, I'm{" "}
                <span className="font-medium">
                  Charan Raj
                </span>
                <span className="inline-block ml-2 text-4xl md:text-5xl lg:text-6xl">👋</span>
              </h1>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Full Stack Developer crafting digital experiences with React, Node.js & Modern Web Technologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="font-medium px-8 py-3 rounded-full"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="font-medium px-8 py-3 rounded-full"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
