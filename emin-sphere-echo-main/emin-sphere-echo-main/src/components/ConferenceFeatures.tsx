import React from 'react';
import { Lightbulb, FileCheck, Search, Award } from 'lucide-react';

const ConferenceFeatures = () => {
  const features = [
    {
      title: "Topics of Interest",
      icon: <Lightbulb size={32} className="text-[#ff7a00]" />,
      content: "Artificial Intelligence, Machine Learning, Deep Learning, Data Science, Internet of Things (IoT), Blockchain Technologies, Cybersecurity, Cloud & Distributed Computing, Edge Computing, Smart Systems, Human-Computer Interaction, and related fields."
    },
    {
      title: "Submission Categories",
      icon: <FileCheck size={32} className="text-[#ff7a00]" />,
      content: "The conference accepts full-length research papers, short papers, technical reports, case studies, and industry-oriented contributions. All submissions must present original work and should not be under consideration in any other conference or journal."
    },
    {
      title: "Review & Evaluation",
      icon: <Search size={32} className="text-[#ff7a00]" />,
      content: "All submissions will undergo a structured peer-review process. Papers will be evaluated based on originality, technical quality, clarity of presentation, and relevance to the conference themes."
    },
    {
      title: "Recognition",
      icon: <Award size={32} className="text-[#ff7a00]" />,
      content: "Selected high-quality papers may be considered for recognition based on reviewer evaluations and program committee recommendations."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-[#f2f1ea] border-t-4 border-[#ff7a00] p-8 shadow-md flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
            <div className="bg-[#0d233a] p-4 rounded-sm mb-6 transition-colors group-hover:bg-[#ff7a00]">
              {React.cloneElement(feature.icon as React.ReactElement, { className: "text-white" })}
            </div>
            <h3 className="text-2xl font-black text-[#0d233a] mb-4 uppercase tracking-tighter">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              {feature.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceFeatures;
