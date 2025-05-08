//
// components/ArtitSidebar/ArtistSidebarMobile.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { artists } from "@/data/artists";

import type { ArtistSidebarProps } from "./types";

export default function ArtistSidebarMobile({
  onSelect,
  setIsCollapsed,
  initiallyExpanded = false,
}: ArtistSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isCollapsed, setLocalCollapsed] = useState(false);
  const [expandedDays, setExpandedDays] = useState<Record<string, boolean>>({
    Friday: initiallyExpanded,
    Saturday: initiallyExpanded,
    Sunday: initiallyExpanded,
  });

  const [expandedStages, setExpandedStages] = useState<
    Record<string, Record<string, boolean>>
  >({
    Friday: { Summit: false, Temple: false },
    Saturday: { Summit: false, Temple: false },
    Sunday: { Summit: false, Temple: false },
  });

  useEffect(() => {
    document.body.style.overflow = isCollapsed ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCollapsed]);

  const groupedByDay = {
    Friday: artists.filter((a) => a.day === "Friday"),
    Saturday: artists.filter((a) => a.day === "Saturday"),
    Sunday: artists.filter((a) => a.day === "Sunday"),
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
            className="w-full p-4 bg-[#0d0d0d]/90 border-r border-white/10 h-[calc(100vh-64px)] fixed top-16 text-white z-50 space-y-10 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold uppercase text-yellow-400">
                Lineup
              </h2>
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

            {Object.entries(groupedByDay).map(([day, list]) => {
              const isDayExpanded = expandedDays[day];
              const isStageExpanded = expandedStages[day];

              return (
                <div key={day}>
                  {/* Day toggle */}
                  <div
                    className="flex items-center gap-2 mb-2 cursor-pointer"
                    onClick={() =>
                      setExpandedDays((prev) => ({
                        ...prev,
                        [day]: !prev[day],
                      }))
                    }
                  >
                    <div className="h-5 w-1 bg-yellow-400 rounded-sm" />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-yellow-400">
                      {day}
                    </h2>
                    <span className="ml-auto text-yellow-400 text-xs">
                      {isDayExpanded ? "−" : "+"}
                    </span>
                  </div>

                  <AnimatePresence>
                    {isDayExpanded && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden space-y-4"
                      >
                        {["Summit", "Temple"].map((stage) => {
                          const stageExpanded = isStageExpanded?.[stage];
                          const artistsInStage = list
                            .filter((a) => a.stage === stage)
                            .sort((a, b) => a.id.localeCompare(b.id));

                          return (
                            <div key={stage}>
                              {/* Stage toggle */}
                              <div
                                className="flex items-center cursor-pointer mb-1 px-1 text-xs uppercase font-bold text-yellow-300"
                                onClick={() =>
                                  setExpandedStages((prev) => ({
                                    ...prev,
                                    [day]: {
                                      ...prev[day],
                                      [stage]: !prev[day][stage],
                                    },
                                  }))
                                }
                              >
                                <span>{stage} Stage</span>
                                <span className="ml-auto text-yellow-300 text-xs">
                                  {stageExpanded ? "−" : "+"}
                                </span>
                              </div>

                              <AnimatePresence>
                                {stageExpanded && (
                                  <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-1 overflow-hidden"
                                  >
                                    {artistsInStage.map((artist) => (
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
                                          <Image
                                            src={artist.image}
                                            alt={artist.name}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                          />
                                          <span>{artist.name}</span>
                                        </button>
                                      </li>
                                    ))}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
