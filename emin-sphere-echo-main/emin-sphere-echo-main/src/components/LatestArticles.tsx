import { motion } from "framer-motion";
import { Heart, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "Empowering Cybersecurity to be Smarter Faster and More Resilient with Nandan Sharma's Adaptive Intrusion Detection",
    excerpt: "Nandan Sharma delves into adaptive intrusion detection, highlighting the need for intelligent, responsive, and resilient cybersecurity strategies.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_5481080a060b480c8a14dd2ab0c8dd7f~mv2.webp",
    views: 53,
    likes: 11,
    link: "https://www.eminsphere.com/post/empowering-cybersecurity-to-be-smarter-faster-and-more-resilient-with-nandan-sharma-s-adaptive-intru",
  },
  {
    title: "Shubham Bhaskar Thakare's Award-Winning Research in Mechanical Systems Optimization",
    excerpt: "An exploration of award-winning research in mechanical systems optimization and its implications for the field.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_44fee04852ec45e4aa227a6ef6e0a233~mv2.webp",
    views: 40,
    likes: 7,
    link: "https://www.eminsphere.com/post/shubham-bhaskar-thakare-s-award-winning-research-in-mechanical-systems-optimization",
  },
  {
    title: "Key Takeaways from Sambha Cha's Research Visit to Bangkok, Thailand",
    excerpt: "Join us for an engaging conversation with Miss. Cha, a working professional in Thailand, as she shares her research experience.",
    image: "/assets/Home%20_%20Eminsphere_files/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg",
    views: 27,
    likes: 7,
    link: "https://www.eminsphere.com/post/key-takeaways-from-sambha-cha-s-research-visit-to-bangkok-thailand",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f7fb] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="section-label">Insights &amp; Updates</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0f1b35]">
            Latest <span className="text-[#2563eb]">Articles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#2563eb]/40 hover:shadow-xl hover:shadow-[#2563eb]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-[#0f1b35] text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                    Research
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-[#0f1b35] mb-3 line-clamp-2 leading-snug group-hover:text-[#2563eb] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium mb-5 line-clamp-2 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-bold text-slate-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#2563eb]" /> {article.views}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-rose-500" /> {article.likes}
                    </span>
                  </div>
                  <span className="text-[#2563eb] group-hover:underline">Read More →</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1a3a6e] border border-[#2563eb]/30 hover:border-[#1a3a6e] px-6 py-2.5 rounded-lg transition-all hover:bg-white"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
