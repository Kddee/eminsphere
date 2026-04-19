import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Empowering Cybersecurity to be Smarter Faster and More Resilient with Nandan Sharma's Adaptive Intrusion Detection",
    excerpt: "Nandan Sharma delves into adaptive intrusion detection, highlighting the need for intelligent, responsive, and resilient cybersecurity strategies.",
    date: "Apr 6, 2025",
    image: "/assets/Books%20_%20Eminsphere_files/30814e_f7d2e633c973493e994531e83f961108~mv2.png",
  },
  {
    title: "Shubham Bhaskar Thakare's Award-Winning Research in Mechanical Systems Optimization",
    excerpt: "Exploring cutting-edge research in mechanical systems optimization and its real-world impact.",
    date: "Mar 31, 2025",
    image: "/assets/Books%20_%20Eminsphere_files/30814e_cc155ed03b104806bf81258474a65cf7~mv2.png",
  },
  {
    title: "Key Takeaways from Sambhaji Barse's Thailand Visit",
    excerpt: "Join us for an engaging conversation about career opportunities, industry insights, and academic collaborations.",
    date: "Mar 29, 2025",
    image: "/assets/Books%20_%20Eminsphere_files/30814e_9ddc6849f8e44a65b86f7bff5824cd6d~mv2.png",
  },
  {
    title: "Sambhaji Barse Concludes Successful Academic & Research Visit to Thailand, Strengthening Global Collaborations",
    excerpt: "A recap of academic partnerships and research collaborations established during the Thailand visit.",
    date: "Mar 29, 2025",
    image: "/assets/Books%20_%20Eminsphere_files/30814e_7d1e1a9e732a452e96bfd1d3b6e53799~mv2.png",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen page-blog">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Blog
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/70 font-body mt-4">
            Latest news and articles from Eminsphere
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <p className="text-xs text-muted-foreground font-body mb-2">{post.date}</p>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">{post.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
