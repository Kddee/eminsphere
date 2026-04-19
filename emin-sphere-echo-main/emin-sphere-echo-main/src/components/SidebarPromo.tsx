import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Star, FileText, Globe, CheckCircle2, Play, Twitter, Facebook, Linkedin, MapPin, Users, Award, CalendarClock } from "lucide-react";

interface SidebarPromoProps {
  side: "left" | "right";
}

const leftPromos = [
  {
    title: "Publish in Scopus",
    desc: "Fast-track publication in Scopus & Web of Science indexed journals.",
    img: "https://static.wixstatic.com/media/30814e_df6ff84afa124774ae195216cf2b486d~mv2.jpg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/article-submissions",
    badge: "Journals",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Global Mentorship",
    desc: "Connect with world's leading academic advisors.",
    img: "https://static.wixstatic.com/media/30814e_ecea041355d84679ab1367bd82fa0ed5~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/expert-connect",
    badge: "Mentorship",
    color: "from-teal-500 to-teal-700"
  },
  {
    title: "Become a Reviewer",
    desc: "Join our prestigious international editing committee.",
    img: "https://static.wixstatic.com/media/502b14_51b9d9cbae00410895c121816ad4c47a~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/apply-as-reviewer",
    badge: "Careers",
    color: "from-gray-700 to-gray-900"
  },
  {
    title: "Subscribe to Alerts",
    desc: "Never miss an important academic event.",
    img: "https://static.wixstatic.com/media/30814e_31285efa8b944137a276e7bd208a8eb3~mv2.jpg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/registration",
    badge: "Newsletter",
    color: "from-orange-400 to-orange-600"
  }
];

const rightPromos = [
  {
    title: "Upcoming Dubai 2026",
    desc: "Join the largest multidisciplinary conference in Asia.",
    img: "https://static.wixstatic.com/media/502b14_76a9176ff6c4452c9a7207567ccb7834~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/icmref-26",
    badge: "Hot Event",
    color: "from-red-500 to-red-700"
  },
  {
    title: "Submit Abstract",
    desc: "Call for papers is now open for all 2026 events.",
    img: "https://static.wixstatic.com/media/30814e_2856a6c341c04bffab03d3d212bd7d7f~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/article-submissions",
    badge: "Call for Papers",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    title: "Keynote Speakers",
    desc: "Browse past globally recognized keynote talks.",
    img: "https://static.wixstatic.com/media/30814e_aeaa623bfc114798bded4c0b151266ec~mv2.jpg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/past-speakers",
    badge: "Gallery",
    color: "from-pink-500 to-pink-700"
  },
  {
    title: "Become a Speaker",
    desc: "Share your research with a global audience.",
    img: "https://static.wixstatic.com/media/502b14_50b638232fb14f938bae93bf97b0f5a7~mv2.jpeg/v1/fit/w_600,h_400,q_90,enc_avif,quality_auto/image.jpg",
    link: "/expert-connect",
    badge: "Opportunities",
    color: "from-purple-500 to-purple-700"
  }
];

