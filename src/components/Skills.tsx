
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "Context API", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"],
      icon: "🗄️",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Netlify", "Vercel", "Postman"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Others",
      skills: ["Python"],
      icon: "🐍",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="skills" className="py-32 lg:py-40 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Tech <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-medium tracking-wide">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="bg-muted/50 rounded-xl px-4 py-3 border border-border/30 hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                          <span className="text-sm font-light tracking-wide text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
