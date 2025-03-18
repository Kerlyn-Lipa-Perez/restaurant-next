import { Geist, Geist_Mono , JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  preload: true,
  variable: "--font-jetbrains-mono",
  
})

/**
 * The metadata for the Next.js app.
 *
 * @property {string} title - The title of the app.
 * @property {string} description - A brief description of the app.
 * @property {string[]} keywords - Keywords for search engine optimization.
 * @property {string[]} authors - The authors of the app.
 * @property {string} publisher - The publisher of the app.
 */
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
        className={`${JetBrainsMono.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
