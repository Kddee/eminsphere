import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const continents = [
  "Asia",
  "Africa",
  "Europe",
  "North America",
  "Oceania",
  "South America"
];

const ConferenceContinents = () => {
  return (
    <section className="py-16 bg-[#000920] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-3xl font-bold font-poppins text-white mb-10 pb-2 inline-block border-b-2 border-secondaryTeal uppercase tracking-wide">
          Conference by Continents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {continents.map((continent, i) => (
            <div key={i} className="bg-white/10 rounded-lg p-6 border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-between group cursor-pointer">
              <h5 className="text-lg font-bold font-poppins uppercase tracking-wide text-white group-hover:text-secondaryTeal transition-colors">
                {continent}
              </h5>
              <Link 
                to={`/continent/${continent.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-semibold text-gray-300 hover:text-white uppercase tracking-wider inline-flex items-center gap-1"
              >
                Explore All <ArrowRight className="w-4 h-4 text-secondaryTeal group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Link 
              to="/all-events" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-sm"
              style={{ background: "linear-gradient(90deg, #FF9766 0%, #FF5F62 100%)" }}
            >
              View All Events
            </Link>
        </div>

      </div>
    </section>
  );
};

export default ConferenceContinents;
