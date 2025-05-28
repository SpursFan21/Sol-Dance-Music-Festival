//sol-dance\src\app\workshops\page.tsx

// sol-dance\src\app\workshops\page.tsx

"use client";

import React from "react";
import WorkshopDesktop from "@/components/workshops/WorkshopDesktop";
import WorkshopMobile from "@/components/workshops/WorkshopMobile";

export default function WorkshopsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-24 md:pt-40">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">
        Workshops
      </h1>
      <div className="hidden md:block">
        <WorkshopDesktop />
      </div>
      <div className="block md:hidden">
        <WorkshopMobile />
      </div>
    </div>
  );
}
