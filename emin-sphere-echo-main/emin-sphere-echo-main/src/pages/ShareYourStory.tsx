import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const ShareYourStory = () => {
  return (
    <div className="min-h-screen page-blog">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,30%)] to-[hsl(200,60%,40%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Share Your Story
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">About the Podcast</h2>
            <p className="text-muted-foreground font-body text-lg">
              The Eminsphere Podcast Series showcases distinguished professionals and thought leaders worldwide, promoting research excellence, innovation, and global knowledge exchange. Share your expertise with the global research community.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="font-display text-2xl font-bold text-center mb-8">Podcast Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Expert Conversations", desc: "In-depth discussions with global experts sharing valuable research and insights." },
                { title: "Global Research Platform", desc: "Connecting academicians, scientists, and innovators worldwide." },
                { title: "Professional Recording", desc: "High-quality podcast production published across global platforms." },
                { title: "Global Visibility", desc: "Reach international academic and professional audiences." },
                { title: "Recognition", desc: "Enhance your professional and academic reputation." },
                { title: "Expert Platform", desc: "Showcase your expertise and research contributions." },
                { title: "Networking", desc: "Connect with global researchers and professionals." },
              ].map((highlight, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg border border-border shadow-sm">
                  <h4 className="font-display font-semibold text-lg mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground font-body text-sm">{highlight.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted p-8 rounded-xl mb-12">
            <h3 className="font-display text-2xl font-bold text-center mb-6">Speaker Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto font-body text-foreground">
              <li className="flex items-center gap-2"><span>✅</span> Official Podcast Speaker Certificate</li>
              <li className="flex items-center gap-2"><span>✅</span> Global promotion and recognition</li>
              <li className="flex items-center gap-2"><span>✅</span> Featured on YouTube, Website, and LinkedIn</li>
              <li className="flex items-center gap-2"><span>✅</span> Enhance academic and professional profile</li>
              <li className="flex items-center gap-2"><span>✅</span> Inspire global research community</li>
              <li className="flex items-center gap-2"><span>✅</span> Expand professional network worldwide</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Become a Podcast Speaker</h3>
            <p className="text-muted-foreground font-body mb-6">Join our distinguished lineup of global speakers.</p>
            <a href="https://forms.gle/37o5R79Wv3Z3rNfS6" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-body">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShareYourStory;
