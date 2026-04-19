import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import MissionUpdate from "@/components/MissionUpdate";
import ConferenceContinents from "@/components/ConferenceContinents";
import ConferenceCalendar from "@/components/ConferenceCalendar";
import ConferenceTopics from "@/components/ConferenceTopics";
import WhyChooseUs from "@/components/WhyChooseUs";
import CollaborationSection from "@/components/CollaborationSection";
import JoinCTA from "@/components/JoinCTA";
import ConferenceGlimpses from "@/components/ConferenceGlimpses";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";
import SidebarPromo from "@/components/SidebarPromo";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] relative w-full overflow-x-hidden">
      
      {/* ── Dynamic International Background Watermark ── */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Engineering / Academic Grid pattern */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-multiply" 
          style={{ 
            backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }} 
        />
        {/* Soft Global Aura Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondaryTeal/10 rounded-full blur-[120px] mix-blend-multiply translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-ctaBlue/5 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[50%] w-[800px] h-[800px] bg-accentOrange/5 rounded-full blur-[120px] mix-blend-multiply translate-x-1/4" />
      </div>

      {/* ── Main Foreground Content ── */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header />
        <Hero />
        <div className="w-full relative z-20 shadow-sm">
          <ServicesSection />
        </div>
      
      {/* 3-Column Layout specific to Target UI structure */}
      <div className="max-w-[1440px] w-full px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:block w-[260px] xl:w-[280px] flex-shrink-0">
          <SidebarPromo side="left" />
        </aside>
        
        {/* MAIN CONTENT (Center) */}
        <main className="flex-1 w-full flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
          <MissionUpdate />
          <ConferenceContinents />
          <ConferenceCalendar />
          <ConferenceTopics />
          <WhyChooseUs />
        </main>
        
        {/* RIGHT SIDEBAR */}
        <aside className="hidden xl:block w-[260px] xl:w-[280px] flex-shrink-0">
          <SidebarPromo side="right" />
        </aside>
        
      </div>

      {/* Resuming Full-Width Flow for robust existing modules down the page */}
      <div className="w-full flex flex-col">
        <ConferenceGlimpses />
        <CollaborationSection />
        <JoinCTA />
        <LatestArticles />
      </div>

      <Footer />
      </div>
    </div>
  );
};

export default Index;
