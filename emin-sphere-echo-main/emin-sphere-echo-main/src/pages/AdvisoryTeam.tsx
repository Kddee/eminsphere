import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AdvisoryTeam = () => {
  return (
    <div className="min-h-screen page-advisory-team">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,30%)] to-[hsl(200,60%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Join Our Advisory Committee!
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">Our International Advisory Board</h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              We are honored to have these distinguished professionals and academicians guiding our global academic initiatives. Check out some of our esteemed members below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Dr. Walida Ounruean", role: "Uttaradit Rajabhat University, Thailand" },
              { name: "Katarzyna Antosz", role: "Rzeszow University of Technology, Poland" },
              { name: "Mr. Satish Kabade", role: "Independent Researcher, NJ, USA" },
              { name: "Dr. Tiansheng Yang", role: "University of South Wales, UK" },
              { name: "Rajendra Ugrani", role: "AI/ML Security Leader, California, USA" },
              { name: "Bhavya Mehta", role: "Network Security Researcher, USA" },
              { name: "Dr. Joe Perez", role: "NC Department of Health & Human Services, USA" },
              { name: "Mouhssin Ait El Mouden", role: "Ibn Tofail University, Morocco" },
              { name: "Dr. Ayoub Regragui", role: "Mohammed V University, Morocco" },
              { name: "Dr. Dina A. Alkhodary", role: "Middle East University, Jordan" },
              { name: "Nilesh Charankar", role: "AI Technology Leader, USA" },
              { name: "Prajakta Talathi", role: "Education Finance Expert, USA" },
              { name: "Yesha Patel", role: "Solution Architect, USA" },
              { name: "Dr. Firas Zeidan", role: "Professor, Lebanon" },
              { name: "Dr. Aida Mehrad", role: "C3S Business School, Spain" },
              { name: "Dr. Mehwish (Mishy) Rashid", role: "Keiser University, USA" },
              { name: "Nadine Zeinoun", role: "ICF Chapter Ottawa / Saint Joseph University, Lebanon" },
              { name: "Dr. Zoha Rahman", role: "Bloomberg / Centre for Big Data & ML, USA" },
              { name: "Yukti Goyal", role: "Software Engineer, FL, USA" },
              { name: "Dr. Ruth Abiola Adimula", role: "Centre for Peace and Strategic Studies" },
              { name: "Anup Gupta", role: "LTIMindtree, NC, USA" },
              { name: "Nandan Sharma", role: "Information Security Leader, WA/BC" },
              { name: "Dr. Aleksandra Gardasevic-Slavuljica", role: "Saudi Arabia / Montenegro" },
              { name: "Pearce Korb", role: "Clinical Educator, USA" },
              { name: "Dr. Danijela V. Pantović", role: "University of Kragujevac, Serbia" },
              { name: "Dr. Darja Antolin Dresar", role: "University of Maribor, Slovenia" },
              { name: "Prof. Abdel Rahman Alzoubaidi", role: "Al Balqa Applied University, Jordan" },
              { name: "Prof. Dr. Alexander Bull", role: "IU International University, Germany" },
              { name: "Sertac Aksakalli", role: "Istanbul Gelisim University, Turkey" },
              { name: "Lynda Botsch", role: "Rocket City HR Consulting, USA" },
              { name: "Dr. Piotr Olczak", role: "Mineral & Energy Economy Res. Institute, Poland/Algeria" },
              { name: "Dr. Allen Badeau", role: "Harmonic AI / NowMedia TV Host, USA" },
              { name: "Dr. Christeen Youssef", role: "Everlast Wellness Medical Center, UAE" },
              { name: "Hemang Upadhyay", role: "Independent Researcher (AI/E-commerce), USA" },
            ].map((member, idx) => (
              <div key={idx} className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <h3 className="font-display text-2xl font-bold mb-4">Want to Join?</h3>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-2xl mx-auto">
              We are looking for experienced professionals and academicians to join our advisory committee. Share your expertise and help shape the future of global academic excellence.
            </p>
            <a href="https://forms.gle/GM3b7bqEQdHiKcCy8" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body">
              Apply Here
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdvisoryTeam;
