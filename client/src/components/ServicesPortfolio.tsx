import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import glassImage1 from "@assets/IMG_1661_1760798734455.png";
import glassImage2 from "@assets/IMG_1656_1760798910760.jpg";
import glassImage3 from "@assets/IMG_2488_1760799080997.jpeg";
import glassImage4 from "@assets/IMG_2489_1760799080997.jpeg";
import glassImage5 from "@assets/IMG_2570_1760799080998.jpeg";
import glassImage6 from "@assets/IMG_2624_1760799080998.jpeg";
import glassImage7 from "@assets/IMG_4903_1760799644431.jpg";
import glassImage8 from "@assets/IMG_5316_1761062335233.jpeg";
import glassImage9 from "@assets/qtijr01_1761062858741.jpg";
import signImage1 from "@assets/IMG_5020_1761062516203.jpeg";
import signImage2 from "@assets/IMG_5001_1761062519468.jpeg";
import signImage3 from "@assets/IMG_4815_1761062524585.jpeg";
import signImage4 from "@assets/IMG_4572_1761062530703.jpeg";
import signImage5 from "@assets/IMG_4012_1761062536031.jpeg";
import signImage6 from "@assets/IMG_3969_1761062540564.jpeg";
import signImage7 from "@assets/IMG_3923_1761062544138.jpg";
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

type Category = "all" | "vehicle" | "glass" | "dimensional";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
}

export function ServicesPortfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("glass");

  const projects: Project[] = [
    // Vehicle Wraps
    { id: 100, title: "TRU Plumbing & Heating Box Truck Wrap", category: "vehicle", image: vehicleWrap1 },
    { id: 101, title: "TRU Plumbing & Heating Service Truck", category: "vehicle", image: vehicleWrap2 },
    { id: 102, title: "Versatile Welding LLC Box Truck", category: "vehicle", image: vehicleWrap3 },
    { id: 103, title: "Porto Rico Importing Co. Coffee Truck", category: "vehicle", image: vehicleWrap4 },
    { id: 104, title: "EKB Kitchen & Bath Remodelers Van", category: "vehicle", image: vehicleWrap5 },
    { id: 105, title: "Pavlov Media High-Speed Internet Van", category: "vehicle", image: vehicleWrap6 },
    { id: 106, title: "Proscape Sprinkler LLC Irrigation Van", category: "vehicle", image: vehicleWrap7 },
    { id: 107, title: "Craft Bagel Co. Delivery Van", category: "vehicle", image: vehicleWrap8 },
    { id: 108, title: "North Plainfield Public Works Truck", category: "vehicle", image: vehicleWrap9 },
    { id: 109, title: "Clearwater Pools Fleet Trucks", category: "vehicle", image: vehicleWrap10 },
    { id: 110, title: "UA Transport 53' Trailer Wrap", category: "vehicle", image: vehicleWrap11 },
    { id: 111, title: "Proscape Sprinkler Equipment Wrap", category: "vehicle", image: vehicleWrap12 },
    { id: 112, title: "Child's Play Challenge Courses Truck & Trailer", category: "vehicle", image: vehicleWrap13 },
    { id: 113, title: "The Urban Cone Ice Cream Van", category: "vehicle", image: vehicleWrap14 },
    { id: 114, title: "MJ and Sons Roofing & Siding Truck", category: "vehicle", image: vehicleWrap15 },
    { id: 115, title: "Round Valley Towing Service Truck", category: "vehicle", image: vehicleWrap16 },
    { id: 116, title: "Porto Rico Importing Co. Full Van Wrap", category: "vehicle", image: vehicleWrap17 },
    { id: 117, title: "Your Space Home Improvements Van", category: "vehicle", image: vehicleWrap18 },
    { id: 118, title: "Commercial Fleet Wrap", category: "vehicle", image: vehicleWrap19 },
    { id: 119, title: "Professional Service Vehicle", category: "vehicle", image: vehicleWrap20 },
    { id: 120, title: "Business Van Branding", category: "vehicle", image: vehicleWrap21 },
    { id: 121, title: "Tour Bus Wrap Installation", category: "vehicle", image: vehicleWrap22 },
    { id: 122, title: "Fleet Vehicle Graphics", category: "vehicle", image: vehicleWrap23 },
    { id: 123, title: "Commercial Truck Wrap", category: "vehicle", image: vehicleWrap24 },
    { id: 124, title: "Service Vehicle Branding", category: "vehicle", image: vehicleWrap25 },
    { id: 125, title: "Professional Fleet Wrap", category: "vehicle", image: vehicleWrap26 },
    { id: 126, title: "MJ and Sons Roofing Service Truck", category: "vehicle", image: vehicleWrap27 },
    
    // Window Wraps
    { id: 3, title: "Restaurant Window Wrap", category: "glass", image: glassImage1 },
    { id: 4, title: "Storefront Branding", category: "glass", image: glassImage2 },
    { id: 5, title: "Commercial Window Graphics", category: "glass", image: glassImage3 },
    { id: 6, title: "Retail Window Wrap", category: "glass", image: glassImage4 },
    { id: 7, title: "Business Storefront Design", category: "glass", image: glassImage5 },
    { id: 8, title: "Custom Window Branding", category: "glass", image: glassImage6 },
    { id: 9, title: "Office Window Installation", category: "glass", image: glassImage7 },
    { id: 10, title: "Boutique Window Graphics", category: "glass", image: glassImage8 },
    { id: 11, title: "Rose Boutique Storefront", category: "glass", image: glassImage9 },
    
    // Dimensional Signs
    { id: 200, title: "Custom Dimensional Letters", category: "dimensional", image: signImage1 },
    { id: 201, title: "Business Signage Installation", category: "dimensional", image: signImage2 },
    { id: 202, title: "Corporate Logo Signs", category: "dimensional", image: signImage3 },
    { id: 203, title: "Office Wayfinding Signs", category: "dimensional", image: signImage4 },
    { id: 204, title: "Branded Dimensional Signage", category: "dimensional", image: signImage5 },
    { id: 205, title: "Professional Office Signs", category: "dimensional", image: signImage6 },
    { id: 206, title: "Reception Desk Signage", category: "dimensional", image: signImage7 },
  ];

  const categories = [
    { value: "vehicle" as Category, label: "Vehicle Wraps" },
    { value: "glass" as Category, label: "Window Wraps" },
    { value: "dimensional" as Category, label: "Signs" },
  ];

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Services/Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our portfolio of transformative sign and wrap projects
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.value)}
                data-testid={`filter-${cat.value}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-md hover-elevate transition-all duration-300 cursor-pointer"
              data-testid={`project-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {categories.find(c => c.value === project.category)?.label}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
