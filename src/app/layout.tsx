import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SHIGRA — Mind, Body & Soul",
    template: "%s | SHIGRA",
  },
  description:
    "SHIGRA adalah komunitas gaya hidup sehat yang berfokus pada tiga pilar: udara bersih (Air), air berkualitas (Water), dan pangan sehat (Food). Bergabunglah dengan komunitas kami.",
  keywords: [
    "Shigra",
    "Air Purifier",
    "Water Machine",
    "Organic Food",
    "Komunitas Sehat",
    "Mind Body Soul",
    "Gaya Hidup Sehat",
    "SM-S230XNA",
  ],
  authors: [{ name: "Shigra Indonesia" }],
  creator: "Shigra Indonesia",
  openGraph: {
    title: "SHIGRA — Mind, Body & Soul",
    description:
      "Platform komunitas dan edukasi gaya hidup sehat. Air bersih, air berkualitas, dan pangan sehat untuk keluarga Indonesia.",
    type: "website",
    locale: "id_ID",
    siteName: "SHIGRA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
