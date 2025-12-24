import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";
import glassImage1 from "@assets/IMG_1661_1760798734455.png";
import glassImage2 from "@assets/IMG_1656_1760798910760.jpg";
import glassImage3 from "@assets/IMG_2488_1760799080997.jpeg";
import glassImage4 from "@assets/IMG_2489_1760799080997.jpeg";
import glassImage5 from "@assets/IMG_2570_1760799080998.jpeg";
import glassImage6 from "@assets/IMG_2624_1760799080998.jpeg";
import glassImage7 from "@assets/IMG_4903_1760799644431.jpg";
import glassImage8 from "@assets/IMG_5316_1761062335233.jpeg";
import glassImage9 from "@assets/qtijr01_1761062858741.jpg";

const glassProjects = [
  { id: 1, title: "Retail Storefront Graphics", category: "Window Wrap", image: glassImage1 },
  { id: 2, title: "Office Glass Branding", category: "Glass Wrap", image: glassImage2 },
  { id: 3, title: "Commercial Window Display", category: "Window Wrap", image: glassImage3 },
  { id: 4, title: "Business Storefront Wrap", category: "Glass Wrap", image: glassImage4 },
  { id: 5, title: "Professional Window Graphics", category: "Window Wrap", image: glassImage5 },
  { id: 6, title: "Store Window Branding", category: "Glass Wrap", image: glassImage6 },
  { id: 7, title: "Retail Glass Graphics", category: "Window Wrap", image: glassImage7 },
  { id: 8, title: "Commercial Glass Wrap", category: "Glass Wrap", image: glassImage8 },
  { id: 9, title: "Rose Boutique Storefront", category: "Window Wrap", image: glassImage9 },
];

export default function GlassWraps() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Glass Wraps</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enhance your storefront and office spaces with stunning window and glass graphics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {glassProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                className="group relative overflow-hidden rounded-lg border bg-card hover-elevate cursor-pointer"
                data-testid={`card-glass-${project.id}`}
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
