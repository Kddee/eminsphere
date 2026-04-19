import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Trophy, Star, Users, Clock } from "lucide-react";

const schedule = [
  { time: "9:00 AM – 10:00 AM", activity: "Opening Ceremony & Keynote Address", desc: "Welcome speech, event overview, and keynote by an international expert." },
  { time: "10:00 AM – 1:00 PM", activity: "Research & Innovation Presentations", desc: "Participants present their projects (10–15 minutes each) followed by Q&A." },
  { time: "1:30 PM – 3:00 PM", activity: "Expert Panel Discussions", desc: "Deep discussions on AI, sustainability, data innovation, and global challenges." },
  { time: "3:15 PM – 4:30 PM", activity: "Interactive Workshops", desc: "Hands-on sessions led by industry leaders sharing practical insights and tools." },
  { time: "4:30 PM – 5:30 PM", activity: "Judging & Deliberation", desc: "Evaluation based on innovation, impact, clarity, and global relevance." },
  { time: "5:45 PM – 6:30 PM", activity: "Awards Ceremony", desc: "Announcement of winners, certificates, and special recognitions." },
  { time: "6:30 PM – 7:00 PM", activity: "Closing Remarks & Networking", desc: "Interaction among participants, judges, and invited experts." },
];

const objectives = [
  "Provide a trusted international platform for researchers and innovators to present their work.",
  "Connect global experts, academicians, and scientists to discuss emerging trends and future advancements.",
  "Encourage interdisciplinary integration across AI, engineering, healthcare, and sustainability domains.",
  "Recognize exceptional talent through awards and professional certifications.",
  "Offer mentorship and detailed evaluation from distinguished judges and experts.",
  "Promote collaborative research, industry partnerships, and global networking opportunities.",
];

const awards = [
  "Global Research Excellence Award",
  "Innovation Leadership Award",
  "Young Researcher Award (for students & early-career professionals)",
  "People's Choice Award (selected through audience voting)",
];

const judgingCriteria = [
  "Innovation and originality of the work",
  "Technical depth and scientific clarity",
  "Real-world impact and problem-solving potential",
  "Presentation quality and communication skills",
  "Contribution to academic and industrial advancement",
];

const InnovationChallenge = () => {
  return (
    <div className="min-h-screen page-innovation">
      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,30%)] to-[hsl(200,60%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Eminsphere™ Global Research & Innovation Challenge 2026
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 font-body"
          >
            Date: 01 March 2026 | Hybrid Event: In-person + Online
          </motion.p>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">About the Event</h2>
          <p className="text-muted-foreground font-body mb-4">
            Eminsphere™ proudly presents the <strong className="text-foreground">Global Research & Innovation Challenge 2026</strong>, an international platform designed to celebrate brilliant minds, groundbreaking research, and transformative innovations from across the world. The event brings together researchers, academicians, innovators, industry professionals, and students to showcase their work before a distinguished global panel.
          </p>
          <p className="text-muted-foreground font-body mb-4">
            This challenge supports multidisciplinary research across engineering, technology, data science, healthcare, artificial intelligence, machine learning, cybersecurity, sustainability, and several emerging domains.
          </p>
          <p className="text-muted-foreground font-body">
            The 2026 edition follows a hybrid format. Participants can join <strong className="text-foreground">in person</strong> or <strong className="text-foreground">online</strong>. All sessions will include live presentations, expert interactions, workshops, and an awards ceremony recognizing excellence and innovation.
          </p>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Objectives of the Event</h2>
          <div className="space-y-3">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <Star className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-foreground">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Event Schedule</h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-start gap-2 md:gap-6 bg-card rounded-lg p-5 border border-border"
              >
                <div className="flex items-center gap-2 md:w-52 flex-shrink-0">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-primary font-body">{item.time}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.activity}</h3>
                  <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Panel */}
      <section className="py-16 md:py-20 section-warm">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Judging Panel</h2>
          <p className="text-muted-foreground font-body mb-6">
            The judging committee consists of 5–7 internationally recognized researchers, professors, and industry practitioners with years of expertise in AI, engineering, science, healthcare, sustainability, and innovation leadership.
          </p>
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Evaluation Criteria</h3>
          <div className="space-y-2">
            {judgingCriteria.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">{i + 1}</span>
                <span className="font-body text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Awards & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {awards.map((a, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border flex items-center gap-4">
                <Trophy className="w-8 h-8 text-gold flex-shrink-0" />
                <span className="font-body font-semibold text-foreground text-left">{a}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground font-body mb-8">
            Each winner receives an internationally recognized certificate and digital badge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/u92vqGpPECjTw6JV7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body"
            >
              Participant Registration
            </a>
            <a
              href="https://forms.gle/nQqWoqoQQd8FSsU4A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body"
            >
              Judge / Expert Registration
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationChallenge;
