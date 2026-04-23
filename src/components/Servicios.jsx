import { C, SERVICES, CONFIG } from "../data/constants";
import { SectionTitle, FadeInSection } from "./ui/Shared";

export default function Servicios() {
  const hoverCard = e => { e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.transform = "translateY(-4px)"; };
  const leaveCard = e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; };
  
  const sendWA = (servicio) => {
    const text = encodeURIComponent(`¡Hola Tesysnet! 👋 Estoy interesado/a en consultar por su servicio de: ${servicio}`);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="servicios" style={{ padding: "6rem 2rem", background: "#0a1628" }}>
      <FadeInSection>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <SectionTitle label="Servicios" title="¿Qué hacemos?"
            sub="Soluciones tecnológicas integrales para tu hogar, negocio o empresa." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {SERVICES.map(s => (
              <div key={s.title}
                style={{
                  background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                  borderRadius: 18, padding: "2rem", transition: "border-color .2s, transform .2s"
                }}
                onMouseEnter={hoverCard} onMouseLeave={leaveCard}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{
                  fontSize: 20, fontWeight: 800, margin: "0 0 12px",
                  background: `linear-gradient(135deg,${C.cyan},${C.green})`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                }}>
                  {s.title}
                </h3>
                <p style={{ color: C.muted, lineHeight: 1.7, margin: "0 0 1.25rem", fontSize: 15 }}>{s.desc}</p>
                <ul style={{
                  listStyle: "none", padding: 0, margin: "0 0 1.5rem",
                  display: "flex", flexDirection: "column", gap: 8
                }}>
                  {s.features.map(f => (
                    <li key={f} style={{ fontSize: 14, color: C.text, display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ color: C.cyan, fontWeight: 700 }}>›</span> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => sendWA(s.title)}
                  style={{
                    background: "transparent", border: `1.5px solid ${C.cyan}`,
                    color: C.cyan, borderRadius: 8, padding: "9px 20px",
                    fontSize: 14, fontWeight: 600, cursor: "pointer"
                  }}>
                  Consultar →
                </button>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
