import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import javierImage from "@assets/IMG_4903 (2)_1760977071759.jpg";
import nikkiImage from "@assets/IMG_5187_1766529987501.jpg";
import mazzellasVanImage from "@assets/IMG_5003_1761511655133.jpg";

export default function News() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Cocreate
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest news and announcements from Quarry Tex
            </p>
          </div>

          <div className="space-y-16">
            {/* Contractors & Creatives Section */}
            <div className="space-y-8" data-testid="section-contractors-creatives">
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img 
                  src={javierImage} 
                  alt="Javier installing glass covering" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 60%' }}
                  data-testid="img-javier-installation"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Contractors & Creatives
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed">
                    <strong>Collaboration in Action: A&G Inc x Quarry Tex</strong>
                  </p>
                  <p className="text-foreground leading-relaxed">
                    When construction precision meets creative design — that's where real collaboration happens.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    This week our team partnered with A&G Inc. on an interior glass project for L'Oréal USA in Clark, NJ. 
                    From concept to installation, it's more than just applying vinyl. It's creating a seamless, clean, and sleek 
                    branded finish inside a high-security facility.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Professional Results, thank you George for the opportunity to produce creative solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Welcome Nikki Section */}
            <div className="space-y-8" data-testid="section-welcome-nikki">
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img 
                  src={nikkiImage} 
                  alt="Nikki Priece joining the Quarry Tex team" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                  data-testid="img-nikki-welcome"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Welcome to the Team
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed">
                    We're thrilled to welcome Nikki Priece to the Quarry Tex family!
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Nikki is our latest onboarding member, currently in training and eager to learn the craft. 
                    With fresh perspective and enthusiasm, Nikki is diving into the world of vehicle wraps, 
                    signage, and visual branding — building the skills that define quality workmanship.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Welcome aboard, Nikki — we're excited to have you on this journey with us!
                  </p>
                </div>
              </div>
            </div>

            {/* Mazzella's Gourmet Market Section */}
            <div className="space-y-8" data-testid="section-mazzellas-market">
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img 
                  src={mazzellasVanImage} 
                  alt="Mazzella's Gourmet Market branded van wrap" 
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.25)' }}
                  data-testid="img-mazzellas-van"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Mazzella's Gourmet Market — Van Wrap
                </h2>
                <h3 className="text-xl font-semibold text-muted-foreground">
                  Mountainside, NJ
                </h3>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <p className="text-foreground leading-relaxed">
                    A collaboration between Mazzella's Gourmet Market and Quarry Tex Sign & Wrap Systems.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Quarry Tex designed and produced a clean, branded van wrap for Mazzella's Gourmet Market, 
                    aligning with their signature look and gourmet reputation. The wrap delivers a polished, high-visibility 
                    presence on the road — extending the Mazzella's brand from storefront to streetscape.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Gary and Stephen Mazzella bring their passion for food to the Mountainside NJ area.
                  </p>
                  <p className="text-foreground leading-relaxed">
                    <a 
                      href="https://mazzellasmarket.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                      data-testid="link-mazzellas-website"
                    >
                      https://mazzellasmarket.com/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
