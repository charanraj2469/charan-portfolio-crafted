
export function Certifications() {
  const certifications = [
    {
      title: "JavaScript",
      provider: "HackerRank",
      icon: "🟨",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Programming Foundations With Python",
      provider: "NxtWave",
      icon: "🐍",
      gradient: "from-blue-500 to-green-500"
    },
    {
      title: "Introduction to Databases",
      provider: "NxtWave",
      icon: "🗄️",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Developer Foundations",
      provider: "NxtWave",
      icon: "👨‍💻",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Responsive Web Design using Flexbox",
      provider: "NxtWave",
      icon: "📱",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Continuous learning and professional development achievements
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    {cert.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
                    <p className="text-gray-600 font-medium text-sm">{cert.provider}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
