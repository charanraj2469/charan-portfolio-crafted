
export function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  Hey there! 👋 I'm a passionate Full Stack Developer from Kamareddy, Telangana.
                </p>
                <p>
                  I specialize in creating <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">meaningful digital experiences</span> through thoughtful design and clean, efficient code.
                </p>
                <p>
                  With a commerce background and an insatiable curiosity for technology, I build responsive and scalable applications using cutting-edge web technologies.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></span>
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gradient-to-b from-purple-500 to-blue-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Frontend Developer Intern</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">CodeTech IT Solutions</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Feb 2025 – Mar 2025</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></span>
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-gradient-to-b from-yellow-400 to-orange-500 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-lg">Bachelor of Business Administration</h4>
                  <p className="text-orange-600 dark:text-orange-400 font-medium">Avinash College of Commerce</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">2021–2024 • CGPA: 8.6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
