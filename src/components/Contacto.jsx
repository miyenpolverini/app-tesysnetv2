import { useState } from "react";
import { C, CONFIG } from "../data/constants";
import { SectionTitle, MapEmbed, FadeInSection } from "./ui/Shared";
import { IcoInstagram, IcoFacebook, IcoWhatsapp } from "./icons/Icons";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });

  const sendWA = () => {
    if (!form.nombre || !form.email) return;
    const msg = `Hola TESYSNET! 👋\n\n*Nombre:* ${form.nombre}\n*Email:* ${form.email}${form.asunto ? `\n*Asunto:* ${form.asunto}` : ""}${form.mensaje ? `\n*Mensaje:* ${form.mensaje}` : ""}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  const inputSt = {
    width: "100%", padding: "11px 14px", borderRadius: 8,
    border: `1px solid ${C.darkBorder}`, fontSize: 15,
    background: "rgba(255,255,255,0.04)", color: C.text, outline: "none",
  };

  return (
    <section id="contacto" style={{ padding: "6rem 2rem", background: "#0a1628" }}>
      <FadeInSection>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <SectionTitle label="Contacto" title="Hablemos"
            sub="Completá el formulario y te respondemos por WhatsApp a la brevedad." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 48 }}>

            {/* Formulario */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { k: "nombre", label: "Nombre *", placeholder: "Tu nombre", type: "text" },
                  { k: "email", label: "Email *", placeholder: "tu@email.com", type: "email" },
                ].map(f => (
                  <div key={f.k}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: C.muted, display: "block", marginBottom: 6 }}>
                      {f.label}
                    </label>
                    <input value={form[f.k]} type={f.type} placeholder={f.placeholder}
                      onChange={e => setForm({ ...form, [f.k]: e.target.value })} style={inputSt} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: C.muted, display: "block", marginBottom: 6 }}>Asunto</label>
                <input value={form.asunto} placeholder="Ej: Consulta soporte técnico"
                  onChange={e => setForm({ ...form, asunto: e.target.value })} style={inputSt} />
              </div>
              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: C.muted, display: "block", marginBottom: 6 }}>Mensaje</label>
                <textarea value={form.mensaje} rows={4}
                  placeholder="Contanos en qué te podemos ayudar..."
                  onChange={e => setForm({ ...form, mensaje: e.target.value })}
                  style={{ ...inputSt, resize: "vertical" }} />
              </div>
              <button onClick={sendWA}
                style={{
                  background: `linear-gradient(135deg,${C.cyan},${C.green})`,
                  color: "#000", border: "none", borderRadius: 10,
                  padding: "14px", fontSize: 16, fontWeight: 800, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"
                }}>
                <IcoWhatsapp size={24} color="#000" /> Enviar por WhatsApp
              </button>

              {/* Iconos redes sociales */}
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <a href={CONFIG.instagram} target="_blank" rel="noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "11px 0", background: "#e1306c", borderRadius: 8,
                    textDecoration: "none", transition: "opacity .2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".8"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  <IcoInstagram size={22} color="#fff" />
                </a>
                <a href={CONFIG.facebook} target="_blank" rel="noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "11px 0", background: "#1877f2", borderRadius: 8,
                    textDecoration: "none", transition: "opacity .2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".8"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  <IcoFacebook size={22} color="#fff" />
                </a>
              </div>
            </div>

            {/* Info + mapa */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { icon: "📍", label: "Dirección", val: "Carlos Pellegrini 955\nGeneral Rodríguez" },
                  { icon: "🕐", label: "Semana", val: CONFIG.horario1 },
                  { icon: "🕐", label: "Sábados", val: CONFIG.horario2 },
                ].map(c => (
                  <div key={c.label} style={{
                    background: C.darkCard,
                    border: `1px solid ${C.darkBorder}`, borderRadius: 12,
                    padding: "1rem", textAlign: "center"
                  }}>
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{c.icon}</div>
                    <div style={{
                      fontSize: 11, color: C.muted, fontWeight: 600,
                      textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4
                    }}>{c.label}</div>
                    <div style={{
                      fontSize: 13, fontWeight: 600, color: C.text,
                      whiteSpace: "pre-line", lineHeight: 1.5
                    }}>{c.val}</div>
                  </div>
                ))}
              </div>
              <MapEmbed />
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
