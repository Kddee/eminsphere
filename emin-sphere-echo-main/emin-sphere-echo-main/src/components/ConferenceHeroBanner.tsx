import React from "react";
import { Link } from "react-router-dom";
import { CalendarClock, MapPin, ArrowRight } from "lucide-react";

interface ConferenceHeroProps {
  title?: string;
  date?: string;
  location?: string;
  theme?: string;
  isbn?: string;
  organizedBy?: string;
  collaboration?: string;
  isHybrid?: boolean;
}

const ConferenceHeroBanner = ({ 
  title,
  date,
  location,
  theme,
  isbn,
  organizedBy = "Primus School of Management Studies, India, and IFERP Academy",
  collaboration,
  isHybrid = true
}: ConferenceHeroProps) => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col">
      {/* Background Reference Style: Light Building Watermark */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1587474260580-5a3d76b177d8?q=80&w=2000&auto=format&fit=crop" 
          alt="" 
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* The Diagonal Right-Side Overlay (Mirroring ICRCET) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-10 hidden lg:block">
        <div 
          className="absolute inset-0 bg-[#0d233a]" 
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
           {/* Thicker Orange Border on the slanted edge */}
           <div className="absolute top-0 left-0 w-4 h-full bg-[#ff7a00]" style={{ transform: 'translateX(-2px)' }}></div>
           
           {/* Image Background for the slanted part */}
           <div className="absolute inset-0 opacity-40 ml-4">
              <img 
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop" 
                alt="" 
                className="w-full h-full object-cover"
              />
           </div>
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 lg:px-12 relative z-20 flex flex-col lg:flex-row py-12">
        
        {/* Left Side Content - Fixed Width to prevent overlapping clipped area */}
        <div className="lg:w-[60%] flex flex-col gap-4">
          
          {/* Dateline with Orange Highlight */}
          <div className="flex flex-wrap items-center gap-4 text-[#ff7a00] font-bold text-base">
            <div className="flex items-center gap-2">
              <CalendarClock size={20} />
              {date || "April 22nd – 23rd – 2026"}
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <div className="flex items-center gap-2 text-[#ff7a00]">
              <MapPin size={20} fill="#ff7a00" className="text-white" />
              {location || "Bangalore, India."}
            </div>
          </div>

          {collaboration && (
            <p className="text-[#ff7a00] font-black text-xs uppercase tracking-[0.2em] mb-1">
              IN COLLABORATION WITH {collaboration}
            </p>
          )}

          <h1 className="text-3xl md:text-[40px] font-black text-[#0d233a] leading-tight max-w-2xl">
            {title || "Hybrid conference (Inperson+Virtual)"}
          </h1>
          
          {isHybrid && (
            <h2 className="text-lg md:text-[20px] font-bold text-[#0d233a]">
              You can participate in person at {location || "India"} or Virtually from your home or work.
            </h2>
          )}

          {theme && (
            <p className="text-[16px] text-gray-700 leading-relaxed max-w-xl">
              <span className="text-[#3b82f6] font-bold italic pr-1">Theme :</span> 
              {theme}
            </p>
          )}

          {isbn && (
            <p className="text-lg font-black text-[#0d233a]">
              ISBN : <span className="font-bold">{isbn}</span>
            </p>
          )}

          {/* SDG Logos Strip - Made larger and clearer */}
          <div className="my-4 max-w-full">
             <img 
               src="https://unemg.org/wp-content/uploads/2018/09/SDGs-1024x320.jpeg" 
               alt="United Nations Sustainable Development Goals" 
               className="w-full h-auto max-h-[100px] object-contain block border border-gray-100 rounded bg-white/50 p-1"
               onError={(e) => {
                 e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e4/SDG_Sustainable_Development_Goals_Logo.png";
               }}
             />
          </div>

          <p className="text-base text-gray-800 font-medium">
            <span className="text-blue-600 font-bold italic pr-1">Organized by :</span> 
            {organizedBy}
          </p>

          {/* Organizer Logos */}
          <div className="flex flex-wrap items-center gap-8 my-4 bg-white/60 p-4 rounded-xl border border-white shadow-sm w-fit">
             <img src="/assets/company%20logo%20.png" alt="IFERP" className="h-12 object-contain" />
             <div className="h-10 w-px bg-gray-200"></div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Scopus_logo.svg" alt="Scopus" className="h-10 object-contain" />
             <div className="h-10 w-px bg-gray-200"></div>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Clarivate_Analytics_logo.svg/1024px-Clarivate_Analytics_logo.svg.png" alt="Clarivate" className="h-10 object-contain" />
          </div>

          {/* Buttons matching ICRCET Style */}
          <div className="flex flex-wrap items-center gap-5 mt-4">
            <Link 
              to="/registration" 
              className="bg-[#ff7a00] hover:bg-[#e66c00] text-white px-8 py-4 font-black text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-xl flex items-center gap-2 rounded"
            >
              ABSTRACT SUBMISSION <ArrowRight size={18} strokeWidth={3} />
            </Link>
            <Link 
              to="/registration" 
              className="bg-[#0d233a] hover:bg-[#06121e] text-white px-8 py-4 font-black text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-xl flex items-center gap-2 rounded"
            >
              REGISTRATION <ArrowRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>

      {/* Partners Marquee */}
      <div className="w-full bg-slate-50 border-t border-gray-100 py-4 overflow-hidden z-20">
         <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {Array.from({length: 20}).map((_, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                 <img src="/assets/company logo .png" alt="eminsphere" className="h-8 w-auto object-contain" />
                 eminsphere
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default ConferenceHeroBanner;
