import { Calendar, Clock, ArrowRight } from "lucide-react";

interface ImportantDate {
  title: string;
  date: string;
}

interface ImportantDatesProps {
  dates?: ImportantDate[];
}

const ImportantDates = ({ 
  dates = [
    { title: "Early Bird Registration Deadline", date: "13th March 2026" },
    { title: "Abstract Submission Deadline", date: "13th April 2026" },
    { title: "Final Registration Deadline", date: "16th April 2026" },
    { title: "Full Paper Submission Deadline", date: "18th April 2026" }
  ]
}: ImportantDatesProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              IMPORTANT DATES
            </h2>
            <p className="text-gray-600 text-lg">Don't miss the key deadlines for ICRCET 2026</p>
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-cyan-100 rounded-full p-3 group-hover:bg-teal-100 transition-all">
                    <Calendar className="text-cyan-700 group-hover:text-teal-600" size={28} />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-3 h-10 flex items-center justify-center">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-cyan-700 group-hover:text-teal-600 transition-all">
                  {item.date}
                </p>
              </div>
            ))}
          </div>

          {/* Speaker Application CTA */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-600 to-teal-700 rounded-lg p-10 text-center text-white shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Share Your Expertise with a Global Audience
            </h3>
            <p className="text-cyan-100 text-lg mb-6">
              Join us as a keynote speaker or presenter and inspire researchers and practitioners from around the world
            </p>
            <button className="bg-white hover:bg-cyan-50 text-cyan-700 font-bold py-2 px-8 transition-all shadow-md flex items-center gap-2 mx-auto text-sm">
              Apply to Be a Speaker
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
