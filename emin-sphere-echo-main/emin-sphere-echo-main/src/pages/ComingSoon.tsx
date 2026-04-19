import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ComingSoon = ({ title }: { title: string }) => {
  return (
    <div className="min-h-screen page-home">
      <Header />
      <section className="py-20 text-center">
        <h1 className="font-display text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-muted-foreground font-body">Details coming soon. Contact info@eminsphere.com for more information.</p>
      </section>
      <Footer />
    </div>
  );
};

export default ComingSoon;
