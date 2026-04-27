import Header from "@/components/Header";
import ConferenceHeroDetail from "@/components/ConferenceHeroDetail";
import AcademicPartnerSection from "@/components/AcademicPartnerSection";
import IFERPWelcomeSection from "@/components/IFERPWelcomeSection";
import ConferenceObjectives from "@/components/ConferenceObjectives";
import ImportantDates from "@/components/ImportantDates";
import WorkshopsSection from "@/components/WorkshopsSection";
import ScopusPublishingSection from "@/components/ScopusPublishingSection";
import SDGSection from "@/components/SDGSection";
import ConferenceBenefits from "@/components/ConferenceBenefits";
import VolunteerSection from "@/components/VolunteerSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import ConferenceGlimpses from "@/components/ConferenceGlimpses";
import Footer from "@/components/Footer";

const ConferenceDetailLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <ConferenceHeroDetail />
      
      {/* Academic Partner */}
      <AcademicPartnerSection />
      
      {/* IFERP Welcome */}
      <IFERPWelcomeSection />
      
      {/* Conference Objectives */}
      <ConferenceObjectives />
      
      {/* Important Dates */}
      <ImportantDates />
      
      {/* Workshops */}
      <WorkshopsSection />
      
      {/* Scopus Publishing */}
      <ScopusPublishingSection />
      
      {/* UN SDGs */}
      <SDGSection />
      
      {/* Benefits/Why Attend */}
      <ConferenceBenefits />
      
      {/* Volunteer Section */}
      <VolunteerSection />
      
      {/* Scholarship */}
      <ScholarshipSection />
      
      {/* Conference Glimpses - Image Gallery */}
      <ConferenceGlimpses />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ConferenceDetailLayout;
