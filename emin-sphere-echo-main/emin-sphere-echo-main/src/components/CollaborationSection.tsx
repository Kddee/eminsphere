import { motion } from "framer-motion";
import { Globe, Lightbulb, GraduationCap, Users, BookOpen, Microscope } from "lucide-react";

const items = [
  { icon: Globe, label: "Research Partnerships", desc: "Collaborations across 50+ countries" },
  { icon: Lightbulb, label: "Innovation Exchange", desc: "Cutting-edge ideas & breakthroughs" },
  { icon: GraduationCap, label: "Educational Programs", desc: "Workshops, webinars & masterclasses" },
  { icon: Users, label: "Global Networking", desc: "Connect with 5000+ researchers" },
  { icon: BookOpen, label: "Publication Support", desc: "Scopus & WoS indexed journals" },
  { icon: Microscope, label: "Research Mentorship", desc: "1-on-1 expert guidance" },
];

const CollaborationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label justify-center flex">Why Choose Eminsphere</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1b35]">
              Global <span className="text-[#2563eb]">Collaboration</span> Network
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto text-sm font-medium leading-relaxed">
              Connect with researchers, educators, and innovators worldwide through
              Eminsphere's thriving global academic ecosystem.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              viewport={{ once: true }}
              className="group flex items-start gap-4 p-6 rounded-xl border border-slate-200 bg-[#f5f7fb] hover:bg-white hover:border-[#2563eb]/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#0f1b35] group-hover:bg-[#2563eb] flex items-center justify-center transition-colors duration-300">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0f1b35] text-sm mb-1 group-hover:text-[#2563eb] transition-colors">
                  {item.label}
                </h3>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
