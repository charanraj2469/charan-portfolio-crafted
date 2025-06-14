
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  const certifications = [
    "JavaScript – HackerRank",
    "Programming Foundations With Python – NxtWave",
    "Introduction to Databases – NxtWave",
    "Developer Foundations – NxtWave",
    "Responsive Web Design using Flexbox – NxtWave"
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                Certifications & <span className="font-bold">Learning</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8 space-y-8">
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="grid grid-cols-12 gap-4 items-center py-2 border-b border-border/30 last:border-b-0">
                    <div className="col-span-1">
                      <span className="text-green-500 font-medium">✓</span>
                    </div>
                    <div className="col-span-11">
                      <span className="font-light tracking-wide">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground italic font-light tracking-wide pt-8">
                "Always exploring new tech and sharpening my skills."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
