//src\components\ArtistSidebar\types.ts
export interface Artist {
    id: string;
    name: string;
    image: string;
    bio: string;
    day: string;
    soundcloudEmbed?: string;
  }
  
  export interface ArtistSidebarProps {
    onSelect: (artist: Artist) => void;
    onClose?: () => void;
    initiallyExpanded?: boolean;
    setIsCollapsed?: (value: boolean) => void;
  }
  