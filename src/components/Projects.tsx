
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.stack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.live && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.live, '_blank')}
                      className="w-full"
                    >
                      🔗 Live Demo
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
