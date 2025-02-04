"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const getLinkClasses = (path: string) =>
    pathname === path ? "underline" : "hover:underline";

  return (
    <nav className="hidden xl:flex justify-center items-center gap-8 p-4 bg-black text-white">
      <Link href="/" className="text-2xl font-bold">
        Sol Dance
      </Link>
      <div className="flex gap-6">
        <Link href="/lineup" className={getLinkClasses("/lineup")}>
          Lineup
        </Link>
        <Link href="/tickets" className={getLinkClasses("/tickets")}>
          Tickets
        </Link>
        <Link href="/about" className={getLinkClasses("/about")}>
          About
        </Link>
        <Link href="/connect" className={getLinkClasses("/connect")}>
          Connect
        </Link>
        <Link href="/faq" className={getLinkClasses("/faq")}>
          FAQ
        </Link>
        <Link href="/info" className={getLinkClasses("/info")}>
          Info
        </Link>
        <Link href="/camping" className={getLinkClasses("/camping")}>
          Camping
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
