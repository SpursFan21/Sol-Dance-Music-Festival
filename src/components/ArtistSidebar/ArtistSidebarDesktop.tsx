// components/ArtitSidebar/ArtistSidebarDesktop.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { artists } from "@/data/artists";

import type { ArtistSidebarProps } from "./types";

export default function ArtistSidebarDesktop({
  onSelect,
  initiallyExpanded = true,
}: ArtistSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({
    Friday: initiallyExpanded,
    Saturday: initiallyExpanded,
    Sunday: initiallyExpanded,
  });

  const grouped = {
    Friday: artists.filter(a => a.day === "Friday"),
    Saturday: artists.filter(a => a.day === "Saturday"),
    Sunday: artists.filter(a => a.day === "Sunday"),
  };

  const toggleDay = (day: string) =>
    setExpandedDays(prev => ({ ...prev, [day]: !prev[day] }));

  return (
    <motion.aside
      key="desktop-sidebar"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ duration: 0.3 }}
      className="md:w-64 p-6 bg-[#0d0d0d]/90 backdrop-blur-md border-r border-white/10 overflow-y-auto h-screen sticky top-0 text-white space-y-10 shadow-lg z-40 hidden md:block"
    >
      <div className="my-20" />

      {Object.entries(grouped).map(([day, list], idx) => (
        <motion.div
          key={day}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer"
            onClick={() => toggleDay(day)}
          >
            <div className="h-5 w-1 bg-yellow-400 rounded-sm" />
            <h2 className="text-sm sm:text-lg font-semibold uppercase tracking-wider text-yellow-400">
              {day}
            </h2>
            <span className="ml-auto text-yellow-400 text-xs">
              {expandedDays[day] ? "-" : "+"}
            </span>
          </div>

          <AnimatePresence initial={false}>
            {expandedDays[day] && (
              <motion.ul
                key={`${day}-list`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 overflow-hidden"
              >
                {list.map((artist) => (
                  <motion.li
                    key={artist.id}
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      onClick={() => {
                        onSelect(artist);
                        setActiveId(artist.id);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition duration-200 text-sm font-medium ${
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

          {idx < Object.entries(grouped).length - 1 && (
            <div className="w-full my-6 flex justify-center">
              <div className="w-10/12 border-t border-yellow-500 opacity-50" />
            </div>
          )}
        </motion.div>
      ))}
    </motion.aside>
  );
}
