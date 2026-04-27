import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, UserPlus, Search, Gift, Save, LogOut, CheckCircle, Loader2, Eye, EyeOff } from "lucide-react";
import { supabase } from "../lib/supabase";
import { C } from "../data/constants";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Formulario
  const [dni, setDni] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [puntos, setPuntos] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "seudonimo*20";

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      setIsAuthenticated(true);
      setMessage({ type: "", text: "" });
    } else {
      setMessage({ type: "error", text: "Contraseña incorrecta." });
    }
  };

  const handleCargarPuntos = async (e) => {
    e.preventDefault();
    if (!dni || !puntos) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // 1. Buscar si el cliente ya existe
      const { data: cliente, error: searchError } = await supabase
        .from("clientes")
        .select("*")
        .eq("dni", dni.trim())
        .single();

      if (searchError && searchError.code !== "PGRST116") {
        throw searchError;
      }

      if (cliente) {
        // 2. Cliente existe, sumamos los puntos
        const nuevosPuntos = cliente.puntos + parseInt(puntos);

        // Usamos el nombre que ya tiene, o si el empleado escribió uno nuevo, lo actualizamos
        const nombreAUsar = nombre.trim() !== "" ? nombre.trim() : cliente.nombre;
        const apellidoAUsar = apellido.trim() !== "" ? apellido.trim() : cliente.apellido;

        const { error: updateError } = await supabase
          .from("clientes")
          .update({ puntos: nuevosPuntos, nombre: nombreAUsar, apellido: apellidoAUsar })
          .eq("dni", dni.trim());

        if (updateError) throw updateError;

        setMessage({ type: "success", text: `¡Éxito! ${nombreAUsar} ${apellidoAUsar || ''} ahora tiene ${nuevosPuntos} puntos en total.` });
      } else {
        // 3. Cliente NO existe, lo creamos
        if (!nombre.trim() || !apellido.trim()) {
          setMessage({ type: "error", text: "El cliente es nuevo. Por favor ingresa su Nombre y Apellido." });
          setLoading(false);
          return;
        }

        const { error: insertError } = await supabase
          .from("clientes")
          .insert([{ dni: dni.trim(), nombre: nombre.trim(), apellido: apellido.trim(), puntos: parseInt(puntos) }]);

        if (insertError) throw insertError;

        setMessage({ type: "success", text: `¡Cliente creado! ${nombre.trim()} ${apellido.trim()} empezó con ${puntos} puntos.` });
      }

      // Limpiar formulario tras éxito
      setDni("");
      setNombre("");
      setApellido("");
      setPuntos("");

    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Hubo un error al guardar en la base de datos." });
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-md shadow-2xl">
          <div className="flex justify-center mb-6 text-cyan-400">
            <Shield size={64} />
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-2">Panel de Empleados</h2>
          <p className="text-slate-400 text-center mb-8 text-sm">Ingresa la contraseña para cargar puntos.</p>

          <form onSubmit={handleLogin}>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-12 pr-12 text-white focus:outline-none focus:border-cyan-400 transition-colors text-center"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-500 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {message.type === "error" && <p className="text-red-400 text-sm text-center mb-4">{message.text}</p>}
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-colors">
              Ingresar
            </button>
          </form>

          <div className="text-center mt-6">
            <button onClick={() => window.location.hash = ""} className="text-slate-500 text-sm hover:text-white underline">Volver a la tienda</button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl flex justify-between items-center mb-8">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          TESYSNET ADMIN
        </div>
        <button onClick={() => setIsAuthenticated(false)} className="flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors">
          <LogOut size={18} /> Salir
        </button>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl w-full max-w-2xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[80px] pointer-events-none" />

        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Gift className="text-green-400" /> Cargar Puntos a Cliente
        </h2>

        <form onSubmit={handleCargarPuntos} className="space-y-6 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">DNI del Cliente *</label>
              <div className="relative">
                <Search className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="text" required
                  placeholder="Sin puntos"
                  value={dni} onChange={(e) => setDni(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Nombre</label>
              <div className="relative">
                <UserPlus className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="text"
                  placeholder="Sólo si es nuevo"
                  value={nombre} onChange={(e) => setNombre(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Apellido</label>
              <div className="relative">
                <UserPlus className="absolute left-3 top-3.5 text-slate-500" size={18} />
                <input
                  type="text"
                  placeholder="Sólo si es nuevo"
                  value={apellido} onChange={(e) => setApellido(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-white focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 block">Puntos a Sumar *</label>
            <div className="relative">
              <Gift className="absolute left-3 top-3.5 text-yellow-500" size={18} />
              <input
                type="number" required min="1"
                placeholder="Ejemplo: 500"
                value={puntos} onChange={(e) => setPuntos(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-yellow-500 font-bold focus:border-cyan-400 transition-colors text-xl"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">Si el cliente ya existe, estos puntos se sumarán a su saldo actual.</p>
          </div>

          {message.type && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl flex items-center gap-3 ${message.type === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
              {message.type === 'success' ? <CheckCircle size={20} /> : <Shield size={20} />}
              <span className="font-medium">{message.text}</span>
            </motion.div>
          )}

          <button
            type="submit" disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-slate-950 font-black py-4 rounded-xl hover:scale-[1.02] transition-transform flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:scale-100"
          >
            {loading ? <Loader2 className="animate-spin" size={24} /> : <><Save size={24} /> Guardar Puntos en el Sistema</>}
          </button>
        </form>

      </motion.div>
    </div>
  );
}