const SidebarPromo = ({ side }: SidebarPromoProps) => {
  const promos = side === "left" ? leftPromos : rightPromos;

  return (
    <div className="flex flex-col gap-6 w-full sticky top-[90px]">
      
      {/* QUICK LINKS - Left Sidebar */}
      {side === "left" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full z-0 opacity-50" />
          <h4 className="text-sm font-bold font-poppins text-darkNeutral mb-4 relative z-10 border-b border-gray-100 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 relative z-10 text-[13px] font-semibold">
             <li><Link to="/article-submissions" className="text-gray-600 hover:text-ctaBlue flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondaryTeal"/> Publish Journal</Link></li>
             <li><Link to="/upcoming-conferences" className="text-gray-600 hover:text-ctaBlue flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondaryTeal"/> Event Calendar</Link></li>
             <li><Link to="/expert-connect" className="text-gray-600 hover:text-ctaBlue flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondaryTeal"/> Apply for Speaker</Link></li>
             <li><Link to="/registration" className="text-gray-600 hover:text-ctaBlue flex items-center gap-2"><ArrowRight className="w-3 h-3 text-secondaryTeal"/> Register Online</Link></li>
          </ul>
        </div>
      )}

      {/* UPCOMING DEADLINES - Left Sidebar */}
      {side === "left" && (
        <div className="bg-gradient-to-r from-[#1a3a6e] to-[#2563eb] rounded-xl shadow-sm border border-blue-800 p-5 text-white">
          <h4 className="text-sm font-bold font-poppins mb-4 border-b border-blue-500/50 pb-2 flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-gold" /> Important Deadlines
          </h4>
          <ul className="space-y-4 text-xs font-semibold">
             <li className="flex justify-between items-center group cursor-pointer">
                <span className="group-hover:text-gold transition-colors">Early Bird Registration</span>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px]">Oct 30</span>
             </li>
             <li className="flex justify-between items-center group cursor-pointer">
                <span className="group-hover:text-gold transition-colors">Abstract Submission</span>
                <span className="bg-red-500/80 px-2 py-1 rounded text-[10px]">Nov 15</span>
             </li>
             <li className="flex justify-between items-center group cursor-pointer">
                <span className="group-hover:text-gold transition-colors">Full Paper Deadline</span>
                <span className="bg-white/20 px-2 py-1 rounded text-[10px]">Dec 01</span>
             </li>
          </ul>
        </div>
      )}

      {/* GLOBAL REACH GRAPHIC - Left Sidebar */}
      {side === "left" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center overflow-hidden">
           <Globe className="w-10 h-10 text-ctaBlue mx-auto mb-2 opacity-80" />
           <h4 className="text-[14px] font-black font-poppins text-darkNeutral uppercase tracking-widest mb-1">
             Delegates From
           </h4>
           <p className="text-3xl font-black text-secondaryTeal mb-3">50+ Countries</p>
           <div className="flex justify-center gap-2 text-2xl">
              <span>🇺🇸</span><span>🇬🇧</span><span>🇦🇪</span><span>🇸🇬</span><span>🇮🇳</span><span>🇦🇺</span>
           </div>
        </div>
      )}

      {/* INDEXING PARTNERS - Left Sidebar (Filling space) */}
      {side === "left" && (
        <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
          <h4 className="text-sm font-bold font-poppins text-darkNeutral mb-4 border-b border-gray-100 pb-2">
            Indexed In
          </h4>
          <div className="flex flex-col gap-3 text-[13px] font-bold text-gray-500">
            <div className="flex items-center justify-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm"><CheckCircle2 className="text-green-500 w-4 h-4"/> Scopus</div>
            <div className="flex items-center justify-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm"><CheckCircle2 className="text-green-500 w-4 h-4"/> Web of Science</div>
            <div className="flex items-center justify-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm"><CheckCircle2 className="text-green-500 w-4 h-4"/> UGC Care</div>
            <div className="flex items-center justify-center gap-2 p-2 bg-white rounded border border-gray-100 shadow-sm"><CheckCircle2 className="text-green-500 w-4 h-4"/> Google Scholar</div>
          </div>
        </div>
      )}

      {/* PROMOTIONAL IMAGE CARDS */}
      {promos.map((promo, idx) => (
        <Link 
          to={promo.link} 
          key={idx}
          className="group block relative w-full h-[220px] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-gray-900 border border-gray-100 flex-shrink-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70"
            style={{ backgroundImage: `url('${promo.img}')` }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${promo.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
          
          <div className="relative h-full z-10 p-5 flex flex-col justify-end">
            <span className="self-start px-2 py-1 text-[9px] uppercase tracking-wider font-extrabold bg-white text-darkNeutral rounded mb-auto shadow-sm">
              {promo.badge}
            </span>
            <h4 className="text-[16px] font-bold font-poppins text-white leading-tight mb-1 group-hover:-translate-y-1 transition-transform drop-shadow-md">
              {promo.title}
            </h4>
            <p className="text-white/80 text-[11px] font-medium leading-relaxed group-hover:-translate-y-1 transition-transform">
              {promo.desc}
            </p>
          </div>
        </Link>
      ))}

      {/* ADDITIONAL SMALL CARDS - LEFT SIDE (Filling extra scroll space) */}
      {side === "left" && (
        <>
          <img src="/assets/promo-editing.jpg" alt="Research Editing Services" className="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
          <img src="/assets/promo-events.png" alt="Promote Your Events" className="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
          <img src="/assets/promo-conferences.png" alt="World Best International Conferences" className="w-full h-auto rounded-xl shadow-sm border border-gray-100" />
        </>
      )}

      {/* GLOBAL SPEAKERS HIGHLIGHT - Right Sidebar */}
      {side === "right" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 text-center">
           <Award className="w-8 h-8 text-gold mx-auto mb-2" />
           <h4 className="text-sm font-bold font-poppins text-darkNeutral mb-3 border-b border-gray-100 pb-2">
            World-Renowned Speakers
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed mb-4">
            Hear from industry leaders and pioneers from top global Universities (MIT, Oxford, Stanford).
          </p>
          <div className="flex justify-center -space-x-2 overflow-hidden mb-4">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white border object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="speaker" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white border object-cover" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="speaker" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white border object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="speaker" />
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white border object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="speaker" />
          </div>
          <Link to="/past-speakers" className="text-xs font-bold text-ctaBlue hover:underline">
             View Speakers Gallery &rarr;
          </Link>
        </div>
      )}

      {/* WEBINAR VIDEO PROMO - Right Sidebar */}
      {side === "right" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group cursor-pointer relative">
           <div className="h-32 bg-gray-900 relative">
              <img src="https://static.wixstatic.com/media/502b14_0f3695fe750741d6915be39ecbc78771~mv2.png/v1/fit/w_800,h_400,q_90/img.png" className="w-full h-full object-cover opacity-60" alt="Video cover"/>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                   <Play className="w-5 h-5 text-white fill-white ml-1" />
                 </div>
              </div>
           </div>
           <div className="p-4">
              <span className="text-[10px] uppercase font-bold text-red-500 mb-1 block tracking-wider">Live Recording</span>
              <h4 className="text-sm font-bold text-darkNeutral font-poppins leading-snug">Global AI Integration in Engineering 2025</h4>
           </div>
        </div>
      )}

      {/* SOCIAL MEDIA BANNERS - Right Sidebar */}
      {side === "right" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
           <h4 className="text-sm font-bold font-poppins text-darkNeutral mb-4 border-b border-gray-100 pb-2">
            Connect With Us
          </h4>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
          </div>
        </div>
      )}

      {/* ADS BLOCK - Right Sidebar */}
      {side === "right" && (
        <div className="bg-gradient-to-br from-[#FF9766] to-[#FF5F62] rounded-xl shadow-lg p-6 text-center text-white relative overflow-hidden group">
          <div className="absolute top-2 right-2 opacity-20"><Star className="w-12 h-12" /></div>
          <h4 className="text-[15px] font-bold font-poppins uppercase tracking-wider mb-2">Advertise Here</h4>
          <p className="text-xs text-white/90 mb-4 font-medium">Reach 5000+ researchers and academics globally.</p>
          <Link to="/registration" className="inline-block bg-white text-[#FF5F62] text-xs font-bold px-4 py-2 rounded shadow-sm group-hover:bg-gray-50 transition-colors uppercase tracking-wider">
            Contact Us
          </Link>
        </div>
      )}

    </div>
  );
}

export default SidebarPromo;
