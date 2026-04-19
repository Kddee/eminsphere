import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import CollaborationSection from "@/components/CollaborationSection";
import JoinCTA from "@/components/JoinCTA";
import ConferenceGlimpses from "@/components/ConferenceGlimpses";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen page-home">
      <Header />
      <Hero />
      <ServicesSection />
      <CollaborationSection />
      <JoinCTA />
      <ConferenceGlimpses />
      <LatestArticles />
      <Footer />
    </div>
  );
};

export default Index;
