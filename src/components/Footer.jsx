import { C, CONFIG } from "../data/constants";
import { Logo } from "./ui/Shared";
import { IcoInstagram, IcoFacebook } from "./icons/Icons";

export default function Footer() {
  return (
    <footer style={{
      background: "#050c18", borderTop: `1px solid ${C.darkBorder}`,
      padding: "2.5rem 2rem", textAlign: "center"
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
        <Logo size={28} />
        <span style={{
          fontWeight: 800, fontSize: 18,
          background: `linear-gradient(135deg,${C.cyan},${C.green})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
        }}>
          TESYSNET
        </span>
      </div>
      <div style={{ fontSize: 14, color: C.muted, marginBottom: 16 }}>
        Insumos · Soporte Técnico · Redes · Desarrollo Web · Seguridad · Educación
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 16 }}>
        <a href={CONFIG.instagram} target="_blank" rel="noreferrer"
          style={{ color: C.muted, transition: "color .2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#e1306c"}
          onMouseLeave={e => e.currentTarget.style.color = C.muted}>
          <IcoInstagram size={20} />
        </a>
        <a href={CONFIG.facebook} target="_blank" rel="noreferrer"
          style={{ color: C.muted, transition: "color .2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#1877f2"}
          onMouseLeave={e => e.currentTarget.style.color = C.muted}>
          <IcoFacebook size={20} />
        </a>
      </div>
      <div style={{ fontSize: 13, color: "#334155" }}>
        © {new Date().getFullYear()} TESYSNET · Carlos Pellegrini 955, General Rodríguez, Bs. As. · Fundada en 1985
      </div>
    </footer>
  );
}
