
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  const certifications = [
    { name: "JavaScript – HackerRank", gradient: "from-yellow-500 to-orange-500" },
    { name: "Programming Foundations With Python – NxtWave", gradient: "from-blue-500 to-green-500" },
    { name: "Introduction to Databases – NxtWave", gradient: "from-purple-500 to-blue-500" },
    { name: "Developer Foundations – NxtWave", gradient: "from-green-500 to-teal-500" },
    { name: "Responsive Web Design using Flexbox – NxtWave", gradient: "from-pink-500 to-purple-500" }
  ];

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  Certifications & <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Learning</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-12">
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group">
                    <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${cert.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}></div>
                        </div>
                        <div className="col-span-11">
                          <span className="font-light tracking-wide text-lg">{cert.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30">
                <p className="text-muted-foreground italic font-light tracking-wide text-xl text-center">
                  "Always exploring new tech and sharpening my skills."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
