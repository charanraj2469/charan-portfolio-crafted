
export function Experience() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="relative pl-16">
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full"></div>
              <div className="pb-8">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🏢</span>
                  <div>
                    <h3 className="text-xl font-semibold">CodeTech IT Solutions</h3>
                    <p className="text-primary font-medium">Frontend Developer Intern</p>
                    <p className="text-muted-foreground text-sm">Feb 2025 – Mar 2025</p>
                  </div>
                </div>
                <ul className="text-muted-foreground space-y-2 ml-11">
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
    </section>
  );
}
