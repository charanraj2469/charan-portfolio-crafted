
export function Footer() {
  const socialLinks = [
    { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { icon: "🔗", label: "GitHub", url: "https://github.com/charanraj2469" },
    { icon: "📧", label: "Email", url: "mailto:charanchanda20@gmail.com" }
  ];

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © 2025 Charan Raj. Built with ❤️ using React & Node.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:scale-110 transition-transform"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
