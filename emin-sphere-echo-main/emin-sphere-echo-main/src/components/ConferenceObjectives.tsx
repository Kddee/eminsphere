import { CheckCircle2 } from "lucide-react";

interface Objective {
  title: string;
  description: string;
}

interface ObjectivesProps {
  objectives?: Objective[];
}

const ConferenceObjectives = ({ 
  objectives = [
    {
      title: "Foster Knowledge Exchange",
      description: "Provide a global platform for researchers, academicians, and industry experts to share innovative ideas and best practices"
    },
    {
      title: "Promote Interdisciplinary Collaboration",
      description: "Encourage collaboration across diverse disciplines to address current and emerging global challenges"
    },
    {
      title: "Highlight Emerging Technologies",
      description: "Explore advancements in AI, IoT, Renewable Energy, and Smart Infrastructure shaping the future"
    },
    {
      title: "Encourage Research & Innovation",
      description: "Inspire participants to present novel research outcomes and innovative approaches"
    },
    {
      title: "Focus on Sustainable Development",
      description: "Align engineering solutions with global sustainability goals and SDGs"
    },
    {
      title: "Provide Networking Opportunities",
      description: "Facilitate meaningful interactions and partnerships among participants for future collaborations"
    }
  ]
}: ObjectivesProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Conference Objectives
            </h2>
            <p className="text-lg text-gray-600">
              The primary objectives of our conference are to foster global collaboration and advance innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => (
              <div 
                key={idx} 
                className="flex gap-3 p-5 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all group"
              >
                <CheckCircle2 className="text-cyan-600 group-hover:text-teal-600 flex-shrink-0 mt-0.5 transition-all" size={22} />
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1.5">
                    {obj.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceObjectives;
