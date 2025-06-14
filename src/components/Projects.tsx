
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Electro",
      description: "An AI-generated e-commerce website built using WIX, focused on electronic products. It features product browsing, search, filtering, and a modern, clean layout.",
      stack: ["WIX AI Website Builder", "Custom Styling", "Product Pages", "SEO Optimization"],
      live: "https://charanchanda20.wixsite.com/electro?rc=test-site",
      gradient: "from-yellow-500 to-orange-600",
      icon: "⚡"
    },
    {
      title: "NxtWatch",
      description: "A comprehensive YouTube clone featuring trending videos, gaming content, and personalized saved video listings. Implements secure user authentication, protected routes, and seamless light/dark mode switching for optimal user experience.",
      stack: ["React", "Bootstrap", "REST API", "JWT"],
      live: "https://chandanxtwatch.ccbp.tech/login",
      gradient: "from-red-500 to-pink-600",
      icon: "📺"
    },
    {
      title: "NxtTrendz",
      description: "Modern e-commerce platform inspired by industry leaders like Amazon and Flipkart. Features comprehensive user authentication, dynamic product listings, detailed product pages, and intuitive shopping experience.",
      stack: ["React", "REST API", "JWT", "Bootstrap"],
      live: "https://charanxtrendz.ccbp.tech/login",
      gradient: "from-blue-500 to-purple-600",
      icon: "🛒"
    },
    {
      title: "JobbyApp",
      description: "Professional job portal application with advanced search and filtering capabilities. Includes protected route navigation, persistent user sessions, and comprehensive job discovery features for career advancement.",
      stack: ["React", "REST API", "JWT", "CSS"],
      live: "https://chandajobby.ccbp.tech/login",
      gradient: "from-green-500 to-teal-600",
      icon: "💼"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Showcasing my passion for creating impactful digital solutions
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/20 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <div className="grid lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                      {project.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.live && (
                      <Button 
                        onClick={() => window.open(project.live, '_blank')}
                        className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}
                      >
                        View Live Project 
                        <ExternalLink size={16} />
                      </Button>
                    )}
                  </div>
                  
                  <div className="lg:col-span-3 p-8 lg:p-12 flex items-center">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
