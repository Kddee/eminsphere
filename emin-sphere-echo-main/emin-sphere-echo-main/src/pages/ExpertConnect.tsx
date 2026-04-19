import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, BookOpen, Users, Handshake } from "lucide-react";

const services = [
  { icon: Users, title: "Expert Connect", desc: "Showcase keynote speaking, guest speaker roles, advisory board participation, and conference committee involvement. Highlight global recognition, academic leadership, and expert engagement." },
  { icon: BookOpen, title: "Consultancy Services", desc: "Tailored consultancy services to enhance academic programs, curriculum development, faculty training, and student support initiatives. Drive educational excellence and innovation." },
  { icon: Handshake, title: "Academic Partnerships", desc: "Forge strategic academic partnerships with institutions worldwide. Collaborate on research projects, student exchanges, joint programs, and faculty development opportunities." },
  { icon: Globe, title: "Global Reach", desc: "Extend academic services globally. Reach students, educators, and institutions worldwide. Empower academic communities through knowledge sharing and collaboration." },
];

const ExpertConnect = () => {
  return (
    <div className="min-h-screen page-expert-connect">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,30%)] to-[hsl(200,60%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Expert Connect: Speaking & Advisory
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border">
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://forms.gle/GtTRNwN8AVAKiHMt6" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertConnect;
