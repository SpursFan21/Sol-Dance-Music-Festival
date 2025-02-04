"use client";
import { useState, useEffect } from "react";

export default function Home() {
  // Always call hooks in the same order.
  // 1. Mounted flag: This will be false on the server and initial client render.
  const [mounted, setMounted] = useState(false);
  // 2. Countdown state (always declared).
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date for June 20th, 2025 at 00:00:00 Mountain Time.
  const targetDate = new Date("June 20, 2025 00:00:00 GMT-0600");

  // On mount, set the mounted flag to true.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up the interval timer for the countdown.
  useEffect(() => {
    // Only start the interval if the component is mounted.
    if (!mounted) return;

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
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
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 p-8">
      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-8">Sol Dance Festival</h1>

      {/* Countdown Timer Section */}
      <div className="text-center">
        <p className="text-2xl mb-4">Countdown to June 20th</p>
        {mounted ? (
          // Render dynamic countdown once mounted.
          <div className="flex gap-8 justify-center text-4xl font-bold">
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
          // Render a placeholder to ensure consistent markup on the server.
          <div className="flex gap-8 justify-center text-4xl font-bold">
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
    </div>
  );
}
