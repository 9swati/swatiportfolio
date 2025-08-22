import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Code, Database, Globe, Star, Sparkles } from "lucide-react";
import swatiPhoto from "@/assets/swati-photo.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple gradients and glassmorphism */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,180,0,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_40%_90%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>
      
      {/* Floating elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full blur-xl animate-float opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-primary rounded-full blur-2xl animate-float opacity-15" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full blur-lg animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-primary rounded-full blur-md animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Tech stack floating icons */}
      <div className="absolute top-24 right-20 p-3 bg-background/10 backdrop-blur-lg rounded-lg border border-white/20 animate-float opacity-80" style={{ animationDelay: '0.5s' }}>
        <Code className="h-6 w-6 text-primary" />
      </div>
      <div className="absolute bottom-32 left-20 p-3 bg-background/10 backdrop-blur-lg rounded-lg border border-white/20 animate-float opacity-80" style={{ animationDelay: '2.5s' }}>
        <Database className="h-6 w-6 text-secondary" />
      </div>
      <div className="absolute top-1/2 right-20 p-3 bg-background/10 backdrop-blur-lg rounded-lg border border-white/20 animate-float opacity-80" style={{ animationDelay: '1.8s' }}>
        <Globe className="h-6 w-6 text-primary" />
      </div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced text content with staggered animations */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary/10 backdrop-blur-sm rounded-full border border-primary/20 animate-fade-in">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium bg-gradient-primary bg-clip-text text-transparent">
                Welcome to my portfolio
              </span>
            </div>
            
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight">
                Hello, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Swati Mali
                  </span>
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-primary rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '1s' }}></div>
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl text-muted-foreground font-light">
                Full Stack Developer{" "}
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-primary/10 rounded-full text-primary font-medium text-lg">
                  <Star className="h-4 w-4 fill-current" />
                  Fresher
                </span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Passionate about building{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
                scalable web and mobile applications
              </span>{" "}
              with modern technologies and clean code principles.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="group backdrop-blur-sm bg-background/50 border-primary/30 hover:bg-gradient-primary/10 hover:border-primary/50"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button>
            </div>
            
            {/* Enhanced stats with glassmorphism cards */}
            <div className="flex justify-center lg:justify-start gap-6 pt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              {[
                { value: "3+", label: "Projects", icon: Code },
                { value: "2023", label: "Graduate", icon: Star },
                { value: "MERN", label: "Stack", icon: Globe }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="group p-4 bg-background/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-background/20 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side - Enhanced profile image with advanced effects */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '1s' }}>
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-110 animate-glow-pulse"></div>
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-105 group-hover:scale-110 transition-transform duration-500"></div>
              
              {/* Main image container with glassmorphism */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-glow group-hover:shadow-[0_0_60px_hsl(258_90%_66%_/_0.4)] transition-all duration-500">
                <img 
                  src={swatiPhoto}
                  alt="Swati Mali - Full Stack Developer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Enhanced floating elements around image */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-full animate-bounce shadow-glow flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-secondary rounded-full animate-pulse shadow-soft flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-current" />
              </div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-primary/80 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-secondary/80 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
              
              {/* Tech stack indicators around image */}
              <div className="absolute top-8 left-8 px-3 py-1 bg-background/20 backdrop-blur-md rounded-full border border-white/30 text-xs font-medium text-primary animate-fade-in" style={{ animationDelay: '1.5s' }}>
                React
              </div>
              <div className="absolute bottom-8 right-8 px-3 py-1 bg-background/20 backdrop-blur-md rounded-full border border-white/30 text-xs font-medium text-secondary animate-fade-in" style={{ animationDelay: '2s' }}>
                Node.js
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;