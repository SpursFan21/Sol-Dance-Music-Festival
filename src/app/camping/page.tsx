"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CampingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Half with Background Image */}
      <div
        className="relative bg-center h-[600px] w-full"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "cover", // Changed from "contain" to "cover"
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative mx-auto p-8 rounded-b-lg flex flex-col items-center">
          
          {/*spacer*/}
          <div className="my-8"></div>

          {/* Logo Image as link to Home */}
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

      {/* Bottom Half: Camping Info */}
      <div className="mx-auto p-8 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Camping Logistics</h2>
        <div className="text-lg mb-4 space-y-4 text-left">
          <p>
            Car camping is only permitted with a valid car pass, including a 10’x35’ camping space for 1-2 tents.
          </p>
          <p>
            Camping quiet hours are between 4am-9am. We ask that you please respect your camping neighbors and keep noise to a minimum during this time frame.
          </p>
          <p>
            We will have portapotties, medics, and security available.
          </p>
          <p>
            Food and recreational beverages will be available for purchase during the event.
          </p>
          <p>
            <strong>Important:</strong> To ensure fire safety and minimize risk, large grills, hot plates, and glass containers are not permitted in the camping areas. Single burners and camp stoves are acceptable.
          </p>
          <p>
            Re-entry is not-permitted.
          </p>
        </div>
      </div>

      {/* San Luis Camping List */}
      <div className="mx-auto p-8 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">San Luis Camping List</h2>
        <ul className="list-disc list-inside text-lg text-left space-y-2">
          <li>Water</li>
          <li>Food</li>
          <li>
            Toiletries and Baby Wipes
          </li>
          <li>
            Tent with screw stakes for high winds or Car for sleeping quarters
          </li>
          <li>Sun Shades</li>
          <li>Tarps</li>
          <li>Bug repellant</li>
          <li>Sunscreen</li>
          <li>Wind Breaker</li>
          <li>
            Good Vibes / Responsible Mindset
          </li>
        </ul>
      </div>

      {/* Spacer */}
      <div className="my-20"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
