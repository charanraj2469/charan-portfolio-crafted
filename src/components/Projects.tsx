
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Electro",
      description: "A fully responsive e-commerce platform for electronics, built using WIX AI. Features include product search, filtering, and detailed listings.",
      stack: ["WIX AI", "Web Design"],
      live: null
    },
    {
      title: "NxtWatch",
      description: "YouTube clone with trending, gaming, and saved video listings. Implements login, protected routes, light/dark mode.",
      stack: ["React", "Bootstrap", "Routing", "REST API", "JWT Auth"],
      live: "https://chandanxtwatch.ccbp.tech/login"
    },
    {
      title: "NxtTrendz",
      description: "E-commerce site inspired by Amazon/Flipkart with login, product listings, and details.",
      stack: ["React", "REST API", "JWT", "Bootstrap", "Routing"],
      live: "https://charanxtrendz.ccbp.tech/login"
    },
    {
      title: "JobbyApp",
      description: "Job portal app with search filters, protected routes, and persistent login.",
      stack: ["React", "REST API", "JWT", "Routing", "CSS"],
      live: "https://chandajobby.ccbp.tech/login"
    },
    {
      title: "Chat App",
      description: "Real-time chat application with an interactive UI for seamless user communication.",
      stack: ["React.js", "Socket.io"],
      live: null
    },
    {
      title: "Quiz App",
      description: "Interactive quiz platform with dynamic question rendering and score tracking.",
      stack: ["React.js", "LocalStorage"],
      live: null
    }
  ];

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4">
              Featured <span className="font-bold">Projects</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-none bg-muted/20 hover:bg-muted/30 transition-colors duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-medium tracking-wide">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed font-light tracking-wide">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.stack.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs font-light tracking-wide text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.live && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="w-full font-medium tracking-wide border-0 bg-primary/10 hover:bg-primary/20"
                    >
                      View Project →
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
