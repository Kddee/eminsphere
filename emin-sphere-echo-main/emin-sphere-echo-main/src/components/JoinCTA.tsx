import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Users, Award } from "lucide-react";

const actions = [
  {
    icon: FileText,
    title: "Submit Your Paper",
    desc: "Peer-reviewed, Scopus/WoS indexed journal recommendations.",
    link: "/article-submissions",
  },
  {
    icon: Users,
    title: "Apply as Reviewer",
    desc: "Join our global panel of academic experts and reviewers.",
    link: "/apply-as-reviewer",
  },
  {
    icon: Award,
    title: "Get Recognized",
    desc: "Earn certificates, awards, and global academic recognition.",
    link: "/get-recognized",
  },
];

const JoinCTA = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0f1b35] relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 30% 50%, #2563eb 0%, transparent 50%), radial-gradient(circle at 70% 50%, #2563eb 0%, transparent 50%)"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label-light">Join the Community</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Be a Part of <span className="text-[#2563eb]">Eminsphere™</span>
          </h2>
          <p className="text-blue-200/70 font-medium max-w-lg mx-auto text-sm leading-relaxed">
            Collaborate, publish, and grow with a global academic community trusted by
            researchers across 50+ countries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              viewport={{ once: true }}
            >
              <Link
                to={action.link}
                className="group flex flex-col h-full p-7 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-[#2563eb]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-[#2563eb] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  {action.title}
                </h3>
                <p className="text-blue-200/60 text-sm font-medium leading-relaxed flex-1">
                  {action.desc}
                </p>
                <div className="flex items-center gap-2 text-[#2563eb] text-xs font-bold mt-5 group-hover:text-blue-300 transition-colors">
                  Get Started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center p-10 md:p-14 rounded-xl border border-[#2563eb]/30 bg-[#2563eb]/10"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
            Ready to make your mark in global research?
          </h3>
          <p className="text-blue-200/60 mb-8 max-w-lg mx-auto text-sm font-medium">
            Thousands of researchers have already joined. Don't miss your chance to publish,
            connect, and grow.
          </p>
          <Link
            to="/registration"
            className="btn-primary text-base px-10 py-4"
          >
            Join Now — It's Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinCTA;
