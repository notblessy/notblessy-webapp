export default function SuccessPage({
  searchParams,
}: {
  searchParams: { checkout_id?: string };
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-beige px-6 py-16">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        {/* Check Icon */}
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
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-light tracking-wide text-dark mb-6">
          Subscription Success
        </h1>

        {/* Note */}
        <p className="text-base text-muted font-light max-w-md leading-relaxed">
          If your subscription hasn&apos;t taken effect yet, please refresh your account in the profile page.
        </p>

        {/* Decorative elements */}
        <div className="mt-8 flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>
      </main>
    </div>
  );
}
