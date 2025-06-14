
export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Netlify", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Skills
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-lg font-light text-gray-900">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-600 font-light">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
