//src\components\ArtistSidebar\ArtistSidebarController.tsx
"use client";

import { useEffect, useState } from "react";
import ArtistSidebarMobile from "./ArtistSidebarMobile";
import ArtistSidebarDesktop from "./ArtistSidebarDesktop";

interface Artist {
  id: string;
  name: string;
  image: string;
  bio: string;
  day: string;
  soundcloudEmbed?: string;
}

interface Props {
  onSelect: (artist: Artist) => void;
  onClose?: () => void;
  initiallyExpanded?: boolean;
  setIsCollapsed?: (value: boolean) => void;
}

export default function ArtistSidebarController(props: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile
    ? <ArtistSidebarMobile {...props} />
    : <ArtistSidebarDesktop {...props} />;
}

