export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-beige px-6 py-16">
      <main className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6 inline-block">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-beige shadow-md">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-dark">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-base text-dark font-light leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Introduction</h2>
            <p className="text-dark">
              PelitaHati (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Information We Collect</h2>
            <div className="text-dark space-y-2">
              <p>We may collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Account information (username, email address)</li>
                <li>Profile information and preferences</li>
                <li>Payment and subscription information</li>
                <li>Messages and communications within the app</li>
                <li>Device information and usage data</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">How We Use Your Information</h2>
            <div className="text-dark space-y-2">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and manage subscriptions</li>
                <li>Send you notifications and updates</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Data Sharing and Disclosure</h2>
            <p className="text-dark">
              We do not sell your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-dark mt-2">
              <li>With service providers who assist in operating our app</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Data Security</h2>
            <p className="text-dark">
              We implement appropriate technical and organizational measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Your Rights</h2>
            <p className="text-dark">
              You have the right to access, update, or delete your personal information. You may also opt out of 
              certain communications. To exercise these rights, please contact us through the app settings or support page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Third-Party Services</h2>
            <p className="text-dark">
              Our app may contain links to third-party services. We are not responsible for the privacy practices 
              of these external services. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Children&apos;s Privacy</h2>
            <p className="text-dark">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Changes to This Policy</h2>
            <p className="text-dark">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-dark mb-3">Contact Us</h2>
            <p className="text-dark">
              If you have any questions about this Privacy Policy, please contact us through the app settings or 
              visit our <a href="/pelitahati/support" className="text-primary hover:opacity-80 underline underline-offset-4">support page</a>.
            </p>
          </section>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex items-center justify-center gap-4 w-full max-w-xs mx-auto">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>
      </main>
    </div>
  );
}
