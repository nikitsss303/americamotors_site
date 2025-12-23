import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ConsultationForm } from "./components/ConsultationForm";
import { StatsSection } from "./components/StatsSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProcessSection } from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";
import { ExpertsSection } from "./components/ExpertsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  // Images from Unsplash
  const heroImage = "https://images.unsplash.com/photo-1684965747763-9b8fc4f721f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwfGVufDF8fHx8MTc2NjQ0NDA2OHww&ixlib=rb-4.1.0&q=80&w=1080";
  const expertImage1 = "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjQyMjI5Mnww&ixlib=rb-4.1.0&q=80&w=1080";
  const expertImage2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.albedis.com%2Fwp-content%2Fuploads%2F2025%2F09%2FMathias1920x1080px-.png&f=1&nofb=1&ipt=ebba13426c77c094e29c55354ee28a6b08eaf09ae383346597c4ae853f50d217";
  const customerImage = "https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyfGVufDF8fHx8MTc2NjM5NjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080";
  const ctaImage = "https://images.unsplash.com/photo-1740744362373-bbd648d38dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhdWN0aW9ufGVufDF8fHx8MTc2NjQ3OTA5Mnww&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection heroImage={heroImage} />
        <ConsultationForm />
        <StatsSection />
        <BenefitsSection />
        <ProcessSection />
        <PricingSection />
        <ExpertsSection expertImage1={expertImage1} expertImage2={expertImage2} />
        <TestimonialsSection customerImage={customerImage} />
        <FinalCTA bgImage={ctaImage} />
      </main>
      <Footer />
    </div>
  );
}
