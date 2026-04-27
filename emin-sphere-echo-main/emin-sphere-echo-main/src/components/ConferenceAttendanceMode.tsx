import React from 'react';
import { MapPin, Laptop } from 'lucide-react';

const ConferenceAttendanceMode = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Venue & Attendance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* In-Person Box */}
          <div className="bg-[#f5f3eb] text-[#0b192c] p-8 border-2 border-[#040812] border-l-[6px] border-l-[#0b192c] shadow-[8px_8px_0px_#040812]">
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <MapPin className="mr-3 text-[#0b192c]" size={28} />
              In-Person Participation
            </h3>

            <div className="space-y-1 mb-6">
              <p className="font-mono text-sm font-semibold text-[#1e293b]"><strong>IMFC Kenya Headquarters</strong></p>
              <p className="font-mono text-sm font-semibold text-[#1e293b]">Kianda Kibera 42</p>
              <p className="font-mono text-sm font-semibold text-[#1e293b]">P.O. Box 410-00605</p>
              <p className="font-mono text-sm font-semibold text-[#1e293b]">Uthiru, Nairobi, Kenya 🇰🇪</p>
            </div>

            <p className="text-sm text-[#334155] leading-relaxed">
              The physical venue provides a structured academic environment for paper presentations, 
              technical sessions, and professional networking. Participants will have the opportunity 
              to engage in direct discussions, panel interactions, and collaborative exchanges.
            </p>
          </div>

          {/* Virtual Box */}
          <div className="bg-[#f5f3eb] text-[#0b192c] p-8 border-2 border-[#040812] border-l-[6px] border-l-[#3b82f6] shadow-[8px_8px_0px_#040812]">
            <h3 className="text-2xl font-bold flex items-center mb-5">
              <Laptop className="mr-3 text-[#0b192c]" size={28} />
              Virtual Participation
            </h3>

            <div className="space-y-1 mb-6">
              <p className="font-mono text-sm font-semibold text-[#1e293b]"><strong>Global Online Access</strong></p>
            </div>

            <p className="text-sm text-[#334155] leading-relaxed mb-3">
              ICMREF-26 offers a fully integrated virtual participation mode to ensure accessibility 
              for international attendees. The conference will be conducted through secure digital 
              platforms enabling live presentations, interactive Q&A sessions, and virtual networking.
            </p>

            <p className="text-sm text-[#334155] leading-relaxed">
              Registered participants will receive official access credentials, session schedules, 
              and participation guidelines prior to the conference.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConferenceAttendanceMode;
