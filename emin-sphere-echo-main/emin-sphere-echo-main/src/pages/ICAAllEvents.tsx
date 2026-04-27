import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, MapPin, Filter } from "lucide-react";
import ICAHeader from "@/components/ICAHeader";
import ICAFooter from "@/components/ICAFooter";
import { sampleConferences, conferenceTopics, countries, months } from "@/data/icaData";

const ICAAllEvents = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConferences = sampleConferences.filter((conf) => {
    const matchCountry = !selectedCountry || conf.country === selectedCountry;
    const matchTopic = !selectedTopic || conf.topic === selectedTopic;
    const matchMonth = !selectedMonth || conf.date.includes(selectedMonth.split(" ")[0]);
    const matchSearch = !searchQuery || 
      conf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conf.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchCountry && matchTopic && matchMonth && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <ICAHeader />
      <div className="h-20 md:h-24" />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            List of Conferences 2026
          </h1>
          <p className="text-lg text-blue-100">
            Find an updated list of {sampleConferences.length}+ active conferences worldwide
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conferences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Topics</option>
              {conferenceTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>

            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Months</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Conference List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredConferences.length} Conferences Found
            </h2>
          </div>

          <div className="space-y-4">
            {filteredConferences.map((conference) => (
              <div
                key={conference.id}
                className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <Link
                      to={`/ica-conference/${conference.id}`}
                      className="text-xl font-bold text-blue-600 hover:text-blue-700 mb-2 block"
                    >
                      {conference.title}
                    </Link>
                    
                    <div className="flex flex-wrap gap-4 mb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{conference.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span>{conference.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      {conference.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                        {conference.topic}
                      </span>
                      {conference.submissionDeadline && (
                        <span className="px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full">
                          Deadline: {conference.submissionDeadline}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex md:flex-col gap-2">
                    <Link
                      to={`/ica-conference/${conference.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all text-sm whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    <a
                      href={conference.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg transition-all text-sm whitespace-nowrap"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredConferences.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                No Conferences Found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to find more conferences
              </p>
            </div>
          )}
        </div>
      </section>

      <ICAFooter />
    </div>
  );
};

export default ICAAllEvents;
