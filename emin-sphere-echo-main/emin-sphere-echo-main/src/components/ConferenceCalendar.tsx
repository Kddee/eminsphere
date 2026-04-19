import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const months = [
  "April 2026", "May 2026", "June 2026", "July 2026",
  "August 2026", "September 2026", "October 2026", "November 2026",
  "December 2026", "January 2027", "February 2027", "March 2027"
];

const ConferenceCalendar = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        <h2 className="text-3xl font-bold font-poppins text-darkNeutral mb-10 pb-2 inline-block border-b-2 border-secondaryTeal uppercase tracking-wide">
          Conference Calendar 2026
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {months.map((month, i) => (
            <Link 
              key={i} 
              to={`/month/${month.toLowerCase().replace(" ", "-")}`}
              className="group flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 bg-white hover:border-ctaBlue hover:shadow-md transition-all cursor-pointer"
            >
              <Calendar className="w-8 h-8 text-secondaryTeal mb-3 group-hover:text-ctaBlue transition-colors" />
              <span className="text-sm font-bold font-poppins text-darkNeutral group-hover:text-ctaBlue transition-colors">
                {month.split(" ")[0]}
              </span>
              <span className="text-xs text-gray-400 font-semibold mt-1">
                {month.split(" ")[1]}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConferenceCalendar;
