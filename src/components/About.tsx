
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm a passionate Full Stack Developer from Kamareddy, Telangana. With a commerce background and deep curiosity in tech, I build responsive and scalable applications using the MERN stack. I've interned at Codetech IT Solutions and trained at NxtWave Technologies. I love solving real-world problems with clean code and elegant UI.
              </p>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.subtitle}</p>
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
