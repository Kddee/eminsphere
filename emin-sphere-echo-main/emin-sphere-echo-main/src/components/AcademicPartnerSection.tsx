import { Award, Zap } from "lucide-react";

const AcademicPartnerSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Academic Partner
            </h2>
            <p className="text-xl font-semibold text-cyan-600 mb-4">
              Primus School of Management Studies, India
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              Our academic partner brings expertise, infrastructure, and commitment to quality education and research. Together, we create a platform where innovation and sustainable solutions thrive.
            </p>
            
            {/* Download Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 font-semibold py-2.5 px-3 rounded transition-all text-sm">
                <Award size={16} />
                Conference Poster
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 font-semibold py-2.5 px-3 rounded transition-all text-sm">
                <Zap size={16} />
                Brochure
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 font-semibold py-2.5 px-3 rounded transition-all text-sm">
                <Award size={16} />
                Sample Abstract
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 font-semibold py-2.5 px-3 rounded transition-all text-sm">
                <Zap size={16} />
                Sample Paper
              </button>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg h-72 flex items-center justify-center border border-cyan-200 shadow-md">
            <div className="text-center">
              <Award size={52} className="text-cyan-600 mx-auto mb-3" />
              <p className="text-cyan-700 font-semibold text-sm">Academic Partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPartnerSection;
