"use client";
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the menu after a link is clicked
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden bg-black text-white p-4">
      <div className="flex justify-between items-center">
        {/* Home/Brand link */}
        <Link href="/" className="text-xl font-bold" onClick={handleLinkClick}>
          Sol Dance
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="focus:outline-none"
        >
          ☰ Menu
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-2 mt-2">
          <Link href="/lineup" onClick={handleLinkClick}>
            Lineup
          </Link>
          <Link href="/tickets" onClick={handleLinkClick}>
            Tickets
          </Link>
          <Link href="/about" onClick={handleLinkClick}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
