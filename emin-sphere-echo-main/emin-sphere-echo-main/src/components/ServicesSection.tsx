import { BookOpen, Users, GraduationCap, Briefcase, Award, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "academic publishing",
    icon: BookOpen,
    link: "/article-submissions",
    color: "#3DC2D0" // primaryTeal
  },
  {
    title: "conference management",
    icon: Users,
    link: "/upcoming-conferences",
    color: "#FF7043" // accentOrange
  },
  {
    title: "thesis consultation",
    icon: GraduationCap,
    link: "/expert-connect",
    color: "#2964F2" // ctaBlue
  },
  {
    title: "skill development",
    icon: Briefcase,
    link: "/career",
    color: "#12AABB" // secondaryTeal
  },
  {
    title: "expert connect",
    icon: Zap,
    link: "/expert-connect",
    color: "#FF7864" // accentRed
  },
  {
    title: "innovation hub",
    icon: Award,
    link: "/innovation-challenge-2026",
    color: "#3DC2D0"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        {/* Header matching Target Site Top Categories */}
        <h2 className="text-3xl font-bold font-poppins text-darkNeutral mb-10 pb-2 inline-block border-b-2 border-secondaryTeal uppercase tracking-wide">
          Top Services
        </h2>

        {/* Grid matching the slider/grid of Top Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center text-center group cursor-pointer">
              
              {/* Circular Icon Style from Target */}
              <div 
                className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15` }} // 15% opacity background
              >
                <service.icon 
                  className="w-8 h-8" 
                  style={{ color: service.color }} 
                />
              </div>

              <h5 className="text-[13px] font-bold text-darkNeutral uppercase tracking-wide font-poppins mb-2 group-hover:text-secondaryTeal transition-colors line-clamp-2 min-h-[40px]">
                {service.title}
              </h5>

              <Link 
                to={service.link}
                className="text-[12px] font-semibold text-gray-500 hover:text-secondaryTeal uppercase tracking-wider inline-flex items-center gap-1 mt-auto"
              >
                View More <ArrowRight className="w-3 h-3" />
              </Link>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
