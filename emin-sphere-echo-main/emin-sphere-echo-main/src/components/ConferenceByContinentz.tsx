import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ConferenceByContinentz = () => {
  const continents = [
    {
      id: 1,
      title: "Asia",
      emoji: "🌏",
      color: "from-blue-500 to-cyan-500",
      count: 240,
      link: "/upcomming-confernces"
    },
    {
      id: 2,
      title: "Africa",
      emoji: "🌍",
      color: "from-amber-500 to-orange-500",
      count: 85,
      link: "/upcomming-confernces"
    },
    {
      id: 3,
      title: "Europe",
      emoji: "🗺️",
      color: "from-purple-500 to-pink-500",
      count: 320,
      link: "/upcomming-confernces"
    },
    {
      id: 4,
      title: "North America",
      emoji: "🇺🇸",
      color: "from-red-500 to-rose-500",
      count: 410,
      link: "/upcomming-confernces"
    },
    {
      id: 5,
      title: "Oceania",
      emoji: "🏝️",
      color: "from-green-500 to-emerald-500",
      count: 95,
      link: "/upcomming-confernces"
    },
    {
      id: 6,
      title: "South America",
      emoji: "🌴",
      color: "from-yellow-500 to-lime-500",
      count: 140,
      link: "/upcomming-confernces"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            International Conferences 2026
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">
            Conference by Continents
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {continents.map((continent) => (
            <Link
              key={continent.id}
              to={continent.link}
              className="group"
            >
              <div className={`bg-gradient-to-br ${continent.color} rounded-lg p-8 h-full text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer relative overflow-hidden`}>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">{continent.emoji}</div>
                  <h3 className="text-2xl font-bold mb-2">{continent.title}</h3>
                  <p className="text-gray-100 mb-4 text-sm">{continent.count} Conferences</p>
                  <div className="flex items-center text-white font-semibold group-hover:gap-2 transition-all">
                    Explore All
                    <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/upcomming-confernces"
            className="inline-flex items-center justify-center gap-2 bg-white text-cyan-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all hover:gap-3 border-2 border-cyan-600"
          >
            View All Events
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConferenceByContinentz;
