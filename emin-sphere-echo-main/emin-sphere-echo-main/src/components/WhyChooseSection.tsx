import { CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Complete Conference Updates",
      description: "We offer you comprehensive updates regarding international conferences on diverse topics including engineering, healthcare, finance, education, and many more across all continents."
    },
    {
      title: "Continuously Updated Database",
      description: "We continuously update important events on our database to ensure that you can attend the conference of your choice at the right time."
    },
    {
      title: "Newsletter Subscriptions",
      description: "Subscribe to our Eminsphere conference alerts to get email notifications about upcoming conferences to come in future with full details."
    },
    {
      title: "Global Networking Opportunities",
      description: "You can enhance your network by attending our conferences by interacting with experts and industry leaders from across the globe."
    },
    {
      title: "Join Our Community",
      description: "You can join our community as an academic, scholar, student, and candidate researcher to get conference alerts customized to your field of interest."
    },
    {
      title: "Expert Speakers & Keynotes",
      description: "Network with renowned researchers, keynote speakers, and industry experts presenting cutting-edge research and innovative ideas at our conferences."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Eminsphere?
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Discover what makes us the preferred platform for academic conferences and professional development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="text-cyan-600" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
