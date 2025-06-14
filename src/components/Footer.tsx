
export function Footer() {
  const socialLinks = [
    { 
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/chanda-charan-210431230",
      icon: "💼"
    },
    { 
      label: "GitHub", 
      url: "https://github.com/charanraj2469",
      icon: "🚀"
    },
    { 
      label: "Email", 
      url: "mailto:charanchanda20@gmail.com",
      icon: "📧"
    }
  ];

  return (
    <footer className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Charan Raj
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-lg">
            Crafting digital experiences with passion and precision
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Charan Raj. Made with ❤️ and lots of ☕
          </p>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
              >
                <span className="text-lg group-hover:rotate-12 transition-transform duration-300">
                  {link.icon}
                </span>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
