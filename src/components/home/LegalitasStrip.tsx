"use client";

import Link from "next/link";
import { ShieldCheck, FileText, FlaskConical, Clock, ArrowRight } from "lucide-react";

const certs = [
  { icon: FileText, code: "SNI", title: "Standar Nasional Indonesia", desc: "Standar keselamatan teknis" },
  { icon: ShieldCheck, code: "BPOM", title: "Izin Edar BPOM", desc: "Perizinan resmi produk olah air" },
  { icon: FlaskConical, code: "LAB TEST", title: "Uji Lab Independen", desc: "Verifikasi laboratorium terakreditasi" },
  { icon: FileText, code: "ISO", title: "Sertifikasi ISO", desc: "Sistem manajemen mutu produk" },
];

export default function LegalitasStrip() {
  return (
    <section className="py-20 bg-[#f9fafb] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          {/* Left Text */}
          <div className="lg:w-1/3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Transparansi Resmi
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2342]">
              Legalitas &amp; Sertifikasi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kami berkomitmen pada transparansi penuh. Kami hanya menampilkan sertifikasi yang benar-benar dimiliki atau sedang dalam tahap pengujian resmi.
            </p>
            <Link
              href="/legalitas"
              className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e] hover:underline inline-flex items-center gap-1 pt-1"
            >
              Lihat Detail Dokumen <ArrowRight size={14} />
            </Link>
          </div>

          {/* 4 Cards Grid */}
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map(({ icon: Icon, code, title, desc }) => (
              <div
                key={code}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between">
                  <div className="w-8 h-8 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center text-[#0a2342]">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-flex items-center gap-1">
                    <Clock size={10} /> PROSES
                  </span>
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#0a2342] block">{code}</span>
                  <p className="font-bold text-xs text-[#0a2342] mt-0.5 leading-snug">{title}</p>
                  <p className="text-[11px] text-gray-500 mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
