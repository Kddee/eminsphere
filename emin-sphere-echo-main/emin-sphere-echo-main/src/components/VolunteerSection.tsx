import { Users, Target, Compass } from "lucide-react";

const VolunteerSection = () => {
  const benefits = [
    {
      icon: <Users size={28} />,
      title: "Work with Global Experts",
      description: "Collaborate with leading researchers, academicians, and industry professionals from around the world"
    },
    {
      icon: <Target size={28} />,
      title: "Gain Practical Experience",
      description: "Enhance your leadership, teamwork, and communication skills through organizing a prestigious international conference"
    },
    {
      icon: <Compass size={28} />,
      title: "Build Valuable Connections",
      description: "Expand your professional network with innovators and professionals from diverse fields and disciplines"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-teal-50 border-b border-cyan-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Volunteer Opportunities
          </h2>
          
          <p className="text-xl md:text-2xl font-semibold text-cyan-700 mb-4">
            Make a Difference | Gain Experience | Expand Your Horizons
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-10">
            Are you passionate about research, engineering, technology, or innovation? Join our vibrant volunteer team at ICRCET 2026! Work alongside global researchers, academicians, and industry experts and be part of a transformative journey in shaping the future of research and technology.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-cyan-200 hover:shadow-lg transition-all group">
                <div className="text-cyan-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-8 rounded transition-all shadow-md text-sm">
            Apply to Be a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;
