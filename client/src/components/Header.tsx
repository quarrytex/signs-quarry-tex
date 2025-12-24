import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import logoWhite from "@assets/quarry tex - white logo_1760795091572.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location, setLocation] = useLocation();

  const isPortfolioPage = location !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const scrollToContact = () => {
    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const navigateHome = () => {
    setLocation("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    {
      id: "vehicle-wraps",
      title: "Vehicle Wraps",
      subtitle: "Get noticed everywhere",
      ctaText: "Request a vehicle wrap quote",
      items: [
        "Full and partial wraps for cars, vans, box trucks, and fleets designed to turn daily driving into 24/7 advertising.",
        "Commercial fleet branding packages with volume pricing for contractors, delivery, and service companies.",
        "Add-ons: window perf, reflective accents, and removable promo graphics for seasonal campaigns."
      ],
      path: "/vehicle-fleet"
    },
    {
      id: "signs",
      title: "Signs",
      subtitle: "Signs that sell your business",
      ctaText: "Get pricing on storefront signs",
      items: [
        "Illuminated signs, channel letters, and dimensional logos engineered to stand out from the street.",
        "Exterior sign packages for plazas, stand-alone buildings, and monument signs with permit-ready artwork.",
        "Interior sign bundles: lobby logos, wall graphics, wayfinding, and door signs for a consistent branded look."
      ],
      path: "/signs"
    },
    {
      id: "cnc",
      title: "CNC Letters & Logos",
      subtitle: "CNC-cut letters, logos, and panels",
      ctaText: "Request a CNC cutting estimate",
      items: [
        "Precision-cut letters, logos, and custom shapes in acrylic, aluminum, HDU, and more for premium dimensional signage.",
        "Routed sign panels and faces for cabinets, monuments, and post-and-panel systems, ready to install or resell.",
        "Trade services: wholesale CNC cutting for printers, installers, and agencies needing fast, accurate parts."
      ],
      path: "/cnc-letters"
    },
    {
      id: "design-install",
      title: "Design + Install",
      subtitle: "Design + install bundles",
      ctaText: "Book design-to-install service",
      items: [
        "Professional layout, proofing, and revisions included with most wrap and sign projects, so quotes reflect the complete job.",
        "On-site survey and installation options so your quote can include everything from measurement to final cleanup."
      ],
      path: null
    }
  ];

  const textColorClass = !isScrolled && !isPortfolioPage ? "text-white" : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isPortfolioPage ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <button onClick={navigateHome} className="flex items-center hover-elevate p-2 rounded-md transition-all duration-300" data-testid="link-home">
              <img 
                src={logoWhite} 
                alt="Quarry Tex Logo" 
                className={`h-16 transition-all duration-300 ${isScrolled || isPortfolioPage ? "brightness-0 dark:brightness-100" : ""}`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {menuItems.map((menu) => (
              <div 
                key={menu.id} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === menu.id ? null : menu.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === menu.id ? null : menu.id);
                    }
                  }}
                  aria-expanded={activeDropdown === menu.id}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded-md ${textColorClass}`}
                  data-testid={`nav-${menu.id}`}
                >
                  {menu.title}
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === menu.id ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                <div 
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                    activeDropdown === menu.id ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  style={{ minWidth: "320px" }}
                >
                  <div className="bg-background border rounded-lg shadow-lg p-4">
                    <div className="mb-3">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{menu.subtitle}</p>
                      <Button 
                        size="sm" 
                        asChild
                        className="w-full"
                        data-testid={`cta-${menu.id}`}
                      >
                        <a href="https://api.leadconnectorhq.com/widget/form/aY4qbWO8Y87Fw5aGqCQi" target="_blank" rel="noopener noreferrer">
                          {menu.ctaText}
                        </a>
                      </Button>
                    </div>
                    <ul className="space-y-3">
                      {menu.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-3">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {menu.path && (
                      <button
                        onClick={() => navigateToPage(menu.path!)}
                        className="mt-4 text-sm text-primary hover:underline font-medium"
                        data-testid={`view-${menu.id}`}
                      >
                        View Portfolio
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              asChild
              className="hidden md:inline-flex"
              data-testid="button-get-quote"
            >
              <a href="https://api.leadconnectorhq.com/widget/form/aY4qbWO8Y87Fw5aGqCQi" target="_blank" rel="noopener noreferrer">
                Get a Quote
              </a>
            </Button>
            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 hover-elevate rounded-md transition-colors ${textColorClass}`}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t pt-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((menu) => (
                <div key={menu.id} className="border-b pb-3">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === menu.id ? null : menu.id)}
                    className="flex items-center justify-between w-full py-2 text-left font-medium"
                    data-testid={`nav-${menu.id}-mobile`}
                  >
                    {menu.title}
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === menu.id ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === menu.id && (
                    <div className="mt-2 pl-4 space-y-2">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{menu.subtitle}</p>
                      <Button 
                        size="sm" 
                        asChild
                        className="w-full"
                        data-testid={`cta-${menu.id}-mobile`}
                      >
                        <a href="https://api.leadconnectorhq.com/widget/form/aY4qbWO8Y87Fw5aGqCQi" target="_blank" rel="noopener noreferrer">
                          {menu.ctaText}
                        </a>
                      </Button>
                      <ul className="space-y-2 mt-3">
                        {menu.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                      {menu.path && (
                        <button
                          onClick={() => navigateToPage(menu.path!)}
                          className="mt-2 text-sm text-primary hover:underline font-medium"
                          data-testid={`view-${menu.id}-mobile`}
                        >
                          View Portfolio
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Button 
                asChild
                className="mt-4"
                data-testid="button-get-quote-mobile"
              >
                <a href="https://api.leadconnectorhq.com/widget/form/aY4qbWO8Y87Fw5aGqCQi" target="_blank" rel="noopener noreferrer">
                  Get a Quote
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
