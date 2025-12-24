import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";
import signImage1 from "@assets/IMG_5020_1761062516203.jpeg";
import signImage2 from "@assets/IMG_5001_1761062519468.jpeg";
import signImage3 from "@assets/IMG_4815_1761062524585.jpeg";
import signImage4 from "@assets/IMG_4572_1761062530703.jpeg";
import signImage5 from "@assets/IMG_4012_1761062536031.jpeg";
import signImage6 from "@assets/IMG_3969_1761062540564.jpeg";
import signImage7 from "@assets/IMG_3923_1761062544138.jpg";

const signProjects = [
  { id: 1, title: "Custom Dimensional Letters", category: "Dimensional Sign", image: signImage1 },
  { id: 2, title: "Business Signage Installation", category: "Dimensional Sign", image: signImage2 },
  { id: 3, title: "Corporate Logo Signs", category: "Dimensional Sign", image: signImage3 },
  { id: 4, title: "Office Wayfinding Signs", category: "Dimensional Sign", image: signImage4 },
  { id: 5, title: "Branded Dimensional Signage", category: "Dimensional Sign", image: signImage5 },
  { id: 6, title: "Professional Office Signs", category: "Dimensional Sign", image: signImage6 },
  { id: 7, title: "Reception Desk Signage", category: "Dimensional Sign", image: signImage7 },
];

export default function Signs() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Signs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Make a lasting impression with custom dimensional letters and professional signage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage({ src: project.image, alt: project.title })}
                className="group relative overflow-hidden rounded-lg border bg-card hover-elevate cursor-pointer"
                data-testid={`card-sign-${project.id}`}
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
