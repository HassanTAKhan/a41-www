import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for F & A A41 MOTs and Tyres Services Ltd. Find out how we handle your personal data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
};

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-muted text-sm mb-10">Last updated: April 2026</p>

          <div className="space-y-10 text-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">Who we are</h2>
              <p>
                F &amp; A A41 MOTs and Tyres Services Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at this domain. We are registered in England and Wales and based at Unit 1, College Road North Business Park, Aston Clinton, Aylesbury, HP22 5EZ.
              </p>
              <p className="mt-3">
                This policy explains what personal data we collect, why, and how we handle it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Data we collect</h2>
              <p>When you submit our contact form we collect:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address (optional)</li>
                <li>Vehicle registration number (optional)</li>
                <li>Your message</li>
              </ul>
              <p className="mt-3">
                We do not collect any other personal data and we do not use cookies for tracking or advertising.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How we use your data</h2>
              <p>We use the information you provide solely to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Respond to your enquiry or booking request</li>
                <li>Contact you about the services you asked about</li>
              </ul>
              <p className="mt-3">
                We will never sell, rent, or share your personal data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">How your data is processed</h2>
              <p>
                Contact form submissions are processed by <strong className="text-white">Formspree</strong> (formspree.io), a third-party form handling service. Your submission is transmitted securely to Formspree and forwarded to our email inbox. Formspree may store a copy of your submission on their servers. You can review their privacy practices at{" "}
                <a
                  href="https://formspree.io/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  formspree.io/legal/privacy-policy
                </a>
                .
              </p>
              <p className="mt-3">
                MOT status lookups use your vehicle registration number to query the DVSA (Driver and Vehicle Standards Agency) database via a government API. We do not store registration numbers entered into the MOT checker.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Legal basis for processing</h2>
              <p>
                We process your data on the basis of <strong className="text-white">legitimate interests</strong> &mdash; specifically to respond to your enquiry and provide the services you have requested. You are under no obligation to provide your data; however, without it we cannot respond to you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Data retention</h2>
              <p>
                We retain enquiry emails only for as long as necessary to resolve your request, and no longer than 12 months unless you become a customer, in which case we retain relevant records for the period required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Your rights</h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict our processing of your data</li>
                <li>Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us by phone at{" "}
                <a href="tel:07377745544" className="text-accent hover:underline">
                  07377 745544
                </a>{" "}
                or use the contact form on our website.
              </p>
              <p className="mt-3">
                You also have the right to lodge a complaint with the{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Information Commissioner&apos;s Office (ICO)
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                For any privacy-related questions, please call us on{" "}
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
