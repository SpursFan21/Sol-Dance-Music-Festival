"use client";
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const targetDate = new Date("June 20, 2025 00:00:00 GMT-0600");

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
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mounted, targetDate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/subscribe", {
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
            {/* Logo Image */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/logotemp.png"
                alt="Sol Dance Logo"
                width={600}
                height={100}
                priority
                className="drop-shadow-lg"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl mb-4 text-white">June 20-22, 2025</h1>
              <h1 className="text-4xl mb-4 text-white">
                San Luis Valley, Southern Colorado
              </h1>
              {/* Spacer */}
              <div className="my-8"></div>
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
            <div className="my-8"></div>

            <h1 className="text-3xl mb-4 text-white">TICKETS ON SALE NOW!</h1>

            {/* Spacer */}
            <div className="my-4"></div>

            {/* Button that looks like a ticket */}
            <a
              href="https://theticketing.co/e/soldancemusicandartsfestival"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white py-10 px-14 text-8xl font-bold rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                GET TICKETS
              </button>
            </a>

            {/* Mailing List Sign-Up */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl text-white mb-2">
                MORE ANNOUNCEMENTS AND INFO TO COME
              </h2>
              <p className="text-lg text-white mb-4">
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
                    className="bg-gradient-to-r from-yellow-500 to-blue-500 text-white font-bold py-3 px-8 rounded-md shadow-lg hover:scale-105 transition-transform"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
