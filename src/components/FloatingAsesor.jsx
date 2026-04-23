import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Bot } from "lucide-react";

export default function FloatingAsesor() {
  const [hovered, setHovered] = useState(false);

  const scrollToAsesor = () => {
    document.getElementById("asesor")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-6 z-[999] flex items-center">
      <motion.button
        onClick={scrollToAsesor}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center cursor-pointer"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
      >
        {/* Icon wrapper */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300"></div>
          <div className="relative bg-slate-900 border-2 border-cyan-400 text-cyan-400 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Bot size={24} className="animate-pulse" />
            <Sparkles size={12} className="absolute top-1 right-1 text-yellow-300" />
          </div>
        </div>

        {/* Text Expansion on Hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: 12 }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              className="overflow-hidden whitespace-nowrap"
            >
              <div className="bg-slate-900 border border-cyan-400/50 px-4 py-2 rounded-xl text-white font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                ¡Pruébame! Asesor Inteligente
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
