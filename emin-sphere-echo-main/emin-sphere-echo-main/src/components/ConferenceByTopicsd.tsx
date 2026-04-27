import { Link } from "react-router-dom";

const ConferenceByTopicsd = () => {
  const topics = [
    "Engineering",
    "Business And Economics",
    "Education",
    "Engineering And Technology",
    "Health And Medicine",
    "Interdisciplinary",
    "Mathematics And Statistics",
    "Physical And Life Sciences",
    "Regional Studies",
    "Social Science And Humanities",
    "Sports Science",
    "Law",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Blockchain",
    "Cloud Computing",
    "IoT And Smart Systems",
    "Renewable Energy",
    "Sustainability",
    "Management And Innovation",
    "Digital Transformation",
    "Robotics And Automation",
    "Computer Vision"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8">
          Conference By Topics
        </h3>

        <div className="flex flex-wrap gap-3">
          {topics.map((topic, idx) => (
            <Link
              key={idx}
              to="/upcomming-confernces"
              className="inline-block"
            >
              <button className="bg-white border-2 border-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 text-sm md:text-base">
                {topic}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceByTopicsd;
