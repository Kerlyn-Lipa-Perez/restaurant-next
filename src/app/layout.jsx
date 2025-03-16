import { Geist, Geist_Mono , JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  variable: "--font-jetbrains-mono",
  
})

export const metadata = {
  title: "Restaurante JS",
  description: "A restaurant app built with Next.js",
  keywords: ["nextjs", "react", "typescript","Food"],
  authors: ["Kerlyn Lipa"],
  publisher: "Kerlyn Lipa",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${JetBrainsMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
