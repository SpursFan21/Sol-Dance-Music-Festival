import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center px-8">
        {/* Left: Purchase Tickets Button */}
        <a
          href="https://theticketing.co/e/soldancemusicandartsfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          PURCHASE TICKETS
        </a>

        {/* Center: Navigation Links */}
        <nav className="text-sm space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/lineup" className="hover:underline">Lineup</Link>
          {/* Updated Tickets Link to external URL */}
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

        {/* Right: Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
