//sol-dance\src\components\ArtistSidebar.tsx
"use client";


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { artists } from "@/data/artists";

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  day: string;
  soundcloudEmbed?: string;
}

interface ArtistSidebarProps {
  onSelect: (artist: Artist) => void;
}

export default function ArtistSidebar({ onSelect }: ArtistSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({});

  const groupedByDay: Record<string, Artist[]> = {
    Friday: artists.filter((a) => a.day === "Friday"),
    Saturday: artists.filter((a) => a.day === "Saturday"),
    Sunday: artists.filter((a) => a.day === "Sunday"),
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeId]);

  const toggleDay = (day: string) => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <aside className="w-64 p-4 sm:p-6 bg-[#0d0d0d]/90 backdrop-blur-md border-r border-white/10 overflow-y-auto h-screen sticky top-0 text-white space-y-10 shadow-lg">
      <div className="my-20" />

      {Object.entries(groupedByDay).map(([day, artistList], idx) => (
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex items-center gap-2 mb-4 cursor-pointer" onClick={() => toggleDay(day)}>
            <div className="h-5 w-1 bg-yellow-400 rounded-sm" />
            <h2 className="text-sm sm:text-lg font-semibold uppercase tracking-wider text-yellow-400">
              {day}
            </h2>
            <span className="ml-auto text-yellow-400 text-xs">{expandedDays[day] ? "-" : "+"}</span>
          </div>

          <AnimatePresence initial={false}>
            {expandedDays[day] !== false && (
              <motion.ul
                key={day + "-list"}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 overflow-hidden"
              >
                {artistList.map((artist) => (
                <motion.li
                    key={artist.id}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    ref={(el) => {
                    if (el && artist.id === activeId) {
                        setTimeout(() => {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 150); // tiny delay so animation doesn't interfere
                    }
                    }}
                >
                    <button
                    onClick={() => {
                        onSelect(artist);
                        setActiveId(artist.id);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                        activeId === artist.id
                        ? "bg-yellow-500 text-black shadow-md scale-[1.02]"
                        : "hover:bg-white/10 hover:text-primary"
                    }`}
                    >
                    <Image
                        src={artist.image}
                        alt={artist.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                    />
                    <span>{artist.name}</span>
                    </button>
                </motion.li>
                ))}

              </motion.ul>
            )}
          </AnimatePresence>

          {idx < Object.entries(groupedByDay).length - 1 && (
            <div className="w-full my-6 flex justify-center">
              <div className="w-10/12 border-t border-yellow-500 opacity-50" />
            </div>
          )}
        </motion.div>
      ))}
    </aside>
  );
}

