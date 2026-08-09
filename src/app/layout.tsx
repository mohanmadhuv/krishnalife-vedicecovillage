import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krishna Life | Simple Living, High Thinking",
  description:
    "A living community rooted in Vedic wisdom, sustainable farming, and simple, sacred living — Krishna Life Vedic Ecovillage.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
