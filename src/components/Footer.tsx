
export function Footer() {
  const socialLinks = [
    { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/chanda-charan-210431230", gradient: "from-blue-500 to-blue-600" },
    { icon: "🔗", label: "GitHub", url: "https://github.com/charanraj2469", gradient: "from-gray-700 to-gray-800" },
    { icon: "📧", label: "Email", url: "mailto:charanchanda20@gmail.com", gradient: "from-red-500 to-pink-500" }
  ];

  return (
    <footer className="py-20 border-t border-border/30 bg-gradient-to-t from-muted/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground font-light tracking-wide text-lg">
                © 2025 Charan Raj. Built with ❤️ using React & Node.
              </p>
            </div>
            
            <div className="flex space-x-4 md:justify-end">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={link.label}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
