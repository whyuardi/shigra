import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import ProductPreview from "@/components/home/ProductPreview";
import CommunityTeaser from "@/components/home/CommunityTeaser";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import SocialImpactTeaser from "@/components/home/SocialImpactTeaser";
import LegalitasStrip from "@/components/home/LegalitasStrip";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHIGRA — Mind, Body & Soul",
  description:
    "Platform komunitas dan edukasi gaya hidup sehat. Air bersih, air berkualitas, dan pangan sehat untuk keluarga Indonesia yang lebih baik.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ProductPreview />
      <CommunityTeaser />
      <ArticlesPreview />
      <SocialImpactTeaser />
      <LegalitasStrip />
    </>
  );
}
