import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Puzzle
} from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "JavaScript"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Core Concepts",
    icon: Cpu,
    skills: ["OOP", "Data Structures", "Algorithms"],
    color: "from-orange-500 to-red-500"
  },
  {
    category: "Development Tools",
    icon: GitBranch,
    skills: ["Git & GitHub", "Debugging"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    category: "Other Skills",
    icon: Puzzle,
    skills: ["Problem-Solving", "Mobile Development"],
    color: "from-pink-500 to-rose-500"
  }
];

const SkillsSection = () => {

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-ping [animation-delay:2s]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 border-0 bg-gradient-secondary/80 backdrop-blur-sm animate-slide-up hover:animate-pulse-glow"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-all duration-300 shadow-glow">
                    <skillGroup.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-background/80 hover:scale-105 transition-all duration-300 group/skill"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;