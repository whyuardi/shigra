"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/product", label: "Produk" },
  { href: "/community", label: "Komunitas" },
  { href: "/articles", label: "Edukasi" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-7 h-7">
            <Image src="/logo.png" alt="SHIGRA Logo" fill className="object-contain" sizes="28px" />
          </div>
          <span className="font-bold text-lg tracking-wider text-[#0a2342]">
            SHIGRA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-[#2f6f5e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-secondary text-xs py-2 px-4">
            Kontak
          </Link>
          <Link href="/community" className="btn-accent text-xs py-2 px-4">
            Gabung Komunitas
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-[#0a2342]"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-semibold text-gray-800 py-1.5 hover:text-[#2f6f5e]"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-secondary w-full text-center text-xs py-2.5"
            >
              Kontak
            </Link>
            <Link
              href="/community"
              onClick={() => setIsOpen(false)}
              className="btn-accent w-full text-center text-xs py-2.5"
            >
              Gabung Komunitas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
