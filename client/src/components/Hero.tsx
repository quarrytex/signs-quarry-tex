import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import heroImage from "@assets/Screenshot_2025-12-23_at_8.17.48_PM_1766539152190.png";
import heroVideo from "@assets/Loreal reel video no sound_1761073300721.mp4";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showImage, setShowImage] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Simple play attempt when video is ready
    const attemptPlay = () => {
      video.play().catch(() => {
        // If autoplay fails, show image immediately
        setShowImage(true);
      });
    };

    // Transition to image after video ends or after 5 seconds
    const handleVideoEnd = () => {
      setShowImage(true);
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        setShowImage(true);
        video.pause();
      }
    };

    video.addEventListener('ended', handleVideoEnd);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Wait for video to be loaded enough
    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener('loadedmetadata', attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', attemptPlay);
      video.removeEventListener('ended', handleVideoEnd);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-44">
      {/* Video background - fades out after playing briefly */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${showImage ? 'opacity-0' : 'opacity-100'}`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Static image background - fades in after video */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Dark tint overlay - lighter when showing image so it can be seen */}
      <div className={`absolute inset-0 transition-all duration-1000 ${showImage ? 'bg-black/65' : 'bg-gradient-to-b from-black/75 via-black/65 to-black/80'}`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Sign & Wrap Systems
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl">in New Jersey</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          Vehicle & fleet wraps, store and office glass wraps, dimensional letters and logos
        </p>
        <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center">
          <div className="flex justify-center items-center w-full">
            <Button
              size="lg"
              asChild
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary/90 hover:bg-primary backdrop-blur-sm border border-primary-border w-full sm:w-auto"
              data-testid="button-hero-quote"
            >
              <a href="https://api.leadconnectorhq.com/widget/form/aY4qbWO8Y87Fw5aGqCQi" target="_blank" rel="noopener noreferrer">
                Get a Quote
                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center items-center w-full">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover-elevate p-2 rounded-full"
              data-testid="link-facebook"
              aria-label="Facebook"
            >
              <Facebook className="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover-elevate p-2 rounded-full"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover-elevate p-2 rounded-full"
              data-testid="link-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors hover-elevate p-2 rounded-full"
              data-testid="link-youtube"
              aria-label="YouTube"
            >
              <Youtube className="h-5 sm:h-6 w-5 sm:w-6" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
        aria-label="Scroll to services"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
