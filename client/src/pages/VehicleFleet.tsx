import { useState } from "react";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Calendar } from "lucide-react";
import vehicleWrap1 from "@assets/2025-09-23 (19)_1760978035651.webp";
import vehicleWrap2 from "@assets/2025-09-23 (18)_1760978035651.webp";
import vehicleWrap3 from "@assets/2025-09-23 (17)_1760978035651.webp";
import vehicleWrap4 from "@assets/2025-09-23 (16)_1760978035652.webp";
import vehicleWrap5 from "@assets/2025-09-23 (15)_1760978035652.webp";
import vehicleWrap6 from "@assets/2025-09-23 (14)_1760978035652.webp";
import vehicleWrap7 from "@assets/2025-09-23 (13)_1760978035652.webp";
import vehicleWrap8 from "@assets/2025-09-23 (12)_1760978035652.webp";
import vehicleWrap9 from "@assets/2025-09-23 (11)_1760978035652.webp";
import vehicleWrap10 from "@assets/2025-09-23 (10)_1760978035652.webp";
import vehicleWrap11 from "@assets/2025-09-23 (9)_1760978035653.webp";
import vehicleWrap12 from "@assets/2025-09-23 (8)_1760978035653.webp";
import vehicleWrap13 from "@assets/2025-09-23 (7)_1760978035653.webp";
import vehicleWrap14 from "@assets/2025-09-23 (6)_1760978035653.webp";
import vehicleWrap15 from "@assets/2025-09-23 (5)_1760978035653.webp";
import vehicleWrap16 from "@assets/2025-09-23 (4)_1760978035653.webp";
import vehicleWrap17 from "@assets/2025-09-23 (3)_1760978035653.webp";
import vehicleWrap18 from "@assets/2025-09-23 (2)_1760978035654.webp";
import vehicleWrap19 from "@assets/IMG_0570_1761061578579.jpeg";
import vehicleWrap20 from "@assets/IMG_3710_1761061601047.jpeg";
import vehicleWrap21 from "@assets/IMG_4505_1761061640974.jpeg";
import vehicleWrap22 from "@assets/IMG_4620_1761061655016.jpg";
import vehicleWrap23 from "@assets/IMG_5241 2_1761061665438.jpeg";
import vehicleWrap24 from "@assets/IMG_5443_1761061672419.jpeg";
import vehicleWrap25 from "@assets/IMG_6162_1761061680299.jpeg";
import vehicleWrap26 from "@assets/IMG_9562_1761061693260.jpeg";
import vehicleWrap27 from "@assets/qtimjas02_1761061699635.jpg";
import vehicleWrap28 from "@assets/IMG_4991_1761512515510.jpg";
import vehicleWrap29 from "@assets/IMG_5003_1761512527268.jpg";

const vehicleProjects = [
  { id: 1, title: "Food Truck Wrap", category: "Vehicle Wrap", image: vehicleWrap1 },
  { id: 2, title: "L'Oréal Fleet Van", category: "Fleet Wrap", image: vehicleWrap2 },
  { id: 3, title: "Commercial Van Wrap", category: "Vehicle Wrap", image: vehicleWrap3 },
  { id: 4, title: "Business Van Graphics", category: "Fleet Wrap", image: vehicleWrap4 },
  { id: 5, title: "Service Vehicle Wrap", category: "Vehicle Wrap", image: vehicleWrap5 },
  { id: 6, title: "Delivery Van Branding", category: "Fleet Wrap", image: vehicleWrap6 },
  { id: 7, title: "Company Vehicle Wrap", category: "Vehicle Wrap", image: vehicleWrap7 },
  { id: 8, title: "Professional Van Wrap", category: "Fleet Wrap", image: vehicleWrap8 },
  { id: 9, title: "Commercial Fleet Graphics", category: "Fleet Wrap", image: vehicleWrap9 },
  { id: 10, title: "Mobile Advertising Wrap", category: "Vehicle Wrap", image: vehicleWrap10 },
  { id: 11, title: "Business Fleet Wrap", category: "Fleet Wrap", image: vehicleWrap11 },
  { id: 12, title: "Service Fleet Graphics", category: "Vehicle Wrap", image: vehicleWrap12 },
  { id: 13, title: "Professional Fleet Wrap", category: "Fleet Wrap", image: vehicleWrap13 },
  { id: 14, title: "Company Fleet Graphics", category: "Vehicle Wrap", image: vehicleWrap14 },
  { id: 15, title: "Branded Vehicle Wrap", category: "Vehicle Wrap", image: vehicleWrap15 },
  { id: 16, title: "Commercial Van Graphics", category: "Fleet Wrap", image: vehicleWrap16 },
  { id: 17, title: "Service Van Branding", category: "Vehicle Wrap", image: vehicleWrap17 },
  { id: 18, title: "Business Vehicle Wrap", category: "Fleet Wrap", image: vehicleWrap18 },
  { id: 19, title: "Professional Vehicle Graphics", category: "Vehicle Wrap", image: vehicleWrap19 },
  { id: 20, title: "Company Van Wrap", category: "Fleet Wrap", image: vehicleWrap20 },
  { id: 21, title: "Branded Fleet Van", category: "Vehicle Wrap", image: vehicleWrap21 },
  { id: 22, title: "Commercial Vehicle Wrap", category: "Fleet Wrap", image: vehicleWrap22 },
  { id: 23, title: "Service Vehicle Graphics", category: "Vehicle Wrap", image: vehicleWrap23 },
  { id: 24, title: "Business Fleet Vehicle", category: "Fleet Wrap", image: vehicleWrap24 },
  { id: 25, title: "Professional Fleet Graphics", category: "Vehicle Wrap", image: vehicleWrap25 },
  { id: 26, title: "Company Vehicle Graphics", category: "Fleet Wrap", image: vehicleWrap26 },
  { id: 27, title: "Branded Commercial Van", category: "Vehicle Wrap", image: vehicleWrap27 },
  { id: 28, title: "Mazzella's Gourmet Market - Rear View", category: "Fleet Wrap", image: vehicleWrap28 },
  { id: 29, title: "Mazzella's Gourmet Market - Side Graphics", category: "Fleet Wrap", image: vehicleWrap29 },
];

export default function VehicleFleet() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);
  const [, setLocation] = useLocation();

  const navigateToPage = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle & Fleet Wraps</h1>
          </div>

          <div className="mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform your vehicles into mobile billboards<br />with our professional vehicle wrap services</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the option that fits you best:
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Start My Wrap Project Today</h3>
                <p className="text-muted-foreground mb-6">
                  Opens the quote and upload form where you can share photos and project details.
                </p>
                <Button size="lg" onClick={() => navigateToPage("/upload")} data-testid="button-start-wrap-project">
                  Start My Project
                </Button>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Book a 15-Minute Project Call</h3>
                <p className="text-muted-foreground mb-6">
                  Calendar-based consultation for fleet, large sign, or CNC clients who need a quick consult.
                </p>
                <Button size="lg" asChild data-testid="button-book-project-call">
                  <a href="mailto:info@quarrytex.com?subject=Request%20for%2015-Minute%20Project%20Call">
                    Book a Call
                  </a>
                </Button>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                className="group relative overflow-hidden rounded-lg border bg-card hover-elevate cursor-pointer"
                data-testid={`card-vehicle-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      
      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ""}
        imageAlt={selectedImage?.alt || ""}
      />
    </div>
  );
}
