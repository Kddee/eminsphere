import React from 'react';

interface PatronProps {
  name: string;
  role: string;
  description: string;
  organization: string;
  location: string;
  image: string;
}

const ConferencePatron = ({
  name,
  role,
  description,
  organization,
  location,
  image
}: PatronProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-[#0d233a] uppercase tracking-widest mb-12">
          Conference <span className="text-[#ff7a00]">Patron</span>
        </h2>

        <div className="max-w-lg mx-auto bg-[#f8f9fa] p-8 border-2 border-[#0d233a] border-t-8 border-t-[#22c55e] shadow-[8px_8px_0px_#0d233a] relative">
          
          <div className="flex justify-center mb-6">
            <img 
              src={image} 
              alt={name} 
              className="w-40 h-40 object-cover rounded-full border-[5px] border-[#22c55e] shadow-[4px_4px_0px_#0d233a]"
            />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-black text-[#0d233a] mb-1">
              {name}
            </h3>
            <p className="text-lg font-bold text-[#0d233a] mb-4 uppercase tracking-wider">
              {role}
            </p>

            <p className="text-md text-gray-700 font-medium mb-1">
              {description}
            </p>
            <p className="text-md text-gray-700 font-medium mb-4">
              {organization}
            </p>

            <div className="inline-block bg-green-50 px-4 py-2 rounded-full border border-green-200">
               <p className="text-sm font-bold text-[#065f46]">
                 {location}
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConferencePatron;
