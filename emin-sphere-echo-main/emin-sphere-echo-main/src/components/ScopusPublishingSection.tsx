import { Zap, BookOpen } from "lucide-react";

const ScopusPublishingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Participate in ICRCET & Get Published in Scopus-Indexed Journals
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We are proud to offer an exceptional opportunity for authors. Selected high-quality papers presented during the conference will be processed for publication in Scopus-indexed journals. This ensures that your research receives global visibility and academic recognition through one of the most respected indexing platforms in the world.
          </p>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-cyan-700 mb-6">Proof of Scopus Indexing</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-cyan-200 flex items-center justify-center h-24">
                  <div className="text-center">
                    <BookOpen className="text-cyan-600 mx-auto mb-2" size={28} />
                    <p className="text-xs text-gray-600 font-semibold">Journal {i}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mt-6">
              Our partner journals have been officially indexed in Scopus. Below are some of the journals where selected papers from past conferences have been published.
            </p>
          </div>

          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded transition-all shadow-md">
            Learn More About Publication
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScopusPublishingSection;
