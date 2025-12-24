import { MapPin, FileText, CalendarCheck, Wrench, Upload, Calendar } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import vehicleImage from "@assets/2025-09-23 (19)_1760978035651.webp";
import glassImage from "@assets/IMG_1661_1760798734455.png";
import signsImage from "@assets/IMG_5020_1761062516203.jpeg";

export function About() {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: "Vehicle & Fleet Wraps",
      image: vehicleImage,
      path: "/vehicle-fleet"
    },
    {
      title: "Glass Wraps",
      image: glassImage,
      path: "/glass-wraps"
    },
    {
      title: "Signs",
      image: signsImage,
      path: "/signs"
    }
  ];

  const steps = [
    {
      icon: MapPin,
      title: "Free Site Visit",
      number: 1
    },
    {
      icon: FileText,
      title: "Free Quote & Proof",
      number: 2
    },
    {
      icon: CalendarCheck,
      title: "Approve & Schedule",
      number: 3
    },
    {
      icon: Wrench,
      title: "Professional Install",
      number: 4
    }
  ];

  const navigateToPage = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Vehicle & Wrap Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional branding solutions to make your business stand out
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <div
              key={service.title}
              onClick={() => navigateToPage(service.path)}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-elevate"
              data-testid={`service-card-${service.path.replace("/", "")}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Upload Photos for a Free Mockup</h3>
            <p className="text-muted-foreground mb-6">
              Share images of your vehicles or storefronts so we can send visual proofs with your quote.
            </p>
            <Button size="lg" onClick={() => navigateToPage("/upload")} data-testid="button-upload-mockup">
              Upload Photos
            </Button>
          </Card>

          <Card className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Book a 15-Minute Project Call</h3>
            <p className="text-muted-foreground mb-6">
              Calendar-based consultation for higher-value projects like fleets, large signs, and CNC programs.
            </p>
            <Button size="lg" data-testid="button-book-call">
              Book a Call
            </Button>
          </Card>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center" data-testid={`process-step-${step.number}`}>
                <div className="relative inline-flex items-center justify-center mb-6">
                  <svg className="w-28 h-28" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-primary/20"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray="212"
                      strokeDashoffset="53"
                      strokeLinecap="round"
                      className="text-primary"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1">{step.number}. {step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
