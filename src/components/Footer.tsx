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
              <p>Email: hello@shigra.id</p>
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
