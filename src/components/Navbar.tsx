"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const getLinkClasses = (path: string) =>
    pathname === path
      ? "underline"
      : "transition-colors hover:text-secondary";

  return (
    <nav className="hidden xl:flex justify-center items-center gap-8 px-8 py-1 bg-gradient-to-b from-[#339a94] to-[#4ceee0] backdrop-blur-sm text-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo Link */}
      <Link href="/" className="flex items-center">
        <Image
          src="/Soldance logo.png"
          alt="Sol Dance Logo"
          width={120}
          height={70}
          priority
          className="-mt-7 -mb-7 drop-shadow-lg" //negative pulling with mt and mb for sudo crop effect
        />
      </Link>


      <Link href="/lineup" className={getLinkClasses("/lineup")}>
        Lineup
      </Link>

      {/* Updated Tickets Link to external URL */}
      <a
        href="https://theticketing.co/e/soldancemusicandartsfestival"
        target="_blank"
        rel="noopener noreferrer"
        className={getLinkClasses("/tickets")}
      >
        Tickets
      </a>

      <Link href="/about" className={getLinkClasses("/about")}>
        About
      </Link>
      <Link href="/connect" className={getLinkClasses("/connect")}>
        Connect
      </Link>
      <Link href="/faq" className={getLinkClasses("/faq")}>
        FAQ
      </Link>
      <Link href="/camping" className={getLinkClasses("/camping")}>
        Camping
      </Link>
    </nav>
  );
};

export default Navbar;
