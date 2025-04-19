// sol-dance\src\app\page.tsx
"use client";
import { useState, useEffect, FormEvent, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Custom hook to get the window width
function useWindowWidth() {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    minutes: "--",
    seconds: "--",
  });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Photo gallery data
  const galleryImages = [
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/g4.jpg",
    "/g5.jpg",
    "/g6.jpg",
    "/g7.jpg",
    "/g8.jpg",
    "/g9.jpg",
    "/g10.jpg",
    "/g11.jpg",
    "/g12.jpg",
  ];

  // Use custom hook to get the current window width
  const windowWidth = useWindowWidth();
  // Determine how many images to show based on window width:
  const imagesPerView = windowWidth < 768 ? 1 : 3;

  // State to control the index of the first visible image
  const [visibleImages, setVisibleImages] = useState(0);

  // Functions to handle slide navigation using imagesPerView
  const nextSlide = () => {
    setVisibleImages((prev) => (prev + imagesPerView) % galleryImages.length);
  };
  const prevSlide = () => {
    setVisibleImages(
      (prev) => (prev - imagesPerView + galleryImages.length) % galleryImages.length
    );
  };

  const targetDate = useMemo(() => new Date('2025-06-20T00:00:00'), []);


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24)).toString();
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString();
        const minutes = Math.floor((difference / (1000 * 60)) % 60).toString();
        const seconds = Math.floor((difference / 1000) % 60).toString();
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, targetDate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit email");
      }
    } catch (error) {
      console.error(error);
    }
    setEmail("");
  };

  return (
    <div className="flex flex-col min-h-screen home-page">
      {/* Full-Width Dark Overlay */}
      <div className="flex-grow">
        <div className="w-full bg-black bg-opacity-60">
          {/* Centered Content Container */}
          <div className="page-container mx-auto p-8 rounded-lg">
            {/* Spacer */}
            <div className="my-0"></div>
            {/* Countdown Timer */}
            <div className="text-center" suppressHydrationWarning>
              {mounted ? (
                <div className="flex gap-8 justify-center text-4xl font-bold text-white">
                  <div>
                    <p>{timeLeft.days}</p>
                    <span className="text-base font-normal">Days</span>
                  </div>
                  <div>
                    <p>{timeLeft.hours}</p>
                    <span className="text-base font-normal">Hours</span>
                  </div>
                  <div>
                    <p>{timeLeft.minutes}</p>
                    <span className="text-base font-normal">Minutes</span>
                  </div>
                  <div>
                    <p>{timeLeft.seconds}</p>
                    <span className="text-base font-normal">Seconds</span>
                  </div>
                </div>
              ) : (
                <div className="flex gap-8 justify-center text-4xl font-bold text-white">
                  <div>
                    <p>--</p>
                    <span className="text-base font-normal">Days</span>
                  </div>
                  <div>
                    <p>--</p>
                    <span className="text-base font-normal">Hours</span>
                  </div>
                  <div>
                    <p>--</p>
                    <span className="text-base font-normal">Minutes</span>
                  </div>
                  <div>
                    <p>--</p>
                    <span className="text-base font-normal">Seconds</span>
                  </div>
                </div>
              )}
            </div>

            {/* Spacer */}
            <div className="my-10"></div>

            {/* Logo Image */}
            <div className="mb-8 flex justify-center">
              <Link href="/" onClick={() => {}}>
                <Image
                  src="/SoldanceLogo.png"
                  alt="Sol Dance Logo"
                  width={700}
                  height={100}
                  priority
                  className="mt-0 -mb-24 drop-shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Spacer */}
            <div className="my-20"></div>

            {/* Event Info */}
            <div className="text-center">
              <h1 className="text-4xl mb-4 font-semibold text-white">June 20-22, 2025</h1>
              <h1 className="text-4xl mb-4 font-semibold text-white">
                San Luis Valley, Southern Colorado
              </h1>
            </div>

            {/* Spacer */}
            <div className="my-8"></div>

            <h1 className="text-center text-3xl mb-4 font-semibold text-white">TICKETS ON SALE NOW!</h1>

            {/* Spacer */}
            <div className="my-4"></div>

            {/* Button that looks like a ticket */}
            <Link
              href="https://theticketing.co/e/soldancemusicandartsfestival"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-full max-w-4xl mx-auto p-4">
                <Image
                  src="/Ticket-Button-06.png"
                  alt="Get Tickets"
                  width={1200}
                  height={400}
                  className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] hover:scale-110 transition-transform duration-300 hover:animate-pulse "
                />
              </div>
            </Link>




            {/* Mailing List Sign-Up */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">
                MORE ANNOUNCEMENTS AND INFO TO COME
              </h2>
              <p className="text-lg font-semibold text-white mb-4">
                JOIN OUR MAILING LIST TO BE THE FIRST TO KNOW
              </p>
              {submitted ? (
                <p className="text-green-300 font-bold">
                  Thank you for signing up!
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-cyan-800 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#40E0D0] transition-all"
                  >
                    Sign Up
                  </button>

                </form>
              )}
            </div>

            {/* Photo Gallery */}
            <div className="mt-16">
              <div className="relative">
                <div className="flex overflow-x-auto gap-4 py-4">
                  {galleryImages
                    .slice(visibleImages, visibleImages + imagesPerView)
                    .map((src, index) => (
                      <div
                        key={index}
                        className="flex-none w-[300px] h-[200px] rounded-lg overflow-hidden shadow-lg"
                      >
                        <Image
                          src={src}
                          alt={`Gallery Image ${index + 1}`}
                          width={300}
                          height={200}
                          style={{ objectFit: 'cover' }}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                </div>


                {/* Scroll buttons */}
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                  onClick={prevSlide}
                >
                  &#8592;
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full"
                  onClick={nextSlide}
                >
                  &#8594;
                </button>
              </div>
              {/* Spacer */}
              <div className="my-16"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
