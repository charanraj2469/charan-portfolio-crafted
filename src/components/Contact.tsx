import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation (min 3 characters)
    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation (min 30 characters)
    if (formData.message.length < 30) {
      newErrors.message = 'Message must be at least 30 characters long';
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors below and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mwpbbpnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New submission from portfolio site'
        }),
      });

      if (response.ok) {
        toast({
          title: "✅ Thanks! I've received your message and will reply soon.",
          description: ""
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "⚠️ Oops! Something went wrong.",
        description: "Please try again or contact me directly at charanchanda20@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { 
      label: "Email", 
      value: "charanchanda20@gmail.com", 
      link: "mailto:charanchanda20@gmail.com",
      icon: "📧",
      gradient: "from-red-500 to-pink-600"
    },
    { 
      label: "LinkedIn", 
      value: "Connect on LinkedIn", 
      link: "https://www.linkedin.com/in/chanda-charan-210431230",
      icon: "💼",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      label: "GitHub", 
      value: "View GitHub Profile", 
      link: "https://github.com/charanraj2469",
      icon: "🚀",
      gradient: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 lg:px-12 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a friendly chat about technology and development.
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-white dark:hover:bg-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform duration-300`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-gray-100">{item.label}</p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name (min 3 characters)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-gray-50 dark:bg-gray-700 border-0 rounded-xl px-4 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-gray-50 dark:bg-gray-700 border-0 rounded-xl px-4 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-500 transition-all duration-200 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message (min 30 characters)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`bg-gray-50 dark:bg-gray-700 border-0 rounded-xl px-4 py-4 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-500 transition-all duration-200 resize-none ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending... ✨" : "Send Message 🚀"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
