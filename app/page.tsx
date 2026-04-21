import Image from "next/image";
import NumberPlateSearch from "./components/NumberPlateSearch";
import ContactForm from "./components/ContactForm";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">A41</span>
              </div>
              <span className="text-white font-bold text-lg">MOT & Repair Centre</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-muted hover:text-white transition-colors text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-muted hover:text-white transition-colors text-sm font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-muted hover:text-white transition-colors text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="tel:07377745544"
                className="flex items-center gap-2 px-5 py-2 bg-accent hover:bg-accent-hover text-black font-bold rounded-lg transition-colors text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                07377 745544
              </a>
            </div>

            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpg"
              alt="FA-A41 MOTs & Tyres Services Ltd"
              width={700}
              height={315}
              className="w-full max-w-md rounded-xl"
              style={{ boxShadow: '0 0 40px 8px rgba(220,38,38,0.4), 0 0 80px 20px rgba(220,38,38,0.15)' }}
              priority
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            DVSA Approved MOT Testing Station
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Check Your{" "}
            <span className="text-accent">MOT Status</span>
            <br />
            Instantly
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12">
            Enter your registration number below to instantly check your vehicle&apos;s MOT status — not history, just where you stand right now. Professional MOT testing in Aston Clinton, Aylesbury.
          </p>

          <NumberPlateSearch />

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Turnaround
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Competitive Prices
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              No Hidden Fees
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Professional vehicle services you can trust. From MOT testing to
              tyre fitting, we&apos;ve got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MOT Testing */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">MOT Testing</h3>
              <p className="text-muted leading-relaxed">
                Full MOT testing for Class 4 and Class 7 vehicles. Our DVSA-approved testers
                ensure a thorough and fair assessment of your vehicle.
              </p>
            </div>

            {/* Tyres */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <circle cx="12" cy="12" r="6" strokeWidth={2} />
                  <circle cx="12" cy="12" r="2" strokeWidth={2} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tyre Services</h3>
              <p className="text-muted leading-relaxed">
                Quality tyres at competitive prices. We supply and fit tyres for
                all makes and models, including balancing and alignment.
              </p>
            </div>

            {/* Vehicle Repairs */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vehicle Repairs</h3>
              <p className="text-muted leading-relaxed">
                General vehicle repairs and maintenance. If your vehicle fails
                its MOT, we can carry out the necessary work to get it passed.
              </p>
            </div>

            {/* Free Retest */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Free Retest</h3>
              <p className="text-muted leading-relaxed">
                If your vehicle doesn&apos;t pass, we offer a free retest when
                repairs are carried out at our garage within the retest period.
              </p>
            </div>

            {/* Diagnostics */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diagnostics</h3>
              <p className="text-muted leading-relaxed">
                Modern diagnostic equipment to identify faults quickly.
                Engine management lights, ABS warnings and more.
              </p>
            </div>

            {/* Pre-MOT Check */}
            <div className="group bg-surface-light border border-border rounded-xl p-8 hover:border-accent/30 transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pre-MOT Check</h3>
              <p className="text-muted leading-relaxed">
                Worried about your MOT? Book a pre-MOT inspection and we&apos;ll
                highlight any issues before your test date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why Choose{" "}
                <span className="text-accent">A41 MOTs?</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We&apos;re a family-run garage based on the A41 in Aston Clinton. Honest, straightforward, and no nonsense. No upselling, no hidden costs, just reliable MOT testing and vehicle services from people you can actually trust.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">DVSA Approved</h4>
                    <p className="text-muted text-sm">
                      Fully approved testing station with qualified MOT testers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Transparent Pricing</h4>
                    <p className="text-muted text-sm">
                      Clear, upfront pricing with no hidden extras or charges.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Convenient Location</h4>
                    <p className="text-muted text-sm">
                      Easy to find on College Road North Business Park, just off the A41.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Quick Service</h4>
                    <p className="text-muted text-sm">
                      Most MOTs completed while you wait. No long waits or delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats / Info Card */}
            <div className="bg-surface border border-border rounded-2xl p-8 lg:p-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">MOT</div>
                  <p className="text-muted text-sm">Testing Station</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">A41</div>
                  <p className="text-muted text-sm">Aston Clinton</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">Class 4 & 7</div>
                  <p className="text-muted text-sm">Vehicles</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">Free</div>
                  <p className="text-muted text-sm">Retest Available</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="text-white font-bold text-lg mb-4">Opening Hours</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Monday - Friday</span>
                    <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Saturday</span>
                    <span className="text-white font-medium">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Sunday</span>
                    <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ready to book your MOT or have a question? Contact us today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Address */}
                <div className="bg-surface-light border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-1">Address</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Unit 1, College Road North<br />
                    Business Park, Aston Clinton<br />
                    Aylesbury, HP22 5EZ
                  </p>
                </div>

                {/* Phone */}
                <div className="bg-surface-light border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:07377745544"
                    className="text-accent hover:underline text-sm"
                  >
                    07377 745544
                  </a>
                </div>

                {/* Facebook */}
                <div className="bg-surface-light border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-1">Facebook</h4>
                  <a
                    href="https://www.facebook.com/people/F-A-A41-MOTs-and-Tyres-Services-Ltd/61587421875236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm"
                  >
                    Follow us on Facebook
                  </a>
                </div>

                {/* Email */}
                <div className="bg-surface-light border border-border rounded-xl p-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold mb-1">Hours</h4>
                  <p className="text-muted text-sm">
                    Mon-Fri: 8am-6pm<br />
                    Sat: 8am-2pm
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="map-container rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.5!2d-0.722!3d51.798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876512a40b9e0f1%3A0x2c0f16b2baeb65a0!2sCollege%20Rd%20N%2C%20Aston%20Clinton%2C%20Aylesbury!5e0!3m2!1sen!2suk!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="A41 MOTs location map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Book Your MOT Today
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Don&apos;t wait until your MOT expires. Call us now to book your test
            or get a quote.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:07377745544"
              className="flex items-center gap-2 px-8 py-4 bg-white text-accent font-bold rounded-lg hover:bg-white/90 transition-colors text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              07377 745544
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A41</span>
                </div>
                <span className="text-white font-bold text-lg">MOTs & Tyres</span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                F &amp; A A41 MOTs and Tyres Services Ltd. Professional MOT
                testing and tyre services in Aston Clinton, Aylesbury.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-muted hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/F-A-A41-MOTs-and-Tyres-Services-Ltd/61587421875236/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-muted hover:text-accent transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-muted hover:text-accent transition-colors">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>Unit 1, College Road North Business Park</li>
                <li>Aston Clinton, Aylesbury</li>
                <li>HP22 5EZ, United Kingdom</li>
                <li className="pt-2">
                  <a href="tel:07377745544" className="text-accent hover:underline">
                    07377 745544
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs">
              &copy; {new Date().getFullYear()} F &amp; A A41 MOTs and Tyres Services Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted">
              <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-accent transition-colors">Terms &amp; Conditions</a>
              <span>MOT data provided by DVSA</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
