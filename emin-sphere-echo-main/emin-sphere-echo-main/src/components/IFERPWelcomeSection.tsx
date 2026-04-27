import { BookOpen, Award, Lightbulb } from "lucide-react";

const IFERPWelcomeSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg h-80 flex items-center justify-center order-2 md:order-1 border border-cyan-200 shadow-md">
            <div className="text-center">
              <BookOpen size={56} className="text-cyan-600 mx-auto mb-4" />
              <p className="text-cyan-700 font-semibold text-sm">IFERP Academy</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              IFERP
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              Welcome to the 15th International Conference on Recent Challenges in Engineering and Technology (ICRCET), to be held on April 22–23, 2026, in Bangalore, India. With the theme "Engineering for a Changing World: Creating Sustainable Solutions for the Future," this conference will bring together researchers, academicians, and industry experts to share knowledge, discuss emerging trends, and explore innovative solutions.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
              ICRCET 2026 aims to inspire collaboration and advance sustainable practices that address the evolving challenges of engineering and technology worldwide.
            </p>

            {/* CPD Credits */}
            <div className="inline-block bg-gradient-to-r from-cyan-50 to-teal-50 border-l-4 border-cyan-500 rounded-lg p-5">
              <p className="text-xs font-semibold text-cyan-700 uppercase tracking-wider mb-1">Recognized by</p>
              <p className="text-xl font-bold text-slate-900">16 CPD CREDIT HOURS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IFERPWelcomeSection;
