
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
    { icon: "📧", label: "Email", value: "charanchanda20@gmail.com", link: "mailto:charanchanda20@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 9100230869", link: "tel:+919100230869" },
    { icon: "🔗", label: "LinkedIn", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { icon: "🔗", label: "GitHub", value: "GitHub Profile", link: "https://github.com/charanraj2469" },
    { icon: "🌐", label: "Portfolio", value: "Portfolio Site", link: "https://chandaportfolio.netlify.app/" }
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
              Get In <span className="font-bold">Touch</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium tracking-wide mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-2 md:col-span-1">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div className="col-span-10 md:col-span-11">
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-light tracking-wide"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium tracking-wide mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-0 bg-background font-light tracking-wide"
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-0 bg-background font-light tracking-wide"
                />
                <Textarea
                  placeholder="Your Message (min 30 characters) *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  className="border-0 bg-background font-light tracking-wide resize-none"
                />
                <Button 
                  type="submit" 
                  className="w-full font-medium tracking-wide py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
