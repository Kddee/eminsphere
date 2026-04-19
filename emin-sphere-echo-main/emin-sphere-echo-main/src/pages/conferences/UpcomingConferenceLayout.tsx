import { Link, useLocation, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Globe,
  MapPin,
  Sparkles,
} from "lucide-react";
import { recentConferences } from "@/data/recentConferencesData";
import { upcomingConferences } from "@/data/eminsphereData";

const sectionTitleClass = "text-xl md:text-2xl font-display font-bold text-cyan-400";
const sectionLeadClass = "max-w-5xl text-sm md:text-base leading-7 text-slate-200/85";
const icqadtsAssetBase = "/assets/ICQADTS-2026%20_%20Eminsphere_files";
const icqadtsAsset = (fileName: string) => `${icqadtsAssetBase}/${encodeURIComponent(fileName)}`;
const icatesAssetBase = "/assets/ICATES-26%20_%20Eminsphere_files";
const icatesAsset = (fileName: string) => `${icatesAssetBase}/${encodeURIComponent(fileName)}`;
const eminsphereExternalUrl = "https://www.eminsphere.com/";

const heroBannerImage = icqadtsAsset("30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif");

const fallbackSpeakerImage = icqadtsAsset("30814e_01571faffb8f491e9d9719a975bdbc88~mv2.avif");

const publicationCards = [
  {
    title: "ISBN Conference Proceedings",
    description:
      "All accepted and registered papers will be published in the official conference proceedings with a valid ISBN Number. This ensures proper academic recognition, citation, and international accessibility of the research work.",
  },
  {
    title: "Scopus Indexing Opportunity",
    description:
      "Selected high-quality and extended papers will be considered for publication in Scopus indexed journals, subject to journal scope, editorial policy, and an additional peer-review process.",
  },
  {
    title: "Web of Science Indexing",
    description:
      "Outstanding research contributions may be recommended for publication in journals indexed in the Web of Science database after editorial review and quality evaluation.",
  },
  {
    title: "Quality Peer Review Process",
    description:
      "All submissions will undergo a double-blind peer-review process conducted by an international panel of researchers, academicians, and industry experts to ensure high scientific quality, originality, and relevance.",
  },
];

const trackCards = [
  {
    title: "Quantum Machine Intelligence",
    bullets: ["Quantum-enhanced optimization algorithms", "Variational circuits and hybrid learning", "Quantum data encoding strategies"],
  },
  {
    title: "Autonomous Digital Twin Systems",
    bullets: ["Self-evolving simulation environments", "Real-time data synchronization models", "Industrial and smart infrastructure twins"],
  },
  {
    title: "Cyber-Physical Intelligent Systems",
    bullets: ["Embedded AI architectures", "Edge and fog computing intelligence", "Smart sensing and actuation systems"],
  },
  {
    title: "AI for Sustainable Systems",
    bullets: ["Energy-efficient computing frameworks", "Climate-aware AI models", "Green and sustainable data centers"],
  },
  {
    title: "Secure & Post-Quantum Computing",
    bullets: ["Quantum-resistant cryptographic techniques", "Secure distributed architectures", "Blockchain-enabled trust systems"],
  },
  {
    title: "Human-Centric Intelligent Systems",
    bullets: ["Explainable and interpretable AI", "Human-AI collaboration models", "Brain-computer interface systems"],
  },
];

const methodologyPoints = [
  "Evaluation based on originality, technical rigor, and research contribution.",
  "Assessment of methodological soundness and reproducibility.",
  "Relevance to emerging technological domains.",
  "Clarity, structure, and presentation quality.",
];

const ethicsPoints = [
  "Strict plagiarism checks prior to review process.",
  "Mandatory disclosure of any AI-assisted content generation.",
  "Prohibition of simultaneous submissions to multiple venues.",
  "Ethical compliance with data usage, citations, and authorship practices.",
];

