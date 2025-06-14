
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-8 lg:px-12 max-w-4xl">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
              Charan Raj
            </h1>
            <div className="w-24 h-px bg-gray-300 mx-auto"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Full Stack Developer crafting digital experiences with precision and care
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none text-base font-normal"
            >
              View Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-none text-base font-normal"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
