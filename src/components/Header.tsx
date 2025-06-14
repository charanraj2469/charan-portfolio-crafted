
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl">Charan Raj</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>
    </header>
  );
}
