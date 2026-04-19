import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const speakers = [
  { name: "Abdullah Al Abri", role: "VP Sustainability, Sohar Port and Free Zone", location: "Oman", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_e4eab5a58c524432a47ca4e3e9afffe0~mv2.jpeg" },
  { name: "Akshay", role: "Speaker", location: "", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_3aef18109d86468da8e5fbbf55d37268~mv2.jpg" },
  { name: "Nikola Ilić", role: "Assistant Professor, University of Belgrade Faculty of Law", location: "Serbia", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_cf46fb74cc9446b287ec144125a1c54e~mv2.jpeg" },
  { name: "Osman ARAYICI", role: "Professor, Mimar Sinan University of Fine Arts", location: "Turkey", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_f0f7674fd55346bfb2eaba4b48b3d669~mv2.jpeg" },
  { name: "Prof. Abdel Rahman Alzoubaidi", role: "Professor, Al Balqa Applied University", location: "Jordan", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_e9b1616d369d4f1f8dc784bbb1379fc6~mv2.jpeg" },
  { name: "Anup Kagalkar", role: "Independent Researcher, Product Technical Expert", location: "United States", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_38bae8e1c58e4626b639ff27e74b615f~mv2.jpeg" },
  { name: "Hina Shahbaz", role: "Principal, Progressive Model College", location: "Spain", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_1d40f47c75c84e399f11834d905fdfca~mv2.jpeg" },
  { name: "Aynur Mahmudova", role: "Technical Manager, Saipem", location: "Azerbaijan", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_096b8766915a49b9b4f964848f812618~mv2.jpg" },
  { name: "BERKANI Samir", role: "Professor, University of Bouerdes", location: "Algeria", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_e76d7e27c8cd48b3845ce3627ec85821~mv2.jpeg" },
  { name: "Pearce Korb", role: "Clinical Educator, Pearce Korb and Associates", location: "United States", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_2c8d6049087942e4842f1d6f434e040e~mv2.jpg" },
  { name: "Mr. Satish Kabade", role: "Product Technical Expert, Independent Researcher", location: "New York, USA", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_a31d532fb603465e846aceccb082827c~mv2.jpeg" },
  { name: "Irandoust-pakchin", role: "Associate Professor, University of Tabriz", location: "Iran", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_105366170c1b4be7995469e3ae42f001~mv2.jpeg" },
  { name: "Aleksandra Ikonov", role: "Professor, Institute for the Application of Innovative Practices", location: "Serbia", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_ba31cc42a6d34171bc4ac11bf014871e~mv2.jpeg" },
  { name: "Dr. Edralin Rebancos Raro", role: "Assistant Professor, Camarines Norte State College", location: "Philippines", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_cf15be7087af4a078f1254ff3c08fea8~mv2.jpeg" },
  { name: "Kadenova Zuurakan Azhimamatovna", role: "Head of Laboratory, National Academy of Sciences", location: "Kyrgyzstan", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_e8b8b992c26a49cf99035616610f5216~mv2.jpeg" },
  { name: "Dr. Tiansheng Yang", role: "University of South Wales", location: "United Kingdom", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_ab0670f34d354ffabafcaa2849d78701~mv2.jpg" },
  { name: "Jim Saliba", role: "Principal Consultant, James Saliba Inc", location: "San Jose, California", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_45d1f903e57d425cb88addf2bdbec7be~mv2.jpeg" },
  { name: "Nomi Khedawala", role: "Sr. Technical Program Manager, Reddit", location: "San Francisco, California", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_4dddbaf5110540e7b8c0d5ed7826a8e5~mv2.jpeg" },
  { name: "Mr. Sudipkumar Ghanvat", role: "Sr. Director & Head - Data & AI, VRIO Digital", location: "United States", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_72dbfb478bd540e9abbca0d3811dfe48~mv2.jpeg" },
  { name: "Gregg Clunis", role: "Founder, Kojo", location: "United States", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_5c95cc3899d64319998d594852b99123~mv2.jpeg" },
  { name: "Mr. Bhushan Balkrishna Chaudhari", role: "Senior Technology Lead, Researcher", location: "New Jersey, USA", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_80c3ba4b5ad34cc1817090e1e30c7b8e~mv2.jpeg" },
  { name: "Dr. Joe Perez", role: "Senior Systems Specialist & Team Leader, NC DHHS", location: "Raleigh, NC, USA", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_2e4bd98eb15e408fa1470c541ce8e786~mv2.jpg" },
  { name: "Dr. Ranà El Khawand", role: "Technical Expert, Saida Risk Mapping Project (UN-Habitat)", location: "Lebanon", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_c0812b3e98ff416db27e799833d12e86~mv2.jpeg" },
  { name: "Dr. Firas Zeidan", role: "Researcher and Professor", location: "Lebanon", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_d725b17d6d374b3abf1081771e55f53f~mv2.jpeg" },
  { name: "Mouhssin Ait El Mouden", role: "Research Laboratory, Faculty of Letters, Ibn Tofail University", location: "Kenitra, Morocco", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_5cbd6440dc0b407c8d10b4d96ab8558f~mv2.jpeg" },
  { name: "Prof. Shweta N. Banait", role: "Assistant Professor, AI & Data Science, D. Y. Patil College of Engineering", location: "India", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_110f0c5464f34aea993c7055dac271b2~mv2.jpeg" },
  { name: "Prof. Neha Singh", role: "Assistant Professor, PEG's ISB&M College of Engineering, Pune", location: "India", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_f258ef8fd1a74b9b9c778f12bcdc9128~mv2.jpeg" },
  { name: "Yukti Goyal", role: "Lead Software Engineer", location: "Tampa, FL, USA", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Yukti.jpg" },
  { name: "Yesha Patel", role: "Senior Solution Architect", location: "United States", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Yesha%20Patel_IBM.jpg" },
  { name: "Jawaher Al-Zeidi", role: "English Language Lecturer, UTAS", location: "Oman", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Jawaher%20Al-Zeidi.jpg" },
  { name: "Hicham ELKHOUAJA", role: "Researcher, Hassan I University", location: "Morocco", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Hicham%20ELKHOUAJA.jpeg" },
  { name: "Dr. Ayoub Regragui", role: "Doctorate in Applied Linguistics, Mohammed V University", location: "Morocco", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_142a95afa78c4022bf6df397341fe59d~mv2.jpeg" },
  { name: "Veeramani Sampathkumar", role: "Fintech Technology Leader", location: "USA", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_9166636afad548f9aab5e2b2d1b35e97~mv2.jpeg" },
  { name: "Dr. Muhammad Tahir Jan", role: "Associate Professor, International Islamic University Malaysia", location: "Malaysia", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Tahir.jpeg" },
  { name: "Dr. Nadia Adnan", role: "Assistant Professor & Research Scientist, PMU", location: "Saudi Arabia", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_68479290bb114146b46b56f021a75155~mv2.png" },
  { name: "Dr. Prodhan Mahbub Ibna Seraj", role: "Associate Professor, AIUB", location: "Bangladesh", image: "/assets/Past%20Speakers%20_%20Eminsphere_files/30814e_e2e5efeee2d54b41bd193b968595b89b~mv2.jpeg" },
  { name: "Mr. Rakesh Ramakrishna Pai", role: "Independent Researcher", location: "Franklin, TN, USA", image: "/assets/ICMDIA-25%20_%20Eminsphere_files/Rakesh%20pai.jpeg" },
];

const PastSpeakers = () => {
  return (
    <div className="min-h-screen page-past-conferences">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Past Speakers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4">
            Distinguished experts who have shared their knowledge at Eminsphere conferences
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {speakers.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i % 10) * 0.03 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <img src={s.image} alt={s.name} className="w-28 h-28 rounded-full object-cover border-2 border-border mb-3" loading="lazy" />
                <h3 className="font-display text-sm font-bold text-foreground leading-tight">{s.name}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">{s.role}</p>
                <p className="text-xs text-accent font-body">{s.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastSpeakers;
