
export function Certifications() {
  const certifications = [
    "JavaScript – HackerRank",
    "Programming Foundations With Python – NxtWave",
    "Introduction to Databases – NxtWave",
    "Developer Foundations – NxtWave",
    "Responsive Web Design using Flexbox – NxtWave"
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Certifications
            </h2>
            <p className="text-muted-foreground">
              Always exploring new tech and sharpening my skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-card border border-border rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
