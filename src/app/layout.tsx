//Next\sol-dance\src\app\layout.tsx
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[url('/bg-texture.jpg')] bg-cover bg-center bg-fixed text-white font-sans">
        <Navbar />
        <MobileNav />
        {children}
         <SpeedInsights />
         <Analytics />
      </body>
    </html>
  );
}

