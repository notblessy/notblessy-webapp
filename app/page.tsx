"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { FaGlobe, FaShieldAlt, FaQuestionCircle } from "react-icons/fa";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const iconRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check if click is outside dropdown and not on any icon
      const isOutsideDropdown = dropdownRef.current && !dropdownRef.current.contains(target);
      const isNotOnIcon = !Object.values(iconRefs.current).some(
        (ref) => ref && ref.contains(target)
      );

      if (isOutsideDropdown && isNotOnIcon) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      // Use a small delay to ensure click handlers run first
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const apps = [
    {
      id: "pelita",
      name: "Pelita",
      icon: "/pelita.png",
      playStore: null, // Coming soon
      appStore: "https://apps.apple.com/id/app/pelita-hati/id6757474681?l=id",
      website: null,
      privacy: "/pelitahati/privacy",
      support: "/pelitahati/support",
      internalLink: null,
    },
    {
      id: "bagirata",
      name: "Bagirata",
      icon: "/bagirata.png",
      playStore: "https://play.google.com/store/apps/details?id=keepgoing.Bagirata&hl=fr",
      appStore: "https://apps.apple.com/id/app/bagirata/id6572284039?l=id",
      website: "https://bagirata.notblessy.com/",
      privacy: "https://bagirata.notblessy.com/privacy",
      internalLink: null,
    },
    {
      id: "hrmoni",
      name: "hrmoni.",
      icon: "/hrmoni.png",
      playStore: null, // Coming soon
      appStore: "https://apps.apple.com/id/app/hrmoni/id6751935151?l=id",
      website: null,
      privacy: null,
      internalLink: null,
    },
  ];

  const handleAppClick = (appId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    // Toggle: if same app is open, close it; otherwise open the clicked app
    if (openDropdown === appId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(appId);
    }
  };

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
        <div className="flex items-center gap-4 w-full max-w-xs mb-8">
          <div className="flex-1 h-px bg-grey opacity-30"></div>
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <div className="flex-1 h-px bg-grey opacity-30"></div>
        </div>

        {/* App Icons */}
        <div className="flex items-center justify-center gap-8 relative">
          {apps.map((app) => (
            <div key={app.id} className="flex flex-col items-center gap-2 relative">
              <div
                ref={(el) => {
                  iconRefs.current[app.id] = el;
                }}
                className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform cursor-pointer"
                onClick={(e) => handleAppClick(app.id, e)}
              >
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain scale-125"
                />
              </div>
              <span className="text-xs text-dark font-light">{app.name}</span>

              {/* iOS Style Dropdown */}
              {openDropdown === app.id && (
                <div
                  ref={dropdownRef}
                  className="absolute top-24 left-0 rounded-2xl py-2 min-w-[200px] z-50 animate-dropdown backdrop-blur-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px) saturate(180%)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(255, 255, 255, 0.5) inset",
                  }}
                >
                  {app.playStore ? (
                    <a
                      href={app.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <SiGoogleplay className="w-6 h-6" />
                      <span className="text-sm text-dark">Play Store</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-3 opacity-50 cursor-not-allowed">
                      <SiGoogleplay className="w-6 h-6" />
                      <div className="flex flex-col items-start">
                        <span className="text-sm text-dark">Play Store</span>
                        <span className="text-xs text-muted">Coming soon</span>
                      </div>
                    </div>
                  )}
                  <div className="h-px bg-gray-200 my-1"></div>
                  <a
                    href={app.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <SiAppstore className="w-6 h-6" />
                    <span className="text-sm text-dark">App Store</span>
                  </a>
                  {app.website && (
                    <>
                      <div className="h-px bg-gray-200 my-1"></div>
                      <a
                        href={app.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <FaGlobe className="w-6 h-6" />
                        <span className="text-sm text-dark">Website</span>
                      </a>
                    </>
                  )}
                  {app.support && (
                    <>
                      <div className="h-px bg-gray-200 my-1"></div>
                      <a
                        href={app.support}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <FaQuestionCircle className="w-6 h-6" />
                        <span className="text-sm text-dark">Support</span>
                      </a>
                    </>
                  )}
                  {app.privacy && (
                    <>
                      <div className="h-px bg-gray-200 my-1"></div>
                      <a
                        href={app.privacy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <FaShieldAlt className="w-6 h-6" />
                        <span className="text-sm text-dark">Privacy Policy</span>
                      </a>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
