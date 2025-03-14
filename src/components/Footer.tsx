import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-2 md:py-3 xl:py-4 w-full">
      <div className="container mx-auto flex items-center px-8">
        {/* Left Column */}
        <div className="flex-1">
          <a
            href="https://theticketing.co/e/soldancemusicandartsfestival"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-1 md:py-2 px-4 md:px-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            PURCHASE TICKETS
          </a>
        </div>

        {/* Center Column */}
        <div className="flex-1 text-center">
          <nav className="text-xs md:text-sm space-x-2 md:space-x-4 inline-block">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/lineup" className="hover:underline">Lineup</Link>
            <a
              href="https://theticketing.co/e/soldancemusicandartsfestival"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Tickets
            </a>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/connect" className="hover:underline">Connect</Link>
            <Link href="/faq" className="hover:underline">FAQ</Link>
            <Link href="/camping" className="hover:underline">Camping</Link>
          </nav>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex justify-end">
          <div className="flex space-x-2 md:space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-xl md:text-2xl hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://instagram.com"
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
