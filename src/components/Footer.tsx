import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  PERUSAHAAN: [
    { href: "/about", label: "Tentang Shigra" },
    { href: "/legalitas", label: "Legalitas & Sertifikasi" },
    { href: "/social-impact", label: "Social Impact" },
    { href: "/contact", label: "Kontak Kami" },
  ],
  EKOSISTEM: [
    { href: "/product", label: "SM-S230XNA Water Machine" },
    { href: "/articles", label: "Artikel Edukasi" },
    { href: "/community", label: "Community Hub" },
    { href: "/#pillars", label: "Mind, Body & Soul" },
  ],
  INFORMASI: [
    { href: "/articles", label: "Air Purifier (Edukasi)" },
    { href: "/articles", label: "Kualitas Air Minum" },
    { href: "/articles", label: "Pangan Organik Sehat" },
    { href: "/social-impact", label: "Program Subsidi Air" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/shigra_/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592778950902",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@shigra_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@shigra_",
    icon: (
      <svg viewBox="0 0 192 192" fill="currentColor" className="w-4 h-4">
        <path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.326-38.092 34.702.528 9.818 5.235 18.295 13.26 23.868 6.789 4.716 15.544 7.06 24.655 6.6 12.037-.607 21.467-5.166 28.02-13.54 4.978-6.37 8.098-14.56 9.378-24.673 5.622 3.396 9.807 7.876 12.207 13.222 4.083 9.092 4.326 24.008-3.38 31.71-6.767 6.763-14.905 9.673-27.26 9.768-13.682-.105-24.024-4.506-30.744-13.076-6.238-7.957-9.503-19.39-9.7-33.963.197-14.573 3.462-26.007 9.7-33.963 6.72-8.57 17.062-12.971 30.744-13.076 13.793.107 24.26 4.575 31.106 13.272 3.345 4.249 5.866 9.58 7.574 15.896l14.901-3.485c-2.246-8.464-5.818-15.648-10.725-21.48-9.605-12.208-23.552-18.535-41.455-18.812h-.401c-17.79.272-31.664 6.568-41.244 18.715C52.563 72.16 48.497 86.642 48.253 104h.004c.244 17.358 4.31 31.84 12.083 43.04 9.58 13.798 23.454 20.853 41.247 21.117h.401c15.842-.151 27.827-5.038 36.639-14.941 11.498-12.902 11.074-28.727 5.662-40.771z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2342] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <Image src="/logo.png" alt="SHIGRA" fill className="object-contain" sizes="28px" />
              </div>
              <span className="font-bold text-lg tracking-wider text-white">
                SHIGRA
              </span>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Platform komunitas gaya hidup sehat berbasis tiga pilar: udara bersih, air berkualitas, dan pangan sehat.
            </p>

            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>Pengelola Lini Produk: BGE Prambanan</p>
              <p>Lokasi: Indonesia</p>
              <p>Email: ceo@benuagreen.com</p>
              <p>WhatsApp: +62 817-6779-719</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-[#2f6f5e] rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white/40 block">{title}</span>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {year} SHIGRA. Seluruh hak cipta dilindungi undang-undang.</p>
          <p className="text-center md:text-right">
            Konten bersifat edukatif dan bukan merupakan klaim medis atau janji pengobatan.
          </p>
        </div>
      </div>

    </footer>
  );
}
