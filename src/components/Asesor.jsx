import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Briefcase, PenTool, Monitor, Loader2, Gift, User, Mail, IdCard, CheckCircle, ChevronRight, Cpu } from "lucide-react";
import { ADVISOR_QUESTIONS, ADVISOR_RESULTS } from "../data/advisorData";
import { CONFIG } from "../data/constants";

const ICONS = {
  Gamepad2: <Gamepad2 size={32} />,
  Briefcase: <Briefcase size={32} />,
  PenTool: <PenTool size={32} />,
};

export default function Asesor() {
  const [step, setStep] = useState("intro"); // intro, q-category, q-usage, q-budget, analyzing, results, checkout, success
  const [answers, setAnswers] = useState({ category: "", usage: "", budget: "" });
  const [selectedProductTier, setSelectedProductTier] = useState("");
  const [userInfo, setUserInfo] = useState({ nombre: "", apellido: "", dni: "", email: "" });
  const [loadingText, setLoadingText] = useState("");

  const handleAnswer = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    
    if (key === "category") setStep("q-usage");
    else if (key === "usage") setStep("q-budget");
    else if (key === "budget") {
      setStep("analyzing");
      startAnalysis();
    }
  };

  const startAnalysis = () => {
    const phrases = ["Analizando tus respuestas...", "Buscando la mejor configuración...", "Calculando el mejor rendimiento para ti..."];
    let i = 0;
    setLoadingText(phrases[0]);
    const interval = setInterval(() => {
      i++;
      if (i < phrases.length) {
        setLoadingText(phrases[i]);
      }
    }, 1200);

    setTimeout(() => {
      clearInterval(interval);
      setSelectedProductTier(answers.budget);
      setStep("results");
    }, 3600);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    
    const selectedProduct = resultData.products.find(p => p.tier === selectedProductTier);
    const points = selectedProduct?.points || 500;
    const productName = selectedProduct?.name || "Equipo Recomendado";
    
    const msg = `¡Hola Tesysnet! 👋 Vengo del Asistente Virtual y quiero avanzar con la compra:
    
*💻 Producto:* ${productName}
*🎁 Puntos Rewards:* +${points} pts pendientes

*Mis Datos:*
- Nombre: ${userInfo.nombre} ${userInfo.apellido}
- DNI: ${userInfo.dni}
- Email: ${userInfo.email}

Por favor, indíquenme cómo seguimos para el pago y la entrega.`;

    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    
    setStep("success");
  };

  const resultData = answers.category ? ADVISOR_RESULTS[answers.category] : null;

  return (
    <section id="asesor" className="py-24 px-6 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Asistente Virtual
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">¿No sabes qué elegir?</h2>
          <p className="text-slate-400 text-lg">Te guiamos paso a paso para armar el equipo perfecto según tus necesidades.</p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* ── INTRO ── */}
            {step === "intro" && (
              <motion.div 
                key="intro"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -50 }}
                className="text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-green-400 rounded-2xl flex items-center justify-center text-slate-950 mb-6 shadow-[0_0_30px_rgba(0,229,255,0.3)]">
                  <Cpu size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Encuentra tu equipo ideal</h3>
                <p className="text-slate-400 max-w-md mx-auto mb-8">
                  Responde 3 simples preguntas y te recomendaremos las mejores opciones para ti. ¡Sin tecnicismos aburridos!
                </p>
                <button 
                  onClick={() => setStep("q-category")}
                  className="bg-white text-slate-950 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform flex items-center gap-2"
                >
                  Comenzar test <ChevronRight size={20} />
                </button>
              </motion.div>
            )}

            {/* ── QUESTION: CATEGORY ── */}
            {step === "q-category" && (
              <motion.div key="q-category" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">{ADVISOR_QUESTIONS[0].question}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {ADVISOR_QUESTIONS[0].options.map(opt => (
                    <button 
                      key={opt.id} onClick={() => handleAnswer("category", opt.id)}
                      className="flex flex-col items-center p-6 border-2 border-slate-800 rounded-2xl bg-slate-900 hover:border-cyan-400 hover:bg-slate-800 transition-colors group cursor-pointer"
                    >
                      <div className="text-slate-400 group-hover:text-cyan-400 transition-colors mb-4">
                        {ICONS[opt.icon]}
                      </div>
                      <span className="font-semibold text-slate-200">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── QUESTION: USAGE ── */}
            {step === "q-usage" && (
              <motion.div key="q-usage" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">{ADVISOR_QUESTIONS[1].question}</h3>
                <div className="flex flex-col gap-4 max-w-xl mx-auto">
                  {ADVISOR_QUESTIONS[1].options[answers.category].map(opt => (
                    <button 
                      key={opt.id} onClick={() => handleAnswer("usage", opt.id)}
                      className="p-5 border-2 border-slate-800 rounded-xl bg-slate-900 hover:border-cyan-400 hover:bg-slate-800 transition-colors text-left font-medium text-slate-200 cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── QUESTION: BUDGET ── */}
            {step === "q-budget" && (
              <motion.div key="q-budget" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">{ADVISOR_QUESTIONS[2].question}</h3>
                <div className="flex flex-col gap-4 max-w-xl mx-auto">
                  {ADVISOR_QUESTIONS[2].options.map(opt => (
                    <button 
                      key={opt.id} onClick={() => handleAnswer("budget", opt.id)}
                      className="p-5 border-2 border-slate-800 rounded-xl bg-slate-900 hover:border-cyan-400 hover:bg-slate-800 transition-colors text-left font-medium text-slate-200 cursor-pointer"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── ANALYZING (LOADING) ── */}
            {step === "analyzing" && (
              <motion.div key="analyzing" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center flex flex-col items-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse" />
                  <Monitor size={64} className="text-cyan-400 animate-bounce relative z-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Procesando tus datos</h3>
                <p className="text-cyan-400 font-mono animate-pulse">{loadingText}</p>
              </motion.div>
            )}

            {/* ── RESULTS ── */}
            {step === "results" && resultData && (
              <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -50 }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{resultData.title}</h3>
                  <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {resultData.message}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {resultData.products.map(prod => (
                    <div 
                      key={prod.name} 
                      onClick={() => setSelectedProductTier(prod.tier)}
                      className={`p-6 rounded-2xl border-2 flex flex-col cursor-pointer transition-all ${prod.tier === selectedProductTier ? 'border-cyan-400 bg-cyan-400/5 shadow-[0_0_20px_rgba(0,229,255,0.1)] scale-[1.02]' : 'border-slate-800 bg-slate-900/50 hover:border-slate-600'}`}
                    >
                      {prod.tier === selectedProductTier ? (
                        <span className="bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
                          Seleccionado
                        </span>
                      ) : (
                        <span className="bg-slate-800 text-slate-400 text-xs font-bold px-3 py-1 rounded-full w-max mb-4 opacity-0 group-hover:opacity-100">
                          Seleccionar
                        </span>
                      )}
                      <h4 className="text-lg font-bold text-white mb-2">{prod.name}</h4>
                      <p className="text-sm text-slate-400 mb-4 flex-1">{prod.desc}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                        <span className="font-bold text-green-400">{prod.price}</span>
                        <div className="flex items-center gap-1 text-xs text-yellow-500 font-semibold bg-yellow-500/10 px-2 py-1 rounded-md">
                          <Gift size={14} /> +{prod.points} pts
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button 
                    disabled={!selectedProductTier}
                    onClick={() => setStep("checkout")} 
                    className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    ¡Quiero este equipo! Avanzar al checkout
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── CHECKOUT (REWARDS FORM) ── */}
            {step === "checkout" && (
              <motion.div key="checkout" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.9 }}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Únete a Tesys Rewards 🎁</h3>
                  <p className="text-slate-400">
                    Completa tus datos para agendar tu compra y sumar los puntos de recompensa en tu cuenta. Podrás usarlos para futuros descuentos.
                  </p>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="max-w-md mx-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Nombre</label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-slate-500" size={18} />
                        <input required type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" value={userInfo.nombre} onChange={e => setUserInfo({...userInfo, nombre: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Apellido</label>
                      <input required type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" value={userInfo.apellido} onChange={e => setUserInfo({...userInfo, apellido: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">DNI</label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-3 text-slate-500" size={18} />
                      <input required type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" value={userInfo.dni} onChange={e => setUserInfo({...userInfo, dni: e.target.value})} />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 block">Correo Electrónico</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-slate-500" size={18} />
                      <input required type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-cyan-400 transition-colors" value={userInfo.email} onChange={e => setUserInfo({...userInfo, email: e.target.value})} />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-white text-slate-950 font-bold py-3.5 rounded-lg mt-4 hover:bg-slate-200 transition-colors cursor-pointer flex justify-center items-center gap-2">
                    Confirmar solicitud <CheckCircle size={18} />
                  </button>
                </form>
              </motion.div>
            )}

            {/* ── SUCCESS ── */}
            {step === "success" && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">¡Todo listo, {userInfo.nombre}!</h3>
                <p className="text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
                  Hemos registrado tu solicitud y tu cuenta de recompensas fue creada con éxito. Un asesor de TESYSNET se comunicará contigo vía Email/WhatsApp a la brevedad para finalizar el pago y entrega.
                </p>
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-4 text-left">
                  <div className="bg-yellow-500/20 text-yellow-500 p-3 rounded-lg">
                    <Gift size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Puntos pendientes a sumar:</div>
                    <div className="text-xl font-bold text-white">+{resultData.products.find(p => p.tier === selectedProductTier)?.points || 500} pts</div>
                  </div>
                </div>
                <button onClick={() => { setStep("intro"); setAnswers({category:"",usage:"",budget:""}); setUserInfo({nombre:"",apellido:"",dni:"",email:""}); setSelectedProductTier(""); }} className="mt-8 text-cyan-400 hover:text-cyan-300 text-sm font-semibold underline cursor-pointer">
                  Volver a realizar el test
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
