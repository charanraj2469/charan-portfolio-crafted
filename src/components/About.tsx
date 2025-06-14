
export function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                About
              </h2>
              <div className="w-16 h-px bg-gray-300"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
              <p>
                I'm a passionate Full Stack Developer from Kamareddy, Telangana, dedicated to creating meaningful digital experiences through thoughtful design and clean code.
              </p>
              <p>
                With a commerce background and deep curiosity in technology, I specialize in building responsive and scalable applications using modern web technologies.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-xl font-light text-gray-900">Experience</h3>
              <div className="space-y-6">
                <div className="border-l border-gray-200 pl-6">
                  <h4 className="font-normal text-gray-900">Frontend Developer Intern</h4>
                  <p className="text-gray-600 text-sm">CodeTech IT Solutions</p>
                  <p className="text-gray-400 text-xs">Feb 2025 – Mar 2025</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-xl font-light text-gray-900">Education</h3>
              <div className="space-y-6">
                <div className="border-l border-gray-200 pl-6">
                  <h4 className="font-normal text-gray-900">BBA</h4>
                  <p className="text-gray-600 text-sm">Avinash College of Commerce</p>
                  <p className="text-gray-400 text-xs">2021–2024 • CGPA: 8.6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
