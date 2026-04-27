import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSimple = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Brand Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/20 border border-cyan-400/50 rounded-full">
            <span className="text-cyan-300 font-semibold text-sm">EMINSPHERE™ CONFERENCES 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            Discover World-Class <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">International Conferences</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of researchers, scholars, and professionals connecting globally through academic excellence and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Link
              to="/upcomming-confernces"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-2xl"
            >
              Explore Conferences
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/upcomming-confernces"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Submit Your Paper
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-t border-white/20 border-b border-white/20">
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">50+</p>
              <p className="text-gray-300">Upcoming Conferences</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">100%</p>
              <p className="text-gray-300">Virtual/Hybrid Mode</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">5000+</p>
              <p className="text-gray-300">Researchers & Scholars</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-cyan-400 mb-2">17</p>
              <p className="text-gray-300">UN SDG Aligned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSimple;
