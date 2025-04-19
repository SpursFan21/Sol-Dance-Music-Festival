//src\components\ArtistDetail\ArtistDetailController.tsx
"use client";
import { useEffect, useState } from "react";
import ArtistDetailMobile from "./ArtistDetailMobile";
import ArtistDetailDesktop from "./ArtistDetailDesktop";

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

export default function ArtistDetail({ artist, isSidebarCollapsed }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <ArtistDetailMobile artist={artist} isSidebarCollapsed={isSidebarCollapsed} />
  ) : (
    <ArtistDetailDesktop artist={artist} />
  );
}
