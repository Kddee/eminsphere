import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const GetRecognized = () => {
  return (
    <div className="min-h-screen page-home">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Recognition & Awards
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">Nominate Excellence</h2>
            <p className="text-muted-foreground font-body mb-6">
              At EminSphere Global Academic Services, we value excellence across all fields. To recognize outstanding achievements in various areas, we invite you to nominate deserving individuals or institutions for our prestigious awards. Your nominations are essential in honoring those who have made significant contributions to education, innovation, business, community service, and more. Submit your nominations today and be a part of celebrating excellence across all domains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://forms.gle/RqwR82qCYVr91JJg8" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-body text-center">
                Submit Nominations
              </a>
              <a href="https://www.eminsphere.com/_files/ugd/30814e_db43285e8de64d61a5c2d0f1a47179d7.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-secondary text-secondary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-body text-center">
                EminSphere Global Innovation Awards 2025
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetRecognized;
