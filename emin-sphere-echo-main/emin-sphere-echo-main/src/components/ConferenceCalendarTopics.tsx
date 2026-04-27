import { Link } from "react-router-dom";

const ConferenceCalendarTopics = () => {
  const months = [
    { month: "April 2026", link: "/upcomming-confernces" },
    { month: "May 2026", link: "/upcomming-confernces" },
    { month: "June 2026", link: "/upcomming-confernces" },
    { month: "July 2026", link: "/upcomming-confernces" },
    { month: "August 2026", link: "/upcomming-confernces" },
    { month: "September 2026", link: "/upcomming-confernces" },
    { month: "October 2026", link: "/upcomming-confernces" },
    { month: "November 2026", link: "/upcomming-confernces" },
    { month: "December 2026", link: "/upcomming-confernces" },
    { month: "January 2027", link: "/upcomming-confernces" },
    { month: "February 2027", link: "/upcomming-confernces" },
    { month: "March 2027", link: "/upcomming-confernces" }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Conference Calendar 2026
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {months.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="block"
            >
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg p-4 text-center hover:shadow-lg hover:border-cyan-400 transition-all cursor-pointer hover:scale-105">
                <p className="text-gray-900 font-semibold text-sm">{item.month}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceCalendarTopics;
