import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Puzzle,
  Coffee,
  Smartphone
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-secondary"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <skillGroup.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Progress Visualization */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "JavaScript", level: 85 },
              { skill: "React.js", level: 80 },
              { skill: "Node.js", level: 75 },
              { skill: "MongoDB", level: 70 },
              { skill: "Java", level: 85 },
              { skill: "C++", level: 80 }
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;