
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
    { label: "Email", value: "charanchanda20@gmail.com", link: "mailto:charanchanda20@gmail.com" },
    { label: "Phone", value: "+91 9100230869", link: "tel:+919100230869" },
    { label: "LinkedIn", value: "LinkedIn Profile", link: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { label: "GitHub", value: "GitHub Profile", link: "https://github.com/charanraj2469" },
    { label: "Portfolio", value: "Portfolio Site", link: "https://chandaportfolio.netlify.app/" }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's connect and create something amazing together
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-medium text-lg mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Your Message (min 30 characters) *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full"
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
