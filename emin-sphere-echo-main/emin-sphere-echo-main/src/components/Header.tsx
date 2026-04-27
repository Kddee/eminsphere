import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
];

const moreLinks = [
  { label: "Apply as Reviewer", to: "/apply-as-reviewer" },
  { label: "Eminsphere's Innovation Challenge 2026", to: "/innovation-challenge-2026" },
  { label: "Upcoming Conferences", heading: true },
  { label: "ICQADTS-2026", to: "/icaist-26" },
  { label: "ICMREF-26", to: "/icmref-26" },
  { label: "ICAITS-26", to: "/icaits-26" },
  { label: "ICATES-26", to: "/icates-26" },
  { label: "Recent Conference proceedings", heading: true },
  { label: "Proceeding ICAIDSS-2026", to: "/recent-conference-proceedings/copy-of-proceeding-icaeset-2026-26" },
  { label: "Proceeding ICAESET-2026-26", to: "/recent-conference-proceedings/copy-of-proceeding-icnse-26" },
  { label: "Proceeding ICNSE-26", to: "/recent-conference-proceedings/copy-of-proceeding-ictet-26" },
  { label: "Proceeding ICTET-26", to: "/recent-conference-proceedings/copy-of-proceeding-icmess-26" },
  { label: "Proceeding ICMESS-26", to: "/recent-conference-proceedings/copy-of-proceeding-icasit-26" },
  { label: "Proceeding ICASIT-26", to: "/recent-conference-proceedings/proceeding-icasit-26" },
  { label: "Proceeding ICMDIA-25", to: "/icmdia-25-1" },
  { label: "Proceeding ICETSGC-25", to: "/proceeding-icetsgc-25" },
  { label: "Proceeding ICCINET-25", to: "/conference-proceedings" },
  { label: "Recent conferences", heading: true },
  { label: "ICAIDSS-26", to: "/icaidss-26" },
  { label: "ICAESET-2026", to: "/icaeset-2026" },
  { label: "ICNSE-26", to: "/icnse-26" },
  { label: "ICTET-26", to: "/ictet-26" },
  { label: "ICMESS-26", to: "/icmess-26" },
  { label: "ICASIT-26", to: "/icasit-26" },
  { label: "ICMDIA-25", to: "/icmdia-25" },
  { label: "ICETSGC-25", to: "/icetsgc-25" },
  { label: "ICCINET-25", to: "/iccinet-25" },
  { label: "ICAMET 2025", to: "/icamet-2025" },
  { label: "ICENTA-2024", to: "/icenta-2024" },
  { label: "divider" },
  { label: "Past Speakers", to: "/past-speakers" },
  { label: "Advisory Members", to: "/advisory-members" },
  { label: "Registration", to: "/registration" },
  { label: "Books", to: "/books" },
  { label: "Expert Connect: Speaking & Advisory", to: "/expert-connect" },
  { label: "Share Your Story", to: "/share-your-story" },
  { label: "Get Recognized", to: "/get-recognized" },
  { label: "Career", to: "/career" },
  { label: "Apply for the advisory team", to: "/apply-advisory-team" },
  { label: "Article Submissions", to: "/article-submissions" },
  { label: "Blog", to: "/blog" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkItems = moreLinks.filter((l) => l.to);

  // On home page: navbar is transparent over the dark hero until scrolled
  const isHome = location.pathname === "/";
  // Determine if we should show the transparent version. 
  // It only applies when at the top of the home page.
  const transparent = isHome && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${!transparent && !scrolled ? 'bg-white shadow-sm' : ''}`} id="top">

      {/* ── Top info bar ── */}
      <div className={`hidden md:block transition-all duration-300 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
      } bg-[#0A192F]`}>
        <div className="max-w-7xl mx-auto h-10 flex items-center justify-between px-6 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2 text-amber-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              ISO 9001:2015 Certified Organization
            </span>
            <span className="text-white/20">|</span>
            <span className="font-medium text-slate-300">Global Academic, Research &amp; Innovation Platform</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link to="/article-submissions" className="hover:text-amber-400 transition-colors">Submit Article</Link>
            <Link to="/registration" className="hover:text-amber-400 transition-colors">Register Now</Link>
            <Link to="/career" className="hover:text-amber-400 transition-colors">Careers</Link>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3"
          : transparent
            ? "bg-transparent border-transparent py-4"
            : "bg-white border-slate-100 py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`rounded-lg p-1.5 transition-all duration-200 ${
              transparent
                ? "bg-white/10 group-hover:bg-white/20 border border-white/20"
                : "bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.04)] group-hover:shadow-md group-hover:border-blue-100"
            }`}>
              <img
                src="/assets/company logo .png"
                alt="Eminsphere"
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
            <div>
              <div className={`text-xl font-black leading-none transition-colors tracking-tight ${
                transparent ? "text-white group-hover:text-blue-200" : "text-[#0A192F] group-hover:text-[#2563eb]"
              }`}>
                Eminsphere<span className="text-[#2563eb]">™</span>
              </div>
              <div className={`hidden md:block text-[8.5px] uppercase tracking-widest font-bold leading-tight mt-1 ${
                transparent ? "text-white/80" : "text-slate-500"
              }`}>
                Global Academic, Research &amp; Innovation Platform
              </div>
              <div className={`hidden md:block text-[8.5px] uppercase tracking-widest leading-tight ${
                transparent ? "text-blue-300" : "text-[#2563eb]"
              }`}>
                ISO 9001:2015 Certified
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                  location.pathname === link.to
                    ? transparent
                      ? "text-white bg-white/15"
                      : "text-[#2563eb] bg-blue-50"
                    : transparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-[#0A192F] hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Discover dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onMouseEnter={() => setMoreOpen(true)}
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                  linkItems.some((l) => location.pathname === l.to)
                    ? transparent ? "text-white bg-white/15" : "text-[#2563eb] bg-blue-50"
                    : transparent
                      ? "text-white/90 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-[#0A192F] hover:bg-slate-50"
                }`}
              >
                Discover
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <div
                  onMouseLeave={() => setMoreOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[560px] bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden transform origin-top transition-all duration-200"
                >
                  <div className="grid grid-cols-2 p-5 max-h-[70vh] overflow-y-auto gap-1 custom-scrollbar">
                    {moreLinks.map((link, i) => {
                      if (link.label === "divider") {
                        return <div key={i} className="col-span-2 border-t border-slate-100 my-2" />;
                      }
                      if ((link as { heading?: boolean }).heading) {
                        return (
                          <div key={i} className="col-span-2 px-3 pt-4 pb-1 text-[11px] font-black text-[#0A192F] uppercase tracking-widest flex items-center gap-2">
                            {link.label}
                            <div className="h-px bg-slate-100 flex-grow"></div>
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={link.label}
                          to={link.to!}
                          className={`px-3 py-2.5 text-[13px] rounded-lg transition-all font-medium flex items-center group ${
                            location.pathname === link.to
                              ? "text-[#2563eb] bg-blue-50"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#2563eb]"
                          }`}
                        >
                          <span className="flex-1 truncate pr-2">{link.label}</span>
                          <span className={`w-1.5 h-1.5 rounded-full bg-[#2563eb] transition-all duration-200 ${location.pathname === link.to ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}></span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-500 font-medium">Want to collaborate with our experts?</p>
                    <Link to="/expert-connect" className="text-xs font-bold text-[#2563eb] hover:text-[#1d4ed8] flex items-center gap-1 group">
                      Expert Connect 
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/registration"
              className={`hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm active:scale-95 ${
                transparent
                  ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-[#0A192F]"
                  : "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-blue-500/20 shadow-lg hover:shadow-xl"
              }`}
            >
              Submit Paper
            </Link>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                transparent ? "text-white hover:bg-white/10" : "text-slate-600 hover:bg-slate-100"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-[85vh] mt-3' : 'max-h-0'}`}>
          <div className="border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto shadow-2xl pb-6">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                    location.pathname === link.to
                      ? "text-[#2563eb] bg-blue-50"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0A192F]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <p className="px-4 py-2 text-[10px] font-black text-[#0A192F] uppercase tracking-widest bg-slate-50 rounded-lg">More Services</p>
              {moreLinks.map((link, i) => {
                if (link.label === "divider" || (link as { heading?: boolean }).heading) return null;
                return (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#2563eb] transition-all"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-slate-100 px-4">
                <Link to="/registration" className="flex items-center justify-center w-full px-6 py-3 rounded-lg text-sm font-bold text-white bg-[#2563eb] shadow-md">
                  Submit Paper
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </header>
  );
};

export default Header;
