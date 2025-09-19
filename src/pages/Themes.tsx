import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, Users, Trophy, Code2, Lightbulb, Shield, Heart, Leaf, Zap } from "lucide-react";
import { useState } from "react";

const themesData = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Build intelligent solutions using AI, ML, and deep learning technologies",
    icon: Lightbulb,
    difficulty: "Advanced",
    participants: 120,
    timeLimit: "48 hours",
    prize: "₹50,000",
    tags: ["AI", "ML", "Python", "TensorFlow"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Create modern, responsive web applications with cutting-edge frameworks",
    icon: Code2,
    difficulty: "Intermediate",
    participants: 85,
    timeLimit: "48 hours",
    prize: "₹40,000",
    tags: ["React", "Node.js", "MongoDB", "API"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Cybersecurity",
    description: "Develop security solutions to protect digital infrastructure",
    icon: Shield,
    difficulty: "Advanced",
    participants: 65,
    timeLimit: "48 hours",
    prize: "₹45,000",
    tags: ["Security", "Encryption", "Blockchain", "Networks"],
    color: "from-red-500 to-orange-500"
  },
  {
    id: 4,
    title: "Healthcare Tech",
    description: "Innovation in healthcare through technology and digital solutions",
    icon: Heart,
    difficulty: "Intermediate",
    participants: 90,
    timeLimit: "48 hours",
    prize: "₹35,000",
    tags: ["Healthcare", "IoT", "Mobile", "Data"],
    color: "from-green-500 to-teal-500"
  },
  {
    id: 5,
    title: "Sustainability & Environment",
    description: "Tech solutions for environmental challenges and sustainability",
    icon: Leaf,
    difficulty: "Beginner",
    participants: 75,
    timeLimit: "48 hours",
    prize: "₹30,000",
    tags: ["Environment", "IoT", "Sensors", "Analytics"],
    color: "from-green-400 to-blue-500"
  },
  {
    id: 6,
    title: "Energy & Smart Cities",
    description: "Smart solutions for energy management and urban development",
    icon: Zap,
    difficulty: "Advanced",
    participants: 55,
    timeLimit: "48 hours",
    prize: "₹40,000",
    tags: ["IoT", "Smart City", "Energy", "Automation"],
    color: "from-yellow-500 to-orange-500"
  }
];

const Themes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredThemes = themesData.filter(theme => {
    const matchesSearch = theme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         theme.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "All" || theme.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display gradient-text mb-4">
              Hackathon Themes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your track and build innovative solutions that make a difference
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 animate-slide-up">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search themes, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
            
            <div className="flex gap-2">
              {["All", "Beginner", "Intermediate", "Advanced"].map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={selectedDifficulty === difficulty ? "glow-primary" : ""}
                >
                  {difficulty}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="glass text-center p-4">
              <div className="text-2xl font-display gradient-text mb-1">6</div>
              <div className="text-sm text-muted-foreground">Total Themes</div>
            </Card>
            <Card className="glass text-center p-4">
              <div className="text-2xl font-display gradient-text mb-1">490+</div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </Card>
            <Card className="glass text-center p-4">
              <div className="text-2xl font-display gradient-text mb-1">₹2.4L</div>
              <div className="text-sm text-muted-foreground">Total Prizes</div>
            </Card>
            <Card className="glass text-center p-4">
              <div className="text-2xl font-display gradient-text mb-1">48</div>
              <div className="text-sm text-muted-foreground">Hours to Code</div>
            </Card>
          </div>

          {/* Themes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme, index) => (
              <Card key={theme.id} className="glass glow-primary hover:scale-105 transition-all duration-300 animate-scale-in" 
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4`}>
                    <theme.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{theme.title}</CardTitle>
                    <Badge className={getDifficultyColor(theme.difficulty)}>
                      {theme.difficulty}
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-muted-foreground">
                    {theme.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {theme.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm text-muted-foreground mb-4">
                    <div className="flex flex-col items-center">
                      <Users className="w-4 h-4 mb-1" />
                      <span>{theme.participants}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Clock className="w-4 h-4 mb-1" />
                      <span>{theme.timeLimit}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Trophy className="w-4 h-4 mb-1" />
                      <span>{theme.prize}</span>
                    </div>
                  </div>

                  <Button className="w-full glow-primary" variant="default">
                    Select Theme
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-display mb-2">No themes found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Themes;