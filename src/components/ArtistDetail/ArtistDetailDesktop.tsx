//src\components\ArtistDetail\ArtistDetailDesktop.tsx
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
}

export default function ArtistDetailDesktop({ artist }: Props) {
  return (
    <motion.div
      key={artist.id}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full px-4 sm:px-0"
    >
      <div className="bg-[#0d0d0d]/80 border border-[#4ceee0] shadow-xl rounded-xl p-10 text-white max-w-5xl mx-auto flex gap-10 items-center">
        <div className="shrink-0 flex flex-col items-center gap-2">
          <div className="relative w-60 h-60 rounded-full shadow-lg overflow-hidden">
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <div className="bg-gradient-to-b from-[#339a94] to-[#4ceee0] text-black text-xs font-bold px-4 py-1 rounded-full shadow-md animate-pulse">
            {`Plays ${artist.day}`}
          </div>
        </div>




        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold">{artist.name}</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{artist.bio}</p>

          {artist.soundcloudEmbed && (
            <div className="pt-4">
              <iframe
                title={`${artist.name} SoundCloud embed`}
                allow="autoplay"
                height={166}
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                  artist.soundcloudEmbed
                )}&color=%23ffcc00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`}
                className="w-full rounded-md shadow-md border-0 overflow-hidden"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

