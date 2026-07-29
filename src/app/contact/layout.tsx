import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim Shigra untuk pertanyaan tentang produk, komunitas, atau program sosial. Kami siap membantu Anda.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
