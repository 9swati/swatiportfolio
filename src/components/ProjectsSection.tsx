import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Gamepad2, Bus, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Two-Player Snake and Ladder Game",
    description: "Console-based multiplayer game using OOP principles in C++. Features turn-based gameplay, random dice rolling, and win condition checking.",
    technologies: ["C++", "OOP", "Console Application"],
    icon: Gamepad2,
    highlights: [
      "Object-oriented design patterns",
      "Multiplayer game logic",
      "Random number generation",
      "Game state management"
    ]
  },
  {
    title: "College Bus Facility System",
    description: "Web-based system for managing student bus bookings and schedules. Includes admin panel for route management and student booking interface.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    icon: Bus,
    highlights: [
      "User authentication system",
      "Booking management",
      "Route scheduling",
      "Admin dashboard"
    ]
  },
  {
    title: "Student Progress Tracker",
    description: "Android mobile application to track and display academic performance. Features grade visualization and progress analytics.",
    technologies: ["Android", "Java", "SQLite", "Material Design"],
    icon: TrendingUp,
    highlights: [
      "Mobile UI/UX design",
      "Local database integration",
      "Progress visualization",
      "Performance analytics"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-secondary relative overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-gradient-primary/10 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-primary/5 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-gradient-secondary/20 rounded-lg rotate-12 animate-float-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my academic and personal projects demonstrating various technologies and problem-solving skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 bg-background/80 backdrop-blur-sm animate-slide-up hover:animate-pulse-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-glow animate-bounce-gentle">
                    <project.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-primary text-white text-xs rounded-full hover:scale-110 transition-transform duration-300 animate-slide-in-left shadow-sm"
                      style={{ animationDelay: `${techIndex * 100 + index * 200}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li 
                        key={highlightIndex}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 group/btn"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button 
                    variant="gradient" 
                    size="sm"
                    className="flex-1 group/btn"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;