import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white border-t border-[#1a3a6e]/30">
      {/* Top blue rule */}
      <div className="h-1 bg-gradient-to-r from-[#1a3a6e] via-[#2563eb] to-[#1a3a6e]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/company logo .png" alt="Eminsphere" className="h-11 w-auto" />
            <div>
              <p className="font-black text-lg text-white">
                Eminsphere<span className="text-[#2563eb]">™</span>
              </p>
              <p className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Innovation Hub</p>
            </div>
          </div>
          <p className="text-sm text-white/50 mb-2 leading-relaxed max-w-sm">
            Global Academic, Research &amp; Innovation Platform.
            Advancing Knowledge. Empowering Innovation worldwide.
          </p>
          <p className="text-xs text-white/25 mb-5">
            ISO 9001:2015 Certified · Trademark Application No. 7244652
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/eminsphere"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 bg-[#0077b5] rounded-lg text-white hover:bg-[#005885] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-black text-[#2563eb] uppercase tracking-widest mb-5">Explore</p>
          <ul className="space-y-2.5 text-sm text-white/50">
            {[
              ["Upcoming Conferences", "/upcoming-conferences"],
              ["Past Conferences", "/icmdia-25"],
              ["Proceedings", "/conference-proceedings"],
              ["Apply as Reviewer", "/apply-as-reviewer"],
              ["Innovation Challenge", "/innovation-challenge-2026"],
              ["Books", "/books"],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Legal */}
        <div>
          <p className="text-xs font-black text-[#2563eb] uppercase tracking-widest mb-5">Contact</p>
          <ul className="space-y-2.5 text-sm text-white/50 mb-6">
            <li>
              <a href="mailto:info@eminsphere.com" className="hover:text-white transition-colors">
                info@eminsphere.com
              </a>
            </li>
            <li><Link to="/career" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/share-your-story" className="hover:text-white transition-colors">Share Your Story</Link></li>
            <li><Link to="/expert-connect" className="hover:text-white transition-colors">Expert Connect</Link></li>
          </ul>
          <p className="text-xs font-black text-[#2563eb] uppercase tracking-widest mb-3">Legal</p>
          <ul className="space-y-2 text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Eminsphere™. All Rights Reserved.
          </p>
          <p className="text-xs text-white/15">
            Global Academic, Research &amp; Innovation Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
