//src\app\about\page.tsx

"use client";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/dune1.jpg')" }}
    >
      {/* Main content should take up available space */}
      <div className="relative flex-grow flex justify-center">
        {/* Overlay applied only to main content */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <main className="relative p-8 text-center text-white max-w-3xl mx-auto">
          {/* Spacer */}
          <div className="my-20 sm:my-40 md:my-40 lg:my-40"></div>
          <h1 className="text-5xl font-bold mb-6">
            Get ready for a magical, one of a kind experience at SolDance Festival!
          </h1>
          <div className="my-24 sm:my-24 md:my-24 lg:my-24"></div>
          <p className="text-lg mb-6">
            Let your soul dance under the sun, and celebrate the essence of summertime.
            SolDance is a festival like no other - where memories are made, and we experience our true selves once again.
          </p>
          {/* Spacer */}
          <div className="my-4 sm:my-28 md:my-28 lg:my-40"></div>
          <p className="text-lg mb-6">
            Join us for a weekend filled with pulsating beats, healing, and a celebration of the Summer Solstice.
            This community driven event is dedicated to immerse you in a world of underground music, interactive art,
            wellness workshops, and nature&apos;s elements. Join our friends Ancient Embers in a special opening ceremony
            to set intentions and align with community on historical land.
          </p>

        </main>
      </div>

      {/* Footer (Not covered by overlay) */}
      <Footer />
    </div>
  );
}
