import { useState, useEffect } from "react";
import { C } from "./data/constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Asesor from "./components/Asesor";
import Productos from "./components/Productos";
import Servicios from "./components/Servicios";
import Educacion from "./components/Educacion";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingAsesor from "./components/FloatingAsesor";
import Admin from "./components/Admin";

// ─── ANIMACIONES CSS ──────────────────────────────────────────────────────────
const GLOBAL_STYLES = `
  @keyframes wa-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.6); }
    70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  @keyframes wa-bounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-6px); }
  }
  .wa-fab { animation: wa-pulse 2s infinite, wa-bounce 3s ease-in-out infinite; }
  .wa-fab:hover { transform: scale(1.12) !important; animation: none !important; }
  * { box-sizing: border-box; }

  .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
  
  .desktop-nav { display: flex; gap: 1.75rem; }
  .mobile-nav-btn { display: none; background: none; border: none; color: #e2e8f0; cursor: pointer; padding: 4px; }
  .mobile-nav-overlay { 
    position: fixed; inset: 0; background: rgba(8,15,26,0.98); backdrop-filter: blur(8px); 
    z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; 
    opacity: 0; pointer-events: none; transition: opacity 0.3s ease; 
  }
  .mobile-nav-overlay.open { opacity: 1; pointer-events: auto; }
  
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
    .desktop-social { display: none !important; }
    .mobile-nav-btn { display: block !important; }
  }
`;

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  const [isAdminRoute, setIsAdminRoute] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const onHashChange = () => setIsAdminRoute(window.location.hash === "#admin");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (isAdminRoute) {
    return (
      <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: C.dark, color: C.text, overflowX: "hidden" }}>
        <style>{GLOBAL_STYLES}</style>
        <Admin />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "system-ui,-apple-system,sans-serif", background: C.dark, color: C.text, overflowX: "hidden" }}>
      <style>{GLOBAL_STYLES}</style>

      <Navbar />
      <Hero />
      <Nosotros />
      <Asesor />
      <Productos />
      <Servicios />
      <Educacion />
      <Contacto />
      <Footer />
      <FloatingWhatsApp />
      <FloatingAsesor />
    </div>
  );
}