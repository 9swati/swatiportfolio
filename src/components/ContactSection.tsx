import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageSquare } from "lucide-react";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // EmailJS configuration
      const serviceId = 'service_ovtxal9';
      const templateId = 'template_zxeh2ul';
      const publicKey = 'TZEMpKCst39ASwCC1';
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Swati Mali'
      };
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full animate-float-delayed blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-secondary/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities and collaborate on innovative projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking opportunities as a Full Stack Developer. Whether you have a job opportunity, 
                project collaboration, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {/* Contact Details */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-secondary hover:shadow-soft hover:scale-105 transition-all duration-300 animate-slide-up [animation-delay:200ms]">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:swati.mali912@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    swati.mali912@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-secondary hover:shadow-soft hover:scale-105 transition-all duration-300 animate-slide-up [animation-delay:400ms]">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+919518978619" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9518978619
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-secondary hover:shadow-soft hover:scale-105 transition-all duration-300 animate-slide-up [animation-delay:600ms]">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="group">
                  <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
                </Button>
                <Button variant="outline" size="icon" className="group">
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                </Button>
                <Button variant="outline" size="icon" className="group">
                  <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-glow hover:shadow-xl hover:scale-[1.02] transition-all duration-500 bg-background/90 backdrop-blur-md animate-slide-up [animation-delay:300ms]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <Send className="h-5 w-5 text-white" />
                </div>
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="transition-all duration-300 focus:shadow-soft focus:scale-[1.02] hover:shadow-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="transition-all duration-300 focus:shadow-soft focus:scale-[1.02] hover:shadow-sm" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello!" rows={5} required className="transition-all duration-300 focus:shadow-soft focus:scale-[1.02] hover:shadow-sm resize-none" />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full group hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ContactSection;