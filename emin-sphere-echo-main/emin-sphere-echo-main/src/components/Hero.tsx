import { useState, useEffect } from "react";
import { Calendar, MapPin, Globe, ArrowRight, ChevronRight, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingConferences = [
  {
    code: "ICMREF-26",
    title: "International Conference on Multidisciplinary Research & Emerging Frontiers",
    shortTitle: "ICMREF-26",
    date: "7 June 2026",
    mode: "Hybrid Mode",
    link: "/icmref-26",
    deadline: "1 June 2026",
  },
  {
    code: "ICATES-26",
    title: "International Conference on Advanced Technologies & Engineering Systems",
    shortTitle: "ICATES-26",
    date: "14 June 2026",
    mode: "Hybrid Mode",
    link: "/icates-26",
    deadline: "8 June 2026",
  },
  {
    code: "ICQADTS-2026",
    title: "International Conference on Quantum AI & Digital Twin Systems",
    shortTitle: "ICQADTS-2026",
    date: "14 June 2026",
    mode: "Virtual Mode",
    link: "/icaist-26",
    deadline: "8 June 2026",
  },
  {
    code: "ICAETS-26",
    title: "International Conference on AI, Engineering & Technology Systems",
    shortTitle: "ICAETS-26",
    date: "14 June 2026",
    mode: "Hybrid Mode",
    link: "/icaits-26",
    deadline: "8 June 2026",
  },
];

function useCountdown(targetDate: string) {
  const calc = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return t;
}

const Hero = () => {
  const [activeConf, setActiveConf] = useState(0);
  const countdown = useCountdown("2026-06-07");
  const conf = upcomingConferences[activeConf];

  return (
    <div className="w-full">

      {/* ═══════════════ HERO BANNER ═══════════════ */}
      <div
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/conference_banner.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/95 via-[#0f1b35]/90 to-[#0a1628]/98" />
          
          {/* circuit grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(#4169e1 1px, transparent 1px), linear-gradient(90deg, #4169e1 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        </div>

        {/* Content — pt accounts for fixed navbar (top bar ~40px + nav ~65px = 105px) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-4 pt-32 pb-16">

          {/* ISO badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-blue-400/30 bg-blue-950/40 backdrop-blur-sm text-blue-200 text-xs font-semibold uppercase tracking-widest mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            ISO 9001:2015 Certified · Global Academic & Research Platform
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.08] tracking-tight mb-5 max-w-5xl">
            Eminsphere™
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-blue-300 mt-1">
              Global Academic Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200/80 mb-10 max-w-2xl leading-relaxed font-normal">
            Connecting researchers, academics & innovators through 100+ international
            conferences with Scopus/WoS indexed publication support.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              to="/upcoming-conferences"
              className="btn-primary text-base px-8 py-4"
            >
              View Conferences
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/article-submissions"
              className="btn-outline text-base px-8 py-4"
            >
              Submit a Paper
              <FileText className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              { value: "100+", label: "Conferences" },
              { value: "50+", label: "Countries" },
              { value: "5000+", label: "Researchers" },
              { value: "10+", label: "Years" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                <div className="text-xs text-blue-300 font-semibold uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <div className="w-px h-8 bg-white" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>
      </div>

      {/* ═══════════════ UPCOMING CONFERENCES ═══════════════ */}
      <div className="bg-white border-b border-slate-200">
        {/* Gold top rule */}
        <div className="h-1 bg-gradient-to-r from-[#1a3a6e] via-[#2563eb] to-[#1a3a6e]" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="section-label">Mark Your Calendar</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0f1b35]">
                Upcoming Conferences
              </h2>
            </div>

            {/* Live countdown */}
            <div className="flex-shrink-0 border border-slate-200 rounded-xl px-6 py-4 bg-[#0f1b35] text-white shadow-md">
              <p className="text-[10px] text-blue-300 font-black uppercase tracking-widest mb-2 text-center">
                Next Event — ICMREF-26
              </p>
              <div className="flex items-center gap-4">
                {[
                  { v: countdown.days, l: "Days" },
                  { v: countdown.hours, l: "Hrs" },
                  { v: countdown.mins, l: "Min" },
                  { v: countdown.secs, l: "Sec" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex flex-col items-center min-w-[36px]">
                    <span className="text-2xl font-black tabular-nums leading-none">
                      {String(v).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-blue-300 font-bold uppercase tracking-widest mt-1">{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conference switcher tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1 mb-8">
            {upcomingConferences.map((c, i) => (
              <button
                key={c.code}
                onClick={() => setActiveConf(i)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-bold border transition-all ${
                  activeConf === i
                    ? "bg-[#2563eb] text-white border-[#2563eb] shadow-md"
                    : "bg-white text-[#1a3a6e] border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]"
                }`}
              >
                {c.code}
              </button>
            ))}
          </div>

          {/* Conference cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {upcomingConferences.map((c, i) => (
              <Link
                key={c.code}
                to={c.link}
                onClick={() => setActiveConf(i)}
                className={`group flex flex-col p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                  activeConf === i
                    ? "border-[#2563eb] bg-[#2563eb]/5 shadow-lg shadow-[#2563eb]/10"
                    : "border-slate-200 bg-white hover:border-[#2563eb]/40 hover:shadow-md"
                }`}
              >
                {/* Tag */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-black px-3 py-1.5 rounded-md ${
                    activeConf === i
                      ? "bg-[#2563eb] text-white"
                      : "bg-[#0f1b35] text-white"
                  }`}>
                    {c.code}
                  </span>
                  {activeConf === i && (
                    <span className="text-[9px] font-black text-[#2563eb] bg-blue-50 border border-blue-200 px-2 py-1 rounded-full uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-[#0f1b35] leading-snug mb-4 flex-1 group-hover:text-[#2563eb] transition-colors line-clamp-3">
                  {c.title}
                </h3>

                <div className="space-y-1.5 mb-5">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                    {c.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                    {c.mode}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                    <Globe className="w-3.5 h-3.5 text-[#2563eb] flex-shrink-0" />
                    Deadline: {c.deadline}
                  </div>
                </div>

                <div className={`flex items-center gap-1.5 text-xs font-bold transition-all ${
                  activeConf === i ? "text-[#2563eb]" : "text-slate-400 group-hover:text-[#2563eb]"
                }`}>
                  View Details
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* View all */}
          <div className="mt-8 text-center">
            <Link
              to="/upcoming-conferences"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb] hover:text-[#1a3a6e] border border-[#2563eb]/30 hover:border-[#1a3a6e] px-6 py-2.5 rounded-lg transition-all hover:bg-slate-50"
            >
              View All Upcoming Conferences
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══════════════ QUICK STATS BAR ═══════════════ */}
      <div className="bg-[#0f1b35] py-8 border-b border-[#1a3a6e]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Calendar, value: "100+", label: "Conferences Organized" },
              { icon: Globe, value: "50+", label: "Countries Represented" },
              { icon: Users, value: "5000+", label: "Researchers Worldwide" },
              { icon: FileText, value: "1000+", label: "Papers Published" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2563eb]/20 border border-[#2563eb]/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <div className="text-2xl font-black text-white leading-none">{item.value}</div>
                  <div className="text-xs text-blue-400 font-medium mt-0.5">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
