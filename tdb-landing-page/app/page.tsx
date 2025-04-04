import HeroSection from "@/components/hero-section"
import PartnerLogos from "@/components/partner-logos"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import NewsSection from "@/components/news-section"
import FeaturedArticles from "@/components/featured-articles"
import TdbTrader from "@/components/tdb-trader"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnerLogos />
      <ServicesSection />
      <AboutSection />
      <NewsSection />
      <FeaturedArticles />
      <TdbTrader />
      <Newsletter />
      <Footer />
    </main>
  )
}

