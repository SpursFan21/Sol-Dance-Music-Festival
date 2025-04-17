//sol-dance\src\components\ArtistDetail.tsx
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

export default function ArtistDetail({ artist }: { artist: Artist }) {
  return (
    <motion.div
      key={artist.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <div className="bg-[#0d0d0d]/80 border border-yellow-500 shadow-xl rounded-xl p-8 md:p-10 flex flex-col lg:flex-row items-center gap-10 text-white max-w-5xl mx-auto">

        {/* Artist Image + Day Badge */}
        <div className="relative">
          <Image
            src={artist.image}
            alt={artist.name}
            width={350}
            height={350}
            className="rounded-xl object-cover shadow-lg"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full shadow-md animate-pulse">
            {`Plays ${artist.day}`}
          </div>
        </div>

        {/* Info Block */}
        <div className="flex-1 text-center lg:text-left space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold"
          >
            {artist.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            {artist.bio}
          </motion.p>

          {artist.soundcloudEmbed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <iframe
                width="100%"
                height="166"
                allow="autoplay"
                scrolling="no"
                frameBorder="no"
                src={artist.soundcloudEmbed}
                className="rounded-md shadow-md"
              />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
