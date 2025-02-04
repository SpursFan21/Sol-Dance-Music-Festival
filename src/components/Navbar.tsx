"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Function to add an underline if the link matches the current path
  const getLinkClasses = (path: string) =>
    pathname === path ? "underline" : "hover:underline";

  return (
    <nav className="hidden md:flex justify-between p-4 bg-black text-white">
      <Link href="/" className="text-xl font-bold">
        Sol Dance
      </Link>
      <div className="flex gap-4">
        <Link href="/lineup" className={getLinkClasses("/lineup")}>
          Lineup
        </Link>
        <Link href="/tickets" className={getLinkClasses("/tickets")}>
          Tickets
        </Link>
        <Link href="/about" className={getLinkClasses("/about")}>
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
