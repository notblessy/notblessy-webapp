export default function SupportPage() {
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-dark mb-4">
            PelitaHati Support
          </h1>
          <p className="text-base text-dark font-light">
            We&apos;re here to help you with any questions or issues
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-12 text-center">
          <h2 className="text-lg font-bold text-dark mb-4">Contact Support</h2>
          <div className="space-y-3">
            <p className="text-base text-dark font-light">
              For support inquiries, questions, or assistance, please contact us:
            </p>
            <div>
              <a
                href="mailto:frederichblessy@gmail.com"
                className="text-lg text-primary font-light hover:opacity-80 transition-opacity underline underline-offset-4"
              >
                frederichblessy@gmail.com
              </a>
            </div>
            <p className="text-sm text-dark font-light mt-4">
              We typically respond within 24-48 hours
            </p>
          </div>
        </div>

        {/* Common Questions */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-dark mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-bold text-dark mb-2">How do I contact support?</h3>
              <p className="text-dark font-light">
                You can reach our support team by emailing us at{" "}
                <a href="mailto:frederichblessy@gmail.com" className="text-primary underline underline-offset-4">
                  frederichblessy@gmail.com
                </a>
                . You can also access support directly from the app settings menu.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Subscription Issues</h3>
              <p className="text-dark font-light">
                If your subscription hasn&apos;t activated after purchase, try refreshing your account in the profile page. 
                If the issue persists, please contact us with your purchase receipt and we&apos;ll assist you immediately.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">App Not Working</h3>
              <p className="text-dark font-light">
                If you&apos;re experiencing issues with the app, try these steps: close and reopen the app, restart your device, 
                ensure you have a stable internet connection, and check if your app is updated to the latest version. 
                If problems continue, contact our support team.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Payment Problems</h3>
              <p className="text-dark font-light">
                If you&apos;re having trouble with payments, verify your payment method is valid and has sufficient funds. 
                Ensure you have a stable internet connection during the purchase process. For subscription-related payment issues, 
                contact us with your account information and we&apos;ll help resolve it.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Account Issues</h3>
              <p className="text-dark font-light">
                If you&apos;re having trouble accessing your account, try resetting your password through the app. 
                For other account-related issues, please contact our support team with your account email address.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-dark mb-2">Feature Requests</h3>
              <p className="text-dark font-light">
                We welcome your feedback and feature suggestions! Please email us at{" "}
                <a href="mailto:frederichblessy@gmail.com" className="text-primary underline underline-offset-4">
                  frederichblessy@gmail.com
                </a>
                {" "}with your ideas and we&apos;ll consider them for future updates.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12 text-center">
          <h2 className="text-lg font-bold text-dark mb-4">Additional Resources</h2>
          <div className="space-y-3">
            <div>
              <a
                href="/pelitahati/privacy"
                className="text-base text-primary font-light hover:opacity-80 transition-opacity underline underline-offset-4"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xs mx-auto">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>
      </main>
    </div>
  );
}
