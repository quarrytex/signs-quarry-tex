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

type Category = "all" | "vehicle" | "glass" | "dimensional";

interface Project {
  id: number;
  title: string;
  category: Category;
  image: string;
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const projects: Project[] = [
    { id: 3, title: "Restaurant Window Wrap", category: "glass", image: glassImage1 },
    { id: 4, title: "Storefront Branding", category: "glass", image: glassImage2 },
    { id: 5, title: "Commercial Window Graphics", category: "glass", image: glassImage3 },
    { id: 6, title: "Retail Window Wrap", category: "glass", image: glassImage4 },
    { id: 7, title: "Business Storefront Design", category: "glass", image: glassImage5 },
    { id: 8, title: "Custom Window Branding", category: "glass", image: glassImage6 },
    { id: 9, title: "Office Window Installation", category: "glass", image: glassImage7 },
  ];

  const categories = [
    { value: "all" as Category, label: "All Projects" },
    { value: "vehicle" as Category, label: "Vehicle Wraps" },
    { value: "glass" as Category, label: "Window Wraps" },
    { value: "dimensional" as Category, label: "Signs" },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Work
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
