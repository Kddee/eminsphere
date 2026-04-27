import { MapPin, ExternalLink } from "lucide-react";

const FeaturedEventsNew = () => {
  const featuredEvents = [
    {
      date: "22",
      month: "Apr",
      year: "2026",
      logo: "🎓",
      title: "ICASET-2026: AI, Software Engineering & Advanced Technologies",
      location: "Virtual | Global",
      type: "Accredited CPD Event"
    },
    {
      date: "26",
      month: "Apr",
      year: "2026",
      logo: "🏥",
      title: "ICAMET 2025: AI, Management, Engineering & Technology",
      location: "Pune, India",
      type: "Accredited CPD Event"
    },
    {
      date: "27",
      month: "Apr",
      year: "2026",
      logo: "🔧",
      title: "ICASIT-26: Societal Transformation through Engineering & AI",
      location: "Virtual | Global",
      type: "Accredited CPD Event"
    },
    {
      date: "10",
      month: "May",
      year: "2026",
      logo: "🌱",
      title: "ICNSE-26: Emerging Technologies & Sustainable Practices",
      location: "Virtual | Global",
      type: "Accredited CPD Event"
    },
    {
      date: "20",
      month: "May",
      year: "2026",
      logo: "🚀",
      title: "ICTET-26: Engineering & Technology Transformation",
      location: "Virtual | Global",
      type: "Accredited CPD Event"
    },
    {
      date: "14",
      month: "Jun",
      year: "2026",
      logo: "📊",
      title: "ICQADTS-2026: Quality Assurance & Digital Technology",
      location: "Virtual | Global",
      type: "Accredited CPD Event"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-12">
          Featured Events [Accredited CPD Event]
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-cyan-400"
            >
              {/* Date Badge */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{event.logo}</div>
                  <div>
                    <p className="text-3xl font-bold">{event.date}</p>
                    <p className="text-sm opacity-90">{event.month} {event.year}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-cyan-600 transition-colors cursor-pointer">
                  {event.title}
                </h4>

                <div className="flex items-start gap-2 mb-4 text-sm text-gray-600">
                  <MapPin size={18} className="text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-cyan-600 font-semibold hover:gap-3 transition-all cursor-pointer">
                  <span>Learn More</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsNew;
