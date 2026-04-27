import React from 'react';

const NairobiVenue = () => {
  const cards = [
    {
      title: "Technology & Innovation Ecosystem",
      description: "Emerging hub for startups, research labs, and digital infrastructure",
      image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Urban & Academic Environment",
      description: "Modern facilities supporting research, education, and collaboration",
      image: "https://images.unsplash.com/photo-1574448415-e9f5b28e570d?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Natural Research Context",
      description: "Unique ecological landscapes offering environmental and sustainability insights",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Cultural & Global Connectivity",
      description: "Diverse cultural setting with strong international engagement",
      image: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-black text-[#0d233a] uppercase tracking-widest mb-4">
             Explore <span className="text-[#ff7a00]">Nairobi, Kenya</span>
           </h2>
           <div className="w-24 h-1.5 bg-[#ff7a00] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="relative group overflow-hidden h-[300px] border-b-4 border-[#ff7a00] shadow-lg">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d233a] via-[#0d233a]/40 to-transparent flex flex-col justify-end p-8">
                 <h3 className="text-white text-xl font-black uppercase mb-2 group-hover:text-[#ff7a00] transition-colors">
                   {card.title}
                 </h3>
                 <p className="text-gray-200 text-sm font-medium">
                   {card.description}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NairobiVenue;
