
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
        ? 'bg-white/90 backdrop-blur-sm border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 lg:px-12">
        <div className="h-20 flex items-center justify-between">
          <div className="text-lg font-light text-gray-900">
            CR
          </div>
          
          <nav className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
