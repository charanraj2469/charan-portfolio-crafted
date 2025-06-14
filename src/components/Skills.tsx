
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "Context API", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Netlify", "Vercel", "Postman"]
    },
    {
      title: "Others",
      skills: ["Python"]
    }
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
                Tech <span className="font-bold">Stack</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-12">
                {skillCategories.map((category, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-xl font-medium tracking-wide border-b border-border pb-2">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-200 py-1">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
