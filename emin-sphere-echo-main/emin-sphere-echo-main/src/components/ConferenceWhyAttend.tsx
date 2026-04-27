import React from 'react';
import { Globe, BookOpen, Users, TrendingUp } from 'lucide-react';

const ConferenceWhyAttend = () => {
  const reasons = [
    {
      title: "International Academic Engagement",
      icon: <Globe size={28} className="text-[#ffc107]" />,
      desc: "Engage with researchers, academicians, and industry professionals from diverse geographical regions, facilitating cross-disciplinary knowledge exchange and global research collaboration."
    },
    {
      title: "Scholarly Dissemination",
      icon: <BookOpen size={28} className="text-[#ffc107]" />,
      desc: "Present and disseminate research findings through peer-reviewed conference proceedings, with opportunities for further consideration in relevant academic publication channels."
    },
    {
      title: "Research & Industry Interaction",
      icon: <Users size={28} className="text-[#ffc107]" />,
      desc: "Interact with experts from academia and industry, enabling discussions on current challenges, applied research, and potential collaborative initiatives."
    },
    {
      title: "Professional Development",
      icon: <TrendingUp size={28} className="text-[#ffc107]" />,
      desc: "Enhance academic and professional competencies through exposure to recent advancements, technical sessions, and structured discussions within specialized domains."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Why Participate?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
              <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">
                 {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0b192c] mb-3">
                {item.title}
              </h3>
              <p className="text-[#334155] text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceWhyAttend;
