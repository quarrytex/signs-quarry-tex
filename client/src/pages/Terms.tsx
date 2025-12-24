import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8" data-testid="text-terms-title">Terms of Service</h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using the services of Quarry Tex (formerly Sign + Wrap Systems), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
              <p className="text-muted-foreground">
                Quarry Tex provides professional signage and vehicle wrap services including vehicle & fleet wraps, glass wraps, and dimensional signs. All services are subject to availability and our ability to fulfill the requested work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Quotes and Pricing</h2>
              <p className="text-muted-foreground">
                Quotes provided through our website or other channels are estimates only. Final pricing may vary based on the specific requirements, materials needed, and complexity of the project. All quotes are valid for 30 days unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment terms will be specified in your service agreement. Typically, a deposit is required before work begins, with the balance due upon completion. We accept various payment methods as specified in your agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Design and Approval</h2>
              <p className="text-muted-foreground">
                Clients are responsible for reviewing and approving all designs before production begins. Once approved and production has started, changes may incur additional fees. We are not responsible for errors in customer-supplied content that has been approved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Installation and Care</h2>
              <p className="text-muted-foreground">
                Professional installation is recommended for all wraps and signs. Proper care and maintenance instructions will be provided. Warranty coverage may be affected if installation or care instructions are not followed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Warranty</h2>
              <p className="text-muted-foreground">
                Our work is warranted against defects in materials and workmanship for a period specified in your service agreement. This warranty does not cover damage due to accidents, misuse, improper care, or normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All original designs created by Quarry Tex remain our intellectual property unless otherwise agreed in writing. Clients must ensure they have the right to use any logos, images, or content they provide for production.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                Quarry Tex's liability is limited to the cost of the specific service provided. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services or products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please contact us at:<br />
                Phone: (908) 322-8488<br />
                Email: signs@quarrytex.com
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic mt-8">
              Last updated: October 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
