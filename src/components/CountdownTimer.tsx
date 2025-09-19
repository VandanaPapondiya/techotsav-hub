import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  // Set hackathon date (modify this date as needed)
  const hackathonDate = new Date("2024-12-15T09:00:00");
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = hackathonDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [hackathonDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-2xl font-display text-center mb-4">
        Event Starts In
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <Card key={unit.label} className="glass glow-primary p-6 text-center animate-scale-in" 
                style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="text-3xl md:text-4xl font-display gradient-text mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              {unit.label}
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          December 15, 2024 • 9:00 AM IST
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Acropolis Institute of Technology and Research
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;