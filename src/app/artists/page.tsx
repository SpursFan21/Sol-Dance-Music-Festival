//sol-dance\src\app\artists\page.tsx
"use client";

import { useState } from "react";
import ArtistSidebar from "@/components/ArtistSidebar";
import ArtistDetail from "@/components/ArtistDetail";
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

  return (
    <div className="min-h-screen flex flex-col bg-[url('/bg-texture.jpg')] bg-cover bg-center bg-fixed text-white font-sans">
      
      {/* Main layout */}
      <div className="flex flex-1">
        <ArtistSidebar onSelect={setSelectedArtist} />

        <main className="flex-1 flex items-center justify-center p-6 md:p-10">
          {/* Content container */}
          <div className="bg-black/70 rounded-xl p-10 max-w-5xl w-full flex items-center justify-center">
            {!selectedArtist ? (
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Get to know the artists of Sol Dance 2025</h1>
                <p className="text-lg text-gray-300 max-w-xl mx-auto">
                  Click on an artist from the sidebar to explore their bio, music, and festival day lineup.
                </p>
              </div>
            ) : (
              <ArtistDetail artist={selectedArtist} />
            )}
          </div>
        </main>
      </div>

      {/* Footer lives outside the scroll container */}
      <footer className="bg-black/80 text-white">
        <Footer />
      </footer>
    </div>
  );
}
