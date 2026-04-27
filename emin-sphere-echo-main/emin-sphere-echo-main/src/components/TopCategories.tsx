import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Engineering",
      icon: "🔧",
      color: "from-orange-100 to-orange-50",
      link: "/upcomming-confernces"
    },
    {
      id: 2,
      title: "Business And Economics",
      icon: "💼",
      color: "from-blue-100 to-blue-50",
      link: "/upcomming-confernces"
    },
    {
      id: 3,
      title: "Education",
      icon: "📚",
      color: "from-green-100 to-green-50",
      link: "/upcomming-confernces"
    },
    {
      id: 4,
      title: "Engineering And Technology",
      icon: "⚙️",
      color: "from-purple-100 to-purple-50",
      link: "/upcomming-confernces"
    },
    {
      id: 5,
      title: "Health And Medicine",
      icon: "🏥",
      color: "from-red-100 to-red-50",
      link: "/upcomming-confernces"
    },
    {
      id: 6,
      title: "Interdisciplinary",
      icon: "🔗",
      color: "from-indigo-100 to-indigo-50",
      link: "/upcomming-confernces"
    },
    {
      id: 7,
      title: "Mathematics And Statistics",
      icon: "📊",
      color: "from-pink-100 to-pink-50",
      link: "/upcomming-confernces"
    },
    {
      id: 8,
      title: "Physical And Life Sciences",
      icon: "🧬",
      color: "from-teal-100 to-teal-50",
      link: "/upcomming-confernces"
    },
    {
      id: 9,
      title: "Regional Studies",
      icon: "🌍",
      color: "from-amber-100 to-amber-50",
      link: "/upcomming-confernces"
    },
    {
      id: 10,
      title: "Social Science And Humanities",
      icon: "🎓",
      color: "from-cyan-100 to-cyan-50",
      link: "/upcomming-confernces"
    },
    {
      id: 11,
      title: "Sports Science",
      icon: "⚽",
      color: "from-emerald-100 to-emerald-50",
      link: "/upcomming-confernces"
    },
    {
      id: 12,
      title: "Law",
      icon: "⚖️",
      color: "from-slate-100 to-slate-50",
      link: "/upcomming-confernces"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Top Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-lg p-8 h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-200`}>
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <div className="flex items-center text-cyan-600 font-semibold group-hover:gap-2 transition-all">
                  View More
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
