import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Location = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Acropolis Institute coordinates
  const longitude = 77.3910;
  const latitude = 23.2599;

  useEffect(() => {
    if (!mapContainer.current) return;

    // You'll need to replace this with your Mapbox access token
    // Get your token from https://mapbox.com/
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [longitude, latitude],
      zoom: 15,
      pitch: 45,
    });

    // Add marker for the institute
    const marker = new mapboxgl.Marker({
      color: '#a855f7'
    })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-bold text-purple-600">Tech-O-Tsav 2024</h3>
              <p class="text-sm">Acropolis Institute of Technology and Research</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [longitude, latitude]);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Acropolis Institute of Technology and Research, Manglia Square, Bypass Road, Indore, Madhya Pradesh 453771"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 731 4243333"
    },
    {
      icon: Mail,
      title: "Email",
      content: "tech-o-tsav@acropolis.in"
    },
    {
      icon: Clock,
      title: "Event Hours",
      content: "December 15-16, 2024 • 9:00 AM to 6:00 PM"
    }
  ];

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on campus",
      time: "20 min from city center"
    },
    {
      icon: Train,
      title: "By Train",
      description: "Indore Junction Railway Station",
      time: "25 min by taxi"
    },
    {
      icon: Plane,
      title: "By Air",
      description: "Devi Ahilya Bai Holkar Airport",
      time: "15 min by taxi"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display gradient-text mb-4">
              Event Location
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us at Acropolis Institute of Technology and Research, Indore
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="space-y-6 animate-slide-up">
              <Card className="glass overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Interactive Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 bg-muted/50 flex items-center justify-center">
                    <div ref={mapContainer} className="w-full h-full" />
                    {mapboxgl.accessToken === 'YOUR_MAPBOX_ACCESS_TOKEN' && (
                      <div className="absolute inset-0 bg-muted/80 flex flex-col items-center justify-center p-4 text-center">
                        <MapPin className="w-12 h-12 text-primary mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Interactive Map</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          To enable the interactive map, you'll need to add your Mapbox access token.
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer">
                            Get Mapbox Token <ExternalLink className="ml-2 w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Transport Options */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>How to Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transportOptions.map((option, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{option.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{option.description}</p>
                          <p className="text-xs text-primary font-medium">{option.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{info.title}</h4>
                          <p className="text-sm text-muted-foreground">{info.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start glow-primary" asChild>
                      <a href="https://www.google.com/maps/dir//Acropolis+Institute+Of+Technology+And+Research+-+AITR,+Bypass+Road,+Square,+Manglaya+Sadak,+Indore,+Madhya+Pradesh+453771/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x39631cf455b4cec3:0x426141aa8141f7a5?sa=X&ved=1t:57443&ictx=111" 
                         target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 w-4 h-4" />
                        Get Directions
                        <ExternalLink className="ml-auto w-4 h-4" />
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:+917314243333">
                        <Phone className="mr-2 w-4 h-4" />
                        Call Venue
                      </a>
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:tech-o-tsav@acropolis.in">
                        <Mail className="mr-2 w-4 h-4" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Venue Highlights */}
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Venue Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <div className="text-2xl font-display gradient-text mb-1">500+</div>
                      <div className="text-xs text-muted-foreground">Seating Capacity</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20">
                      <div className="text-2xl font-display gradient-text mb-1">24/7</div>
                      <div className="text-xs text-muted-foreground">High-Speed WiFi</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                      <div className="text-2xl font-display gradient-text mb-1">Free</div>
                      <div className="text-xs text-muted-foreground">Parking Available</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <div className="text-2xl font-display gradient-text mb-1">A/C</div>
                      <div className="text-xs text-muted-foreground">Climate Controlled</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Location;