import { Zap } from "lucide-react";

const WorkshopsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-teal-50 border-b border-cyan-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Workshops and Seminars
          </h2>
          
          <div className="flex justify-center mb-6">
            <Zap size={40} className="text-cyan-600" />
          </div>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
            Participate in specialized sessions for hands-on experiences, practical knowledge, and skill-building in multidisciplinary studies. Our workshops cover emerging technologies, research methodologies, and industry best practices designed to elevate your expertise and research quality.
          </p>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-8 rounded transition-all shadow-md text-sm">
            View Workshop Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
