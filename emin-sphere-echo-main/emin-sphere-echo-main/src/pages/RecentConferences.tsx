import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConferenceHeroBanner from "@/components/ConferenceHeroBanner";
import { CalendarClock, MapPin, CheckCircle, BookOpen, Presentation, ChevronRight, Library } from "lucide-react";

// Existing user data, expanded with display themes to fit the new card UI
const recentList = [
  { name: "ICAIDSS-26", path: "/icaidss-26", date: "2026", theme: "Artificial Intelligence and Data Science Systems" },
  { name: "ICAESET-2026", path: "/icaeset-2026", date: "2026", theme: "Applied Engineering and Sustainable Energy" },
  { name: "ICNSE-26", path: "/icnse-26", date: "2026", theme: "Network Security and Computing Environments" },
  { name: "ICTET-26", path: "/ictet-26", date: "2026", theme: "Transformational Engineering Technologies" },
  { name: "ICMESS-26", path: "/icmess-26", date: "2026", theme: "Modern Engineering and Software Systems" },
  { name: "ICASIT-26", path: "/icasit-26", date: "2026", theme: "Advanced Systems and Information Technologies" },
  { name: "ICMDIA-25", path: "/icmdia-25", date: "2025", theme: "Machine Dynamics and Industrial Automation" },
  { name: "ICETSGC-25", path: "/icetsgc-25", date: "2025", theme: "Emerging Technologies in Smart Grid Communications" },
  { name: "ICCINET-25", path: "/iccinet-25", date: "2025", theme: "Computational Intelligence and Networking" },
  { name: "ICAMET 2025", path: "/international-conference-on-ai-managemen", date: "2025", theme: "AI Management and Emerging Technologies" },
  { name: "ICENTA-2024", path: "/about-the-conference", date: "2024", theme: "Engineering Applications and Networks" },
];

const sdgGoals = [
  { id: 4, title: "Quality Education", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sustainable_Development_Goal_4.png", desc: "Advance knowledge and technology to drive innovative and inclusive educational systems." },
  { id: 7, title: "Affordable and Clean Energy", img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sustainable_Development_Goal_7.png", desc: "Highlight innovations promoting clean energy and mitigating environmental impact." },
  { id: 9, title: "Industry, Innovation, and Infrastructure", img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sustainable_Development_Goal_09.png", desc: "Showcase multidisciplinary research driving innovation in robust technological infrastructures." },
  { id: 11, title: "Sustainable Cities and Communities", img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Sustainable_Development_Goal_11.png", desc: "Discuss urban engineering solutions that contribute to resilient and inclusive cities." },
  { id: 13, title: "Climate Action", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sustainable_Development_Goal_13.png", desc: "Feature tech initiatives addressing climate change through adaptation and mitigation." },
  { id: 17, title: "Partnerships for the Goals", img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Sustainable_Development_Goal_17.png", desc: "Foster deep collaborations among researchers, industries, and governments globally." }
];

const RecentConferences = () => (
  <div className="min-h-screen bg-[#f4f7f9] flex flex-col font-sans">
    <Header />
    
    <main className="flex-1 w-full pt-20 lg:pt-24">
      {/* Custom Identical Hero Banner matching reference image */}
      <ConferenceHeroBanner 
        title="Recent Global Conference Archives"
        theme="Exploring the profound impact and successful proceedings of Eminsphere's past academic summits."
        location="Global Impact"
        date="Past Sessions"
      />

      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: SDG Commitments & Outcomes */}
        <div className="lg:w-1/3 flex flex-col gap-10">
           {/* Conference Outcomes */}
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-2xl font-bold font-poppins text-darkNeutral mb-6 border-b pb-4">Key Outcomes</h3>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded bg-green-50 text-green-600 flex items-center justify-center shrink-0"><CheckCircle size={20} /></div>
                   <div><strong className="block text-[15px] font-bold text-gray-900">High Scopus Acceptance</strong><span className="text-sm text-gray-500 leading-snug block mt-1">Historically over 80% successfully indexed globally.</span></div>
                </li>
                <li className="flex gap-4 items-start">
                   <div className="w-10 h-10 rounded bg-purple-50 text-purple-600 flex items-center justify-center shrink-0"><Library size={20} /></div>
                   <div><strong className="block text-[15px] font-bold text-gray-900">Archived Proceedings</strong><span className="text-sm text-gray-500 leading-snug block mt-1">Full access to DOI-assigned past conference papers.</span></div>
                </li>
              </ul>
           </div>

           {/* SDG Commitment Layout */}
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-8">
               <div className="bg-gradient-to-r from-darkNeutral to-ctaBlue p-6">
                 <h3 className="text-xl font-bold font-poppins text-white leading-snug">Commitment to the UN Sustainable Development Goals</h3>
               </div>
               <div className="p-6">
                 <p className="text-sm text-gray-500 mb-6 font-medium leading-relaxed">Eminsphere ensures that all hosted conferences tackle real-world global issues aligned with the UN SDGs, pushing academia towards global sustainability:</p>
                 <div className="grid grid-cols-2 gap-4">
                    {sdgGoals.map(sdg => (
                      <div key={sdg.id} className="group flex flex-col items-center text-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                         <img src={sdg.img} alt={sdg.title} className="w-16 h-16 rounded shadow-sm group-hover:scale-105 transition-transform" />
                         <span className="text-[11px] font-bold text-gray-700 leading-tight">{sdg.title}</span>
                      </div>
                    ))}
                 </div>
               </div>
           </div>
        </div>

        {/* Right Column: Dense Conference Data List */}
        <div className="flex-1">
           <div className="flex justify-between items-end mb-8 border-b-2 border-gray-200 pb-4">
             <h2 className="text-3xl font-extrabold font-poppins text-darkNeutral uppercase tracking-wide">
               History & <span className="text-secondaryTeal">Proceedings</span>
             </h2>
             <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">{recentList.length} Summaries</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {recentList.map((conf, index) => (
               <div key={conf.name} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col group hover:border-ctaBlue transition-colors">
                  {/* Image Header */}
                  <div className="h-40 relative overflow-hidden bg-gray-100 w-full">
                     <img src={`https://images.unsplash.com/photo-${1515162816999 + index * 10}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} alt={conf.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                     <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded shadow text-[10px] font-black uppercase text-green-700 tracking-wider flex items-center gap-1.5">
                        <CheckCircle size={12} /> Successfully Concluded
                     </div>
                  </div>
                  
                  {/* Content side */}
                  <div className="p-5 flex-1 flex flex-col justify-start">
                     <div className="flex items-center gap-3 mb-3">
                        <span className="bg-gray-100 text-gray-800 px-2.5 py-1 rounded text-xs font-bold border border-gray-200">
                          {conf.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500 font-bold text-xs uppercase">
                           <CalendarClock size={14} /> Year: {conf.date}
                        </div>
                     </div>

                     <h3 className="text-lg font-black font-poppins text-darkNeutral leading-tight mb-4">
                         {conf.theme}
                     </h3>

                     <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                       <Link to={conf.path} className="flex-1 text-center bg-gray-100 text-gray-800 py-2 rounded font-bold text-xs hover:bg-gray-200 transition-colors uppercase tracking-wider">
                         View Details
                       </Link>
                       <Link to={conf.path} className="flex items-center justify-center gap-1.5 text-ctaBlue font-bold text-xs hover:text-white px-3 border border-ctaBlue rounded hover:bg-ctaBlue transition-colors">
                         Proceedings <ChevronRight size={14} />
                       </Link>
                     </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default RecentConferences;
