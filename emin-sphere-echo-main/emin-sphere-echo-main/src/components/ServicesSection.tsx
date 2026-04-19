import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Briefcase, ChevronRight, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Academic Publishing",
    description: "Support for publishing in high-impact Scopus/WoS indexed international journals.",
    icon: BookOpen,
    link: "/article-submissions",
  },
  {
    title: "Conference Management",
    description: "Comprehensive end-to-end solutions for organizing international conferences.",
    icon: Users,
    link: "/upcoming-conferences",
  },
  {
    title: "Thesis Consultation",
    description: "Expert guidance for masters and doctoral research projects worldwide.",
    icon: GraduationCap,
    link: "/expert-connect",
  },
  {
    title: "Skill Development",
    description: "Tailored workshops, webinars, and training for academic and professional growth.",
    icon: Briefcase,
    link: "/career",
  },
  {
    title: "Expert Connect",
    description: "Direct access to top academic advisors, reviewers, and industry speakers.",
    icon: Zap,
    link: "/expert-connect",
  },
  {
    title: "Innovation Hub",
    description: "Collaborate on cutting-edge research challenges and innovation programs.",
    icon: Award,
    link: "/innovation-challenge-2026",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-label">Elevate Your Research</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0f1b35]">
              Our Key <span className="text-[#2563eb]">Services</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-sm font-medium leading-relaxed">
            Empowering researchers with comprehensive support for global academic excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              viewport={{ once: true }}
            >
              <Link
                to={service.link}
                className="group flex flex-col h-full p-7 bg-white border border-slate-200 rounded-xl hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-[#2563eb]/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon with navy square background */}
                <div className="w-12 h-12 rounded-lg bg-[#0f1b35] flex items-center justify-center mb-5 group-hover:bg-[#2563eb] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-base font-bold text-[#0f1b35] mb-2 group-hover:text-[#2563eb] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1 font-medium">
                  {service.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-[#2563eb] transition-all">
                  Explore Service
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 p-8 md:p-10 rounded-xl bg-[#0f1b35] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-white mb-1">
              Ready to start your research journey?
            </h3>
            <p className="text-blue-300 text-sm font-medium">
              Connect with our global network of academic experts today.
            </p>
          </div>
          <Link
            to="/registration"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-[#2563eb] text-white rounded-lg font-bold text-sm hover:bg-white hover:text-[#0f1b35] transition-all shadow-lg active:scale-95"
          >
            Get Started Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
