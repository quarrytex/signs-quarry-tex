import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import coffeeVan from "@assets/2025-09-23 (1)_1760977689329.webp";

export default function Team() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-36 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
              Careers
            </h1>
            <p className="text-xl font-medium">
              Hands-on Training<br />
              Career Opportunities
            </p>
          </div>

          {/* Large Brand Image */}
          <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg mb-8">
            <img 
              src={coffeeVan} 
              alt="Porto Rico Importing Co. branded vehicle wrap" 
              className="w-full h-full object-cover"
              data-testid="img-brand-workspace"
            />
          </div>

          {/* Program, Learn, Skills Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <h3 className="text-lg font-bold">Program</h3>
                <p className="text-sm text-muted-foreground">
                  8 week workshop.<br />
                  Real-world training.<br />
                  Starts January 2026
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <h3 className="text-lg font-bold">Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Vehicle wrap design, branding, layout &<br />
                  profiling, Shipping.<br />
                  Software, tools, cvs application.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center space-y-2">
                <h3 className="text-lg font-bold">Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Real client portfolio pieces<br />
                  Shop references + job-ready skills<br />
                  Local networking pathways
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Apply Today Section */}
          <Card className="border-2">
            <CardContent className="pt-6 space-y-4">
              <h2 className="text-2xl font-bold">Apply Today</h2>
              <p className="text-foreground leading-relaxed">
                Hands-on training in vehicle wrap design & installation—built for college students, recent grads, and 
                career changers ready to learn through experience. Opportunities include internships, apprenticeships, 
                and work-study positions that provide direct, on-the-job learning in a professional shop environment. *Training Season Opens 
                January 2026*
              </p>
              <p className="text-sm font-medium">
                First Cohort Begins: January 2026 (Tentative Winter start)
              </p>
              <Button 
                className="bg-destructive hover:bg-destructive/90"
                data-testid="button-learn-more"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}
