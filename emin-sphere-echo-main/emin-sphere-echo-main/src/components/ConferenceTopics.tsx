import { ChevronRight, Cpu, Microscope, HeartPulse, ShieldCheck, Banknote, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  { name: "Artificial Intelligence & AI", icon: Cpu },
  { name: "Medical & Health Sciences", icon: HeartPulse },
  { name: "Business & Management", icon: Briefcase },
  { name: "Cyber Security & IT", icon: ShieldCheck },
  { name: "Applied Sciences", icon: Microscope },
  { name: "Economics & Finance", icon: Banknote }
];

const ConferenceTopics = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="px-4 md:px-6">

        <h2 className="text-3xl font-bold font-poppins text-darkNeutral mb-8 pb-2 inline-block border-b-2 border-secondaryTeal uppercase tracking-wide">
          Conference By Topics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {topics.map((topic, i) => (
            <Link 
              key={i} 
              to="/upcoming-conferences"
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-secondaryTeal group-hover:bg-secondaryTeal group-hover:text-white transition-colors">
                  <topic.icon className="w-5 h-5" />
                </div>
                <span className="font-bold font-sans text-[14px] text-darkNeutral group-hover:text-ctaBlue transition-colors">
                  {topic.name}
                </span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-ctaBlue group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
            <Link 
              to="/upcoming-conferences" 
              className="text-sm font-bold text-secondaryTeal hover:underline"
            >
              Browse all 50+ topics &rarr;
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ConferenceTopics;
