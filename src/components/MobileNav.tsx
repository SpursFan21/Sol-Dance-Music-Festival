"use client";
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="xl:hidden bg-gradient-to-b from-[#339a94] to-[#4ceee0] backdrop-blur-sm text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center">
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="text-3xl focus:outline-none transition-transform duration-200 transform hover:scale-110"
        >
          ☰
        </button>

        {/* Brand Name - centered using a spacer */}
        <Link href="/" className="text-3xl font-bold" onClick={handleLinkClick}>
          Sol Dance
        </Link>

        {/* Spacer to balance the toggle button */}
        <div className="w-8" />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-4 items-center animate-fadeIn">
          <Link
            href="/lineup"
            onClick={handleLinkClick}
            className="transition-colors hover:text-secondary"
          >
            Lineup
          </Link>

          {/* Updated Tickets Link to external URL */}
          <a
            href="https://theticketing.co/e/soldancemusicandartsfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-secondary"
            onClick={handleLinkClick}
          >
            Tickets
          </a>

          <Link
            href="/about"
            onClick={handleLinkClick}
            className="transition-colors hover:text-secondary"
          >
            About
          </Link>
          <Link
            href="/connect"
            onClick={handleLinkClick}
            className="transition-colors hover:text-secondary"
          >
            Connect
          </Link>
          <Link
            href="/faq"
            onClick={handleLinkClick}
            className="transition-colors hover:text-secondary"
          >
            FAQ
          </Link>
          <Link
            href="/camping"
            onClick={handleLinkClick}
            className="transition-colors hover:text-secondary"
          >
            Camping
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
