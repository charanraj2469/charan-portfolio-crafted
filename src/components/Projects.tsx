
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
    },
    {
      title: "Electro",
      description: "A fully responsive e-commerce platform for electronics, built using WIX AI. Features include product search, filtering, and detailed listings.",
      stack: ["WIX AI", "Web Design"],
      live: null,
    },
    {
      title: "Chat App",
      description: "Real-time chat application with an interactive UI for seamless user communication.",
      stack: ["React.js", "Socket.io"],
      live: null,
    },
    {
      title: "Quiz App",
      description: "Interactive quiz platform with dynamic question rendering and score tracking.",
      stack: ["React.js", "LocalStorage"],
      live: null,
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my skills and experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="w-full text-xs"
                    >
                      View Project →
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
