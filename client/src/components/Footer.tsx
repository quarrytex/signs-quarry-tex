import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { useLocation } from "wouter";
import logoWhite from "@assets/quarry tex - white logo_1760795091572.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <img 
              src={logoWhite} 
              alt="Quarry Tex Logo" 
              className="h-24 mb-1 -mt-6 brightness-0 dark:brightness-100"
            />
            <h3 className="font-semibold text-base mb-3">
              Sign & Wrap Systems
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional vehicle wraps, glass wraps and dimensional signage solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateToPage("/vehicle-fleet")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-vehicle-fleet">
                  Vehicle & Fleet
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/glass-wraps")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-glass-wraps">
                  Glass Wraps
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/signs")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-signs">
                  Signs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(908) 322-8488</li>
              <li>signs@quarrytex.com</li>
              <li>1998 US-22, Scotch Plains, NJ 07076</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigateToPage("/")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/cocreate")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-cocreate">
                  Cocreate
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/team")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-careers">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/terms")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage("/privacy")} className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-facebook" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-instagram" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-linkedin" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-youtube" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sign + Wrap Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
