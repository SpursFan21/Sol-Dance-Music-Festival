//
// components/ArtitSidebar/ArtistSidebarMobile.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { artists } from "@/data/artists";

import type { ArtistSidebarProps } from "./types";

export default function ArtistSidebarMobile({
  onSelect,
  setIsCollapsed,
  initiallyExpanded = true,
}: ArtistSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isCollapsed, setLocalCollapsed] = useState(false);
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

  return (
    <>
      <AnimatePresence>
        {!isCollapsed && (
          <motion.aside
            key="mobile-sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="w-full p-4 bg-[#0d0d0d]/90 border-r border-white/10 h-[calc(100vh-64px)] fixed top-16 text-white z-50 space-y-10"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold uppercase text-yellow-400">Lineup</h2>
              <button
                onClick={() => {
                  setLocalCollapsed(true);
                  setIsCollapsed?.(true);
                }}
                className="text-yellow-400 px-3 py-1 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black"
              >
                Close
              </button>
            </div>

            {Object.entries(grouped).map(([day, list]) => (
              <div key={day}>
                <div className="flex items-center gap-2 mb-2" onClick={() =>
                  setExpandedDays(prev => ({ ...prev, [day]: !prev[day] }))
                }>
                  <div className="h-5 w-1 bg-yellow-400 rounded-sm" />
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                    {day}
                  </h2>
                  <span className="ml-auto text-yellow-400 text-xs">
                    {expandedDays[day] ? "-" : "+"}
                  </span>
                </div>

                <AnimatePresence>
                  {expandedDays[day] && (
                    <motion.ul
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden space-y-1"
                    >
                      {list.map((artist) => (
                        <li key={artist.id}>
                          <button
                            onClick={() => {
                              onSelect(artist);
                              setActiveId(artist.id);
                            }}
                            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${
                              activeId === artist.id
                                ? "bg-yellow-500 text-black"
                                : "hover:bg-white/10"
                            }`}
                          >
                            <Image src={artist.image} alt={artist.name} width={32} height={32} className="rounded-full" />
                            <span>{artist.name}</span>
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>

      {isCollapsed && (
        <button
          onClick={() => {
            setLocalCollapsed(false);
            setIsCollapsed?.(false);
          }}
          className="w-[28px] fixed top-1/2 left-0 -translate-y-1/2 z-50 bg-yellow-500 text-black py-3 rounded-r-md shadow-md"
        >
          ›
        </button>
      )}
    </>
  );
}
