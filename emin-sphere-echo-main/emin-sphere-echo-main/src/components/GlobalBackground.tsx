import { motion } from "framer-motion";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Large Base Gradient */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: `linear-gradient(135deg, 
            #f0f4f8 0%, 
            #e3eef7 30%, 
            #dce9f5 60%, 
            #e8ecf1 100%)`
        }} 
      />
      
      {/* Large Dramatic Radial Gradients */}
      <div 
        className="absolute inset-0 opacity-40" 
        style={{ 
          backgroundImage: `
            radial-gradient(ellipse 1200px 800px at 15% 20%, rgba(37, 99, 235, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse 1000px 900px at 85% 75%, rgba(44, 82, 130, 0.22) 0%, transparent 50%),
            radial-gradient(ellipse 1100px 750px at 50% 50%, rgba(156, 107, 44, 0.15) 0%, transparent 60%)
          `,
        }} 
      />

      {/* Animated Large Gradient Mesh - Prominent */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '50% 100%', '0% 0%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 opacity-20"
        style={{ 
          backgroundImage: `
            radial-gradient(ellipse 1500px 1000px at 20% 50%, rgba(37, 99, 235, 0.35) 0%, transparent 50%),
            radial-gradient(ellipse 1300px 900px at 80% 30%, rgba(26, 58, 110, 0.28) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%',
          backgroundPosition: '0% 0%'
        }}
      />

      {/* Large Geometric Pattern - Visible Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12]" 
        style={{ 
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(37, 99, 235, 0.8) 0px,
              rgba(37, 99, 235, 0.8) 1px,
              transparent 1px,
              transparent 180px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(37, 99, 235, 0.8) 0px,
              rgba(37, 99, 235, 0.8) 1px,
              transparent 1px,
              transparent 180px
            )
          `,
          backgroundSize: '180px 180px'
        }} 
      />

      {/* Diagonal Stripe Pattern - Large & Visible */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{ 
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(37, 99, 235, 1) 0px,
              rgba(37, 99, 235, 1) 2px,
              transparent 2px,
              transparent 160px
            )
          `,
          backgroundSize: '226px 226px'
        }} 
      />

      {/* Large Flow Animation */}
      <motion.div
        animate={{
          y: [0, 50, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0 opacity-15"
        style={{ 
          backgroundImage: `
            radial-gradient(ellipse 1600px 1200px at 50% 30%, rgba(212, 160, 23, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(49, 130, 206, 0.3) 0%, transparent 40%)
          `,
        }}
      />
      
      {/* Prominent Global Network Hubs */}
      {[
        { name: "London", top: "15%", left: "45%", delay: 0, size: 6 },
        { name: "New York", top: "30%", left: "12%", delay: 2, size: 6 },
        { name: "Singapore", top: "70%", left: "82%", delay: 4, size: 6 },
        { name: "Dubai", top: "42%", left: "58%", delay: 1, size: 6 },
        { name: "Tokyo", top: "28%", left: "88%", delay: 3, size: 6 },
        { name: "Sydney", top: "85%", left: "92%", delay: 5, size: 6 },
        { name: "Mumbai", top: "58%", left: "68%", delay: 2.5, size: 6 },
        { name: "Paris", top: "25%", left: "40%", delay: 1.5, size: 6 },
        { name: "São Paulo", top: "65%", left: "25%", delay: 6, size: 6 },
      ].map((hub, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            delay: hub.delay,
            ease: "easeInOut"
          }}
          className="absolute flex flex-col items-center"
          style={{ top: hub.top, left: hub.left }}
        >
          {/* Large Prominent Node */}
          <motion.div 
            className="relative"
            animate={{ 
              boxShadow: [
                '0 0 0 2px rgba(37, 99, 235, 0.5), 0 0 0 0px rgba(37, 99, 235, 0.2)',
                '0 0 0 2px rgba(37, 99, 235, 0.3), 0 0 0 25px rgba(37, 99, 235, 0)',
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: 'easeOut'
            }}
          >
            <div 
              className="bg-gradient-to-br from-blue-400 to-blue-700 rounded-full shadow-2xl" 
              style={{ width: `${hub.size}px`, height: `${hub.size}px` }}
            />
          </motion.div>
          <span className="text-[8px] font-bold text-blue-700 uppercase tracking-widest whitespace-nowrap mt-3 opacity-70">{hub.name}</span>
        </motion.div>
      ))}

      {/* Large Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
        <defs>
          <linearGradient id="lineGradientLarge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.6)" />
            <stop offset="100%" stopColor="rgba(26, 58, 110, 0.5)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Large Path 1: US to Europe */}
        <line x1="12%" y1="30%" x2="45%" y2="15%" stroke="url(#lineGradientLarge)" strokeWidth="2.5" filter="url(#glow)" />
        {/* Large Path 2: Europe to Middle East */}
        <line x1="45%" y1="15%" x2="58%" y2="42%" stroke="url(#lineGradientLarge)" strokeWidth="2.5" filter="url(#glow)" />
        {/* Large Path 3: Middle East to Asia */}
        <line x1="58%" y1="42%" x2="82%" y2="70%" stroke="url(#lineGradientLarge)" strokeWidth="2.5" filter="url(#glow)" />
        {/* Large Path 4: Asia to Australia */}
        <line x1="82%" y1="70%" x2="92%" y2="85%" stroke="url(#lineGradientLarge)" strokeWidth="2.5" filter="url(#glow)" />
        {/* Large Path 5: US to Brazil */}
        <line x1="12%" y1="30%" x2="25%" y2="65%" stroke="url(#lineGradientLarge)" strokeWidth="2" opacity="0.8" filter="url(#glow)" />
      </svg>

      {/* Additional Large Accent Circles */}
      <motion.div
        animate={{
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(37, 99, 235, 0.3) 0%, transparent 35%),
            radial-gradient(circle at 70% 60%, rgba(44, 82, 130, 0.25) 0%, transparent 35%)
          `
        }}
      />
    </div>
  );
};

export default GlobalBackground;
