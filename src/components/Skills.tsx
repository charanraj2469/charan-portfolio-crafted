
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
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
