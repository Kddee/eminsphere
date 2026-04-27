const SDGSection = () => {
  const sdgs = [
    {
      number: 4,
      title: "Quality Education",
      description: "Emphasize the role of education in advancing knowledge and technology for sustainable development",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/12/Sustainable_Development_Goal_4.png",
      color: "bg-blue-50"
    },
    {
      number: 7,
      title: "Affordable & Clean Energy",
      description: "Showcase renewable energy solutions and sustainable power technologies",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Sustainable_Development_Goal_7.png",
      color: "bg-yellow-50"
    },
    {
      number: 9,
      title: "Industry & Innovation",
      description: "Highlight industrial advancements and technological innovation for infrastructure",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Sustainable_Development_Goal_09.png",
      color: "bg-orange-50"
    },
    {
      number: 11,
      title: "Sustainable Cities",
      description: "Discuss urban engineering solutions that contribute to sustainable communities",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Sustainable_Development_Goal_11.png",
      color: "bg-red-50"
    },
    {
      number: 13,
      title: "Climate Action",
      description: "Address climate change challenges through engineering and technology solutions",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sustainable_Development_Goal_13.png",
      color: "bg-green-50"
    },
    {
      number: 17,
      title: "Partnerships for Goals",
      description: "Foster collaboration among global researchers and institutions for sustainable development",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Sustainable_Development_Goal_17.png",
      color: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            UN Sustainable Development Goals (SDGs) Alignment
          </h2>

          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            By aligning with the United Nations' Sustainable Development Goals (SDGs), ICRCET 2026 underscores its dedication to environmental sustainability, social transformation, and technological innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgs.map((sdg) => (
              <div key={sdg.number} className={`${sdg.color} rounded-lg p-6 border-l-4 border-gray-300 hover:shadow-lg transition-all group`}>
                <div className="mb-4 flex justify-center h-24 items-center">
                  <img 
                    src={sdg.image} 
                    alt={`SDG Goal ${sdg.number}`}
                    className="h-20 w-auto object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                  Goal {sdg.number}
                </h3>
                <h4 className="text-base font-semibold text-slate-800 mb-2 text-center">
                  {sdg.title}
                </h4>
                <p className="text-gray-700 text-center leading-relaxed text-sm">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 border-l-4 border-cyan-500">
            <p className="text-gray-700 leading-relaxed">
              ICRCET 2026 actively addresses these global challenges through dedicated sessions, research tracks, and collaborative initiatives. Our conference serves as a catalyst for research and innovation that directly contributes to achieving these crucial UN SDGs by 2030.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;
