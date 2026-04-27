import React from 'react';

const ConferencePublication = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#3f51b5] border-l-4 border-[#00bcd4] pl-4 uppercase tracking-wider">
            Publication & Indexing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] border-t-4 border-[#3f51b5] hover:-translate-y-2 transition-transform">
            <img src="https://i.postimg.cc/VvnzKNKj/image.png" alt="ISBN" className="h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#3f51b5] mb-3">ISBN Conference Proceedings</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All accepted and registered papers will be published in the official conference proceedings with a valid 
              <strong className="text-gray-800"> ISBN Number</strong>, ensuring global visibility, citation, and academic recognition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] border-t-4 border-[#3f51b5] hover:-translate-y-2 transition-transform">
            <img src="https://i.postimg.cc/hPVGr2wS/image.png" alt="Scopus" className="h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#3f51b5] mb-3">Scopus Indexed Journals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Extended versions of selected high-quality papers may be recommended for publication in 
              <strong className="text-gray-800"> Scopus indexed journals</strong>, subject to journal scope, editorial decision, and peer-review.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] border-t-4 border-[#3f51b5] hover:-translate-y-2 transition-transform">
            <img src="https://i.postimg.cc/0NX5QF6x/image.png" alt="Web of Science" className="h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#3f51b5] mb-3">Web of Science Option</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Selected papers may be considered for submission to journals indexed in 
              <strong className="text-gray-800"> Web of Science</strong>, based on quality, originality, and editorial evaluation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_8px_25px_rgba(0,0,0,0.08)] border-t-4 border-[#3f51b5] flex flex-col justify-center hover:-translate-y-2 transition-transform">
            <h3 className="text-lg font-bold text-[#3f51b5] mb-3">DOI & Digital Access</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Each published paper may be assigned a <strong className="text-gray-800"> Digital Object Identifier (DOI)</strong> to ensure permanent accessibility and citation tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencePublication;
