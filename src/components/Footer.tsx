
export function Footer() {
  const socialLinks = [
    { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { icon: "🔗", label: "GitHub", url: "https://github.com/charanraj2469" },
    { icon: "📧", label: "Email", url: "mailto:charanchanda20@gmail.com" }
  ];

  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p className="text-muted-foreground font-light tracking-wide">
              © 2025 Charan Raj. Built with ❤️ using React & Node.
            </p>
            
            <div className="flex space-x-6 md:justify-end">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-110 transition-transform duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
