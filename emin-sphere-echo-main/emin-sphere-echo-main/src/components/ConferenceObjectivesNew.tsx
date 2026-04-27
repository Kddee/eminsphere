import { CheckCircle2, Play } from "lucide-react";

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
      description: "Provide a global platform for researchers, academicians, industry experts, and practitioners to share innovative ideas, research findings, and best practices in engineering and technology"
    },
    {
      title: "Promote Interdisciplinary Collaboration",
      description: "Encourage collaboration across diverse engineering disciplines to address current and emerging global challenges through integrated and sustainable solutions."
    },
    {
      title: "Highlight Emerging Technologies",
      description: "Explore advancements in areas such as Artificial Intelligence, IoT, Renewable Energy, Smart Infrastructure, Robotics, and Sustainable Materials that are shaping the future of engineering."
    },
    {
      title: "Encourage Research and Innovation",
      description: "Inspire participants to present novel research outcomes, prototype developments, and innovative approaches that contribute to industrial growth and societal development."
    },
    {
      title: "Focus on Sustainable Development",
      description: "Align engineering solutions with global sustainability goals to create technologies that balance economic growth, environmental protection, and social well-being."
    },
    {
      title: "Provide Networking Opportunities",
      description: "Facilitate meaningful interactions, collaborations, and partnerships among participants for future research, publications, and professional growth."
    }
  ]
}: ObjectivesProps) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
          The primary objectives of ICRCET-2026 are to:
        </h2>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-4 bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all border border-gray-100">
              <CheckCircle2 className="text-cyan-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {obj.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ConferenceObjectives;
