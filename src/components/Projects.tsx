
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "Electro",
      description: "A fully responsive e-commerce platform for electronics, built using WIX AI. Features include product search, filtering, and detailed listings.",
      stack: ["WIX AI", "Web Design"],
      live: null,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "NxtWatch",
      description: "YouTube clone with trending, gaming, and saved video listings. Implements login, protected routes, light/dark mode.",
      stack: ["React", "Bootstrap", "Routing", "REST API", "JWT Auth"],
      live: "https://chandanxtwatch.ccbp.tech/login",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "NxtTrendz",
      description: "E-commerce site inspired by Amazon/Flipkart with login, product listings, and details.",
      stack: ["React", "REST API", "JWT", "Bootstrap", "Routing"],
      live: "https://charanxtrendz.ccbp.tech/login",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "JobbyApp",
      description: "Job portal app with search filters, protected routes, and persistent login.",
      stack: ["React", "REST API", "JWT", "Routing", "CSS"],
      live: "https://chandajobby.ccbp.tech/login",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Chat App",
      description: "Real-time chat application with an interactive UI for seamless user communication.",
      stack: ["React.js", "Socket.io"],
      live: null,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz platform with dynamic question rendering and score tracking.",
      stack: ["React.js", "LocalStorage"],
      live: null,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Featured <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <Card className="border-0 shadow-none bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-3xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <CardHeader className="pb-4 pt-8">
                    <CardTitle className="text-2xl font-medium tracking-wide flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed font-light tracking-wide text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs font-light tracking-wide text-muted-foreground bg-muted/70 backdrop-blur-sm px-3 py-2 rounded-full border border-border/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.live && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.live, '_blank')}
                        className="w-full font-medium tracking-wide border-2 border-primary/30 hover:border-primary/50 bg-primary/5 hover:bg-primary/10 rounded-full py-3 transition-all duration-300"
                      >
                        View Project →
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
