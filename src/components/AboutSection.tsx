import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, Calendar } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-secondary/20 rounded-full animate-float-delayed blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-primary/5 rounded-full animate-float-slow blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <User className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Who I Am</h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              I am Swati Mali, a dynamic and result-oriented Full Stack Developer with a Bachelor's degree in Computer Science Engineering (BE). As a fresher software developer, I specialize in both front-end and back-end technologies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">I am proficient in modern programming languages such as Java, C++, and JavaScript, ReactJS, with a strong understanding of OOP concepts. I also have hands-on experience with database management tools like MongoDB and MySQL.</p>
            
            <p className="text-muted-foreground leading-relaxed">
              With strong problem-solving and analytical skills, I am passionate about continuous learning and staying up-to-date with the latest tech trends.
            </p>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-slide-up [animation-delay:300ms]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <Card className="border-0 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] bg-background/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shrink-0">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold">
                      B.Tech in Computer Science Engineering
                    </h4>
                    <p className="text-primary font-medium">
                      Tatyasaheb Kore Institute of Engineering and Technology
                    </p>
                    <p className="text-muted-foreground">
                      Warnanagar, Kolhapur (Shivaji University)
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="px-3 py-1 bg-gradient-primary text-white text-sm rounded-full">
                        Graduated 2023
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;