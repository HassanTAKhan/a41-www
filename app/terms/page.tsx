import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for F & A A41 MOTs and Tyres Services Ltd.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">A41</span>
              </div>
              <span className="text-white font-bold text-lg">MOT & Repair Centre</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
          <p className="text-muted text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">About us</h2>
              <p>
                This website is operated by F &amp; A A41 MOTs and Tyres Services Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), a company registered in England and Wales. Our registered address is Unit 1, College Road North Business Park, Aston Clinton, Aylesbury, HP22 5EZ. Our contact number is{" "}
                <a href="tel:07377745544" className="text-accent hover:underline">
                  07377 745544
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Use of this website</h2>
              <p>By accessing and using this website you agree to these terms. If you do not agree, please do not use this site.</p>
              <p className="mt-3">You agree not to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorised access to any part of the website or its infrastructure</li>
                <li>Transmit any harmful, offensive, or disruptive content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">MOT status checker</h2>
              <p>
                The MOT status checker on this website uses data provided by the DVSA (Driver and Vehicle Standards Agency) via a government API. The results are for informational purposes only.
              </p>
              <p className="mt-3">
                We make no guarantee as to the accuracy, completeness, or timeliness of results returned by the checker. You should always verify your vehicle&apos;s MOT status through official government channels at{" "}
                <a
                  href="https://www.check-mot.service.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  check-mot.service.gov.uk
                </a>
                . We accept no liability for any decisions made based on the results displayed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Enquiries and bookings</h2>
              <p>
                Submitting the contact form or calling us constitutes an enquiry only, not a confirmed booking. A booking is confirmed only when we have verbally agreed an appointment with you.
              </p>
              <p className="mt-3">
                We reserve the right to decline any booking request.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Pricing</h2>
              <p>
                Any prices mentioned on this website are indicative and subject to change. Final pricing for any work carried out will be agreed with you before work begins. We will not carry out additional work beyond the agreed scope without obtaining your approval first.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Disclaimer of warranties</h2>
              <p>
                This website and its content are provided &ldquo;as is&rdquo; without any warranty of any kind, express or implied. We do not warrant that the website will be available at all times or that it will be free from errors or viruses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential loss arising from your use of this website. Nothing in these terms limits our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Third-party links and services</h2>
              <p>
                This website may link to third-party websites (such as Facebook). We are not responsible for the content or privacy practices of those sites.
              </p>
              <p className="mt-3">
                Our contact form is processed by Formspree. By submitting the form you are also subject to Formspree&apos;s terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Intellectual property</h2>
              <p>
                All content on this website, including text, images, and logos, is owned by or licensed to us. You may not reproduce or redistribute it without our written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Changes to these terms</h2>
              <p>
                We may update these terms at any time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                For any questions about these terms, please call us on{" "}
                <a href="tel:07377745544" className="text-accent hover:underline">
                  07377 745544
                </a>{" "}
                or visit us at Unit 1, College Road North Business Park, Aston Clinton, Aylesbury, HP22 5EZ.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-accent hover:underline text-sm">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted text-xs text-center">
            &copy; {new Date().getFullYear()} F &amp; A A41 MOTs and Tyres Services Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
