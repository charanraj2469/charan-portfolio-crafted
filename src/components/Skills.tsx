
export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
      icon: "🎨",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express.js", "REST APIs", "JWT"],
      icon: "⚡",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Database",
      skills: ["MongoDB", "SQL"],
      icon: "🗄️",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Netlify", "Vercel"],
      icon: "🛠️",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Technologies I love working with to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-gray-50 rounded-xl px-4 py-3 text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
