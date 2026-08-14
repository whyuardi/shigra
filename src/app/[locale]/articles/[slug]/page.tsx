import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

interface ArticleData {
  slug: string;
  category: { id: string; en: string };
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  readTime: { id: string; en: string };
  date: { id: string; en: string };
  author: { id: string; en: string };
  content: { id: string[]; en: string[] };
}

const articlesData: Record<string, ArticleData> = {
  "memahami-sistem-filtrasi-air": {
    slug: "memahami-sistem-filtrasi-air",
    category: { id: "Kualitas Air", en: "Water Quality" },
    title: {
      id: "Memahami Sistem Filtrasi Air: Apa yang Perlu Anda Ketahui",
      en: "Understanding Water Filtration Systems: What You Need to Know",
    },
    excerpt: {
      id: "Tidak semua sistem filtrasi air bekerja sama. Artikel ini menjelaskan berbagai teknologi filtrasi di pasaran secara objektif berdasarkan standar teknis.",
      en: "Not all water filtration systems work the same way. This article explains various filtration technologies on the market objectively based on technical standards.",
    },
    readTime: { id: "5 min baca", en: "5 min read" },
    date: { id: "15 Juli 2026", en: "July 15, 2026" },
    author: { id: "Tim Edukasi Shigra", en: "Shigra Education Team" },
    content: {
      id: [
        "Air bersih adalah kebutuhan mendasar dalam menjaga kesehatan harian keluarga. Namun, di tengah beragamnya teknologi filtrasi yang beredar di pasaran, konsumen sering kali kesulitan membedakan antara klaim pemasaran dan spesifikasi teknis faktual.",
        "Secara umum, sistem filtrasi air bekerja dalam beberapa tingkatan untuk menyaring senyawa fisik, kimiawi, maupun mikroorganisme. Penyaringan tahap awal (sedimen filter) bertugas menangkap partikel fisik berukuran besar seperti pasir dan karat saluran air.",
        "Tahap selanjutnya adalah karbon aktif, yang secara efektif menyerap zat klorin, menghilangkan bau, dan meminimalkan rasa tidak sedap. Karbon aktif tingkat tinggi bekerja melalui proses adsorpsi molekuler.",
        "Garda terdepan filtrasi mikroskopis umumnya menggunakan teknologi Ultra Filtration (UF) dengan pori-pori hingga 0.01 Micron (0.01μm). Ukuran pori ini cukup kecil untuk menyaring sebagian besar kontaminan fisik dan mikroorganisme tanpa menghilangkan kandungan mineral alami yang dibutuhkan tubuh.",
        "Penting untuk dicatat bahwa alat pengolah air bertugas meningkatkan kebersihan fisik dan rasa air baku. Sesuai panduan regulasi BPOM dan BSN, perangkat air minum tidak boleh diklaim sebagai obat atau terapi pengobatan penyakit."
      ],
      en: [
        "Clean water is a fundamental requirement in maintaining daily family health. However, amidst the variety of filtration technologies on the market, consumers often struggle to distinguish between marketing claims and factual technical specifications.",
        "In general, water filtration systems operate in multiple stages to filter physical, chemical, and microorganism compounds. The initial filtration stage (sediment filter) captures large physical particles such as sand and water line rust.",
        "The next stage is activated carbon, which effectively absorbs chlorine, eliminates odor, and minimizes unpleasant taste. High-grade activated carbon works through molecular adsorption.",
        "The front line of microscopic filtration typically uses Ultra Filtration (UF) technology with pore sizes down to 0.01 Micron (0.01μm). This pore size is small enough to filter out physical contaminants and microorganisms without removing essential natural minerals needed by the body.",
        "It is important to note that water treatment devices function to enhance the physical cleanliness and taste of raw water. In accordance with BPOM and BSN regulatory guidelines, drinking water devices must not be claimed as medical treatment or disease therapy."
      ]
    }
  },
  "polutan-udara-dalam-ruangan": {
    slug: "polutan-udara-dalam-ruangan",
    category: { id: "Udara Bersih", en: "Clean Air" },
    title: {
      id: "Polutan Udara Dalam Ruangan: Fakta dan Cara Mengatasinya",
      en: "Indoor Air Pollutants: Facts and How to Deal With Them",
    },
    excerpt: {
      id: "Udara dalam ruangan bisa mengandung polutan lebih tinggi dari udara luar. Pelajari sumber-sumber polutan dan langkah pencegahan teruji.",
      en: "Indoor air can contain higher pollutants than outdoor air. Learn about pollutant sources and proven preventive measures.",
    },
    readTime: { id: "7 min baca", en: "7 min read" },
    date: { id: "10 Juli 2026", en: "July 10, 2026" },
    author: { id: "Tim Lingkungan Shigra", en: "Shigra Environment Team" },
    content: {
      id: [
        "Sebagian besar masyarakat menghabiskan hingga 80% waktunya di dalam ruangan, baik di rumah maupun tempat kerja. Namun, kualitas udara dalam ruangan (Indoor Air Quality) sering kali terabaikan.",
        "Polutan dalam ruangan dapat bersumber dari debu halus, bulu hewan peliharaan, sisa pembakaran dapur, hingga senyawa kimia menguap (VOC) dari cat, pembersih lantai, dan furnitur sintetis.",
        "Ventilasi udara yang buruk menyebabkan konsentrasi sirkulasi polutan terperangkap di dalam ruangan. Hal ini dapat menimbulkan keluhan lelah, hidung tersumbat, atau ketidaknyamanan saluran pernapasan.",
        "Langkah awal meminimalisir polutan dalam ruangan meliputi pembersihan rutin dengan filter HEPA, mengurangi penggunaan bahan kimia berbau tajam, serta memanfaatkan bantuan unit penapis udara (Air Purifier) berkualitas.",
        "Menjaga kebersihan sirkulasi udara harian adalah investasi jangka panjang untuk kenyamanan istirahat dan fokus kerja seluruh anggota keluarga."
      ],
      en: [
        "Most people spend up to 80% of their time indoors, whether at home or at work. However, Indoor Air Quality is often overlooked.",
        "Indoor pollutants can originate from fine dust, pet dander, kitchen combustion residue, and volatile organic compounds (VOCs) from paint, floor cleaners, and synthetic furniture.",
        "Poor air ventilation causes circulating pollutants to become trapped indoors. This can lead to fatigue, nasal congestion, or respiratory discomfort.",
        "Initial steps to minimize indoor pollutants include routine cleaning with HEPA filters, reducing the use of harsh chemical odors, and utilizing high-quality Air Purifiers.",
        "Maintaining clean daily air circulation is a long-term investment in rest comfort and work focus for the whole family."
      ]
    }
  },
  "panduan-memilih-pangan-organik": {
    slug: "panduan-memilih-pangan-organik",
    category: { id: "Pangan Sehat", en: "Healthy Food" },
    title: {
      id: "Panduan Memilih Pangan Organik untuk Keluarga",
      en: "Guide to Choosing Organic Food for Your Family",
    },
    excerpt: {
      id: "Memahami label, sertifikasi, dan prioritas belanja pangan sehat untuk keluarga tanpa terjebak gimik pemasaran.",
      en: "Understanding labels, certifications, and healthy food shopping priorities for families without falling for marketing gimmicks.",
    },
    readTime: { id: "6 min baca", en: "6 min read" },
    date: { id: "5 Juli 2026", en: "July 5, 2026" },
    author: { id: "Komunitas Pangan Shigra", en: "Shigra Food Community" },
    content: {
      id: [
        "Gaya hidup sehat tidak dapat dipisahkan dari nutrisi pangan yang dikonsumsi sehari-hari. Tren pangan organik berkembang pesat seiring tingginya kesadaran masyarakat terhadap residu pestisida sintesis.",
        "Pangan organik dibudidayakan tanpa pupuk kimia sintetis, pestisida kimia buatan, maupun rekayasa genetika (GMO). Namun, penting bagi konsumen untuk mampu membaca label sertifikasi organik yang sah dari lembaga terakreditasi.",
        "Bagi keluarga yang baru memulai transisi pangan sehat, tidak perlu mengganti seluruh bahan belanjaan sekaligus. Mulailah dari bahan pangan yang sering dikonsumsi langsung atau sayuran berserat tinggi.",
        "Mendukung petani lokal yang menerapkan praktik pertanian ramah lingkungan juga merupakan langkah nyata dalam menjaga kelestarian tanah dan ekosistem alam sekitar.",
        "Edukasi pangan sehat di komunitas Shigra berfokus pada pemenuhan gizi seimbang yang rasional dan terjangkau bagi setiap keluarga."
      ],
      en: [
        "A healthy lifestyle is inseparable from daily food nutrition. The organic food trend is growing rapidly along with public awareness of synthetic pesticide residues.",
        "Organic food is cultivated without synthetic chemical fertilizers, artificial pesticides, or genetic modification (GMO). However, it is essential for consumers to read valid organic certification labels from accredited institutions.",
        "For families starting a healthy food transition, there is no need to replace all groceries at once. Begin with foods consumed directly or high-fiber vegetables.",
        "Supporting local farmers who practice environmentally friendly agriculture is also a concrete step in preserving soil and local ecosystem sustainability.",
        "Healthy food education in the Shigra community focuses on rational and affordable balanced nutrition for every family."
      ]
    }
  },
  "regulasi-bpom-produk-air-minum": {
    slug: "regulasi-bpom-produk-air-minum",
    category: { id: "Regulasi", en: "Regulation" },
    title: {
      id: "Memahami Regulasi BPOM untuk Produk Olah Air Minum",
      en: "Understanding BPOM Regulations for Drinking Water Processing Products",
    },
    excerpt: {
      id: "Penjelasan aturan resmi BPOM mengenai izin edar dan batas klaim produk olah air minum di Indonesia.",
      en: "Explanation of official BPOM regulations regarding distribution permits and product claim limits for drinking water processing in Indonesia.",
    },
    readTime: { id: "8 min baca", en: "8 min read" },
    date: { id: "1 Juli 2026", en: "July 1, 2026" },
    author: { id: "Tim Hukum & Legalitas Shigra", en: "Shigra Legal & Compliance Team" },
    content: {
      id: [
        "Badan Pengawas Obat dan Makanan (BPOM) Republik Indonesia memiliki aturan ketat mengenai pengawasan alat dan perangkat pengolah air minum yang beredar di masyarakat.",
        "BPOM menegaskan bahwa perangkat filtrasi atau ionisasi air merupakan alat pemroses air dan bukan sediaan obat atau terapi kesehatan medis.",
        "Oleh karena itu, produsen dan distributor dilarang keras mengklaim bahwa air hasil proses alat dapat menyembuhkan penyakit kronis seperti diabetes, kanker, atau hipertensi.",
        "Shigra mendukung penuh regulasi transparansi BPOM ini. Seluruh penyampaian informasi mengenai produk Shigra berfokus murni pada spesifikasi teknis dan fungsi filtrasi fisik air baku.",
        "Masyarakat diimbau untuk selalu kritis terhadap klaim kesehatan yang tidak rasional dan memeriksa keabsahan izin edar resmi perangkat yang dibeli."
      ],
      en: [
        "The National Agency of Drug and Food Control (BPOM RI) has strict regulations regarding drinking water treatment devices on the market.",
        "BPOM emphasizes that water filtration or ionization devices are water processing equipment, not medical preparations or therapy.",
        "Therefore, manufacturers and distributors are strictly prohibited from claiming that treated water can cure chronic diseases like diabetes, cancer, or hypertension.",
        "Shigra fully supports BPOM's transparency regulations. All information regarding Shigra products focuses purely on technical specifications and physical raw water filtration.",
        "The public is encouraged to remain critical of irrational health claims and verify official distribution license validity for devices purchased."
      ]
    }
  },
  "hidrasi-fakta-vs-mitos": {
    slug: "hidrasi-fakta-vs-mitos",
    category: { id: "Gaya Hidup", en: "Lifestyle" },
    title: {
      id: "Hidrasi dan Kebutuhan Cairan Harian: Sains vs Mitos",
      en: "Hydration and Daily Fluid Needs: Science vs Myths",
    },
    excerpt: {
      id: "Mengkaji mitos umum hidrasi dan apa yang disampaikan oleh riset medis terkini secara proporsional.",
      en: "Examining common hydration myths and what current medical research says proportionally.",
    },
    readTime: { id: "5 min baca", en: "5 min read" },
    date: { id: "25 Juni 2026", en: "June 25, 2026" },
    author: { id: "Tim Kesehatan Shigra", en: "Shigra Health Team" },
    content: {
      id: [
        "Kebutuhan cairan tubuh harian sering kali disederhanakan dengan aturan '8 gelas sehari'. Padahal, kebutuhan hidrasi setiap individu berbeda-beda tergantung pada berat badan, tingkat aktivitas, dan suhu lingkungan.",
        "Fungsi utama air minum adalah mendukung metabolisme sel, mengatur suhu tubuh, melumasi persendian, dan membantu proses pembuangan sisa metabolisme alami.",
        "Minum air dalam jumlah cukup lebih berpatokan pada rasa haus alami dan warna urine yang jernih, daripada memaksakan minum secara berlebihan dalam satu waktu.",
        "Menjaga konsumsi air minum jernih dan bebas kontaminan berbahaya adalah langkah paling sederhana dalam mendukung stamina tubuh sepanjang hari."
      ],
      en: [
        "Daily body fluid needs are often simplified into an '8 glasses a day' rule. In reality, hydration needs vary per individual based on body weight, activity level, and ambient temperature.",
        "The primary function of drinking water is to support cellular metabolism, regulate body temperature, lubricate joints, and assist natural metabolic waste elimination.",
        "Adequate water intake is better guided by natural thirst and clear urine color rather than forcing excessive drinking at once.",
        "Maintaining consumption of clear, contaminant-free drinking water is the simplest step in supporting body stamina throughout the day."
      ]
    }
  },
  "cara-membaca-hasil-uji-air": {
    slug: "cara-membaca-hasil-uji-air",
    category: { id: "Kualitas Air", en: "Water Quality" },
    title: {
      id: "Membaca Laporan Hasil Uji Kualitas Air Laboratorium",
      en: "Reading Laboratory Water Quality Test Reports",
    },
    excerpt: {
      id: "Panduan membaca parameter penting dalam laporan hasil uji laboratorium independen secara tepat.",
      en: "A guide to reading important parameters in independent laboratory test reports accurately.",
    },
    readTime: { id: "10 min baca", en: "10 min read" },
    date: { id: "20 Juni 2026", en: "June 20, 2026" },
    author: { id: "Tim Riset Shigra", en: "Shigra Research Team" },
    content: {
      id: [
        "Uji kualitas air di laboratorium independen merupakan cara paling valid untuk memverifikasi kebersihan air baku atau air olahan.",
        "Parameter pengujian air terbagi menjadi 3 kategori utama: parameter fisik (kejernihan, bau, warna, derajat keasaman/pH), parameter kimiawi (kandungan logam berat seperti timbal, zat klorin, dan padatan terlarut/TDS), serta parameter mikrobiologi (bakteri E. coli dan Coliform).",
        "Laporan hasil uji laboratorium yang terakreditasi KAN (Komite Akreditasi Nasional) menyajikan angka batas maksimum yang diperbolehkan berdasarkan Peraturan Menteri Kesehatan RI.",
        "Shigra mendorong transparansi laporan uji laboratorium sebagai standar acuan obyektif dalam menilai efektivitas filtrasi air baku."
      ],
      en: [
        "Water quality testing in independent laboratories is the most valid way to verify raw or treated water cleanliness.",
        "Water test parameters fall into 3 main categories: physical parameters (clarity, odor, color, pH level), chemical parameters (heavy metals such as lead, chlorine, and total dissolved solids/TDS), and microbiological parameters (E. coli and Coliform bacteria).",
        "KAN-accredited laboratory test reports present maximum allowable limits based on Indonesian Ministry of Health Regulations.",
        "Shigra promotes laboratory test report transparency as an objective reference standard in evaluating raw water filtration effectiveness."
      ]
    }
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc = (locale === "en" ? "en" : "id") as "id" | "en";
  const article = articlesData[slug];

  if (!article) return { title: locale === "en" ? "Article Not Found" : "Artikel Tidak Ditemukan" };
  return {
    title: article.title[loc],
    description: article.excerpt[loc],
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const loc = (locale === "en" ? "en" : "id") as "id" | "en";
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  const tBack = loc === "en" ? "Back to All Articles" : "Kembali ke Semua Artikel";
  const tBy = loc === "en" ? "By" : "Oleh";
  const tDisclaimerTitle = loc === "en" ? "Educational Note:" : "Catatan Edukasi:";
  const tDisclaimerText = loc === "en" 
    ? "This article is published by the Shigra Community for general educational purposes. Information herein is not medical advice or professional treatment."
    : "Artikel ini diterbitkan oleh Komunitas Shigra untuk tujuan edukasi umum. Informasi di dalam artikel bukan merupakan saran atau pengobatan medis profesional.";
  const tOtherArticles = loc === "en" ? "← Other Articles" : "← Artikel Lainnya";
  const tJoin = loc === "en" ? "Join Community" : "Gabung Komunitas";

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
              <ArrowLeft size={14} /> {tBack}
            </Link>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs font-bold text-[#2f6f5e] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100 uppercase tracking-wider">
                {article.category[loc]}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock size={12} /> {article.readTime[loc]}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] leading-tight mt-2">
              {article.title[loc]}
            </h1>

            <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1">
                <Calendar size={13} /> {article.date[loc]}
              </span>
              <span>•</span>
              <span>{tBy} {article.author[loc]}</span>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Article Body */}
      <main className="py-16 max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal direction="up" distance={30}>
          <div className="space-y-6 text-gray-700 text-base leading-relaxed">
            {article.content[loc].map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Regulatory Disclaimer Box */}
          <div className="mt-12 p-6 bg-[#f9fafb] rounded-2xl border border-gray-200 flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#2f6f5e] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>{tDisclaimerTitle}</strong> {tDisclaimerText}
            </p>
          </div>

          {/* Action Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/articles"
              className="btn-secondary text-xs py-2.5 px-5"
            >
              {tOtherArticles}
            </Link>
            <Link
              href="/community"
              className="btn-accent text-xs py-2.5 px-5"
            >
              {tJoin}
            </Link>
          </div>
        </ScrollReveal>
      </main>
    </article>
  );
}
