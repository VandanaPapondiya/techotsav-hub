import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Trophy, Coffee } from "lucide-react";
import Navigation from "@/components/Navigation";

const Schedule = () => {
  const scheduleData = [
    {
      day: "Day 1 - September 18, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "Registration & Check-in",
          description: "Welcome participants, distribute swag bags and briefing materials",
          icon: Users,
          type: "registration"
        },
        {
          time: "10:00 AM",
          title: "Opening Ceremony",
          description: "Welcome address, hackathon rules, and theme presentations",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "11:00 AM",
          title: "Team Formation & Networking",
          description: "Find your teammates and start brainstorming",
          icon: Users,
          type: "networking"
        },
        {
          time: "12:00 PM",
          title: "Hacking Begins!",
          description: "Official start of the 30-hour coding marathon",
          icon: Calendar,
          type: "coding"
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Fuel up for the coding session ahead",
          icon: Coffee,
          type: "break"
        },
        {
          time: "6:00 PM",
          title: "Dinner & Networking",
          description: "Connect with mentors and fellow hackers",
          icon: Coffee,
          type: "break"
        }
      ]
    },
    {
      day: "Day 2 - September 19, 2025",
      events: [
        {
          time: "8:00 AM",
          title: "Breakfast",
          description: "Start the final day with energy",
          icon: Coffee,
          type: "break"
        },
        {
          time: "12:00 PM",
          title: "Submission Deadline",
          description: "Final submissions due - no extensions!",
          icon: Trophy,
          type: "deadline"
        },
        {
          time: "1:00 PM",
          title: "Lunch Break",
          description: "Relax before the presentations",
          icon: Coffee,
          type: "break"
        },
        {
          time: "2:00 PM",
          title: "Project Presentations",
          description: "Teams present their solutions to judges",
          icon: Users,
          type: "presentation"
        },
        {
          time: "4:00 PM",
          title: "Judging & Deliberation",
          description: "Judges evaluate projects and select winners",
          icon: Trophy,
          type: "judging"
        },
        {
          time: "5:00 PM",
          title: "Closing Ceremony & Awards",
          description: "Winner announcements and prize distribution",
          icon: Trophy,
          type: "ceremony"
        },
        {
          time: "6:00 PM",
          title: "Networking & Wrap-up",
          description: "Connect with industry professionals and celebrate",
          icon: Users,
          type: "networking"
        }
      ]
    }
  ];

  const getEventBadgeColor = (type: string) => {
    switch (type) {
      case "registration": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "ceremony": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "networking": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "coding": return "bg-primary/20 text-primary border-primary/30";
      case "break": return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "deadline": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "presentation": return "bg-indigo-500/20 text-indigo-400 border-indigo-500/30";
      case "judging": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
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
              Event Schedule
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your complete guide to Tech-O-Tsav 2025. Don't miss any important events!
            </p>
          </div>

          {/* Schedule Timeline */}
          <div className="space-y-8">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    {day.day}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                </div>

                <div className="grid gap-4 md:gap-6">
                  {day.events.map((event, eventIndex) => (
                    <Card key={eventIndex} className="glass border-border/50 hover:border-primary/30 transition-all">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          <div className="flex items-center gap-3 md:w-48">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <event.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="font-mono text-primary font-semibold">
                              {event.time}
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">
                                {event.title}
                              </h3>
                              <Badge className={`w-fit ${getEventBadgeColor(event.type)}`}>
                                {event.type}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Important Notes */}
          <Card className="mt-12 glass border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Important Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>• All times are in Indian Standard Time (IST)</p>
              <p>• Meals and refreshments are provided throughout the event</p>
              <p>• Mentors will be available during coding hours for guidance</p>
              <p>• Wi-Fi credentials and power outlets will be available at all workstations</p>
              <p>• Emergency contact: +91 8103126630</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Schedule;