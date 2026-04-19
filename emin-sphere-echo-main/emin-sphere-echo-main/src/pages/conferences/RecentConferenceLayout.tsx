import { useParams, Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { BookOpen, Globe, Award, Users, FileText, Calendar, Lightbulb, MapPin, Mic2, GraduationCap, Download, Star, Hash, ChevronRight, Brain, BarChart2, Leaf, Building2, Shield, Zap } from "lucide-react";
import { recentConferences } from "@/data/recentConferencesData";

const eminsphereExternalUrl = "https://www.eminsphere.com/";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  award: Award,
  users: Users,
  filetext: FileText,
  bookopen: BookOpen,
  lightbulb: Lightbulb,
};

const RecentConferenceLayout = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split('/').pop() || "";
  const finalId = id || pathId;
  const data = finalId ? recentConferences[finalId] : undefined;

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col pt-32 px-4 items-center gap-4 bg-background">
        <Header />
        <h1 className="text-3xl font-display font-bold">Conference Details Updating</h1>
        <p className="text-muted-foreground text-center max-w-md">The information for this conference is currently being synchronized with our central database.</p>
        <Link to="/" className="text-primary hover:text-accent font-semibold px-6 py-2 border rounded-full mt-4">Return Home</Link>
        <div className="mt-auto w-full"><Footer /></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-past-conferences flex flex-col font-body selection:bg-primary/30">
      <Header />
      
      {/* Dynamic Animated Hero Area */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Dynamic Background generated based on ID to look different per route or uniform */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background z-0" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-block mb-6">
            <span className="px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase backdrop-blur-md">
              Conference Portal
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-6 drop-shadow-sm"
          >
            {data.title}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/80 font-body font-semibold max-w-4xl mx-auto mb-8 leading-relaxed"
          >
            {data.subtitle}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 text-foreground/70 mt-6"
          >
             <div className="flex items-center gap-2 bg-card/60 border border-border/50 px-6 py-3 rounded-2xl backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-semibold">{data.dateAndMode}</span>
             </div>
             {data.location && (
               <div className="flex items-center gap-2 bg-card/60 border border-border/50 px-6 py-3 rounded-2xl backdrop-blur-sm">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="font-semibold">{data.location}</span>
               </div>
             )}
             {data.isbn && (
               <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 px-6 py-3 rounded-2xl backdrop-blur-sm">
                  <Hash className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">ISBN: {data.isbn}</span>
               </div>
             )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Areas */}
      <main className="flex-1 w-full relative z-10 -mt-8">
        <div className="max-w-5xl mx-auto px-4 w-full flex flex-col gap-12 pb-24">
          
          {/* About / Description Section */}
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="bg-card/50 backdrop-blur-md border border-border/50 p-8 md:p-12 rounded-3xl shadow-2xl">
            <h3 className="font-display text-3xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              About the Conference
            </h3>
            <div className="text-lg text-foreground/80 leading-relaxed font-body whitespace-pre-wrap">
              {data.description}
            </div>
            {data.downloadLink && (
              <a 
                href={data.downloadLink} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all hover:-translate-y-0.5 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Proceedings
              </a>
            )}
          </motion.div>

          {/* Chief Guest Section */}
          {data.chiefGuest && (
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -m-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {data.chiefGuest.imageUrl ? (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-accent/30 bg-accent/10 shrink-0">
                    <img
                      src={data.chiefGuest.imageUrl}
                      alt={data.chiefGuest.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Star size={40} />
                  </div>
                )}
                <div className="text-center md:text-left">
                  <span className="text-sm font-bold uppercase tracking-widest text-accent mb-2 block">Distinguished Chief Guest</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">{data.chiefGuest.name}</h3>
                  <p className="text-foreground/70 text-lg">{data.chiefGuest.title}</p>
                  <p className="text-muted-foreground">{data.chiefGuest.affiliation}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Keynote Speakers Section */}
          {data.keynoteSpeakers && data.keynoteSpeakers.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full bg-primary/5">
                  <Mic2 className="w-4 h-4" />
                  Featured Speakers
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Keynote Speakers</h3>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Distinguished experts from academia, industry, and global organizations sharing cutting-edge insights.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.keynoteSpeakers.map((speaker, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card/60 hover:bg-card/90 transition-all border border-border/50 p-6 rounded-2xl group hover:shadow-xl hover:-translate-y-1"
                  >
                    {speaker.imageUrl ? (
                      <div className="mb-4 overflow-hidden rounded-xl border border-border/60 bg-muted/20">
                        <img
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          loading="lazy"
                          className="w-full h-48 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                    )}
                    <h4 className="font-display font-bold text-lg text-foreground mb-1">{speaker.name}</h4>
                    <p className="text-sm text-primary/80 font-medium mb-1">{speaker.title}</p>
                    <p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Conference Experts Section */}
          {data.conferenceExperts && data.conferenceExperts.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-accent border border-accent/20 rounded-full bg-accent/5">
                  <Users className="w-4 h-4" />
                  Expert Panel
                </span>
                <h3 className="font-display text-3xl font-bold text-foreground">Conference Experts</h3>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Esteemed experts providing leadership and guidance in fostering meaningful discussions.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.conferenceExperts.map((expert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-secondary/10 hover:bg-secondary/20 transition-all border border-secondary/30 p-6 rounded-2xl group"
                  >
                    {expert.imageUrl ? (
                      <div className="mb-4 overflow-hidden rounded-xl border border-border/60 bg-muted/20">
                        <img
                          src={expert.imageUrl}
                          alt={expert.name}
                          loading="lazy"
                          className="w-full h-40 object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-xl bg-secondary/20 text-secondary-foreground flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7" />
                      </div>
                    )}
                    <h4 className="font-display font-bold text-lg text-foreground mb-1">{expert.name}</h4>
                    <p className="text-sm text-secondary-foreground font-medium mb-1">{expert.title}</p>
                    <p className="text-sm text-muted-foreground">{expert.affiliation}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}


          {/* Conference Technical Tracks Section */}
          {data.tracks && data.tracks.length > 0 && (() => {
            const trackMeta: Record<string, { icon: React.ElementType; desc: string }> = {
              "Artificial Intelligence & Machine Learning": { icon: Brain, desc: "Deep learning, neural networks, and intelligent systems across industries." },
              "Data Science & Big Data Analytics": { icon: BarChart2, desc: "Data mining, predictive analytics, and big data technologies." },
              "Sustainable Computing": { icon: Leaf, desc: "Eco-friendly computing and sustainable technological solutions." },
              "Smart Cities & IoT": { icon: Building2, desc: "Connected systems, IoT architectures, and smart infrastructure." },
              "Cybersecurity & Blockchain": { icon: Shield, desc: "Secure systems, cryptography, and blockchain innovations." },
              "Green Energy Systems": { icon: Zap, desc: "Renewable energy technologies and smart energy management." },
            };
            return (
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card/50 backdrop-blur-md border border-border/50 p-8 md:p-12 rounded-3xl">
                <h3 className="font-display text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Conference Technical Tracks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {data.tracks!.map((track, i) => {
                    const meta = trackMeta[track] || { icon: ChevronRight, desc: "" };
                    const TrackIcon = meta.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex flex-col gap-3 p-5 rounded-2xl bg-muted/20 border border-muted/30 hover:bg-muted/40 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <TrackIcon className="w-5 h-5" />
                        </div>
                        <span className="text-foreground font-semibold text-sm leading-snug">{track}</span>
                        {meta.desc && <p className="text-xs text-muted-foreground leading-relaxed">{meta.desc}</p>}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })()}

          {data.importantDates && data.importantDates.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-accent border border-accent/20 rounded-full bg-accent/5">
                  <Calendar className="w-4 h-4" />
                  Schedule
                </span>
                <h3 className="font-display text-3xl font-bold text-foreground">Important Dates</h3>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Key submission and event deadlines for the conference.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.importantDates.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm"
                  >
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="mt-2 text-base font-bold text-primary">{item.date}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}


          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Objectives or Important Context */}
             {data.objectives && data.objectives.length > 0 && (
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-secondary/20 border border-secondary p-8 rounded-3xl">
                 <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2"><Lightbulb className="text-secondary-foreground" /> Core Objectives</h3>
                 <div className="space-y-4">
                    {data.objectives.map((obj, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-foreground mt-2.5 shrink-0" />
                        <div>
                          <strong className="block text-foreground">{obj.title}</strong>
                          <span className="text-muted-foreground text-sm">{obj.desc}</span>
                        </div>
                      </div>
                    ))}
                 </div>
               </motion.div>
             )}

            {/* Submissions or Contact Box */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-card to-card/50 border border-border p-8 rounded-3xl flex flex-col justify-center items-center text-center">
               <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary">
                 <FileText size={32} />
               </div>
               <h3 className="font-display text-2xl font-bold mb-3">Call for Papers</h3>
               <p className="text-muted-foreground mb-8 line-clamp-3">Join global experts and researchers. Submit your research abstracts today.</p>
               <a
                 href={eminsphereExternalUrl}
                 target="_blank"
                 rel="noreferrer"
                 className="bg-foreground text-background w-full py-3.5 rounded-xl font-bold hover:bg-foreground/90 transition-transform active:scale-95 shadow-xl"
               >
                 Submit Paper
               </a>
            </motion.div>
          </div>

          {/* Why Attend Section */}
          {data.whyAttend && data.whyAttend.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-display text-3xl font-bold text-center mb-10 w-full">Why Attend {data.title}?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.whyAttend.map((item, i) => {
                  const Icon = iconMap[item.icon?.toLowerCase()] || Globe;
                  return (
                    <div key={i} className="bg-card/40 hover:bg-card/80 transition-colors border border-border p-6 rounded-2xl flex gap-5 group">
                      <div className="bg-primary/10 text-primary p-3 rounded-xl h-fit group-hover:scale-110 transition-transform">
                         <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* Awards & Recognition Section */}
          {data.awards && data.awards.length > 0 && (
            <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-accent border border-accent/20 rounded-full bg-accent/5">
                  <Award className="w-4 h-4" />
                  Excellence
                </span>
                <h3 className="font-display text-3xl font-bold text-foreground">Awards & Recognition</h3>
                <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Recognizing outstanding contributions in research and innovation.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.awards.map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-accent/5 to-accent/15 border border-accent/20 p-6 rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                      <Award className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-foreground mb-2">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Publication and Indexing */}
          {data.publications && data.publications.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[hsl(220,50%,15%)] border border-primary/30 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -m-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-50" />
               <h3 className="font-display text-3xl font-bold text-white mb-8 relative z-10">Publication & Indexing</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                 {data.publications.map((pub, i) => (
                   <div key={i} className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                     {pub.logoUrl ? (
                       <img src={pub.logoUrl} alt={pub.title} className="mb-4 h-12 w-auto object-contain" loading="lazy" />
                     ) : (
                       <BookOpen className="text-accent mb-4 w-8 h-8" />
                     )}
                     <h4 className="text-white font-bold mb-2">{pub.title}</h4>
                     <p className="text-white/60 text-sm">{pub.desc}</p>
                   </div>
                 ))}
               </div>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RecentConferenceLayout;
