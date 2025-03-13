"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function ConnectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Half with Background Image */}
      <div
        className="relative bg-center h-[600px]"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative mx-auto p-8 rounded-b-lg flex flex-col items-center">
          <Link href="/" className="mb-8 flex justify-center">
            <Image
              src="/logotemp.png"
              alt="Sol Dance Logo"
              width={600}
              height={100}
              priority
              className="drop-shadow-lg"
            />
          </Link>
          <div className="text-center">
            <h1 className="text-4xl mb-4 text-white">June 20-22, 2025</h1>
            <h1 className="text-4xl mb-4 text-white">
              San Luis Valley, Southern Colorado
            </h1>
          </div>
          <div className="h-8"></div>
        </div>
      </div>

      {/* Fancy Divider */}
      <div className="w-full my-12 flex justify-center">
        <div className="w-11/12 border-t-4 border-yellow-500"></div>
      </div>

      {/* Bottom Half: Connect Info */}
      <div className="flex-grow mx-auto p-8 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">REACH OUT TO US</h2>
        <div className="text-lg mb-4 space-y-2">
          <p>
            <strong>General Inquiries:</strong>{" "}
            <a
              href="mailto:contact@soldancefestival.com"
              className="text-blue-300 hover:underline"
            >
              contact@soldancefestival.com
            </a>
          </p>
          <p>
            <strong>Sponsorship:</strong>{" "}
            <a
              href="mailto:sponsors@soldancefestival.com"
              className="text-blue-300 hover:underline"
            >
              sponsors@soldancefestival.com
            </a>
          </p>
          <p>
            <strong>Vending:</strong>{" "}
            <a
              href="mailto:vending@soldancefestival.com"
              className="text-blue-300 hover:underline"
            >
              vending@soldancefestival.com
            </a>
          </p>
          <p>
            <strong>Talent:</strong>{" "}
            <a
              href="mailto:talent@soldancefestival.com"
              className="text-blue-300 hover:underline"
            >
              talent@soldancefestival.com
            </a>
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
        <div className="flex justify-center space-x-4 text-2xl mb-4">
          <a
            href="https://facebook.com/soldancefestival"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/soldancefestival"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

