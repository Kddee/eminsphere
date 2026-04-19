import { Award, Globe2, BookOpenCheck } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-100">
      <div className="px-4 md:px-6">

        <h2 className="text-3xl font-bold font-poppins text-darkNeutral mb-8 pb-2 inline-block border-b-2 border-secondaryTeal uppercase tracking-wide">
          Why Attend Eminsphere?
        </h2>

        <div className="flex flex-col gap-6">
           <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-ctaBlue flex items-center justify-center flex-shrink-0 mt-1">
                 <Globe2 className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-lg font-bold text-darkNeutral font-poppins mb-2">Unmatched Global Networking</h4>
                 <p className="text-sm text-gray-500 leading-relaxed font-medium">Build meaningful connections with international academics, researchers from top-funded labs, and executives from world-leading tech corporations. Meet the peers who will review your next major grant.</p>
              </div>
           </div>

           <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-teal-100 text-secondaryTeal flex items-center justify-center flex-shrink-0 mt-1">
                 <BookOpenCheck className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-lg font-bold text-darkNeutral font-poppins mb-2">Guaranteed Indexing Post-Approval</h4>
                 <p className="text-sm text-gray-500 leading-relaxed font-medium">All approved and presented full papers are funneled directly into high-impact journals indexed by Scopus, Web of Science, and Springer. We handle the formatting friction.</p>
              </div>
           </div>

           <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-lg bg-orange-100 text-accentOrange flex items-center justify-center flex-shrink-0 mt-1">
                 <Award className="w-6 h-6" />
              </div>
              <div>
                 <h4 className="text-lg font-bold text-darkNeutral font-poppins mb-2">Prestigious Certifications</h4>
                 <p className="text-sm text-gray-500 leading-relaxed font-medium">Receive internationally recognized verifiable digital certificates for presenting your research, proving your presentation credibilities for academic promotions globally.</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
