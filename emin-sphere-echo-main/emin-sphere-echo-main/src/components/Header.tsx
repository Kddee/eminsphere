import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { companyInfo } from "../data/eminsphereData";

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
    const handleScroll = () => setScrolled(window.scrollY > 60);
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
  const transparent = isHome && !scrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full" id="top">

      {/* ── Top info bar ── */}
      <div className={`hidden md:block transition-all duration-300 overflow-hidden ${
        scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
      } ${transparent ? "bg-[#070e1d]/80 backdrop-blur-sm" : "bg-[#070e1d]"}`}>
        <div className="max-w-7xl mx-auto h-10 flex items-center justify-between px-6 text-[11px] font-medium uppercase tracking-wider text-white/60">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              ISO 9001:2015 Certified Organization
            </span>
            <span className="text-white/20">|</span>
            <span>Global Academic, Research &amp; Innovation Platform</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/article-submissions" className="hover:text-white transition-colors">Submit Article</Link>
            <Link to="/registration" className="hover:text-white transition-colors">Register Now</Link>
            <Link to="/career" className="hover:text-white transition-colors">Careers</Link>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-slate-200 py-3"
          : transparent
            ? "bg-transparent py-4"
            : "bg-white border-b border-slate-200 py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`rounded-lg p-1 transition-all border ${
              transparent
                ? "bg-white/10 border-white/20 group-hover:border-white/40"
                : "bg-slate-50 border-slate-200 group-hover:border-blue-300"
            }`}>
              <img
                src="/assets/company logo .png"
                alt="Eminsphere"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <div className={`text-xl font-black leading-none transition-colors ${
                transparent ? "text-white group-hover:text-blue-200" : "text-[#0f1b35] group-hover:text-[#2563eb]"
              }`}>
                Eminsphere<span className="text-[#2563eb]">™</span>
              </div>
              <div className={`text-[10px] font-bold uppercase tracking-[0.18em] leading-none mt-0.5 ${
                transparent ? "text-white/50" : "text-slate-400"
              }`}>
                Innovation Hub
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  location.pathname === link.to
                    ? transparent
                      ? "text-white bg-white/10"
                      : "text-[#2563eb] bg-blue-50"
                    : transparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-[#1a3a6e] hover:text-[#2563eb] hover:bg-slate-50"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#2563eb] rounded-full" />
                )}
              </Link>
            ))}

            {/* Discover dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onMouseEnter={() => setMoreOpen(true)}
                onClick={() => setMoreOpen(!moreOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                  linkItems.some((l) => location.pathname === l.to)
                    ? transparent ? "text-white bg-white/10" : "text-[#2563eb] bg-blue-50"
                    : transparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-[#1a3a6e] hover:text-[#2563eb] hover:bg-slate-50"
                }`}
              >
                Discover
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <div
                  onMouseLeave={() => setMoreOpen(false)}
                  className="absolute top-full left-0 mt-1.5 w-[520px] bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden"
                >
                  <div className="grid grid-cols-2 p-4 max-h-[72vh] overflow-y-auto gap-1">
                    {moreLinks.map((link, i) => {
                      if (link.label === "divider") {
                        return <div key={i} className="col-span-2 border-t border-slate-100 my-1" />;
                      }
                      if ((link as any).heading) {
                        return (
                          <div key={i} className="col-span-2 px-3 pt-3 pb-1 text-[10px] font-black text-[#2563eb] uppercase tracking-widest">
                            {link.label}
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={link.label}
                          to={link.to!}
                          className={`px-3 py-2.5 text-[13px] rounded-lg transition-all font-medium ${
                            location.pathname === link.to
                              ? "text-[#2563eb] bg-blue-50"
                              : "text-[#1a3a6e] hover:bg-slate-50 hover:text-[#2563eb]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-400 font-medium">Browse all Eminsphere services</p>
                    <Link to="/expert-connect" className="text-xs font-bold text-[#2563eb] hover:underline">
                      Expert Connect →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/registration"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all active:scale-95 ${
                transparent
                  ? "bg-white/10 border border-white/30 text-white hover:bg-white hover:text-[#0f1b35] backdrop-blur-sm"
                  : "bg-[#2563eb] text-white hover:bg-[#1a3a6e] shadow-md hover:shadow-lg"
              }`}
            >
              Submit Paper
            </Link>
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                transparent ? "text-white hover:bg-white/10" : "text-[#0f1b35] hover:bg-slate-100"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                    location.pathname === link.to
                      ? "text-[#2563eb] bg-blue-50"
                      : "text-[#1a3a6e] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2" />
              <p className="px-4 py-1 text-[10px] font-black text-[#2563eb] uppercase tracking-widest">More Services</p>
              {moreLinks.map((link, i) => {
                if (link.label === "divider" || (link as any).heading) return null;
                return (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#1a3a6e] hover:bg-slate-50 hover:text-[#2563eb] transition-all"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <Link to="/registration" className="btn-primary w-full justify-center">
                  Submit Paper
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
