"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  return (
    <div className="home-page">
      <div className="page-container bg-black bg-opacity-60 p-8 rounded-lg">
        {/* Replace h1 with logo image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logotemp.png"
            alt="Sol Dance Logo"
            width={600} // Adjust width as needed
            height={100} // Adjust height as needed
            priority
            className="drop-shadow-lg"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-white">June 20-22, 2025</h1>
          <h1 className="text-4xl mb-4 text-white">San Luis Valley, Southern Colorado</h1>
          {/* Spacer */}
        <div className="my-8"></div> {/* Adjust 'my-8' for desired space */}
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
        <div className="my-8"></div> {/* Adjust 'my-8' for desired space */}

        <h1 className="text-3xl mb-4 text-white">TICKETS ON SALE NOW!</h1>

        {/* Spacer */}
        <div className="my-4"></div> {/* Adjust 'my-8' for desired space */}

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
      
      </div>
    </div>
  );
}
