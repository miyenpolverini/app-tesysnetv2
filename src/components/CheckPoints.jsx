import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IdCard, Search, Gift, X, Loader2 } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function CheckPoints({ isOpen, onClose }) {
  const [dni, setDni] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { found: boolean, data: object }
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!dni.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // Consultar a Supabase en la tabla "clientes" donde dni = dni ingresado
      const { data, error } = await supabase
        .from("clientes")
        .select("nombre, apellido, puntos")
        .eq("dni", dni.trim())
        .single();

      if (error) {
        if (error.code === "PGRST116") {
          // No se encontró ninguna fila
          setResult({ found: false });
        } else {
          throw error;
        }
      } else if (data) {
        setResult({ found: true, data });
      }
    } catch (err) {
      console.error(err);
      setError("Hubo un error al conectar con la base de datos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md p-8 shadow-2xl overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/20 blur-[60px] pointer-events-none" />

            <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center text-slate-950 mx-auto mb-4 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                <Gift size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Consulta tus Puntos</h3>
              <p className="text-slate-400 text-sm">Ingresa tu número de DNI para verificar tu saldo de Tesys Rewards.</p>
            </div>

            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <IdCard className="absolute left-3 top-3.5 text-slate-500" size={20} />
                <input 
                  type="text" 
                  required
                  placeholder="Tu DNI (sin puntos)"
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-cyan-400 transition-colors text-lg" 
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-colors flex justify-center items-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Search size={20} /> Consultar saldo</>}
              </button>
            </form>

            {/* Resultados */}
            <AnimatePresence mode="wait">
              {error && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-center text-sm font-medium">
                  {error}
                </motion.div>
              )}

              {result && result.found && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-500/10 border border-green-500/30 p-6 rounded-2xl text-center">
                  <p className="text-slate-300 text-sm mb-1">¡Hola, {result.data.nombre} {result.data.apellido || ""}!</p>
                  <p className="text-slate-400 text-xs mb-3">Tu saldo actual es de:</p>
                  <div className="text-4xl font-black text-green-400 flex items-center justify-center gap-2">
                    {result.data.puntos} <span className="text-lg">pts</span>
                  </div>
                  <p className="text-yellow-400 text-xs mt-4 font-bold bg-yellow-500/10 py-2 rounded-lg border border-yellow-500/20">
                    ✨ ¡Canjéalos o descontalos en tu próxima compra ahora! ✨
                  </p>
                </motion.div>
              )}

              {result && !result.found && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl text-center">
                  <p className="text-slate-300 font-medium mb-2">No encontramos ningún cliente con ese DNI.</p>
                  <p className="text-slate-500 text-xs">Si compraste recientemente, tal vez tus puntos aún no se hayan acreditado en el sistema.</p>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
