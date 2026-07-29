"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, MessageSquare, Clock, ArrowRight, Building, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const WA_NUMBER = "628176779719";

const contactInfo = [
  {
    icon: Building,
    title: "Kantor Operasional",
    value: "BGE Prambanan",
    sub: "Pengelola Shigra Product Line",
  },
  {
    icon: MapPin,
    title: "Lokasi",
    value: "Prambanan, Indonesia",
    sub: "Pusat jaringan komunitas dan administrasi",
  },
  {
    icon: Mail,
    title: "Email Respon",
    value: "ceo@benuagreen.com",
    sub: "Jawaban dalam 1-2 hari kerja",
    href: "mailto:ceo@benuagreen.com",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    value: "+62 817-6779-719",
    sub: "Respon cepat di jam kerja",
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: Clock,
    title: "Jam Kerja",
    value: "09:00 – 17:00 WIB",
    sub: "Senin – Jumat (Hari Kerja)",
  },
];

const topicLabels: Record<string, string> = {
  product: "Pertanyaan Produk SM-S230XNA",
  community: "Keanggotaan Komunitas",
  social: "Program Sosial",
  legalitas: "Dokumen Legalitas",
  other: "Lainnya",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const topicText = topicLabels[form.topic] || form.topic || "-";
    const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ") || "-";

    // Build a clean, professional WhatsApp message (no emoji — renders broken on some devices)
    const lines = [
      "Halo Tim Shigra,",
      "",
      "Perkenalkan, saya menghubungi melalui website Shigra.",
      "",
      "--- Data Pengirim ---",
      `Nama  : ${fullName}`,
      `Email : ${form.email || "-"}`,
      `Topik : ${topicText}`,
      "",
      "--- Isi Pesan ---",
      form.message || "-",
      "",
      "Mohon respons-nya, terima kasih.",
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Hubungi Kami
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              Mari Terhubung Bersama Tim Shigra
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              Pengelola lini produk Shigra (BGE Prambanan) siap menyambut pertanyaan seputar komunitas, detail produk, edukasi, atau program sosial.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Column */}
            <ScrollReveal direction="up" distance={30} className="lg:col-span-5 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Informasi Akses</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a2342]">Kantor BGE Prambanan</h2>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, sub, href }) => {
                  const inner = (
                    <div className="bg-[#f9fafb] p-5 rounded-2xl border border-gray-200 flex items-start gap-4 hover:border-gray-300 transition-colors">
                      <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#0a2342] shrink-0">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#2f6f5e] uppercase tracking-wider block">{title}</span>
                        <p className="font-bold text-[#0a2342] text-base mt-0.5">{value}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
                      </div>
                    </div>
                  );

                  return href ? (
                    <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div key={title}>{inner}</div>
                  );
                })}
              </div>

              {/* WA Card */}
              <div className="bg-[#0a2342] text-white p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <MessageSquare size={20} className="text-[#2f6f5e]" />
                  <h3 className="text-lg font-bold">Layanan WhatsApp</h3>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  Ingin respon langsung? Hubungi perwakilan komunikasi kami via WhatsApp selama jam kerja.
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent text-xs inline-flex items-center gap-2 py-2 px-4"
                >
                  Chat WhatsApp Sekarang <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>

            {/* Form Column */}
            <ScrollReveal direction="up" distance={30} delay={0.15} className="lg:col-span-7">
              <div className="bg-[#f9fafb] p-6 sm:p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-[#0a2342] mb-1">Kirim Pesan via WhatsApp</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-6">
                  Isi formulir berikut, lalu klik kirim — pesan Anda akan diteruskan langsung ke WhatsApp tim Shigra dengan format rapi.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                        Nama Depan
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Nama depan"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                        Nama Belakang
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Nama belakang"
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alamat@email.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      Topik
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      required
                      value={form.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#0a2342]"
                    >
                      <option value="">Pilih topik pertanyaan</option>
                      <option value="product">Pertanyaan Produk SM-S230XNA</option>
                      <option value="community">Keanggotaan Komunitas</option>
                      <option value="social">Program Sosial</option>
                      <option value="legalitas">Dokumen Legalitas</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tuliskan pertanyaan atau pesan Anda..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342] resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-accent w-full justify-center text-xs py-3 gap-2">
                    <Send size={14} /> Kirim via WhatsApp
                  </button>

                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    Dengan menekan tombol ini, pesan Anda akan dibuka di aplikasi WhatsApp dan dikirim ke nomor resmi Shigra (+62 817-6779-719).
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
