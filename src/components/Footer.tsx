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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.083.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.265 1.33-3.084.88-.782 2.07-1.239 3.451-1.326 1.015-.064 1.982.024 2.896.265-.037-.627-.154-1.163-.35-1.588-.35-.76-1.04-1.146-2.056-1.146h-.028c-.754.01-1.373.27-1.84.772l-1.456-1.4c.764-.795 1.823-1.234 3.275-1.26h.045c1.634 0 2.86.583 3.644 1.733.657.964.983 2.214 1.004 3.772.4.194.764.413 1.093.657 1.218.902 2.073 2.146 2.476 3.6.53 1.912.248 4.151-1.425 5.835-1.857 1.868-4.143 2.63-7.24 2.654zM9.681 16.48c.052.924.513 1.522 1.373 1.779.614.183 1.312.2 1.973.16 1.12-.063 1.942-.46 2.444-1.184.358-.516.614-1.157.767-1.921-.644-.175-1.322-.277-2.034-.277h-.065c-.948.024-1.716.263-2.284.712-.556.44-.786.955-.735 1.505-.168-.023-.284-.116-.439-.223-.054.15.123.298 0 .449z" />
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
                <Image src="/logo.png" alt="SHIGRA" fill className="object-contain brightness-0 invert" sizes="28px" />
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
