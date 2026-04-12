"use client";

import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-beige px-4 sm:px-6 py-8 sm:py-16">
      <main className="flex flex-col items-center justify-center text-center max-w-2xl w-full">
        {/* Avatar */}
        <div className="mb-3 sm:mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg bg-white">
            <Image
              src="/logo.png"
              alt="notblessy"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-2xl sm:text-3xl font-extralight tracking-wider text-dark mb-2 sm:mb-3">
          @notblessy
        </h1>

        <p className="text-sm sm:text-base text-muted font-light max-w-lg leading-relaxed mb-3 px-4">
          Indie developer building apps and tools.
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg text-muted font-light italic max-w-lg leading-relaxed mb-4 sm:mb-6 px-4">
          &ldquo;dont just go with status quo&rdquo;
        </p>

        {/* Decorative elements */}
        <div className="flex items-center gap-4 w-full max-w-xs mb-6 sm:mb-8">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>

        <a
          href="https://dejuma.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 shadow-lg bg-white text-dark font-light"
        >
          <FaGlobe className="w-6 h-6 shrink-0" />
          <span className="text-base sm:text-lg">www.dejuma.xyz</span>
        </a>
      </main>
    </div>
  );
}
