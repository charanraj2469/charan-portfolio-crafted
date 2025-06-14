
export function Footer() {
  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { label: "GitHub", url: "https://github.com/charanraj2469" },
    { label: "Email", url: "mailto:charanchanda20@gmail.com" }
  ];

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 Charan Raj. Built with ❤️ using React & Node.
            </p>
            
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
