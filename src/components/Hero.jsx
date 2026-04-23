import { C } from "../data/constants";
import { Logo } from "./ui/Shared";

export default function Hero() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center", padding: "8rem 2rem 4rem",
      background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.1) 0%, transparent 70%), ${C.dark}`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(${C.cyan} 1px,transparent 1px),linear-gradient(90deg,${C.cyan} 1px,transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />
      <div style={{ position: "relative", maxWidth: 800 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <Logo size={96} />
        </div>
        <h1 style={{
          fontSize: "clamp(2.2rem,5.5vw,4rem)", fontWeight: 900,
          color: "#fff", lineHeight: 1.1, margin: "0 0 1.5rem"
        }}>
          Tecnología al servicio<br />
          <span style={{
            background: `linear-gradient(135deg,${C.cyan},${C.green})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            de tu negocio
          </span>
        </h1>
        <p style={{ fontSize: 18, color: C.muted, maxWidth: 580, margin: "0 auto 0.75rem", lineHeight: 1.75 }}>
          Desde 1985 en General Rodríguez. Insumos, soporte técnico, redes,
          desarrollo web, sistemas de seguridad y cursos de computación.
        </p>
        <p style={{ fontSize: 14, color: C.cyan, margin: "0 auto 2.5rem", fontWeight: 600 }}>
          Más de 40 años viviendo la pasión por la informática
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("servicios")}
            style={{
              background: `linear-gradient(135deg,${C.cyan},${C.green})`,
              color: "#000", border: "none", borderRadius: 10,
              padding: "14px 34px", fontSize: 16, fontWeight: 700, cursor: "pointer"
            }}>
            Ver servicios
          </button>
          <button onClick={() => scrollTo("educacion")}
            style={{
              background: "transparent", color: C.cyan,
              border: `1.5px solid ${C.cyan}`, borderRadius: 10,
              padding: "14px 34px", fontSize: 16, fontWeight: 700, cursor: "pointer"
            }}>
            Ver cursos
          </button>
        </div>
      </div>
    </section>
  );
}
