import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import PortfolioSection from "@/components/portofolio-section";
import ContactSection from "@/components/contact-section";
import CommentsSection from "@/components/comments-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-slate-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <CommentsSection />
      <Footer />
    </div>
  );
}
