//src\components\Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-0 md:py-0 xl:py-0 w-full">
      <div className="container mx-auto flex items-center px-8">

        {/* Left Column - Updated with SVG Button */}
        <div className="flex-1">
          <a
            href="https://theticketing.co/e/soldancemusicandartsfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-0 leading-none hover:scale-110 transition-transform"
          >
            <Image
              src="/buttons/TicketButton04.svg"
              alt="Purchase Tickets"
              width={200}
              height={60}
              className="align-middle"
            />
          </a>
        </div>

        {/* Center Column - Hidden on small screens */}
        <div className="flex-1 text-center hidden md:block">
          <nav className="text-xs md:text-sm space-x-2 md:space-x-4 inline-block">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/lineup" className="hover:underline">
              Lineup
            </Link>
            <a
              href="https://theticketing.co/e/soldancemusicandartsfestival"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Tickets
            </a>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/connect" className="hover:underline">
              Connect
            </Link>
            <Link href="/faq" className="hover:underline">
              FAQ
            </Link>
            <Link href="/camping" className="hover:underline">
              Camping
            </Link>
          </nav>
        </div>

        {/* Right Column - Social Icons */}
        <div className="flex-1 flex justify-end pr-8">
          <div className="flex space-x-2 md:space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572925377420"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl md:text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/soldancefestivalco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl md:text-2xl hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
