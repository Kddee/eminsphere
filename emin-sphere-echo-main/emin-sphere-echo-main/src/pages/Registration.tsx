import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Registration = () => {
  return (
    <div className="min-h-screen page-registration">
      <Header />

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--section-dark))] to-[hsl(210,30%,25%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-5xl font-bold text-white">
            Registration
          </motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img
            src="/assets/Registration%20_%20Eminsphere_files/Reg.png"
            alt="Registration details"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md mb-8"
            loading="lazy"
          />
          <a
            href="https://paypal.me/eminsphere"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="/assets/Registration%20_%20Eminsphere_files/30814e_4990ef42139a4f22a19d6437da297f6e~mv2.png"
              alt="PayPal payment"
              className="h-20 mx-auto"
              loading="lazy"
            />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
