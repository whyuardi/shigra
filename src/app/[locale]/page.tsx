import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import ProductPreview from "@/components/home/ProductPreview";
import CommunityTeaser from "@/components/home/CommunityTeaser";
import ArticlesPreview from "@/components/home/ArticlesPreview";
import SocialImpactTeaser from "@/components/home/SocialImpactTeaser";
import LegalitasStrip from "@/components/home/LegalitasStrip";

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
