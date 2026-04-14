import Link from "next/link";

export default function PrivacyStatementPage() {
  return (
    <div className="min-h-screen bg-[hsl(240,15%,6%)] text-white relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[hsl(258,80%,50%)] opacity-[0.06] blur-[150px] top-[-10%] left-[-10%] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[hsl(225,80%,50%)] opacity-[0.04] blur-[150px] bottom-[-10%] right-[-10%] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-wide-color.svg"
              alt="sitenow.ai"
              className="h-7 md:h-8 w-auto brightness-110"
            />
          </Link>
          <Link
            href="/"
            className="text-xs text-white/40 hover:text-white/70 transition-colors"
          >
            &larr; Back
          </Link>
        </header>

        {/* Content */}
        <main className="max-w-3xl mx-auto px-6 md:px-12 pt-12 pb-24">
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-3">
            Privacy Statement
          </h1>
          <p className="text-white/30 text-sm mb-16">Last updated: April 2026</p>

          <div className="space-y-12 text-white/50 leading-relaxed">
            {/* Intro */}
            <p>
              SiteNow.ai is committed to protecting the privacy of our website
              visitors, service users, and job applicants. This privacy statement
              outlines your rights as a data subject and describes how we
              safeguard the personal information you share with us.
            </p>

            {/* When We Collect */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                When We Collect Personal Data
              </h2>
              <p className="mb-3">
                We may gather information from you when you interact with us,
                including through:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Our website, email, phone, or social media channels</li>
                <li>Event or waitlist registrations</li>
                <li>Job applications</li>
                <li>Requesting information about our services</li>
              </ul>
            </section>

            {/* Purposes */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Why We Collect Your Data
              </h2>
              <p className="mb-3">The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Improve the quality of our services, website, and user
                  experience
                </li>
                <li>Process and fulfil contractual obligations</li>
                <li>
                  Communicate with you about our products, updates, and launches
                </li>
                <li>Provide customer support</li>
              </ul>
            </section>

            {/* Types */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Types of Personal Data We Collect
              </h2>
              <p className="mb-3">
                Depending on how you interact with us, we may collect:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Contact details (name, email address, phone number)</li>
                <li>
                  Job application materials (employment history, credentials,
                  references)
                </li>
                <li>User credentials (login ID, username, password)</li>
                <li>
                  Browser and device data (browser type, device, language, IP
                  address)
                </li>
                <li>Website behaviour and navigation patterns</li>
                <li>Email engagement metrics</li>
                <li>Content you upload or submit</li>
                <li>Service feedback</li>
              </ul>
            </section>

            {/* How We Collect */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                How We Collect Data
              </h2>
              <p>
                We collect information directly from you when you provide it to
                us. We also use cookies and similar tracking technologies to
                optimise your experience. In some cases, data may be received
                from partners, social platforms, or third-party services.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Data Retention
              </h2>
              <p>
                We retain your personal data only for as long as necessary to
                fulfil the purposes for which it was collected, including to
                satisfy legal, reporting, or regulatory requirements. When data
                is no longer required, it is securely erased. Any statistical
                processing uses anonymised information.
              </p>
            </section>

            {/* Legal Basis */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Legal Basis for Processing
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-white/70 mb-1">Consent</h3>
                  <p>
                    We rely on your consent for marketing communications,
                    waitlist sign-ups, and newsletter subscriptions. You may
                    withdraw consent at any time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white/70 mb-1">Contract</h3>
                  <p>
                    We process personal data when it is necessary to fulfil our
                    contractual obligations to you as a customer, partner, or
                    supplier.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white/70 mb-1">
                    Legitimate Interest
                  </h3>
                  <p>
                    We may collect and process information where it is in our
                    legitimate business interest, provided this does not conflict
                    with your privacy rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Your Rights
              </h2>
              <p className="mb-3">As a data subject, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Access the personal data we hold about you</li>
                <li>Request portability of your data (where applicable)</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Withdraw your consent at any time</li>
                <li>Restrict or object to processing</li>
                <li>Request deletion of your data</li>
                <li>
                  File a complaint with your local data protection authority
                </li>
                <li>
                  Unsubscribe from email marketing via links included in our
                  communications
                </li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and pixel tags to understand how visitors interact
                with our website, remember preferences, and analyse usage
                patterns. Most browsers accept cookies by default; you can modify
                your browser settings to refuse cookies, block third-party
                cookies, or receive notifications before cookies are stored.
                Pixel tags may execute scripts when you visit our website or open
                our emails.
              </p>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Data Sharing
              </h2>
              <p className="mb-3">
                We may share your information with trusted third parties who
                assist us with internal business functions such as data analysis,
                email delivery, database management, and hosting. Partners,
                service providers, and sub-contractors may receive information
                necessary for service delivery. All third parties are
                contractually obligated not to use your data beyond the purposes
                stated here.
              </p>
              <p>
                International data transfers outside the EU/EEA are carried out
                in compliance with applicable data protection regulations,
                including the use of Standard Contractual Clauses where required.
                Disclosure of personal data occurs only when legally required, and
                we take all reasonable steps to preserve your privacy rights.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Changes to This Statement
              </h2>
              <p>
                This privacy statement is reviewed regularly and updated as
                needed. We recommend checking this page periodically for any
                changes. Significant updates will be communicated through our
                website.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-lg font-bold text-white/90 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this privacy statement or how we
                handle your data, please contact us:
              </p>
              <p className="mt-3">
                <span className="text-white/70 font-semibold">Email:</span>{" "}
                <a
                  href="mailto:info@sitenow.ai"
                  className="underline text-white/50 hover:text-white/80 transition-colors"
                >
                  info@sitenow.ai
                </a>
              </p>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 px-6 md:px-12 py-8 text-center">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} sitenow.ai · All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
