import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const MissionUpdate = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold font-poppins text-darkNeutral mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accentOrange" /> Mission update
            </h3>
            
            <p className="text-gray-600 font-medium mb-4 leading-relaxed font-sans text-[15px]">
              Despite ongoing global challenges, our mission remains unchanged—to connect you with relevant conferences worldwide, ensuring your research journey continues without disruption.
            </p>
            <p className="text-gray-600 font-medium mb-6 leading-relaxed font-sans text-[15px]">
              At Eminsphere, you can get authentic information about various upcoming conferences hosted worldwide. International conferences offer multiple opportunities to stay updated on changing trends, the latest technological developments, major breakthroughs, and global achievements in your field. Such upcoming conferences are grounds for collaboration with experts and esteemed researchers. Iteracting with these industry delegates opens doors of unimaginable opportunities and learning facilities.
            </p>
            
            <div className="flex gap-4">
              <Link 
                to="/about" 
                className="px-6 py-2.5 rounded text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{ background: "linear-gradient(90deg, #FF9766 0%, #FF5F62 100%)" }}
              >
                Read More
              </Link>
              <Link 
                to="/add-event" 
                className="px-6 py-2.5 rounded text-sm font-bold text-secondaryTeal border border-secondaryTeal hover:bg-gray-50 transition-colors"
              >
                Promote Event
              </Link>
            </div>
          </div>

          {/* Add a generic layout element to match visual weight if target had an image, otherwise just spacing */}
          <div className="hidden md:block flex-1">
            <div className="w-full h-full min-h-[300px] rounded-xl bg-gray-50 border border-gray-100 p-8 flex flex-col justify-center items-center text-center">
                <img src="/assets/company logo .png" alt="Eminsphere logo" className="max-w-[200px] mb-6 opacity-30 grayscale" />
                <h4 className="text-xl font-bold font-poppins text-gray-400">Eminsphere Global Platform</h4>
                <p className="text-sm text-gray-400 mt-2">Connecting Minds, Accelerating Innovation</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionUpdate;
