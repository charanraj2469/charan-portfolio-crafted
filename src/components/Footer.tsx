
export function Footer() {
  const socialLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { label: "GitHub", url: "https://github.com/charanraj2469" },
    { label: "Email", url: "mailto:charanchanda20@gmail.com" }
  ];

  return (
    <footer className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-600 font-light">
            © 2025 Charan Raj
          </p>
          
          <div className="flex space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