const delegateCards = [
  { name: "Andreza Malena Guedes da Costa Silva", affiliation: "PM", location: "Brazil" },
  { name: "Fatimah Alneel", affiliation: "The University of Arizona", location: "United States" },
  { name: "Samsar Naouel", affiliation: "Faculty of Medicine, Oran", location: "Algeria" },
  { name: "Peyelinga Ndangiato Jomplin", affiliation: "Privé", location: "Algeria" },
  { name: "Marghescu Cristina-Florentina", affiliation: "University Politehnica of Bucharest", location: "Romania" },
  { name: "Diakite Samba Kani", affiliation: "Ministry of Environment & Sustainable Development", location: "Guinea" },
  { name: "James Abdul Malik", affiliation: "Academy for Cultural Diplomacy", location: "Germany" },
  { name: "Khadran Mohammed A Alsahaimi", affiliation: "Jamia Hamdard", location: "Saudi Arabia" },
];

const upcomingFallback = (finalId: string) => upcomingConferences[finalId];
const upcomingAliasMap: Record<string, string> = {
  "copy-of-icmref-26": "icaits-26",
  "copy-of-icaits-26": "icates-26",
};

const SpeakerCard = ({
  name,
  title,
  affiliation,
  imageUrl,
}: {
  name: string;
  title: string;
  affiliation: string;
  imageUrl?: string;
}) => {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-sm"
    >
      <div className="rounded-xl bg-slate-950/60 p-3">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-40 w-full rounded-lg object-cover object-top" loading="lazy" />
        ) : (
          <div className="flex h-40 w-full items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 via-slate-900 to-slate-700 text-4xl font-bold text-cyan-300">
            {initials}
          </div>
        )}
      </div>
      <div className="px-1 pb-2 pt-3 text-center">
        <h3 className="text-base font-semibold text-cyan-300">{name}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-200/85">{title}</p>
        <p className="text-sm leading-6 text-slate-400">{affiliation}</p>
      </div>
    </motion.article>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <div className="flex items-center gap-3">
      <span className="h-10 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
      <h2 className={sectionTitleClass}>{title}</h2>
    </div>
    {subtitle ? <p className="mt-4 max-w-4xl text-sm md:text-base leading-7 text-slate-200/65">{subtitle}</p> : null}
  </div>
);

