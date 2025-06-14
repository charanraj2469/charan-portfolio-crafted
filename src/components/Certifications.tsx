
export function Certifications() {
  const certifications = [
    "JavaScript – HackerRank",
    "Programming Foundations With Python – NxtWave",
    "Introduction to Databases – NxtWave",
    "Developer Foundations – NxtWave",
    "Responsive Web Design using Flexbox – NxtWave"
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Certifications
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <span className="text-gray-600 font-light">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
