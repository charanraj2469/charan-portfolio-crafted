
export function About() {
  const timeline = [
    {
      icon: "🎓",
      title: "Avinash College of Commerce, Hyderabad",
      subtitle: "BBA (2021–2024), CGPA: 8.6",
    },
    {
      icon: "👨‍💻",
      title: "Internship @ Codetech IT Solutions",
      subtitle: "Feb–Mar 2025",
    },
    {
      icon: "🧠",
      title: "Trained by NxtWave",
      subtitle: "Full Stack Development",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-8">
                About <span className="font-bold">Me</span>
              </h2>
            </div>
            
            <div className="lg:col-span-7 space-y-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground font-light tracking-wide">
                  I'm a passionate Full Stack Developer from Kamareddy, Telangana. With a commerce background and deep curiosity in tech, I build responsive and scalable applications using the MERN stack.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground font-light tracking-wide">
                  I've interned at Codetech IT Solutions and trained at NxtWave Technologies. I love solving real-world problems with clean code and elegant UI.
                </p>
              </div>
              
              <div className="grid gap-6">
                {timeline.map((item, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-2 md:col-span-1">
                      <div className="text-2xl">{item.icon}</div>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <h3 className="font-medium text-lg leading-tight tracking-wide mb-1">{item.title}</h3>
                      <p className="text-muted-foreground font-light tracking-wide">{item.subtitle}</p>
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
