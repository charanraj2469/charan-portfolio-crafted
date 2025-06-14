
export function Experience() {
  return (
    <section className="py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 lg:gap-32">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
                  <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Experience</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="group">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-primary/70 rounded-full mt-3 shadow-lg group-hover:scale-125 transition-transform duration-300"></div>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl group-hover:-translate-y-1">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-medium tracking-wide mb-2">CodeTech IT Solutions</h3>
                            <p className="text-primary font-medium tracking-wide text-lg mb-1">Frontend Developer Intern</p>
                            <p className="text-muted-foreground font-light tracking-wide">Feb 2025 – Mar 2025</p>
                          </div>
                          <ul className="space-y-3 text-muted-foreground font-light tracking-wide text-lg">
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                              Built real-time chat and quiz applications using React.js
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                              Followed best practices to optimize performance and enhance UX
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                              Collaborated with team on debugging, testing, and deploying features
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                              Gained hands-on experience with interactive UI and real-world features
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
