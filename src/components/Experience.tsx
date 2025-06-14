
export function Experience() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-xl border border-white/20">
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
              
              <div className="relative pl-20">
                <div className="absolute -left-6 top-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  💻
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Frontend Developer Intern</h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">CodeTech IT Solutions</p>
                    <p className="text-gray-500 font-medium">Feb 2025 – Mar 2025</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Built real-time chat and quiz applications using React.js with modern state management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Implemented best practices for performance optimization and enhanced user experience
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Collaborated effectively with cross-functional teams on debugging, testing, and deployment
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Gained hands-on experience with interactive UI components and real-world application features
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
