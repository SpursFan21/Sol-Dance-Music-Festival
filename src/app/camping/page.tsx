"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function CampingPage() {
  return (
    <div>
      {/* Top Half with Background Image */}
      <div
        className="relative bg-center h-[600px]"
        style={{
          backgroundImage: "url('/banner2.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative mx-auto p-8 rounded-b-lg flex flex-col items-center">
          {/* Logo Image as link to Home */}
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

      {/* Bottom Half: Camping Info */}
      <div className="mx-auto p-8 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">Camping Information</h2>
        <div className="text-lg mb-4 space-y-4 text-left">
          <p>
            Car camping is available. Your vehicle will be parked adjacent to your designated camping space, with a 6–7 foot buffer between vehicles and 10–20 yards of clearance perpendicular for tents, pop-ups, or other setups.
          </p>
          <p>
            Quiet hours will be observed from 4:00 AM to 9:00 AM. We kindly ask all campers to respect their neighbors by keeping noise to a minimum during this period.
          </p>
          <p>
            Portable toilets will be provided on-site, and medical and security staff will be available at all times for your safety.
          </p>
          <p>
            Food and recreational beverages will be available for purchase during the event.
          </p>
          <p>
            <strong>Important:</strong> To ensure fire safety and minimize risk, large grills, hot plates, and glass containers are not permitted in the camping areas. Single burners and camp stoves are acceptable.
          </p>
          <p>
            Re-entry is permitted if needed; however, proof of purchase will be required at the point of entry.
          </p>
          <p>
            Please note: Shower facilities are not available this year. We plan to include them in future festivals as we continue to develop the site.
          </p>
        </div>
      </div>

      {/* San Luis Camping List */}
      <div className="mx-auto p-8 text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">San Luis Camping List</h2>
        <ul className="list-disc list-inside text-lg text-left space-y-2">
          <li>Toiletries and Baby Wipes</li>
          <li>Tent or Car for sleeping quarters</li>
          <li>
            Waterproofing bags and tarps for vending/personal items (lesson learned from last year)
          </li>
          <li>
            Water (We will have water available, but please bring extra for yourself and friends!)
          </li>
          <li>Food (snacks and extra sustenance)</li>
          <li>Wind Breaker (it gets windy)</li>
          <li>Bug repellant (AN ABSOLUTE NECESSITY)</li>
          <li>Sunscreen</li>
          <li>Good Vibes</li>
          <li>
            Responsible Mindset (reckless behavior can lead to issues; we’re celebrating freedom responsibly)
          </li>
          <li>Even though there will be portapotties, please bring your own toilet paper.</li>
        </ul>
      </div>

      {/* Spacer */}
      <div className="my-20"></div>


      {/* Footer */}
      <Footer />
    </div>
  );
}
