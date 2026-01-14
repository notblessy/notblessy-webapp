export default function SupportPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-beige px-6 py-16">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        {/* Support Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-beige mb-4 shadow-md">
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

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide text-dark mb-6">
          PelitaHati Support
        </h1>

        {/* Support Content */}
        <div className="text-base text-dark font-light max-w-md leading-relaxed mb-8 space-y-4">
          <p>
            Need help with PelitaHati? We&apos;re here to assist you.
          </p>
          <p>
            For support inquiries, please contact us through the app settings or reach out via email.
          </p>
        </div>

        {/* Common Issues */}
        <div className="w-full max-w-md mb-8 text-left">
          <h2 className="text-lg font-bold text-dark mb-4">Common Questions</h2>
          <div className="space-y-3 text-sm text-dark">
            <div>
              <p className="font-bold text-dark mb-1">Subscription Issues</p>
              <p>If your subscription hasn&apos;t activated, try refreshing your account in the profile page.</p>
            </div>
            <div>
              <p className="font-bold text-dark mb-1">App Not Working</p>
              <p>Try closing and reopening the app, or restart your device.</p>
            </div>
            <div>
              <p className="font-bold text-dark mb-1">Payment Problems</p>
              <p>Check your payment method and ensure you have a stable internet connection.</p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Link */}
        <div className="mb-8">
          <a
            href="/pelitahati/privacy"
            className="text-base text-primary font-light hover:opacity-80 transition-opacity underline underline-offset-4"
          >
            Privacy Policy
          </a>
        </div>

        {/* Decorative elements */}
        <div className="flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>
      </main>
    </div>
  );
}
