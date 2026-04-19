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
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm border-b border-gray-100" id="top">
      <nav className="py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src="/assets/company logo .png"
              alt="Eminsphere"
              className="h-10 w-auto object-contain"
            />
            <div>
              <div className="text-xl font-bold text-darkNeutral leading-none transition-colors">
                Eminsphere<span className="text-secondaryTeal">™</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`relative px-2 py-2 text-sm font-semibold transition-all ${
                  location.pathname === link.to
                    ? "text-secondaryTeal"
                    : "text-darkNeutral hover:text-secondaryTeal"
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
                className={`flex items-center gap-1 px-2 py-2 text-sm font-semibold transition-all ${
                  linkItems.some((l) => location.pathname === l.to)
                    ? "text-secondaryTeal"
                    : "text-darkNeutral hover:text-secondaryTeal"
                }`}
              >
                Discover
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`} />
              </button>

              {moreOpen && (
                <div
                  onMouseLeave={() => setMoreOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[520px] bg-white border border-gray-100 shadow-lg rounded-md z-50 overflow-hidden"
                >
                  <div className="grid grid-cols-2 p-4 max-h-[72vh] overflow-y-auto gap-1">
                    {moreLinks.map((link, i) => {
                      if (link.label === "divider") {
                        return <div key={i} className="col-span-2 border-t border-gray-100 my-1" />;
                      }
                      if ((link as any).heading) {
                        return (
                          <div key={i} className="col-span-2 px-3 pt-3 pb-1 text-[11px] font-bold text-secondaryTeal uppercase tracking-wider">
                            {link.label}
                          </div>
                        );
                      }
                      return (
                        <Link
                          key={link.label}
                          to={link.to!}
                          className={`px-3 py-2 text-[13px] transition-all font-medium rounded-md ${
                            location.pathname === link.to
                              ? "text-secondaryTeal bg-gray-50"
                              : "text-darkNeutral hover:bg-gray-50 hover:text-secondaryTeal"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Additional custom links matching target theme */}
            <Link to="/article-submissions" className="px-2 py-2 text-sm font-semibold text-darkNeutral hover:text-secondaryTeal transition-all">Submit Article</Link>
            <Link to="/registration" className="px-2 py-2 text-sm font-semibold text-darkNeutral hover:text-secondaryTeal transition-all">Register Now</Link>
          </div>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/registration"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-sm"
              style={{ background: "linear-gradient(90deg, #FF9766 0%, #FF5F62 100%)" }}
            >
              Submit Paper
            </Link>
            <button
              className="lg:hidden p-2 text-darkNeutral rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto shadow-md absolute w-full left-0 top-full">
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
               <Link
                  key={link.label}
                  to={link.to}
                  className={`px-4 py-3 text-sm font-semibold transition-all ${
                    location.pathname === link.to
                      ? "text-secondaryTeal"
                      : "text-darkNeutral"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2" />
              <p className="px-4 py-1 text-[11px] font-bold text-secondaryTeal uppercase tracking-wider">More Services</p>
              {moreLinks.map((link, i) => {
                if (link.label === "divider" || (link as any).heading) return null;
                return (
                  <Link
                    key={link.label}
                    to={link.to!}
                    className="px-4 py-2 text-sm font-medium text-darkNeutral hover:bg-gray-50 hover:text-secondaryTeal transition-all"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link 
                  to="/registration" 
                  className="w-full flex justify-center items-center px-4 py-2 rounded text-sm font-bold text-white shadow-sm"
                  style={{ background: "linear-gradient(90deg, #FF9766 0%, #FF5F62 100%)" }}
                >
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
