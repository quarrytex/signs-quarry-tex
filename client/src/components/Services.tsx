import { ServiceCard } from "./ServiceCard";
import { Truck, Store, Box } from "lucide-react";
import vehicleImage from "@assets/stock_images/professional_vehicle_78e299dc.jpg";
import glassImage from "@assets/stock_images/office_glass_partiti_fb31fcd5.jpg";
import dimensionalImage from "@assets/stock_images/3d_dimensional_acryl_31869fca.jpg";

export function Services() {
  const services = [
    {
      title: "Vehicle & Fleet Wraps",
      description: "Transform your vehicles into moving advertisements with high-impact vinyl graphics",
      image: vehicleImage,
      icon: Truck,
      features: [
        "Full and partial vehicle wraps",
        "Fleet branding solutions",
        "Commercial truck graphics",
        "Durable, weather-resistant materials"
      ]
    },
    {
      title: "Store & Office Glass Wraps",
      description: "Enhance privacy and branding with translucent vinyl window and glass wraps",
      image: glassImage,
      icon: Store,
      features: [
        "Window graphics and privacy films",
        "Storefront branding",
        "Office glass partition wraps",
        "Frosted and translucent designs"
      ]
    },
    {
      title: "Dimensional Letters & Logos",
      description: "Make a lasting impression with custom CNC-cut dimensional signage",
      image: dimensionalImage,
      icon: Box,
      features: [
        "3D acrylic and metal letters",
        "Custom logo fabrication",
        "Exterior and interior mounting",
        "Illuminated and non-illuminated options"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Vehicle Wrap & Sign Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive sign and wrap solutions to elevate your brand visibility
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
