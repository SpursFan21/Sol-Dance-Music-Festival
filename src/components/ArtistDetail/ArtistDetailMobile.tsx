//src\components\ArtistDetail\ArtistDetailMobile.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  day: string;
  soundcloudEmbed?: string;
}

interface Props {
  artist: Artist;
  isSidebarCollapsed?: boolean;
}

export default function ArtistDetailMobile({ artist, isSidebarCollapsed }: Props) {
  const mobileLeftPadding = isSidebarCollapsed ? "pl-[36px]" : "";

  return (
    <motion.div
      key={artist.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full px-4 ${mobileLeftPadding}`}
    >
      <div className="bg-[#0d0d0d]/80 border border-yellow-500 shadow-xl rounded-xl p-4 text-white max-w-[90vw] mx-auto space-y-6 text-center">
        <div className="relative w-40 h-40 mx-auto">
          <Image
            src={artist.image}
            alt={artist.name}
            fill
            sizes="100vw"
            className="rounded-xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-md animate-pulse">
            {`Plays ${artist.day}`}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-3xl font-bold">{artist.name}</h2>
          <p className="text-base text-gray-300 leading-relaxed">{artist.bio}</p>
        </div>

        {artist.soundcloudEmbed && (
        <div className="w-full max-w-full overflow-hidden pt-4">
          <iframe
            title={`${artist.name} SoundCloud embed`}
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
              artist.soundcloudEmbed
            )}&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`}
            height={300}
            className="w-full rounded-md shadow-md border-0 overflow-hidden"
          />
        </div>
      )}

      </div>
    </motion.div>
  );
}
