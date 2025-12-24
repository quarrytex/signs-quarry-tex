import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "wouter";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/95 backdrop-blur-sm border-t shadow-lg" data-testid="cookie-consent-banner">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Cookie Notice</h3>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking "Accept", you consent to our use of cookies.{" "}
              <Link href="/privacy">
                <button className="text-primary hover:underline" data-testid="link-privacy-from-consent">
                  Learn more
                </button>
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="flex-1 md:flex-none"
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none"
              data-testid="button-accept-cookies"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
