
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

  const contactLinks = [
    { label: "Email", value: "charanchanda20@gmail.com", link: "mailto:charanchanda20@gmail.com" },
    { label: "LinkedIn", value: "LinkedIn", link: "https://www.linkedin.com/in/chanda-charan-210431230" },
    { label: "GitHub", value: "GitHub", link: "https://github.com/charanraj2469" }
  ];

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-8 lg:px-12 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Let's discuss your next project or just say hello.
              </p>
              
              <div className="space-y-4">
                {contactLinks.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-light">{item.label}</span>
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-600 transition-colors font-light"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-0 border-b border-gray-200 rounded-none bg-transparent px-0 py-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-0 border-b border-gray-200 rounded-none bg-transparent px-0 py-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0"
                required
              />
              <Textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="border-0 border-b border-gray-200 rounded-none bg-transparent px-0 py-4 text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:ring-0 resize-none"
                required
              />
              <Button 
                type="submit" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-none text-base font-light mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
