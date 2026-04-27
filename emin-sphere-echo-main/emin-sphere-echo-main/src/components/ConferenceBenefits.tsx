import { Presentation, BookOpen, Users, Lightbulb, Award, TrendingUp } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConferenceBenefits = () => {
  const benefits: Benefit[] = [
    {
      icon: <Presentation size={32} />,
      title: "Presentation Opportunities",
      description: "Present your research to a global audience and receive valuable feedback from scholars and professionals worldwide"
    },
    {
      icon: <BookOpen size={32} />,
      title: "Learning Opportunities",
      description: "Gain exposure to latest trends, keynote speeches, technical sessions, and stay updated with cutting-edge research"
    },
    {
      icon: <Users size={32} />,
      title: "Career Growth",
      description: "Interact with leading experts and representatives from top institutions for career prospects and collaborations"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Exposure to New Ideas",
      description: "Experience novel concepts, diverse perspectives, and innovative ideas that enhance your academic understanding"
    },
    {
      icon: <Award size={32} />,
      title: "Publication Opportunities",
      description: "Publish your research in prestigious Scopus, WoS, and SCIE indexed journals with global visibility"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Lifetime Access",
      description: "Enjoy lifetime access to all conference presentations through the IFERP Dashboard for future reference"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Why Attend This Conference?
            </h2>
            <p className="text-gray-600 text-lg">Explore the numerous benefits of participating in ICRCET 2026</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:shadow-lg hover:border-cyan-400 transition-all group"
              >
                <div className="bg-cyan-100 group-hover:bg-teal-100 rounded-lg w-14 h-14 flex items-center justify-center mb-4 transition-all">
                  <div className="text-cyan-700 group-hover:text-teal-600 transition-all scale-90">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBenefits;
