import { motion } from "framer-motion";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-10] bg-slate-50">
      {/* Very Simple Network Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* 2-3 Pulse points for International feel */}
      <motion.div 
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full"
      />
      <motion.div 
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute top-2/3 left-2/3 w-2 h-2 bg-blue-500 rounded-full"
      />
      
      <div className="absolute top-[20%] right-[10%] text-[10px] font-bold text-slate-300 uppercase tracking-widest">London</div>
      <div className="absolute bottom-[30%] left-[15%] text-[10px] font-bold text-slate-300 uppercase tracking-widest">Tokyo</div>
    </div>
  );
};

export default GlobalBackground;
