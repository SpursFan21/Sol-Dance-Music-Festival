//sol-dance\src\app\artists\page.tsx
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ArtistSidebar from "@/components/ArtistSidebar/ArtistSidebarController";
import ArtistDetail from "@/components/ArtistDetail/ArtistDetailController";
import Footer from "@/components/Footer";

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  day: string;
  soundcloudEmbed?: string;
}

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768 && selectedArtist) {
      setShowSidebar(false);
    }
  }, [selectedArtist]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
        setIsSidebarCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg-texture.jpg')] bg-cover bg-center bg-fixed text-white font-sans">
      <div className="flex flex-1 flex-col md:flex-row relative">
        {/* Sidebar */}
        {showSidebar && (
          <ArtistSidebar
            onSelect={setSelectedArtist}
            onClose={() => setShowSidebar(false)}
            setIsCollapsed={setIsSidebarCollapsed}
          />
        )}

        {/* Slim Reopen Button */}
        {!showSidebar && (
          <button
            onClick={() => setShowSidebar(true)}
            className="fixed top-20 left-0 z-40 bg-yellow-500 text-black px-2 py-2 rounded-r-md shadow-md md:hidden"
          >
            ‹
          </button>
        )}

        {/* Main Content */}
        <main className="flex-1 flex items-start md:items-center justify-center p-4 sm:p-6 md:p-10 mt-20 md:mt-0">
          <div className="bg-black/70 rounded-xl p-4 sm:p-6 md:p-10 max-w-5xl w-full mx-auto overflow-x-hidden">
            <AnimatePresence mode="wait">
              {!selectedArtist ? (
                <div className="text-center" key="intro">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    Get to know the artists of Sol Dance 2025
                  </h1>
                  <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto">
                    Click on an artist from the sidebar to explore their bio, music, and festival day lineup.
                  </p>
                </div>
              ) : (
                <ArtistDetail
                  key={selectedArtist.id}
                  artist={selectedArtist}
                  isSidebarCollapsed={isSidebarCollapsed}
                />
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <footer className="bg-black/80 text-white">
        <Footer />
      </footer>
    </div>
  );
}
