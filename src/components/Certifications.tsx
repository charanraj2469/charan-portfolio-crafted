
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications & Learning</h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                <span className="text-green-500">✅</span>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground italic">
            "Always exploring new tech and sharpening my skills."
          </p>
        </div>
      </div>
    </section>
  );
}
