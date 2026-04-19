import { motion } from "framer-motion";
import { Images, ExternalLink, Calendar, Users2 } from "lucide-react";

interface GlimpseGallery {
  id: string;
  title: string;
  date: string;
  description?: string;
  viewMoreLink?: string;
  images: string[];
}

const galleries: GlimpseGallery[] = [
  {
    id: "icqadts-2026",
    title: "International Conference on Quantum AI & Digital Twin Systems (ICQADTS-2026)",
    date: "14 June 2026",
    description: "Featured highlights from the session on Quantum Intelligent Infrastructures and Autonomous Systems.",
    images: [
      "https://static.wixstatic.com/media/30814e_aa5619b82c7c450688561ea1aaf6094b~mv2.png",
      "https://static.wixstatic.com/media/30814e_8c54d1924aba40088caea88bc95dd1f1~mv2.png",
      "https://static.wixstatic.com/media/30814e_a0bcfce7303842b0b1088e7e959df749~mv2.png",
      "https://static.wixstatic.com/media/30814e_6efd9af6f58d41d1a813fd517f039b4e~mv2.png",
      "https://static.wixstatic.com/media/30814e_09571674cb8b483fa4476eccf53d73d8~mv2.png",
      "https://static.wixstatic.com/media/30814e_db36abbe77f24a72b15ee08927f1d62e~mv2.png",
      "https://static.wixstatic.com/media/30814e_a81e3ce5a5ad4f39a5827cc6f3757f2c~mv2.png",
      "https://static.wixstatic.com/media/30814e_605ee2e7551548308a37980f16e3f05c~mv2.png",
      "https://static.wixstatic.com/media/30814e_25032ed10f6040e4b648c22f8e779cff~mv2.png",
      "https://static.wixstatic.com/media/30814e_f38207f174624162a70afa18615cb002~mv2.png",
    ],
  },
  {
    id: "icaidss-26",
    title: "International Conference on Artificial Intelligence, Data Science & Sustainable Systems (ICAIDSS-26)",
    date: "29 March 2026",
    description: "Visual highlights from our global virtual summit focusing on next-gen AI and sustainable computational models.",
    images: [
      "https://static.wixstatic.com/media/30814e_e2ab8291c65443b08037daea7ef6a78d~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_6a64ae4eab594e29acaa5124ade0d3f7~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_d917132ef2df4159b65db1a83a1c9bc2~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_91552c0f2ecb4d3ca64d3150790b5f6b~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_9a7ec9347a0a41b799a175f951ce48fe~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_f202f06835db41d88aa73f77f3c7b9de~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_dc40a06ecd3044baa2cf785c5f8bfe1e~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_174db642e9584aa784d19c461ae29bad~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_be514a5a7b134873aec6cd5aa0de916f~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_b9b43af3aa7e40768b779058320b59b9~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_199d91bd8cb848539fc8f0e37c18b155~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_f86882c18c1444b1a13616a827c6775f~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_745ecb8123d14e4c9405418d54492332~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_23a41863b4d346e4852747feb1e9f896~mv2.jpeg",
    ],
  },
  {
    id: "icaeset-2026",
    title: "International Conference on Advanced Engineering Systems & Emerging Technologies (ICAESET-2026)",
    date: "15 March 2026",
    description: "Insights from the engineering excellence forum showcasing advanced technological implementations.",
    images: [
      "https://static.wixstatic.com/media/30814e_33d4e51ec9b548869dc79ff1d169efaa~mv2.png",
      "https://static.wixstatic.com/media/30814e_5e715a3196b14d579d140d5b3eb1ddca~mv2.png",
      "https://static.wixstatic.com/media/30814e_93a8f9332aef4c4aa7fd4f0e49546811~mv2.png",
      "https://static.wixstatic.com/media/30814e_a9f31589b453419d80070cb9359201c8~mv2.png",
      "https://static.wixstatic.com/media/30814e_d86d730b88634ffd973c45f6ce16ebeb~mv2.png",
      "https://static.wixstatic.com/media/30814e_d7cee65f8eb14561ad4ef13530292baa~mv2.png",
    ],
  },
  {
    id: "icnse-26",
    title: "International Conference on Networking & Software Engineering (ICNSE-26)",
    date: "01 March 2026",
    description: "Highlights from our networking and software infrastructure global symposium.",
    images: [
      "https://static.wixstatic.com/media/502b14_a0dbb2f7139047a08a766656bd0f7454~mv2.png",
      "https://static.wixstatic.com/media/502b14_9126573200ea4347ad45216bf5d5d0cc~mv2.png",
      "https://static.wixstatic.com/media/502b14_09e44ae6e60446d5a50f320be751f625~mv2.png",
      "https://static.wixstatic.com/media/502b14_3795a6d8c1e04913be8f9f278820b1f5~mv2.png",
      "https://static.wixstatic.com/media/502b14_a1d2cd32d08743ca8aff3aef4fa76139~mv2.png",
      "https://static.wixstatic.com/media/502b14_4314189cd9e44cd680613f130b26535f~mv2.png",
      "https://static.wixstatic.com/media/502b14_2202fa7fa65c48fbb7c21fedceb02752~mv2.png",
      "https://static.wixstatic.com/media/502b14_21b36ee9a54e4019ad6c50441ba55b96~mv2.png",
    ],
  },
  {
    id: "ictet-26",
    title: "International Conference on Cutting-Edge Technologies (ICTET-26)",
    date: "15 February 2026",
    description: "Multidisciplinary breakthroughs and innovation showcases from our flagship 2026 spring gathering.",
    images: [
      "https://static.wixstatic.com/media/502b14_edb34fd966bd47828bf664f663abdbf9~mv2.png",
      "https://static.wixstatic.com/media/502b14_219e55d10fce4c84a137a2237cee8ea9~mv2.png",
      "https://static.wixstatic.com/media/502b14_2eaed030e42b41cd83cd53cdfd2e7c08~mv2.png",
      "https://static.wixstatic.com/media/502b14_60fdae1f90e94ac9bc4c901d9d3fab98~mv2.png",
      "https://static.wixstatic.com/media/502b14_ec71360407204e648fac1ff35d41c712~mv2.png",
      "https://static.wixstatic.com/media/502b14_c5b24e50b1a04652a81e622dfbc4101f~mv2.png",
      "https://static.wixstatic.com/media/502b14_0d1fcbd0b5824e94ac5ff878f38b3d15~mv2.png",
      "https://static.wixstatic.com/media/502b14_1ed526bb46584faba5572a59d62cc05c~mv2.png",
      "https://static.wixstatic.com/media/502b14_46cb554fd614451f977bb8e91e7ff44e~mv2.png",
      "https://static.wixstatic.com/media/502b14_8d85b964b4aa4760a4372158c98302bb~mv2.png",
      "https://static.wixstatic.com/media/502b14_a16af0a1732a45fcac7ecb2cd354d5c7~mv2.png",
    ],
  },
  {
    id: "icmess-26",
    title: "International Conference on Management, Economics & Social Sciences (ICMESS-26)",
    date: "08 February 2026",
    description: "Multi-disciplinary sessions exploring global economic trends and social innovation.",
    images: [
      "https://static.wixstatic.com/media/502b14_5a3559a66dad443499f4430147918d8f~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_9fc2a6030a854ee88ede55f78347f648~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_6928637d5b1d4474be607b49ff5bdee7~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_aca66e3bfac7488caed8b0b79f0d6bc4~mv2.jpeg",
      "https://static.wixstatic.com/media/502b14_03c6b197c8b54e999e2d052f9e59ef74~mv2.jpeg",
    ],
  },
  {
    id: "icasit-26",
    title: "International Conference on Advanced Science & Information Technology (ICASIT-26)",
    date: "25 January 2026",
    description: "Cutting-edge research highlights from the Intersection of Data Science and Information Systems.",
    images: [
      "https://static.wixstatic.com/media/502b14_0f3695fe750741d6915be39ecbc78771~mv2.png",
      "https://static.wixstatic.com/media/502b14_28332020eeb5428a8ca85edaaec7194a~mv2.png",
      "https://static.wixstatic.com/media/502b14_bb554e957fb24fb9b5f118f811abfd68~mv2.png",
      "https://static.wixstatic.com/media/502b14_345e8e77bdf74532b73e0ac84c919a00~mv2.png",
      "https://static.wixstatic.com/media/502b14_a47a665d2b5a4367bc3b06c166419cb5~mv2.png",
    ],
  },
  {
    id: "icmdia-25",
    title: "International Conference on Multidisciplinary Intelligence & Advancement (ICMDIA-25)",
    date: "14 December 2025",
    description: "Capturing the final major innovation summit of 2025 with diverse technical session highlights.",
    images: [
      "https://static.wixstatic.com/media/30814e_ecea041355d84679ab1367bd82fa0ed5~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_67e286d210b64a398b3806961cca6c6a~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_eba60e1f56db43b69fd8f2080069ee1a~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_e992df6206524524bb508a6dd659a3e7~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_bce969d8af69435e8b263b4cbc640dcb~mv2.jpeg",
    ],
  },
  {
    id: "icetsgc-25",
    title: "International Conference on Emerging Tech & Global Collaboration (ICETSGC-25)",
    date: "16 November 2025",
    description: "Exploring sustainable technologies and inter-continental research partnerships.",
    images: [
      "https://static.wixstatic.com/media/30814e_f60549ac90534778a5183cc470411dfd~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_ea118ea29d6e4d09a3ff77e169672cac~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_9d7c4831fd7b4f57b8ad74c1ef6df79c~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_d97a06bbc3254c8588a095460dbe5b0d~mv2.jpeg",
      "https://static.wixstatic.com/media/30814e_0ec2ecd9bff5488cbf0923b412f691c6~mv2.jpeg",
    ],
  },
  {
    id: "iccinet-25",
    title: "International Conference on Computational Intelligence & Networks (ICCINET-25)",
    date: "25 October 2025",
    description: "Foundational sessions on neural computation and distributed network intelligence.",
    images: [
      "https://static.wixstatic.com/media/30814e_db76cb11be6e4658921b1416c4f002d1~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_77308176719a49509143aca1d24d00c7~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_df640f2be7ec4053a6b635de436ef5ec~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_e2ac2056f4624e38970b854d10ce5181~mv2.jpg",
      "https://static.wixstatic.com/media/30814e_ddff232a55e840dc9542351e52688824~mv2.jpg",
    ],
  },
];

