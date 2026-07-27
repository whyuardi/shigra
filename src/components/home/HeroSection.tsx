"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2f6f5e] bg-[#2f6f5e]/10 px-3 py-1 rounded-full">
              Platform Komunitas Gaya Hidup Sehat
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0a2342] leading-tight">
              Mind, Body &amp; Soul. <br />
              <span className="text-[#2f6f5e] font-serif italic font-normal">
                Hidup Sehat Berkelanjutan.
              </span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Shigra adalah ekosistem komunitas yang berfokus pada tiga pilar kesehatan utama: udara bersih, air berkualitas, dan pangan organik sehat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/community" className="btn-accent">
                Gabung Komunitas <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-secondary">
                Pelajari Tentang Shigra
              </Link>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              <Image
                src="/community.png"
                alt="Shigra Lifestyle Community"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
