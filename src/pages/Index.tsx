import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoodSection from "@/components/FoodSection";
import SynagoguesSection from "@/components/SynagoguesSection";
import CommunitySection from "@/components/CommunitySection";
import EruvSection from "@/components/EruvSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FoodSection />
      <SynagoguesSection />
      <CommunitySection />
      <EruvSection />
      <WhatsAppSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
