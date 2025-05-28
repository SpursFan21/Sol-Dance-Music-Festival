//sol-dance\src\components\workshops\WorkshopDesktop.tsx

"use client";

import React, { useState } from "react";
import { workshops } from "@/data/workshopData";


const WorkshopDesktop = () => {
  const [expandedDays, setExpandedDays] = useState({
    Saturday: true,
    Sunday: true,
  });

  const [expandedWorkshops, setExpandedWorkshops] = useState<Record<number, boolean>>({});

  const toggleDay = (day: "Saturday" | "Sunday") => {
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const toggleWorkshop = (idx: number) => {
    setExpandedWorkshops((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const renderWorkshops = (day: "Saturday" | "Sunday") => (
    <div className="space-y-8">
      <button
        onClick={() => toggleDay(day)}
        className="w-full flex items-center justify-between text-3xl font-bold text-white border-b border-[#4ceee0] pb-2 focus:outline-none"
      >
        {day} – June {day === "Saturday" ? "21" : "22"}
        <span className="text-[#4ceee0] text-2xl">{expandedDays[day] ? "−" : "+"}</span>
      </button>

      {expandedDays[day] && (
        <div className="space-y-4 pt-4">
          {workshops
            .map((w, idx) => ({ ...w, idx }))
            .filter((w) => w.day === day)
            .map((w) => (
              <div
                key={w.idx}
                className="border-l-4 border-[#4ceee0] pl-4 py-3 bg-[#0d0d0d]/60 rounded-md shadow-md"
              >
                <button
                  onClick={() => toggleWorkshop(w.idx)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <div className="grid grid-cols-[180px_1fr] items-center gap-4">
                    <span className="text-[#4ceee0] text-xl font-semibold whitespace-nowrap">
                      {w.time}
                    </span>
                    <h3 className="text-xl font-semibold text-white leading-snug">
                      {w.title}
                    </h3>
                  </div>

                  <span className="text-[#4ceee0] text-xl">
                    {expandedWorkshops[w.idx] ? "−" : "+"}
                  </span>
                </button>

                {expandedWorkshops[w.idx] && (
                  <div className="mt-3 space-y-2">
                    {w.host && (
                      <p className="text-base italic text-gray-300">{w.host}</p>
                    )}
                    <p className="text-base text-gray-200 leading-relaxed">
                      {w.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );

  return (
  <div className="max-w-4xl mx-auto px-4 pt-4 pb-24 space-y-12">
    {renderWorkshops("Saturday")}
    {renderWorkshops("Sunday")}
  </div>
  );

};

export default WorkshopDesktop;
