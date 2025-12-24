import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";

const cncProjects = [
  { id: 1, title: "Acrylic Cut Letters", category: "CNC Letters" },
  { id: 2, title: "Aluminum Logo Panel", category: "CNC Logos" },
  { id: 3, title: "HDU Dimensional Sign", category: "CNC Signs" },
  { id: 4, title: "Routed Cabinet Face", category: "CNC Panels" },
  { id: 5, title: "Custom Metal Letters", category: "CNC Letters" },
  { id: 6, title: "Monument Sign Panel", category: "CNC Panels" },
];

export default function CNCLetters() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CNC Letters & Logos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision-cut letters, logos, and custom shapes for premium dimensional signage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cncProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg border bg-card hover-elevate cursor-pointer"
                data-testid={`card-cnc-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{project.id}</span>
                    </div>
                    <p className="text-sm font-medium">{project.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{project.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Portfolio images coming soon. Contact us for samples and quotes.
            </p>
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
