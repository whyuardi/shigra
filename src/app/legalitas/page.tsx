import type { Metadata } from "next";
import { Clock, FileText, FlaskConical, Info, ShieldCheck, AlertCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Legalitas & Sertifikasi",
  description:
    "Dokumen legalitas dan sertifikasi resmi produk Shigra. Kami berkomitmen pada transparansi penuh — hanya menampilkan sertifikasi yang benar-benar telah diperoleh.",
};

const certifications = [
  {
    icon: FileText,
    code: "SNI",
    title: "Standar Nasional Indonesia",
    authority: "Badan Standardisasi Nasional (BSN)",
    description:
      "Sertifikasi SNI memastikan produk memenuhi standar keselamatan dan kualitas teknis yang ditetapkan pemerintah Republik Indonesia.",
    statusLabel: "Proses Pengujian",
    note:
      "Shigra sedang menjalani prosedur pengujian berkala. Dokumen resmi akan ditampilkan utuh setelah seluruh tahapan selesai.",
  },
  {
    icon: ShieldCheck,
    code: "BPOM",
    title: "Izin Edar BPOM",
    authority: "Badan Pengawas Obat dan Makanan RI",
    description:
      "Izin edar BPOM wajib dimiliki oleh perangkat yang berhubungan dengan air minum untuk menjamin keamanan dan mencegah klaim medis yang menyesatkan.",
    statusLabel: "Proses Perizinan",
    note:
      "Proses pendaftaran dan perizinan sedang berjalan sesuai ketentuan. Shigra mematuhi batasan bahwa tidak ada klaim kesehatan sebelum perizinan resmi terbit.",
  },
  {
    icon: FlaskConical,
    code: "LAB TEST",
    title: "Hasil Uji Laboratorium Independen",
    authority: "Laboratorium Terakreditasi KAN",
    description:
      "Pengujian kualitas air dan kemampuan filtrasi oleh laboratorium independen terakreditasi untuk memverifikasi data spesifikasi secara objektif.",
    statusLabel: "Pengujian Berlangsung",
    note:
      "Laporan hasil uji laboratorium akan dipublikasikan secara terbuka agar dapat diakses oleh publik.",
  },
  {
    icon: Info,
    code: "ISO",
    title: "Sertifikasi Sistem Manajemen",
    authority: "International Organization for Standardization",
    description:
      "Sertifikasi ISO menjamin standar kelayakan manufaktur dan manajemen mutu produk skala internasional.",
    statusLabel: "Tahap Evaluasi",
    note:
      "Proses evaluasi dokumen sertifikasi internasional sedang dijalankan bersama mitra manufaktur.",
  },
];

const regulatoryRefs = [
  {
    title: "Klarifikasi BPOM Mengenai Alat Olah Air",
    source: "Badan POM RI",
    url: "https://www.pom.go.id",
    desc: "BPOM menegaskan bahwa alat pemroses air tidak boleh mengklaim dapat mengobati penyakit secara ajaib. Shigra mendukung penuh prinsip ini.",
  },
  {
    title: "Standar SNI Air Minum & Perangkat",
    source: "Badan Standardisasi Nasional (BSN)",
    url: "https://bsn.go.id",
    desc: "Ketentuan acuan kualitas teknis dan standar keamanan perangkat di Indonesia.",
  },
  {
    title: "Peraturan Kementerian Kesehatan RI",
    source: "Kemenkes RI",
    url: "https://kemkes.go.id",
    desc: "Pedoman persyaratan kualitas air minum dan higienitas lingkungan.",
  },
];

export default function LegalitasPage() {
  return (
    <div className="bg-white min-h-screen text-[#0a2342]">
      {/* Hero Header */}
      <section className="pt-20 pb-16 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">
              Legalitas &amp; Sertifikasi
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              Transparansi Tanpa Kompromi
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              Kami hanya menyampaikan status hukum yang jujur. Dokumen resmi ditampilkan secara terbuka setelah seluruh proses perizinan selesai.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Warning Transparency Banner */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex items-start gap-4">
              <AlertCircle size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs sm:text-sm text-amber-900 leading-relaxed">
                <h2 className="font-bold text-amber-950 text-base">Komitmen Kejujuran Status Dokumen</h2>
                <p>
                  Label <strong>"Proses Pengujian/Perizinan"</strong> menandakan bahwa kami sedang menempuh jalur administrasi resmi. Shigra tidak mencantumkan badge sertifikasi palsu tanpa didasari dokumen verifikasi sah.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {certifications.map(({ icon: Icon, code, title, authority, description, statusLabel, note }, idx) => (
            <ScrollReveal key={code} delay={idx * 0.1} direction="up" distance={30}>
              <div className="bg-[#f9fafb] p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#0a2342] shadow-sm">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#2f6f5e]">{code}</span>
                      <h3 className="font-bold text-[#0a2342] text-xl leading-snug">{title}</h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-md border border-amber-300 w-fit">
                    <Clock size={12} /> {statusLabel}
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-gray-200">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{authority}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
                  <div className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-800">
                    <strong className="text-[#0a2342]">Status Aktual:</strong> {note}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="up" distance={30}>
            <div className="mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">Regulasi Resmi</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a2342]">Referensi Hukum</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regulatoryRefs.map(({ title, source, url, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 0.12} direction="up" distance={30}>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#2f6f5e] uppercase tracking-wider">{source}</span>
                    <h3 className="font-bold text-[#0a2342] text-base leading-snug">{title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0a2342] hover:text-[#2f6f5e] hover:underline"
                  >
                    Situs Resmi <ExternalLink size={12} />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
