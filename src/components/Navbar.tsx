"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between p-4 bg-black text-white">
      <Link href="/">Sol Dance</Link>
      <div className="flex gap-4">
        <Link href="/lineup">Lineup</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
