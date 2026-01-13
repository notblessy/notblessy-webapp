import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-beige px-6 py-16">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        {/* Avatar */}
        <div className="mb-4">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
            <Image
              src="/logo.jpg"
              alt="notblessy"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-extralight tracking-wider text-dark mb-3">
          @notblessy
        </h1>

        {/* Bio */}
        <p className="text-lg text-muted font-light italic max-w-lg leading-relaxed mb-6">
          &ldquo;dont just go with status quo&rdquo;
        </p>

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
