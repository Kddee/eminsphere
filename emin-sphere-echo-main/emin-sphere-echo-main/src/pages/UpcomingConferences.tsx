import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const upcomingList = [
  { name: "ICMREF-26", path: "/icmref-26", description: "International Conference on Multidisciplinary Research and Educational Frontiers", date: "7 June 2026" },
  { name: "ICQADTS-2026", path: "/icaist-26", description: "International Conference on Quantum-AI Driven Autonomous Digital Twin Systems", date: "14 June 2026" },
  { name: "ICAITS-26", path: "/icaits-26", description: "International Conference on Advanced Information Technology and Systems", date: "14 June 2026" },
  { name: "ICATES-26", path: "/icates-26", description: "International Conference on Advanced Technologies and Engineering Solutions", date: "14 June 2026" },
];

const UpcomingConferences = () => (
  <div className="min-h-screen bg-background flex flex-col font-body">
    <Header />
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full bg-card">
          Upcoming Events
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Upcoming Conferences</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Join Eminsphere's upcoming global academic and research conferences. Submit your papers and register today.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {upcomingList.map((conf) => (
          <Link
            key={conf.name}
            to={conf.path}
            className="group bg-card border border-border rounded-xl p-6 shadow hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{conf.name}</span>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded-full shrink-0 ml-2">{conf.date}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{conf.description}</p>
            <div className="mt-4 text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default UpcomingConferences;
