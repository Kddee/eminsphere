import { Award, Zap, Target } from "lucide-react";

const ScholarshipSection = () => {
  const eligibility = [
    "Students, young researchers, and early-career professionals",
    "Academicians with financial limitations seeking global exposure",
    "Bright minds from diverse backgrounds interested in presenting research"
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            Scholarship Program
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            {/* Content */}
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                At ICRCET 2026, we are committed to promoting inclusive academic participation and fostering innovation-driven research. In collaboration with IFERP Academy, our Scholarship Program supports ambitious researchers and students in achieving their academic goals.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">Eligible Participants:</h3>
              <ul className="space-y-3 mb-8">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Zap className="text-cyan-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                This initiative provides registration fee waivers for eligible participants, enabling bright minds from diverse backgrounds to present their research, share insights, and contribute to sustainable development globally.
              </p>

              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded transition-all shadow-md">
                Apply for Scholarship
              </button>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Award size={64} className="text-cyan-600 mx-auto mb-4" />
                <p className="text-cyan-700 font-semibold">Scholarship Opportunities</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 text-center border-l-4 border-cyan-500">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Be Part of the Movement
            </h3>
            <p className="text-gray-700 mb-6">
              Apply now and be part of the movement to drive innovation, collaboration, and solutions for global challenges through ICRCET 2026.
            </p>
            <button className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded transition-all shadow-md">
              <Target size={20} />
              Learn More About the Program
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
