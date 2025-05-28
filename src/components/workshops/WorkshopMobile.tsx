//sol-dance\src\components\workshops\WorkshopMobile.tsx

"use client";

import React, { useState } from "react";
import { workshops } from "@/data/workshopData";


export default function WorkshopMobile() {
  const [expandedDays, setExpandedDays] = useState({ Saturday: true, Sunday: true });
  const [expandedWorkshops, setExpandedWorkshops] = useState<Record<number, boolean>>({});

  const toggleDay = (day: "Saturday" | "Sunday") =>
    setExpandedDays((prev) => ({ ...prev, [day]: !prev[day] }));

  const toggleWorkshop = (idx: number) =>
    setExpandedWorkshops((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <>
      {["Saturday", "Sunday"].map((day) => (
        <div key={day} className="space-y-6">
          <button
            onClick={() => toggleDay(day as "Saturday" | "Sunday")}
            className="w-full flex items-center justify-between text-3xl font-bold text-white border-b border-[#4ceee0] pb-2 focus:outline-none"
          >
            {day} – June {day === "Saturday" ? "21" : "22"}
            <span className="text-[#4ceee0] text-2xl">{expandedDays[day as "Saturday" | "Sunday"] ? "−" : "+"}</span>
          </button>

          {expandedDays[day as "Saturday" | "Sunday"] && (
            <div className="space-y-4 pt-2">
              {workshops
                .filter((w) => w.day === day)
                .map((w, idx) => (
                  <div key={idx} className="bg-[#0d0d0d]/70 p-4 rounded-md shadow-md border-l-4 border-[#4ceee0]">
                    <button
                      onClick={() => toggleWorkshop(idx)}
                      className="w-full flex justify-between items-start text-left"
                    >
                      <div>
                        <p className="text-[#4ceee0] text-sm font-mono">{w.time}</p>
                        <h3 className="text-lg font-semibold text-white mt-1">{w.title}</h3>
                      </div>
                      <span className="text-[#4ceee0] text-xl">{expandedWorkshops[idx] ? "−" : "+"}</span>
                    </button>

                    {expandedWorkshops[idx] && (
                      <div className="mt-3 space-y-2">
                        {w.host && <p className="text-sm italic text-gray-300">{w.host}</p>}
                        <p className="text-sm text-gray-200 leading-relaxed">{w.description}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
