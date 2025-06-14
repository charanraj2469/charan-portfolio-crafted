
export function About() {
  const timeline = [
    {
      icon: "🎓",
      title: "Avinash College of Commerce, Hyderabad",
      subtitle: "BBA (2021–2024), CGPA: 8.6",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "👨‍💻",
      title: "Internship @ Codetech IT Solutions",
      subtitle: "Feb–Mar 2025",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🧠",
      title: "Trained by NxtWave",
      subtitle: "Full Stack Development",
      color: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <section id="about" className="py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32 items-start">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  About <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Me</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-16">
              <div className="prose prose-lg max-w-none">
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg">
                  <p className="text-xl leading-relaxed text-muted-foreground font-light tracking-wide mb-6">
                    I'm a passionate Full Stack Developer from Kamareddy, Telangana. With a commerce background and deep curiosity in tech, I build responsive and scalable applications using the MERN stack.
                  </p>
                  <p className="text-xl leading-relaxed text-muted-foreground font-light tracking-wide">
                    I've interned at Codetech IT Solutions and trained at NxtWave Technologies. I love solving real-world problems with clean code and elegant UI.
                  </p>
                </div>
              </div>
              
              <div className="grid gap-8">
                {timeline.map((item, index) => (
                  <div key={index} className="group">
                    <div className="grid grid-cols-12 gap-6 items-start">
                      <div className="col-span-2 md:col-span-1">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="col-span-10 md:col-span-11">
                        <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:border-border/50 transition-all duration-300 group-hover:shadow-lg">
                          <h3 className="font-medium text-xl leading-tight tracking-wide mb-2">{item.title}</h3>
                          <p className="text-muted-foreground font-light tracking-wide text-lg">{item.subtitle}</p>
                        </div>
                      </div>
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
