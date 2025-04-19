//src\app\camping\page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CampingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Half with Background Image */}
      <div
        className="relative bg-center h-[72vh] sm:h-[400px] md:h-[600px] w-full"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative mx-auto p-8 rounded-b-lg flex flex-col items-center">
          <div className="my-8"></div>

          <Link href="/" className="mb-8 flex justify-center">
            <Image
              src="/SoldanceLogo.png"
              alt="Sol Dance Logo"
              width={600}
              height={100}
              priority
              className="drop-shadow-lg transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <div className="text-center">
            <h1 className="text-4xl font-semibold mb-4 text-white">June 20-22, 2025</h1>
            <h1 className="text-4xl font-semibold mb-4 text-white">
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

      {/* Camping Info Container with Animation */}
      <motion.div
        className="bg-black bg-opacity-50 text-white rounded-2xl shadow-lg p-8 w-11/12 max-w-4xl mx-auto flex-grow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: "easeOut" }}
      >
        {/* Camping Logistics */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Camping Logistics</h2>
          <ul className="list-disc list-inside text-lg space-y-4 text-left">
            <li>Car camping is only permitted with a valid car pass, including a 10’x35’ camping space for 1-2 tents.</li>
            <li>Camping quiet hours are between 4am–9am. Please respect your camping neighbors and keep noise to a minimum.</li>
            <li>We will have portapotties, medics, and security available.</li>
            <li>Food and recreational beverages will be available for purchase during the event.</li>
            <li><strong>Important:</strong> Large grills, hot plates, and glass containers are not permitted. Single burners and camp stoves are acceptable.</li>
            <li>Re-entry is not permitted.</li>
          </ul>
        </div>

        {/* San Luis Camping List */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">San Luis Camping List</h2>
          <ul className="list-disc list-inside text-lg text-left space-y-2">
            <li>Water</li>
            <li>Food</li>
            <li>Toiletries and Baby Wipes</li>
            <li>Tent with screw stakes for high winds or Car for sleeping quarters</li>
            <li>Sun Shades</li>
            <li>Tarps</li>
            <li>Bug repellant</li>
            <li>Sunscreen</li>
            <li>Wind Breaker</li>
            <li>Good Vibes / Responsible Mindset</li>
          </ul>
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="my-4 sm:my-8 md:my-12 lg:my-16"></div>


      {/* Footer */}
      <Footer />
    </div>
  );
}
