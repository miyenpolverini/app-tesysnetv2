import { useState } from "react";
import { C, PRODUCTS, PRODUCT_CATS, CONFIG } from "../data/constants";
import { SectionTitle, FadeInSection } from "./ui/Shared";
import { Gift } from "lucide-react";

export default function Productos() {
  const [activeCat, setActiveCat] = useState("Todos");
  const filtered = activeCat === "Todos" ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCat);

  const hoverCard = e => { e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.transform = "translateY(-4px)"; };
  const leaveCard = e => { e.currentTarget.style.borderColor = C.darkBorder; e.currentTarget.style.transform = "none"; };
  
  const sendWA = (item) => {
    const text = encodeURIComponent(`¡Hola Tesysnet! 👋 Estoy interesado/a en consultar por: ${item}`);
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="productos" style={{ padding: "6rem 2rem", background: C.dark }}>
      <FadeInSection>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <SectionTitle label="Productos" title="Galería de productos"
            sub="Insumos, componentes y periféricos. Consultanos por precios actualizados y disponibilidad." />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
            {PRODUCT_CATS.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                style={{
                  padding: "8px 20px", borderRadius: 999, fontSize: 13, fontWeight: 600,
                  cursor: "pointer", border: "1.5px solid", transition: "all .2s",
                  background: activeCat === cat ? `linear-gradient(135deg,${C.cyan},${C.green})` : "transparent",
                  color: activeCat === cat ? "#000" : C.muted,
                  borderColor: activeCat === cat ? "transparent" : C.darkBorder
                }}>
                {cat}
              </button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 20 }}>
            {filtered.map(p => (
              <div key={p.name}
                style={{
                  background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                  borderRadius: 16, overflow: "hidden", transition: "transform .2s, border-color .2s"
                }}
                onMouseEnter={hoverCard} onMouseLeave={leaveCard}>
                <div style={{
                  height: 150, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 56,
                  background: "rgba(0,229,255,0.04)"
                }}>
                  {p.emoji}
                </div>
                <div style={{ padding: "1rem" }}>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: C.cyan,
                    background: "rgba(0,229,255,0.1)", borderRadius: 999,
                    padding: "2px 10px", display: "inline-block", marginBottom: 8
                  }}>
                    {p.category}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, lineHeight: 1.4, color: C.text }}>
                    {p.name}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: C.green }}>{p.price}</span>
                    <span style={{ fontSize: 12, color: "#eab308", display: "flex", alignItems: "center", gap: 4, background: "rgba(234,179,8,0.1)", padding: "2px 6px", borderRadius: 4, fontWeight: 700 }}>
                      <Gift size={12} /> +{p.points} pts
                    </span>
                  </div>
                  <button onClick={() => sendWA(p.name)}
                    style={{
                      width: "100%", background: `linear-gradient(135deg,${C.cyan},${C.green})`,
                      color: "#000", border: "none", borderRadius: 8,
                      padding: "9px 0", fontSize: 13, fontWeight: 700, cursor: "pointer"
                    }}>
                    Consultar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button onClick={() => sendWA("Catálogo completo de productos")}
              style={{
                background: "transparent", border: `1.5px solid ${C.cyan}`,
                color: C.cyan, borderRadius: 10, padding: "12px 34px",
                fontSize: 15, fontWeight: 600, cursor: "pointer"
              }}>
              Consultar catálogo completo →
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
