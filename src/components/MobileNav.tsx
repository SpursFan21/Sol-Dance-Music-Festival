"use client";
import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:hidden bg-black text-white p-4">
      <button onClick={() => setIsOpen(!isOpen)}>☰ Menu</button>
      {isOpen && (
        <div className="flex flex-col gap-2 mt-2">
          <Link href="/lineup">Lineup</Link>
          <Link href="/tickets">Tickets</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
