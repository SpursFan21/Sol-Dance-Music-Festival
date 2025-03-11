"use client";
import { useState, useEffect } from "react";

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
    <div className="page-container">
      {/* Overlay container for better readability */}
      <div className="bg-black bg-opacity-60 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-8 text-white">
          Sol Dance Festival
        </h1>
        <div className="text-center">
          <p className="text-2xl mb-4 text-white">Countdown to June 20th</p>
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
      </div>
    </div>
  );
}
