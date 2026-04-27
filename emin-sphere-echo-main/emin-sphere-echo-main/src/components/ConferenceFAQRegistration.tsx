import React from 'react';
import { UserPlus, Briefcase, GraduationCap, Globe, Mail, MapPin, Calendar, CheckCircle2, FileCheck, Clock } from 'lucide-react';

const ConferenceFAQRegistration = () => {
  return (
    <div className="bg-[#0b192c] py-20 px-4 space-y-24" style={{
      backgroundImage: 'radial-gradient(rgba(245, 243, 235, 0.08) 1.5px, transparent 1.5px)',
      backgroundSize: '24px 24px'
    }}>
      
      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Is the conference conducted in hybrid mode?", desc: "Yes, ICMREF-26 will be conducted in both in-person (Nairobi, Kenya) and virtual modes to facilitate broader participation." },
            { title: "Will all submitted papers be published?", desc: "Only papers that are accepted through the peer review process and successfully registered will be included in the conference proceedings." },
            { title: "Are participation certificates provided?", desc: "Certificates of participation/presentation will be issued to registered authors and attendees following the conference." },
            { title: "Are submissions checked for plagiarism?", desc: "Yes, submissions may be screened using standard plagiarism detection tools as part of the review and quality assurance process." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Registration & Fees Form */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Registration & Categories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <GraduationCap size={28} className="text-[#ffc107]" />, title: "Students", desc: "Discounted registration available for students with valid ID." },
            { icon: <Briefcase size={28} className="text-[#ffc107]" />, title: "Academicians", desc: "Standard registration for faculty members and researchers." },
            { icon: <UserPlus size={28} className="text-[#ffc107]" />, title: "Industry Professionals", desc: "Professional category for industry participants and corporate delegates." },
            { icon: <Globe size={28} className="text-[#ffc107]" />, title: "Virtual Participation", desc: "Online presentation and attendance options available worldwide." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">{item.icon}</div>
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Important Dates */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Important Dates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FileCheck size={32} className="text-white" />, title: "Paper Submission", date: "15 MAY 2026", color: "from-blue-600 to-blue-700" },
            { icon: <CheckCircle2 size={32} className="text-white" />, title: "Acceptance Notification", date: "22 MAY 2026", color: "from-emerald-600 to-emerald-700" },
            { icon: <Clock size={32} className="text-white" />, title: "Final Camera-Ready Submission", date: "30 MAY 2026", color: "from-orange-600 to-orange-700" },
            { icon: <Calendar size={32} className="text-white" />, title: "Conference Date", date: "07 JUNE 2026", color: "from-purple-600 to-purple-700" },
          ].map((item, idx) => (
             <div key={idx} className={`bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-[8px_8px_0px_#040812] border-2 border-[#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200 group`}>
               <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:bg-white/30 transition-all">{item.icon}</div>
               <p className="text-white/90 font-semibold text-sm uppercase tracking-wide mb-3">{item.title}</p>
               <p className="text-white font-black text-2xl tracking-wider">{item.date}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section className="max-w-6xl mx-auto pb-10">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
          <div className="bg-gradient-to-br from-cyan-500 to-teal-600 p-8 rounded-xl border-2 border-[#040812] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200 group">
            <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:bg-white/30 transition-all">
              <Mail size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Email</h3>
            <p className="text-white/90 font-semibold text-lg">info@eminsphere.com</p>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-xl border-2 border-[#040812] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200 group">
            <div className="bg-white/20 w-16 h-16 flex items-center justify-center rounded-lg mb-6 group-hover:bg-white/30 transition-all">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Location</h3>
            <p className="text-white/90 font-semibold text-lg">Nairobi, Kenya 🇰🇪</p>
          </div>
        </div>
      </section>

      {/* Footer CTA Override */}
      <section className="text-center pb-20 pt-10 border-t-2 border-dashed border-gray-600/30">
        <h2 className="text-4xl font-black text-[#f5f3eb] mb-4">Join the Future of Tech</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">Present your research, connect globally, and explore future technologies.</p>
        <a href="https://forms.gle/oY44ySZUNz3puve4A" target="_blank" rel="noopener noreferrer" 
           className="inline-block px-10 py-4 bg-[#ffc107] text-[#0b192c] border-2 border-[#ffc107] font-black uppercase shadow-[6px_6px_0px_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#000] transition-all">
          Submit Paper / Register
        </a>
      </section>

    </div>
  );
};

export default ConferenceFAQRegistration;
