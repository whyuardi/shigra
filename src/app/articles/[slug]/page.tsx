import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2, Tag, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
}

const articlesData: Record<string, ArticleData> = {
  "memahami-sistem-filtrasi-air": {
    slug: "memahami-sistem-filtrasi-air",
    category: "Kualitas Air",
    title: "Memahami Sistem Filtrasi Air: Apa yang Perlu Anda Ketahui",
    excerpt: "Tidak semua sistem filtrasi air bekerja sama. Artikel ini menjelaskan berbagai teknologi filtrasi di pasaran secara objektif berdasarkan standar teknis.",
    readTime: "5 min baca",
    date: "15 Juli 2026",
    author: "Tim Edukasi Shigra",
    content: [
      "Air bersih adalah kebutuhan mendasar dalam menjaga kesehatan harian keluarga. Namun, di tengah beragamnya teknologi filtrasi yang beredar di pasaran, konsumen sering kali kesulitan membedakan antara klaim pemasaran dan spesifikasi teknis faktual.",
      "Secara umum, sistem filtrasi air bekerja dalam beberapa tingkatan untuk menyaring senyawa fisik, kimiawi, maupun mikroorganisme. Penyaringan tahap awal (sedimen filter) bertugas menangkap partikel fisik berukuran besar seperti pasir dan karat saluran air.",
      "Tahap selanjutnya adalah karbon aktif, yang secara efektif menyerap zat klorin, menghilangkan bau, dan meminimalkan rasa tidak sedap. Karbon aktif tingkat tinggi bekerja melalui proses adsorpsi molekuler.",
      "Garda terdepan filtrasi mikroskopis umumnya menggunakan teknologi Ultra Filtration (UF) dengan pori-pori hingga 0.01 Micron (0.01μm). Ukuran pori ini cukup kecil untuk menyaring sebagian besar kontaminan fisik dan mikroorganisme tanpa menghilangkan kandungan mineral alami yang dibutuhkan tubuh.",
      "Penting untuk dicatat bahwa alat pengolah air bertugas meningkatkan kebersihan fisik dan rasa air baku. Sesuai panduan regulasi BPOM dan BSN, perangkat air minum tidak boleh diklaim sebagai obat atau terapi pengobatan penyakit."
    ]
  },
  "polutan-udara-dalam-ruangan": {
    slug: "polutan-udara-dalam-ruangan",
    category: "Udara Bersih",
    title: "Polutan Udara Dalam Ruangan: Fakta dan Cara Mengatasinya",
    excerpt: "Udara dalam ruangan bisa mengandung polutan lebih tinggi dari udara luar. Pelajari sumber-sumber polutan dan langkah pencegahan teruji.",
    readTime: "7 min baca",
    date: "10 Juli 2026",
    author: "Tim Lingkungan Shigra",
    content: [
      "Sebagian besar masyarakat menghabiskan hingga 80% waktunya di dalam ruangan, baik di rumah maupun tempat kerja. Namun, kualitas udara dalam ruangan (Indoor Air Quality) sering kali terabaikan.",
      "Polutan dalam ruangan dapat bersumber dari debu halus, bulu hewan peliharaan, sisa pembakaran dapur, hingga senyawa kimia menguap (VOC) dari cat, pembersih lantai, dan furnitur sintetis.",
      "Ventilasi udara yang buruk menyebabkan konsentrasi sirkulasi polutan terperangkap di dalam ruangan. Hal ini dapat menimbulkan keluhan lelah, hidung tersumbat, atau ketidaknyamanan saluran pernapasan.",
      "Langkah awal meminimalisir polutan dalam ruangan meliputi pembersihan rutin dengan filter HEPA, mengurangi penggunaan bahan kimia berbau tajam, serta memanfaatkan bantuan unit penapis udara (Air Purifier) berkualitas.",
      "Menjaga kebersihan sirkulasi udara harian adalah investasi jangka panjang untuk kenyamanan istirahat dan fokus kerja seluruh anggota keluarga."
    ]
  },
  "panduan-memilih-pangan-organik": {
    slug: "panduan-memilih-pangan-organik",
    category: "Pangan Sehat",
    title: "Panduan Memilih Pangan Organik untuk Keluarga",
    excerpt: "Memahami label, sertifikasi, dan prioritas belanja pangan sehat untuk keluarga tanpa terjebak gimik pemasaran.",
    readTime: "6 min baca",
    date: "5 Juli 2026",
    author: "Komunitas Pangan Shigra",
    content: [
      "Gaya hidup sehat tidak dapat dipisahkan dari nutrisi pangan yang dikonsumsi sehari-hari. Tren pangan organik berkembang pesat seiring tingginya kesadaran masyarakat terhadap residu pestisida sintesis.",
      "Pangan organik dibudidayakan tanpa pupuk kimia sintetis, pestisida kimia buatan, maupun rekayasa genetika (GMO). Namun, penting bagi konsumen untuk mampu membaca label sertifikasi organik yang sah dari lembaga terakreditasi.",
      "Bagi keluarga yang baru memulai transisi pangan sehat, tidak perlu mengganti seluruh bahan belanjaan sekaligus. Mulailah dari bahan pangan yang sering dikonsumsi langsung atau sayuran berserat tinggi.",
      "Mendukung petani lokal yang menerapkan praktik pertanian ramah lingkungan juga merupakan langkah nyata dalam menjaga kelestarian tanah dan ekosistem alam sekitar.",
      "Edukasi pangan sehat di komunitas Shigra berfokus pada pemenuhan gizi seimbang yang rasional dan terjangkau bagi setiap keluarga."
    ]
  },
  "regulasi-bpom-produk-air-minum": {
    slug: "regulasi-bpom-produk-air-minum",
    category: "Regulasi",
    title: "Memahami Regulasi BPOM untuk Produk Olah Air Minum",
    excerpt: "Penjelasan aturan resmi BPOM mengenai izin edar dan batas klaim produk olah air minum di Indonesia.",
    readTime: "8 min baca",
    date: "1 Juli 2026",
    author: "Tim Hukum & Legalitas Shigra",
    content: [
      "Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia memiliki aturan ketat mengenai pengawasan alat dan perangkat pengolah air minum yang beredar di masyarakat.",
      "BPOM menegaskan bahwa perangkat filtrasi atau ionisasi air merupakan alat pemroses air dan bukan sediaan obat atau terapi kesehatan medis.",
      "Oleh karena itu, produsen dan distributor dilarang keras mengklaim bahwa air hasil proses alat dapat menyembuhkan penyakit kronis seperti diabetes, kanker, atau hipertensi.",
      "Shigra mendukung penuh regulasi transparansi BPOM ini. Seluruh penyampaian informasi mengenai produk Shigra berfokus murni pada spesifikasi teknis dan fungsi filtrasi fisik air baku.",
      "Masyarakat diimbau untuk selalu kritis terhadap klaim kesehatan yang tidak rasional dan memeriksa keabsahan izin edar resmi perangkat yang dibeli."
    ]
  },
  "hidrasi-fakta-vs-mitos": {
    slug: "hidrasi-fakta-vs-mitos",
    category: "Gaya Hidup",
    title: "Hidrasi dan Kebutuhan Cairan Harian: Sains vs Mitos",
    excerpt: "Mengkaji mitos umum hidrasi dan apa yang disampaikan oleh riset medis terkini secara proporsional.",
    readTime: "5 min baca",
    date: "25 Juni 2026",
    author: "Tim Kesehatan Shigra",
    content: [
      "Kebutuhan cairan tubuh harian sering kali disederhanakan dengan aturan '8 gelas sehari'. Padahal, kebutuhan hidrasi setiap individu berbeda-beda tergantung pada berat badan, tingkat aktivitas, dan suhu lingkungan.",
      "Fungsi utama air minum adalah mendukung metabolisme sel, mengatur suhu tubuh, melumasi persendian, dan membantu proses pembuangan sisa metabolisme alami.",
      "Minum air dalam jumlah cukup lebih berpatokan pada rasa haus alami dan warna urine yang jernih, daripada memaksakan minum secara berlebihan dalam satu waktu.",
      "Menjaga konsumsi air minum jernih dan bebas kontaminan berbahaya adalah langkah paling sederhana dalam mendukung stamina tubuh sepanjang hari."
    ]
  },
  "cara-membaca-hasil-uji-air": {
    slug: "cara-membaca-hasil-uji-air",
    category: "Kualitas Air",
    title: "Membaca Laporan Hasil Uji Kualitas Air Laboratorium",
    excerpt: "Panduan membaca parameter penting dalam laporan hasil uji laboratorium independen secara tepat.",
    readTime: "10 min baca",
    date: "20 Juni 2026",
    author: "Tim Riset Shigra",
    content: [
      "Uji kualitas air di laboratorium independen merupakan cara paling valid untuk memverifikasi kebersihan air baku atau air olahan.",
      "Parameter pengujian air terbagi menjadi 3 kategori utama: parameter fisik (kejernihan, bau, warna, derajat keasaman/pH), parameter kimiawi (kandungan logam berat seperti timbal, zat klorin, dan padatan terlarut/TDS), serta parameter mikrobiologi (bakteri E. coli dan Coliform).",
      "Laporan hasil uji laboratorium yang terakreditasi KAN (Komite Akreditasi Nasional) menyajikan angka batas maksimum yang diperbolehkan berdasarkan Peraturan Menteri Kesehatan RI.",
      "Shigra mendorong transparansi laporan uji laboratorium sebagai standar acuan obyektif dalam menilai efektivitas filtrasi air baku."
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articlesData[resolvedParams.slug];
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articlesData[resolvedParams.slug];

  if (!article) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen text-[#0a2342]">
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-[#f9fafb] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-4">
          <ScrollReveal direction="up" distance={20}>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#0a2342] transition-colors mb-2"
            >
              <ArrowLeft size={14} /> Kembali ke Semua Artikel
            </Link>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-bold text-[#2f6f5e] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100 uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock size={12} /> {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] leading-tight mt-2">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1">
                <Calendar size={13} /> {article.date}
              </span>
              <span>•</span>
              <span>Oleh {article.author}</span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Article Body */}
      <main className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Regulatory Disclaimer Box */}
          <div className="mt-12 p-6 bg-[#f9fafb] rounded-2xl border border-gray-200 flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#2f6f5e] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Catatan Edukasi:</strong> Artikel ini diterbitkan oleh Komunitas Shigra untuk tujuan edukasi umum. Informasi di dalam artikel bukan merupakan saran atau pengobatan medis profesional.
            </p>
          </div>

          {/* Action Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/articles"
              className="btn-secondary text-xs py-2.5 px-5"
            >
              ← Artikel Lainnya
            </Link>
            <Link
              href="/community"
              className="btn-accent text-xs py-2.5 px-5"
            >
              Gabung Komunitas
            </Link>
          </div>
        </ScrollReveal>
      </main>
    </article>
  );
}
