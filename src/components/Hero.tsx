import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Users, Calendar, Trophy, MapPin, Sparkles } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Event Badge */}
          <Badge variant="secondary" className="px-6 py-2 text-sm font-medium animate-fade-in glow-secondary">
            <Sparkles className="w-4 h-4 mr-2" />
            National Level Hackathon 2024
          </Badge>

          {/* Main Heading */}
          <div className="space-y-4 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-display leading-tight">
              <span className="gradient-text">Tech-O-Tsav</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display text-muted-foreground">
              Code. Create. Conquer.
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join the ultimate tech showdown at Acropolis Institute of Technology and Research. 
            Build innovative solutions, compete with the best minds, and win amazing prizes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 my-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display gradient-text">500+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display gradient-text">48</div>
              <div className="text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display gradient-text">₹2L</div>
              <div className="text-sm text-muted-foreground">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-display gradient-text">15+</div>
              <div className="text-sm text-muted-foreground">Tracks</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="glow-primary font-medium px-8 py-3 text-lg">
              Register Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              View Schedule
              <Calendar className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <CountdownTimer />
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <Users className="w-4 h-4 mr-2" />
              Find Team
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <Trophy className="w-4 h-4 mr-2" />
              Prizes
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              <MapPin className="w-4 h-4 mr-2" />
              Venue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;