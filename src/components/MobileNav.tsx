//Next\sol-dance\src\components\MobileNav.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="xl:hidden bg-gradient-to-b from-[#339a94] to-[#4ceee0] backdrop-blur-sm text-white py-2 px-4 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Top row: toggle button, centered logo, spacer */}
      <div className="flex items-center">
        {/* Left Column: Toggle Button */}
        <div className="w-12 flex justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="text-3xl focus:outline-none transition-transform duration-200 transform hover:scale-110"
          >
            ☰
          </button>
        </div>
        {/* Center Column: Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/SoldanceLogo.png"
              alt="Sol Dance Logo"
              width={120}
              height={50}
              priority
              className="-mt-0 -mb-0 drop-shadow-lg"
            />
          </Link>
        </div>
        {/* Right Column: Spacer */}
        <div className="w-12" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 items-center animate-fadeIn">
          <Link
            href="/lineup"
            onClick={handleLinkClick}
            className="w-full text-center font-semibold py-5 bg-white/10 rounded-md transition-colors hover:text-secondary"
          >
            Lineup
          </Link>
          <a
            href="https://theticketing.co/e/soldancemusicandartsfestival"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="w-full text-center font-semibold py-2 transition-colors hover:text-secondary"
          >
            Tickets
          </a>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="w-full text-center py-5 bg-white/10 rounded-md transition-colors hover:text-secondary"
          >
            About
          </Link>
          <Link
            href="/connect"
            onClick={handleLinkClick}
            className="w-full text-center font-semibold py-2 transition-colors hover:text-secondary"
          >
            Connect
          </Link>
          <Link
            href="/faq"
            onClick={handleLinkClick}
            className="w-full text-center font-semibold py-5 bg-white/10 rounded-md transition-colors hover:text-secondary"
          >
            FAQ
          </Link>
          <Link
            href="/camping"
            onClick={handleLinkClick}
            className="w-full text-center font-semibold py-2 transition-colors hover:text-secondary"
          >
            Camping
          </Link>
        </div>
      )}

    </nav>
  );
};

export default MobileNav;
