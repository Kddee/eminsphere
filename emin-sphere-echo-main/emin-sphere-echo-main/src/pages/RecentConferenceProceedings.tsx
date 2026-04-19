import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const proceedingsList = [
  { name: "Proceeding ICAIDSS-2026", path: "/recent-conference-proceedings/copy-of-proceeding-icaeset-2026-26" },
  { name: "Proceeding ICAESET-2026-26", path: "/recent-conference-proceedings/copy-of-proceeding-icnse-26" },
  { name: "Proceeding ICNSE-26", path: "/recent-conference-proceedings/copy-of-proceeding-ictet-26" },
  { name: "Proceeding ICTET-26", path: "/recent-conference-proceedings/copy-of-proceeding-icmess-26" },
  { name: "Proceeding ICMESS-26", path: "/recent-conference-proceedings/copy-of-proceeding-icasit-26" },
  { name: "Proceeding ICASIT-26", path: "/recent-conference-proceedings/proceeding-icasit-26" },
  { name: "Proceeding ICMDIA-25", path: "/icmdia-25-1" },
  { name: "Proceeding ICETSGC-25", path: "/proceeding-icetsgc-25" },
  { name: "Proceeding ICCINET-25", path: "/conference-proceedings" },
];

const RecentConferenceProceedings = () => (
  <div className="min-h-screen page-past-conferences flex flex-col font-body">
    <Header />
    <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-16 md:py-24">
      <div className="text-center mb-14">
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-bold uppercase tracking-widest text-primary border border-primary/20 rounded-full bg-card">
          Publications
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Recent Conference Proceedings</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Access the published proceedings, abstracts, and keynote videos from Eminsphere's recent conferences.</p>
      </div>
      <div className="flex flex-col gap-4">
        {proceedingsList.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            className="group flex items-center justify-between bg-card border border-border rounded-xl px-6 py-4 shadow hover:shadow-md hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">{i+1}</div>
              <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
            </div>
            <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all shrink-0">View <span>→</span></span>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default RecentConferenceProceedings;
