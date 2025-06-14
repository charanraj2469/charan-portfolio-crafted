
export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Netlify", "Vercel", "Postman"]
    },
    {
      title: "Other",
      skills: ["Python", "Context API"]
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-medium text-lg">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
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