const MasonryGallery = ({ images, title }: { images: string[]; title: string }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: (i % 6) * 0.05 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-xl border border-slate-200 bg-slate-50 break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }} />
          
          <img 
            src={img} 
            alt={`${title} highlight ${i+1}`} 
            className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          
          <div className="absolute inset-0 bg-[#0f1b35]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <ExternalLink className="w-4 h-4 text-[#0f1b35]" />
             </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ConferenceGlimpses = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-wider">
              <Images className="w-3 h-3" />
              Global Research Archives
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f1b35] leading-[1.1]">
              Impact &amp; <span className="text-[#2563eb]">International</span> Glimpses
            </h2>
            <div className="h-1 w-20 bg-[#2563eb] mx-auto rounded-full mt-4" />
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed pt-2">
              Showcasing visual highlights from our worldwide scholarly network, 
              spanning continents and uniting the brightest minds in technical innovation.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {galleries.map((gallery) => (
            <div key={gallery.id} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f1b35] leading-snug">
                    {gallery.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-3 font-medium">
                    {gallery.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 mt-5">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5 text-[#2563eb]" />
                       {gallery.date}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest">
                      <Users2 className="w-3.5 h-3.5 text-[#2563eb]" />
                      Global Participation
                    </div>
                  </div>
                </div>
                
                {gallery.viewMoreLink && (
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={gallery.viewMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs font-bold text-[#2563eb] bg-white border border-slate-200 px-6 py-3 rounded-xl hover:border-[#2563eb] hover:bg-blue-50/30 transition-all shadow-sm"
                  >
                    Launch Full Gallery <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>

              <MasonryGallery images={gallery.images} title={gallery.title} />
            </div>
          ))}
        </div>

        <div className="mt-28 p-12 rounded-[2.5rem] bg-[#0f1b35] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
           <p className="text-blue-300 font-black uppercase tracking-[0.2em] text-[10px] mb-4 relative z-10">Trusted Worldwide</p>
           <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-8 relative z-10">Celebrating Research Achievement</h4>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
              {[
                { label: "Conference Photos", val: "2500+" },
                { label: "Speakers Captured", val: "400+" },
                { label: "Technical Sessions", val: "1200+" }
              ].map(stat => (
                <div key={stat.label}>
                   <div className="text-2xl md:text-3xl font-black text-white">{stat.val}</div>
                   <div className="text-[10px] text-blue-200/50 font-bold uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default ConferenceGlimpses;
