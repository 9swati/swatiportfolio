import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  Puzzle,
  Coffee,
  Smartphone,
  Plus,
  Minus,
  Settings,
  Save,
  X
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
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [proficiencyLevels, setProficiencyLevels] = useState([
    { skill: "JavaScript", level: 85 },
    { skill: "React.js", level: 80 },
    { skill: "Node.js", level: 75 },
    { skill: "MongoDB", level: 70 },
    { skill: "Java", level: 85 },
    { skill: "C++", level: 80 }
  ]);

  const updateSkillLevel = (index: number, change: number) => {
    setProficiencyLevels(prev => prev.map((item, i) => 
      i === index 
        ? { ...item, level: Math.max(0, Math.min(100, item.level + change)) }
        : item
    ));
  };

  const saveChanges = () => {
    setIsAdminMode(false);
    // Here you could save to localStorage or an API
    localStorage.setItem('skillProficiency', JSON.stringify(proficiencyLevels));
  };

  const cancelChanges = () => {
    // Reload from localStorage or reset to default
    const saved = localStorage.getItem('skillProficiency');
    if (saved) {
      setProficiencyLevels(JSON.parse(saved));
    }
    setIsAdminMode(false);
  };

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

        {/* Skills Progress Visualization */}
        <div className="mt-16 animate-slide-up [animation-delay:600ms]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold">Proficiency Levels</h3>
            <div className="flex gap-2">
              {isAdminMode ? (
                <>
                  <Button 
                    onClick={saveChanges}
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button 
                    onClick={cancelChanges}
                    variant="outline" 
                    size="sm"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => setIsAdminMode(true)}
                  variant="outline" 
                  size="sm"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Customize
                </Button>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {proficiencyLevels.map((item, index) => (
              <div 
                key={index} 
                className="space-y-2 animate-slide-in-left hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    {isAdminMode && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateSkillLevel(index, -5)}
                          className="h-6 w-6 p-0"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateSkillLevel(index, 5)}
                          className="h-6 w-6 p-0"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </>
                    )}
                    <span className="text-muted-foreground min-w-[3rem] text-right">{item.level}%</span>
                  </div>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-2000 ease-out animate-pulse-glow relative"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 200 + 1000}ms`
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  </div>
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