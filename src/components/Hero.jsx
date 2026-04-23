import { useState } from "react";
import { motion } from "framer-motion";
import { C, CONFIG } from "../data/constants";
import { Logo } from "./ui/Shared";
import { Gift } from "lucide-react";
import CheckPoints from "./CheckPoints";

export default function Hero() {
  const [isCheckPointsOpen, setIsCheckPointsOpen] = useState(false);
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-8 pt-32 pb-16 overflow-hidden bg-slate-950">
      <CheckPoints isOpen={isCheckPointsOpen} onClose={() => setIsCheckPointsOpen(false)} />

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,229,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#00e5ff_1px,transparent_1px),linear-gradient(90deg,#00e5ff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* REWARD BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <div onClick={() => scrollTo("productos")} className="cursor-pointer inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 px-5 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:bg-yellow-500/20 hover:scale-105 transition-all">
            <Gift size={18} className="animate-pulse" /> ¡Ahora podés sumar o canjear puntos Tesys con tu próxima compra!
          </div>

          <button
            onClick={() => setIsCheckPointsOpen(true)}
            className="text-slate-400 text-xs font-semibold hover:text-white underline cursor-pointer transition-colors"
          >
            ¿Ya eres cliente? Consulta tus puntos acumulados aquí
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Logo size={110} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          Tecnología al servicio <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-green-400">
            de tu negocio
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Desde 1985 en General Rodríguez. Insumos, soporte técnico, redes,
          desarrollo web, sistemas de seguridad y cursos de computación.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-cyan-400 text-sm md:text-base font-semibold mb-10 tracking-wide uppercase"
        >
          Más de 40 años viviendo la pasión por la informática
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("servicios")}
            className="cursor-pointer bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300"
          >
            Ver servicios
          </button>
          <button
            onClick={() => scrollTo("educacion")}
            className="cursor-pointer bg-transparent text-cyan-400 border-2 border-cyan-400/50 hover:border-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300"
          >
            Ver cursos
          </button>
        </motion.div>
      </div>
    </section>
  );
}
