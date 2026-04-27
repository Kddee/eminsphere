import { MapPin, Calendar, Users, Download, PhoneIcon } from "lucide-react";

interface ConferenceDetailProps {
  conferenceNumber?: string;
  title?: string;
  date?: string;
  location?: string;
  mode?: string;
  theme?: string;
  organizer?: string;
  academicPartner?: string;
}

const ConferenceHero = ({
  conferenceNumber = "15TH INTERNATIONAL CONFERENCE ON",
  title = "Recent Challenges in Engineering and Technology",
  date = "April 22–23, 2026",
  location = "Bangalore, India",
  mode = "Hybrid (In-person + Virtual)",
  theme = "Engineering for a Changing World: Creating Sustainable Solutions for the Future",
  organizer = "Primus School of Management Studies, India, and IFERP Academy"
}: ConferenceDetailProps) => {
  return (
    <section className="relative bg-gradient-to-r from-cyan-50 via-cyan-50 to-cyan-100 py-0 overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal parallelogram on right */}
        <div 
          className="absolute right-0 top-0 opacity-60"
          style={{
            width: "500px",
            height: "600px",
            backgroundColor: "#00ACC1",
            transform: "skewY(-5deg) translateX(100px)",
            zIndex: 1
          }}
        />
        {/* Cyan accent */}
        <div 
          className="absolute right-20 top-32 opacity-40"
          style={{
            width: "400px",
            height: "450px",
            backgroundColor: "#00BCD4",
            transform: "skewY(-8deg) translateX(80px)",
            zIndex: 0
          }}
        />
        {/* Dark teal accent bottom right */}
        <div 
          className="absolute right-40 bottom-0 opacity-30"
          style={{
            width: "300px",
            height: "350px",
            backgroundColor: "#0097A7",
            transform: "skewY(-10deg)",
            zIndex: 0
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl">
          {/* Conference Number */}
          <div className="inline-block mb-6">
            <h3 className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-widest">
              {conferenceNumber}
            </h3>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            {title}
            <span className="block text-blue-700 mt-2">(ICRCET 2026)</span>
          </h1>

          {/* Date & Location */}
          <div className="space-y-3 mb-10">
            <div className="flex items-center gap-2">
              <Calendar size={20} className="text-gray-700" />
              <span className="text-lg font-semibold text-gray-800">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-gray-700" />
              <span className="text-lg font-semibold text-gray-800">{location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} className="text-gray-700" />
              <span className="text-base text-gray-700">{mode}</span>
            </div>
          </div>

          {/* Theme Box - Professional styling */}
          <div className="bg-white bg-opacity-95 border-l-4 border-blue-700 p-6 md:p-8 mb-12 shadow-md max-w-2xl">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-3">Conference Theme</p>
            <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed">
              {theme}
            </p>
          </div>

          {/* Organizers */}
          <div className="mb-10">
            <p className="text-base text-gray-700">
              <span className="font-bold text-slate-900">Organized by:</span> <span className="text-gray-800">{organizer}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-10 transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Register Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 transition-all shadow-md hover:shadow-lg">
              <Download size={18} />
              Conference Brochure
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 font-bold py-3 px-8 transition-all">
              <PhoneIcon size={18} />
              Apply as Co-Organizer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceHero;
