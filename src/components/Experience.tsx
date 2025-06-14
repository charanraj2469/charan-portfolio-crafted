
export function Experience() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                <span className="font-bold">Experience</span>
              </h2>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                  </div>
                  <div className="col-span-10 md:col-span-11">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium tracking-wide">CodeTech IT Solutions</h3>
                        <p className="text-primary font-medium tracking-wide">Frontend Developer Intern</p>
                        <p className="text-muted-foreground text-sm font-light tracking-wide">Feb 2025 – Mar 2025</p>
                      </div>
                      <ul className="space-y-2 text-muted-foreground font-light tracking-wide">
                        <li>• Built real-time chat and quiz applications using React.js</li>
                        <li>• Followed best practices to optimize performance and enhance UX</li>
                        <li>• Collaborated with team on debugging, testing, and deploying features</li>
                        <li>• Gained hands-on experience with interactive UI and real-world features</li>
                      </ul>
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
