"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, MessageSquare, Clock, ArrowRight, Building, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

const WA_NUMBER = "628176779719";

export default function ContactPage() {
  const t = useTranslations("contact");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Building,
      title: t("officeTitle"),
      value: "BGE Prambanan",
      sub: t("officeSub"),
    },
    {
      icon: MapPin,
      title: t("locationTitle"),
      value: t("locationValue"),
      sub: t("locationSub"),
    },
    {
      icon: Mail,
      title: t("emailTitle"),
      value: "ceo@benuagreen.com",
      sub: t("emailSub"),
      href: "mailto:ceo@benuagreen.com",
    },
    {
      icon: Phone,
      title: t("whatsappTitle"),
      value: "+62 817-6779-719",
      sub: t("whatsappSub"),
      href: `https://wa.me/${WA_NUMBER}`,
    },
    {
      icon: Clock,
      title: t("hoursTitle"),
      value: t("hoursValue"),
      sub: t("hoursSub"),
    },
  ];

  const topicLabels: Record<string, string> = {
    product: t("topicProduct"),
    community: t("topicCommunity"),
    social: t("topicSocial"),
    legalitas: t("topicLegal"),
    other: t("topicOther"),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const topicText = topicLabels[form.topic] || form.topic || "-";
    const fullName = [form.firstName, form.lastName].filter(Boolean).join(" ") || "-";

    const lines = [
      t("waGreeting"),
      "",
      t("waIntro"),
      "",
      t("waSenderData"),
      `${t("waName")}  : ${fullName}`,
      `${t("waEmail")} : ${form.email || "-"}`,
      `${t("waTopic")} : ${topicText}`,
      "",
      t("waMessageSection"),
      form.message || "-",
      "",
      t("waClosing"),
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
              {t("badge")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0a2342] mt-2">
              {t("title")}
            </h1>
            <p className="text-gray-600 text-base mt-3 max-w-2xl leading-relaxed">
              {t("description")}
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#2f6f5e]">{t("infoBadge")}</span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a2342]">{t("infoTitle")}</h2>
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
                  <h3 className="text-lg font-bold">{t("waServiceTitle")}</h3>
                </div>
                <p className="text-white/70 text-xs leading-relaxed">
                  {t("waServiceDesc")}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent text-xs inline-flex items-center gap-2 py-2 px-4"
                >
                  {t("waChat")} <ArrowRight size={14} />
                </a>
              </div>
            </ScrollReveal>

            {/* Form Column */}
            <ScrollReveal direction="up" distance={30} delay={0.15} className="lg:col-span-7">
              <div className="bg-[#f9fafb] p-6 sm:p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-[#0a2342] mb-1">{t("formTitle")}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-6">
                  {t("formDesc")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                        {t("firstName")}
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder={t("firstNamePlaceholder")}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                        {t("lastName")}
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder={t("lastNamePlaceholder")}
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      {t("emailLabel")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("emailPlaceholder")}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342]"
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      {t("topicLabel")}
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      required
                      value={form.topic}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-[#0a2342]"
                    >
                      <option value="">{t("topicPlaceholder")}</option>
                      <option value="product">{t("topicProduct")}</option>
                      <option value="community">{t("topicCommunity")}</option>
                      <option value="social">{t("topicSocial")}</option>
                      <option value="legalitas">{t("topicLegal")}</option>
                      <option value="other">{t("topicOther")}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#0a2342] uppercase tracking-wider mb-1.5">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder={t("messagePlaceholder")}
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-[#0a2342] focus:outline-none focus:border-[#0a2342] resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-accent w-full justify-center text-xs py-3 gap-2">
                    <Send size={14} /> {t("submitButton")}
                  </button>

                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    {t("submitNote")}
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
