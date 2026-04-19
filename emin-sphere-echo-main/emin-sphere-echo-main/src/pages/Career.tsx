import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const vacancies = [
  { title: "Academic Publishing Specialist", tasks: ["Assist researchers in preparing, formatting, and submitting manuscripts to journals.", "Collaborate with authors to ensure adherence to academic publishing standards.", "Stay updated with journal requirements and guidelines."] },
  { title: "Conference Coordinator", tasks: ["Plan and organize seamless academic and professional conferences.", "Handle event logistics, speaker coordination, and attendee management.", "Ensure the success of events through effective communication and problem-solving."] },
  { title: "Thesis Consultant", tasks: ["Provide expert guidance to students and researchers on thesis structuring and writing.", "Offer consultations on data analysis, literature reviews, and academic formatting.", "Support clients in achieving academic excellence."] },
  { title: "Study Skills Coach", tasks: ["Help students develop effective study habits, time management, and learning techniques.", "Conduct workshops and one-on-one coaching sessions.", "Provide resources to enhance academic performance."] },
  { title: "Content Creator", tasks: ["Create engaging and informative content for academic and marketing purposes.", "Develop blog posts, case studies, social media updates, and email campaigns.", "Ensure content aligns with the company's vision and goals."] },
  { title: "Marketing and Branding Specialist", tasks: ["Design and execute strategies to enhance brand visibility and recognition.", "Collaborate with clients to promote their stories globally.", "Analyze and optimize marketing campaigns for maximum impact."] },
  { title: "Client Relationship Manager", tasks: ["Build and maintain strong relationships with clients.", "Address client inquiries and provide tailored solutions.", "Ensure client satisfaction through excellent service delivery."] },
  { title: "Training and Development Officer", tasks: ["Develop and deliver training programs to empower researchers, students, and professionals.", "Organize workshops, seminars, and skill development sessions.", "Track and report on training outcomes."] },
  { title: "Program Manager (Customized Services)", tasks: ["Design tailored programs to meet the specific needs of clients.", "Manage program delivery and ensure timely outcomes.", "Evaluate program success and gather feedback for improvement."] },
  { title: "Digital Marketing Specialist", tasks: ["Promote the company's services through SEO, social media, and online advertising.", "Manage website content and analytics to drive traffic.", "Design campaigns to generate leads and build a digital presence."] },
];

const Career = () => {
  return (
    <div className="min-h-screen page-career">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/assets/ICAESET-2026%20_%20Eminsphere_files/11062b_3e51224f3ee74964a141005767e8feb9~mv2.jpg" alt="Career" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--section-dark))]/90 to-[hsl(var(--section-dark))]/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Join Our Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/80 font-body text-lg">
            Explore diverse career paths at EminSphere Global Academic Services. Discover a culture of growth, innovation, and collaboration.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-foreground mb-10 text-center">Vacancies and Designations</h2>
          <div className="space-y-6">
            {vacancies.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }} viewport={{ once: true }} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{i + 1}. {v.title}</h3>
                <ul className="space-y-1.5">
                  {v.tasks.map((task, j) => (
                    <li key={j} className="text-sm text-muted-foreground font-body flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-foreground font-body text-lg mb-4">
              Mail Your CV at{" "}
              <a href="mailto:info@eminsphere.com" className="text-accent hover:underline font-semibold">
                info@eminsphere.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
