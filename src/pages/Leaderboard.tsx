import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star, Users, Code, Clock, Target } from "lucide-react";
import Navigation from "@/components/Navigation";

const Leaderboard = () => {
  // Mock leaderboard data - in a real app, this would come from your backend
  const teams = [
    {
      rank: 1,
      name: "CodeCrafters",
      members: ["Arjun Sharma", "Priya Patel", "Rohit Kumar", "Sneha Singh"],
      project: "AI-Powered Healthcare Assistant",
      score: 95,
      theme: "Healthcare Innovation",
      lastUpdate: "2 hours ago"
    },
    {
      rank: 2,
      name: "TechTitans",
      members: ["Vikash Gupta", "Anita Rao", "Karan Joshi"],
      project: "Smart City Traffic Management",
      score: 92,
      theme: "Smart Cities",
      lastUpdate: "1 hour ago"
    },
    {
      rank: 3,
      name: "InnovatorsHub",
      members: ["Rahul Verma", "Kavya Nair", "Amit Mishra", "Pooja Agarwal"],
      project: "Blockchain-Based Voting System",
      score: 89,
      theme: "Blockchain & Security",
      lastUpdate: "3 hours ago"
    },
    {
      rank: 4,
      name: "DevDynamos",
      members: ["Sachin Tendulkar", "Ravi Singh", "Meera Jain"],
      project: "EdTech Learning Platform",
      score: 87,
      theme: "Education Technology",
      lastUpdate: "30 minutes ago"
    },
    {
      rank: 5,
      name: "ByteBuilders",
      members: ["Harsh Agrawal", "Neha Kapoor", "Sanjay Yadav", "Tanya Sharma"],
      project: "Sustainable Energy Monitor",
      score: 85,
      theme: "Sustainability",
      lastUpdate: "4 hours ago"
    }
  ];

  const stats = [
    {
      title: "Total Teams",
      value: "156",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Projects Submitted",
      value: "142",
      icon: Code,
      color: "text-green-400"
    },
    {
      title: "Hours Remaining", 
      value: "8",
      icon: Clock,
      color: "text-orange-400"
    },
    {
      title: "Themes",
      value: "6",
      icon: Target,
      color: "text-purple-400"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">{rank}</div>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      return "bg-gradient-to-r from-yellow-500 to-orange-500 text-white";
    } else if (rank <= 10) {
      return "bg-primary/20 text-primary border-primary/30";
    } else {
      return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display gradient-text mb-4">
              Live Leaderboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track the competition in real-time. Rankings update every 30 minutes based on judging criteria.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass border-border/50">
                <CardContent className="p-4 text-center">
                  <div className={`mx-auto mb-2 w-8 h-8 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leaderboard Table */}
          <Card className="glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Current Rankings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teams.map((team, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-all hover:border-primary/30 ${
                      team.rank === 1 ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30' :
                      team.rank === 2 ? 'bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-gray-500/30' :
                      team.rank === 3 ? 'bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border-amber-600/30' :
                      'bg-muted/20 border-border/50'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Rank */}
                      <div className="flex items-center gap-3 md:w-20">
                        {getRankIcon(team.rank)}
                        <Badge className={getRankBadge(team.rank)}>
                          #{team.rank}
                        </Badge>
                      </div>

                      {/* Team Info */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {team.name}
                          </h3>
                          <Badge variant="outline" className="w-fit">
                            {team.theme}
                          </Badge>
                        </div>
                        
                        <p className="text-sm font-medium text-muted-foreground">
                          {team.project}
                        </p>
                        
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Team:</span> {team.members.join(", ")}
                        </div>
                      </div>

                      {/* Score */}
                      <div className="text-center md:w-24">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {team.score}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Score
                        </div>
                      </div>

                      {/* Last Update */}
                      <div className="text-xs text-muted-foreground md:w-24 text-right">
                        Updated {team.lastUpdate}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Judging Criteria */}
          <Card className="mt-8 glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                Judging Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Innovation & Creativity (30%)</h4>
                  <p className="text-muted-foreground">Uniqueness of the solution and creative problem-solving approach</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Implementation (40%)</h4>
                  <p className="text-muted-foreground">Code quality, functionality, and technical complexity</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Impact & Feasibility (30%)</h4>
                  <p className="text-muted-foreground">Real-world applicability and potential for positive impact</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;