const UpcomingConferenceLayout = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const pathId = location.pathname.split("/").pop() || "";
  const rawId = id || pathId;
  const finalId = upcomingAliasMap[rawId] || rawId;

  if (finalId === "icaist-26") {
    const data = recentConferences[finalId];
    const heroParagraphs = data.description.split("\n\n");
    const keynoteSpeakers = data.keynoteSpeakers ?? [];
    const conferenceExperts = data.conferenceExperts ?? [];
    const importantDates = data.importantDates ?? [];

    return (
      <div className="min-h-screen bg-[#060b17] text-slate-100 selection:bg-cyan-400/30 selection:text-white">
        <Header />
        <main className="relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroBannerImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_28%),linear-gradient(to_bottom,#2c5a67_0%,#060b17_16%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20" />

          <section className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-20 text-center md:px-8 md:py-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 rounded-full border border-cyan-300/30 bg-cyan-300/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200"
            >
              Upcoming Event
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="font-display text-5xl font-black tracking-[0.08em] text-cyan-300 md:text-7xl"
            >
              {data.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-slate-200/80 md:text-base"
            >
              {data.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 max-w-4xl space-y-4 text-sm leading-7 text-slate-100/85 md:text-base"
            >
              {heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </motion.div>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <div className="rounded-full bg-cyan-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
                14 June 2026 | Virtual Mode | Global Participation
              </div>
              <a
                href={eminsphereExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-emerald-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-0.5"
              >
                Submit Full Paper
              </a>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
            <SectionHeading
              title="Conference Scope & Strategic Vision"
              subtitle="The conference aims to establish a rigorous and interdisciplinary platform that promotes the exchange of novel ideas, experimental findings, and transformative methodologies in emerging technological domains. ICQADTS-2026 emphasizes scientific depth, methodological innovation, and cross-domain integration, enabling participants to explore advanced paradigms such as quantum-enhanced intelligence, autonomous system orchestration, and digital twin-driven simulation frameworks."
            />
            <p className="max-w-6xl text-sm leading-7 text-slate-100/80">
              By bringing together researchers, academicians, and industry professionals, the conference seeks to accelerate innovation in intelligent systems capable of self-adaptation, real-time decision-making, and sustainable operation in dynamic environments.
            </p>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
            <SectionHeading title="Conference Objectives" />
            <div className="max-w-4xl space-y-4">
              {[
                "To provide a platform for presenting cutting-edge research in advanced computational systems.",
                "To encourage interdisciplinary collaboration across AI, quantum technologies, and cyber-physical systems.",
                "To facilitate knowledge exchange between academia and industry.",
                "To promote research addressing sustainability, scalability, and real-world deployment challenges.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-100/85">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
            <SectionHeading title="Publication & Indexing" />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {publicationCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-200/15 bg-white px-5 py-7 text-center text-slate-700 shadow-[0_22px_70px_rgba(0,0,0,0.3)]"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-cyan-500">
                    {card.logo ? (
                      <img src={card.logo} alt={card.title} className="h-10 w-10 object-contain" loading="lazy" />
                    ) : index === 0 ? (
                      <BookOpen className="h-7 w-7" />
                    ) : index === 1 ? (
                      <BadgeCheck className="h-7 w-7" />
                    ) : index === 2 ? (
                      <Globe className="h-7 w-7" />
                    ) : (
                      <CheckCircle2 className="h-7 w-7" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-indigo-600">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
            <SectionHeading title="Technical Tracks & Research Domains" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-6">
              {trackCards.map((track, index) => (
                <motion.article
                  key={track.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm"
                >
                  <h3 className="text-base font-semibold text-cyan-300">{track.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200/90">
                    {track.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
            <SectionHeading title="Important Dates & Milestones" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {importantDates.map((milestone) => (
                <div key={milestone.label} className="rounded-xl border border-cyan-400/35 bg-cyan-500/10 px-5 py-4 text-sm text-slate-100 shadow-sm">
                  <p className="font-semibold text-slate-50">{milestone.label}</p>
                  <p className="mt-2 text-slate-200/90">{milestone.date}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="Submission & Evaluation Methodology" />
            <p className={sectionLeadClass}>
              All submitted manuscripts will undergo a structured multi-stage evaluation process beginning with an initial screening for scope alignment, formatting compliance, and originality verification. Submissions meeting the preliminary criteria will be assigned to domain-specific reviewers under a double-blind peer review framework.
            </p>
            <div className="mt-6 space-y-4">
              {methodologyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-100/85">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="Proceedings, Publication & Indexing" />
            <p className={sectionLeadClass}>
              All accepted and presented papers will be compiled into the official conference proceedings and assigned an ISBN for formal academic dissemination. The proceedings will be made accessible through recognized digital platforms to ensure visibility within the research community.
            </p>
            <p className="mt-5 max-w-6xl text-sm leading-7 text-slate-200/70">
              High-quality papers demonstrating significant contribution and novelty may be shortlisted for extended versions in associated journals or publication avenues. Such selections will be based on reviewer recommendations and editorial evaluation.
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-100/85">
              {data.publications?.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span>{item.desc}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="Research Ethics & Compliance Framework" />
            <p className={sectionLeadClass}>
              ICQADTS-2026 strictly adheres to established academic and research integrity standards. Authors are expected to maintain transparency, originality, and ethical responsibility in all submitted work.
            </p>
            <div className="mt-6 space-y-4">
              {ethicsPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-7 text-slate-100/85">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="Keynote & Invited Speakers" subtitle="Featuring distinguished experts contributing to advanced research and technical sessions across global domains." />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
              {keynoteSpeakers.map((speaker, index) => (
                <SpeakerCard
                  key={`${speaker.name}-${index}`}
                  name={speaker.name}
                  title={speaker.title}
                  affiliation={speaker.affiliation}
                  imageUrl={speaker.imageUrl || fallbackSpeakerImage}
                />
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="International Session Experts" subtitle="Featured experts contributing to the conference's technical sessions and panel discussions." />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {conferenceExperts.map((expert, index) => (
                <div key={expert.name} className="rounded-2xl border border-white/10 bg-white/6 p-5 text-center backdrop-blur-sm">
                  <img
                      src={expert.imageUrl || fallbackSpeakerImage}
                    alt={expert.name}
                    loading="lazy"
                    className="mx-auto h-24 w-24 rounded-full object-cover object-top ring-2 ring-cyan-300/25"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-cyan-300">{expert.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-200/85">{expert.title}</p>
                  <p className="text-sm leading-6 text-slate-400">{expert.affiliation}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
            <SectionHeading title="International Delegates" subtitle="Participants representing global academic and research communities." />
            <div className="border-l-4 border-cyan-400 pl-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                {delegateCards.map((delegate) => (
                  <div key={delegate.name} className="rounded-xl bg-white px-5 py-4 text-slate-700 shadow-sm">
                    <p className="text-lg font-bold leading-8 text-indigo-600">{delegate.name}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-600">{delegate.affiliation}</p>
                    <p className="mt-4 text-sm text-cyan-500">{delegate.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-cyan-300">Call for High-Impact Technical Contributions</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base leading-7 text-slate-200/65">
              The conference invites researchers and practitioners to contribute original, high-quality research addressing emerging challenges in intelligent computational ecosystems and advanced technological systems.
            </p>
            <a
              href={eminsphereExternalUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-transform hover:-translate-y-0.5"
            >
              Register Now <ChevronRight className="h-4 w-4" />
            </a>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const data = finalId ? upcomingFallback(finalId) : undefined;
  const isICATES = finalId === "icates-26";

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col pt-32 px-4 items-center gap-4 bg-background">
        <Header />
        <h1 className="text-3xl font-display font-bold">Conference Not Found</h1>
        <p className="text-muted-foreground">The upcoming conference details are unavailable.</p>
        <Link to="/" className="text-primary hover:text-accent font-semibold">
          Return Home
        </Link>
        <div className="mt-auto w-full">
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-upcoming-conferences flex flex-col font-body">
      <Header />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 md:py-24">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-x-0 -top-10 h-32 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
          {isICATES ? (
            <div className="mb-6 overflow-hidden rounded-2xl border border-border/70 shadow-sm">
              <img
                src={icatesAsset("11062b_3e51224f3ee74964a141005767e8feb9~mv2.jpg")}
                alt="ICATES-26 banner"
                className="h-32 w-full object-cover object-center md:h-44"
                loading="eager"
              />
            </div>
          ) : null}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full shadow-sm bg-card">
            Upcoming Event
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">{data.title}</h1>
          {isICATES ? (
            <div className="mb-6 flex items-center justify-center gap-4">
              <img
                src={icatesAsset("30814e_1c5123d35814427e94f13afa05595c19~mv2.png")}
                alt="Eminsphere logo"
                className="h-16 w-16 rounded-lg border border-border/60 object-cover"
                loading="lazy"
              />
              <img
                src={icatesAsset("30814e_7410938484bc40e9a11c6254db663a5a~mv2.jpg")}
                alt="Accreditation logo"
                className="h-16 w-16 rounded-lg border border-border/60 object-cover"
                loading="lazy"
              />
            </div>
          ) : null}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-muted-foreground font-medium text-lg">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" />
              {data.date}
            </span>
            <span className="hidden md:block text-muted-foreground/30">•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              {data.location}
            </span>
          </div>
        </div>
        <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6 font-display">About the Conference</h2>
          <p className="text-lg text-foreground leading-relaxed mb-10">{data.description}</p>

          {data.thematicTracks && data.thematicTracks.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-foreground mb-5 font-display flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary" />
                Thematic Tracks
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.thematicTracks.map((track, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-muted/20 border border-muted hover:bg-muted/40 transition-colors shadow-sm">
                    <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground leading-snug font-medium text-sm md:text-base">{track}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.milestones && data.milestones.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-bold text-foreground mb-5 font-display flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Important Milestones
              </h3>
              <div className="flex flex-col gap-3">
                {data.milestones.map((ms, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-semibold text-foreground text-lg mb-1 sm:mb-0">{ms.name}</span>
                    <span className="text-accent font-bold px-4 py-1.5 rounded-full bg-accent/10 whitespace-nowrap">{ms.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-8 bg-muted/30 rounded-2xl border border-muted flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6">
            <h3 className="font-semibold text-xl">Call for Papers Open</h3>
            <p className="text-muted-foreground">Submit your abstract today for a chance to present your findings.</p>
            <div className="flex flex-wrap gap-4 mt-2 justify-center">
              <a
                href={eminsphereExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Submit Abstract
              </a>
              <a
                href={eminsphereExternalUrl}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 bg-card border-2 border-primary text-primary font-bold rounded-lg shadow hover:bg-muted transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpcomingConferenceLayout;
