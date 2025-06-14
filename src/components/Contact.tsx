
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (formData.message.length < 30) {
      toast({
        title: "Validation Error", 
        description: "Message must be at least 30 characters long.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll respond soon."
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "charanchanda20@gmail.com", link: "mailto:charanchanda20@gmail.com", gradient: "from-red-500 to-pink-500" },
    { icon: "📞", label: "Phone", value: "+91 9100230869", link: "tel:+919100230869", gradient: "from-green-500 to-emerald-500" },
    { icon: "💼", label: "LinkedIn", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/chanda-charan-210431230", gradient: "from-blue-500 to-blue-600" },
    { icon: "🔗", label: "GitHub", value: "GitHub Profile", link: "https://github.com/charanraj2469", gradient: "from-gray-700 to-gray-800" },
    { icon: "🌐", label: "Portfolio", value: "Portfolio Site", link: "https://chandaportfolio.netlify.app/", gradient: "from-purple-500 to-violet-500" }
  ];

  return (
    <section id="contact" className="py-32 lg:py-40 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
              Get In <span className="font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-medium tracking-wide mb-12">Let's connect and create something amazing together</h3>
                <div className="grid gap-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-xl shadow-lg`}>
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-muted-foreground font-light tracking-wide mb-1">{item.label}</p>
                            <a 
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 font-medium tracking-wide transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-xl">
                <h3 className="text-3xl font-medium tracking-wide mb-8">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-0 bg-muted/50 font-light tracking-wide rounded-xl py-4 text-lg focus:ring-2 focus:ring-primary/20"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-0 bg-muted/50 font-light tracking-wide rounded-xl py-4 text-lg focus:ring-2 focus:ring-primary/20"
                  />
                  <Textarea
                    placeholder="Your Message (min 30 characters) *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                    className="border-0 bg-muted/50 font-light tracking-wide resize-none rounded-xl text-lg focus:ring-2 focus:ring-primary/20"
                  />
                  <Button 
                    type="submit" 
                    className="w-full font-medium tracking-wide py-4 text-lg rounded-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message ✨"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
