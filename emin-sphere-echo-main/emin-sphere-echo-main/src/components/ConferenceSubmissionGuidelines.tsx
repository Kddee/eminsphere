import React from 'react';
import { FileText, AlignLeft, Upload, UserCheck, ShieldBan, PercentSquare, Ban, Scale, Users, EyeOff, Star, CheckCheck, Book, Copyright, Handshake } from 'lucide-react';

const ConferenceSubmissionGuidelines = () => {
  return (
    <div className="bg-[#0b192c] py-20 px-4 space-y-24" style={{
      backgroundImage: 'radial-gradient(rgba(245, 243, 235, 0.08) 1.5px, transparent 1.5px)',
      backgroundSize: '24px 24px'
    }}>
      {/* Paper Submission Guidelines */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Paper Submission Guidelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FileText size={28} className="text-[#ffc107]" />, title: "Originality & Prior Publication", desc: "Submitted manuscripts must present original and unpublished work. Papers under consideration for publication in other conferences or journals are not eligible. All submissions should clearly demonstrate novelty and academic contribution." },
            { icon: <AlignLeft size={28} className="text-[#ffc107]" />, title: "Manuscript Preparation", desc: "Authors are required to prepare manuscripts following standard academic formatting guidelines such as IEEE or APA. Submissions should be well-structured, clearly written, and typically within a length of 6–10 pages, including references and figures." },
            { icon: <Upload size={28} className="text-[#ffc107]" />, title: "Submission Procedure", desc: "All papers must be submitted electronically through the official conference submission system. Manuscripts should be provided in PDF format to ensure consistency during the review process." },
            { icon: <UserCheck size={28} className="text-[#ffc107]" />, title: "Author Responsibilities", desc: "Authors are responsible for the accuracy, originality, and ethical integrity of their work. Proper citation of sources, adherence to academic standards, and compliance with plagiarism policies are mandatory." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">{item.icon}</div>
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Plagiarism & Academic Integrity Policy */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Plagiarism & Academic Integrity Policy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldBan size={28} className="text-[#ffc107]" />, title: "Academic Integrity", desc: "ICMREF-26 is committed to maintaining high standards of academic integrity. All submissions must represent original work and comply with established ethical guidelines for scholarly publishing." },
            { icon: <PercentSquare size={28} className="text-[#ffc107]" />, title: "Similarity Assessment", desc: "Submitted manuscripts may be screened using plagiarism detection tools. Similarity levels will be evaluated in context, considering proper citation, reuse of standard terminology, and methodological references." },
            { icon: <Ban size={28} className="text-[#ffc107]" />, title: "Policy Enforcement", desc: "Submissions identified with significant overlap or unethical practices may be rejected during the review process. Authors may be requested to revise and address concerns where appropriate." },
            { icon: <Scale size={28} className="text-[#ffc107]" />, title: "Ethical Compliance", desc: "Authors are expected to follow internationally recognized academic practices, including proper citation, acknowledgment of sources, and transparency in research methodology and data reporting." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">{item.icon}</div>
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Peer Review Process */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Peer Review Process
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Users size={28} className="text-[#ffc107]" />, title: "Qualified Reviewers", desc: "All submissions are evaluated by qualified reviewers with relevant expertise in the respective subject domains, drawn from academia and industry." },
            { icon: <EyeOff size={28} className="text-[#ffc107]" />, title: "Double-Blind Review", desc: "The conference follows a double-blind peer review process, ensuring that both authors and reviewers remain anonymous to promote fairness and impartial evaluation." },
            { icon: <Star size={28} className="text-[#ffc107]" />, title: "Evaluation Criteria", desc: "Submissions are assessed based on originality, technical quality, clarity of presentation, methodological rigor, and relevance to the conference themes." },
            { icon: <CheckCheck size={28} className="text-[#ffc107]" />, title: "Decision Process", desc: "Final acceptance decisions are made by the Program Committee based on reviewer reports, ensuring consistency with academic standards and conference objectives." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">{item.icon}</div>
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Publication & Ethics Policy */}
      <section className="max-w-6xl mx-auto pb-10">
        <h2 className="text-2xl md:text-3xl font-black text-[#0b192c] bg-[#f5f3eb] inline-block px-7 py-3 border-l-8 border-[#ffc107] shadow-[6px_6px_0px_#040812] mb-12 uppercase tracking-wide">
          Publication & Ethics Policy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Book size={28} className="text-[#ffc107]" />, title: "Publication Policy", desc: "Accepted and registered papers will be included in the official conference proceedings. Selected papers may be considered for further evaluation in appropriate publication venues, subject to editorial policies and scope." },
            { icon: <Copyright size={28} className="text-[#ffc107]" />, title: "Copyright & Usage", desc: "Authors retain the rights to their work while granting the conference permission to publish, distribute, and archive the accepted manuscripts for academic purposes." },
            { icon: <Scale size={28} className="text-[#ffc107]" />, title: "Research Ethics", desc: "All research must comply with established ethical standards, including appropriate approvals for studies involving human participants, animals, or sensitive data." },
            { icon: <Handshake size={28} className="text-[#ffc107]" />, title: "Conflict of Interest", desc: "Authors, reviewers, and committee members are required to disclose any potential conflicts of interest to ensure transparency and unbiased evaluation." },
          ].map((item, idx) => (
             <div key={idx} className="bg-[#f5f3eb] p-8 border-2 border-[#040812] border-t-[6px] border-t-[#ffc107] shadow-[8px_8px_0px_#040812] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#040812] transition-all duration-200">
               <div className="bg-[#0b192c] w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_#040812] mb-6">{item.icon}</div>
               <h3 className="text-xl font-bold text-[#0b192c] mb-3">{item.title}</h3>
               <p className="text-[#334155] text-sm font-medium leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ConferenceSubmissionGuidelines;
