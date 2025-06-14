
export function About() {
  const timeline = [
    {
      title: "Avinash College of Commerce",
      subtitle: "BBA (2021–2024) • CGPA: 8.6",
      period: "2021-2024"
    },
    {
      title: "CodeTech IT Solutions",
      subtitle: "Frontend Developer Intern",
      period: "Feb-Mar 2025"
    },
    {
      title: "NxtWave Technologies",
      subtitle: "Full Stack Development Training",
      period: "2024"
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                About Me
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer from Kamareddy, Telangana. With a commerce background and deep curiosity in tech, I build responsive and scalable applications using the MERN stack.
                </p>
                <p>
                  I've interned at Codetech IT Solutions and trained at NxtWave Technologies. I love solving real-world problems with clean code and elegant UI.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="border-l-2 border-border pl-6 pb-6 relative">
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2"></div>
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    <p className="text-xs text-muted-foreground/70">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
