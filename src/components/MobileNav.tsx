"use client";
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="xl:hidden bg-black text-white p-4 text-center">
      <div className="flex justify-center items-center gap-4">
        {/* Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Brand Name */}
        <Link href="/" className="text-2xl font-bold" onClick={handleLinkClick}>
          Sol Dance
        </Link>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 mt-2 items-center">
          <Link href="/lineup" onClick={handleLinkClick}>
            Lineup
          </Link>
          <Link href="/tickets" onClick={handleLinkClick}>
            Tickets
          </Link>
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>
          <Link href="/connect" onClick={handleLinkClick}>
            Connect
          </Link>
          <Link href="/faq" onClick={handleLinkClick}>
            FAQ
          </Link>
          <Link href="/camping" onClick={handleLinkClick}>
            Camping
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
