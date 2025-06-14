
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "NxtWatch",
      description: "YouTube clone with trending, gaming, and saved video listings. Implements login, protected routes, light/dark mode.",
      stack: ["React", "Bootstrap", "REST API", "JWT"],
      live: "https://chandanxtwatch.ccbp.tech/login",
    },
    {
      title: "NxtTrendz",
      description: "E-commerce site inspired by Amazon/Flipkart with login, product listings, and details.",
      stack: ["React", "REST API", "JWT", "Bootstrap"],
      live: "https://charanxtrendz.ccbp.tech/login",
    },
    {
      title: "JobbyApp",
      description: "Job portal app with search filters, protected routes, and persistent login.",
      stack: ["React", "REST API", "JWT", "CSS"],
      live: "https://chandajobby.ccbp.tech/login",
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected Work
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-100 pb-16 last:border-b-0">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1">
                  <h3 className="text-2xl font-light text-gray-900 mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs text-gray-500 font-light">
                        {tech}{techIndex < project.stack.length - 1 ? ' /' : ''}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="border-gray-300 text-gray-900 hover:bg-gray-50 rounded-none text-sm font-light"
                    >
                      View Project
                    </Button>
                  )}
                </div>
                
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
