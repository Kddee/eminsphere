import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full mt-[68px]"> {/* Offset for fixed flat header */}

      {/* ═══════════════ HERO BANNER ═══════════════ */}
      <div
        className="relative w-full flex flex-col items-center justify-center text-center px-4"
        style={{ 
          minHeight: "500px",
          backgroundImage: "url('/assets/conference_banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-20">
          {/* Main headline in Target Style - Clean, Bold Poppins */}
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-white leading-tight mb-4 font-poppins">
            Eminsphere™ Global Academic Platform
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl font-medium">
            Connecting researchers, academics & innovators through 100+ international conferences with Scopus/WoS indexed publication support.
          </p>

          {/* Stats Box imitating the Filter Box of Target UI */}
          <div className="w-full bg-white rounded-xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-ctaBlue">
            
            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-secondaryTeal font-poppins">100+</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Conferences</span>
            </div>

            <div className="flex-1 border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-accentOrange font-poppins">50+</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Countries</span>
            </div>

            <div className="flex-1 pb-4 md:pb-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-accentRed font-poppins">5000+</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Researchers</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;
