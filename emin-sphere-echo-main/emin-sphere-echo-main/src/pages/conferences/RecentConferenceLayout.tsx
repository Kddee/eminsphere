import { Link, useLocation, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Download, ChevronRight, CheckCircle2, PlayCircle, BookOpen, Quote } from "lucide-react";
import ConferenceHeroBanner from "@/components/ConferenceHeroBanner";
import { recentConferences } from "@/data/recentConferencesData";

const sdgGoals = [
  { id: 4, img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sustainable_Development_Goal_4.png", alt: "Quality Education" },
  { id: 7, img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sustainable_Development_Goal_7.png", alt: "Affordable and Clean Energy" },
  { id: 9, img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sustainable_Development_Goal_09.png", alt: "Industry, Innovation, and Infrastructure" },
  { id: 11, img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Sustainable_Development_Goal_11.png", alt: "Sustainable Cities" },
  { id: 13, img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sustainable_Development_Goal_13.png", alt: "Climate Action" },
  { id: 17, img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Sustainable_Development_Goal_17.png", alt: "Partnerships" }
];

const downloadItems = [
  { title: "Conference Poster Download", icon: BookOpen, color: "bg-teal-100", textColor: "text-teal-700" },
  { title: "Conference Brochure Download", icon: BookOpen, color: "bg-orange-100", textColor: "text-orange-700" },
  { title: "Sample Abstract Download", icon: Download, color: "bg-red-100", textColor: "text-red-700" },
  { title: "Sample Full Paper Download", icon: Download, color: "bg-purple-100", textColor: "text-purple-700" },
  { title: "PPT Template Download", icon: Download, color: "bg-blue-100", textColor: "text-blue-700" },
  { title: "Registration Form Download", icon: Download, color: "bg-pink-100", textColor: "text-pink-700" },
];

const RecentConferenceLayout = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split("/").pop() || "";
  const finalId = id || pathId;

  const confData = recentConferences[finalId];

  // Default fallback if no data matches
  const data = confData || {
    title: "Recent Challenges in Engineering and Technology (ICRCET)",
    date: "Concluded Event",
    location: "Global",
    description: "Welcome to the International Conference on Recent Challenges in Engineering and Technology (ICRCET). With the theme “Engineering for a Changing World,” this conference successfully brought together researchers, academicians, and industry experts.",
    subtitle: "Past Event Proceedings"
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main className="flex-1 w-full pt-[76px]">
        {/* Official Hero Design integrated with dynamic page data */}
        <ConferenceHeroBanner 
          title={data.title}
          date={data.date}
          location={data.location}
          theme={data.subtitle || "Exploring Technological Horizons and Global Sustainability"}
          organizedBy="Primus School of Management Studies, India, and Eminsphere Academy"
        />



        {/* ISO Purple Banner */}
        <div className="max-w-5xl mx-auto px-4 mt-8 mb-6">
           <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-lg shadow-md flex items-center justify-between px-6 py-4">
              <div className="text-white">
                 <p className="font-bold text-lg tracking-wide">ISO 9001:2015</p>
                 <p className="text-xs text-blue-100 font-medium tracking-wider">CERTIFIED ORGANIZATION</p>
              </div>
              <div className="text-right text-white">
                 <p className="text-sm font-semibold">Quality Management System</p>
              </div>
           </div>
        </div>

        {/* Academic Partner Focus */}
        <section className="flex flex-col items-center justify-center my-10">
           <h3 className="text-2xl font-bold font-poppins text-gray-800 mb-6">Academic <span className="text-teal-600">Partner</span></h3>
           <div className="bg-white border hover:shadow-xl transition-shadow p-8 rounded-xl flex flex-col items-center justify-center w-64 shadow-md border-gray-100 relative group overflow-hidden">
             <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
             <BookOpen className="w-16 h-16 text-[#8c6731] mb-4 relative z-10" />
             <p className="text-center font-bold text-[#8c6731] text-xs uppercase tracking-wider relative z-10">
                Primus School of<br/>Management Studies
             </p>
           </div>
        </section>

        {/* 6 Grid Download Section */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {downloadItems.map((item, idx) => {
                 const Icon = item.icon;
                 return (
                   <button key={idx} className={`flex items-center gap-4 ${item.color} ${item.textColor} px-5 py-4 rounded-xl font-bold text-sm hover:opacity-80 transition-opacity border border-transparent shadow-sm hover:shadow text-left group`}>
                      <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center shrink-0">
                         <Icon size={18} className="group-hover:scale-110 transition-transform" />
                      </div>
                      {item.title}
                   </button>
                 )
              })}
           </div>
        </section>

        {/* Welcome Section */}
        <section className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center mb-24">
           {/* Left Photos */}
           <div className="lg:w-1/2 relative">
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Group of delegates" className="rounded-xl shadow-lg w-4/5 ml-auto border-4 border-white transform rotate-2 relative z-10" />
             <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Audience" className="rounded-xl shadow-lg w-3/5 absolute -bottom-10 left-0 border-4 border-white transform -rotate-2 z-20" />
             <div className="w-16 h-16 bg-[#70104f] absolute bottom-10 -left-6 z-30 rounded-lg flex items-center justify-center text-white shadow-xl">
                <Quote size={24} />
             </div>
           </div>

           {/* Right Text */}
           <div className="lg:w-1/2 pt-10 lg:pt-0">
              <h2 className="text-[28px] font-bold font-poppins text-gray-800 leading-tight mb-5">
                Overview of {data.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium text-justify">
                {data.description} Joining together worldwide researchers, academicians, and industry experts all dedicated to evaluating recent emerging trends, and explore innovative solutions. We invite comprehensive collaboration across domains contributing to sustainable impact on a rapidly changing world.
              </p>
              
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-center gap-6">
                 <img src="https://images.unsplash.com/photo-1605370258107-1b0b533e4d9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Certificate Badge" className="w-20 h-auto rounded shadow-sm" />
                 <div>
                    <h4 className="text-blue-900 font-black text-lg mb-1 tracking-wide">15 CPD CREDIT HOURS</h4>
                    <p className="text-sm font-semibold text-blue-700">Participation successfully verified</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Video Banner Strip */}
        <section className="bg-gray-50 py-20 border-t border-gray-200">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-poppins font-black text-[#11316b] mb-10">Conference Output <span className="text-[#e8701a]">Message</span></h2>
              <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-200">
                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" alt="Video Placeholder" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <PlayCircle size={48} className="text-white ml-2" />
                   </div>
                </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default RecentConferenceLayout;
