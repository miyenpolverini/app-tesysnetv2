import { useState } from "react";
import { C, CONFIG, COURSES_PRESENCIAL } from "../data/constants";
import { SectionTitle, CourseCard, FadeInSection } from "./ui/Shared";

export default function Educacion() {
  const [eduTab, setEduTab] = useState("presencial");
  
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="educacion" style={{ padding: "6rem 2rem", background: C.dark }}>
      <FadeInSection>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <SectionTitle label="Educación" title="Cursos de computación"
            sub="Más de 40 años formando profesionales. Aprendé con nosotros, presencialmente o a distancia." />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
            <div style={{
              background: C.darkCard, border: `1px solid ${C.darkBorder}`,
              borderRadius: 12, padding: 4, display: "flex"
            }}>
              {[["presencial", "🏫 Presencial"], ["distancia", "💻 A distancia"]].map(([id, label]) => (
                <button key={id} onClick={() => setEduTab(id)}
                  style={{
                    padding: "10px 28px", borderRadius: 9, fontSize: 14,
                    fontWeight: 700, cursor: "pointer", border: "none", transition: "all .25s",
                    background: eduTab === id ? `linear-gradient(135deg,${C.cyan},${C.green})` : "transparent",
                    color: eduTab === id ? "#000" : C.muted
                  }}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {eduTab === "presencial" && (
            <>
              <p style={{ color: C.muted, textAlign: "center", marginBottom: "2rem", fontSize: 15 }}>
                📍 Clases en nuestro local de General Rodríguez — grupos reducidos y atención personalizada.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
                {COURSES_PRESENCIAL.map(c => (
                  <CourseCard key={c.name} c={c} onContact={() => scrollTo("contacto")} />
                ))}
              </div>
            </>
          )}

          {eduTab === "distancia" && (
            <div style={{ textAlign: "center" }}>
              <p style={{ color: C.muted, marginBottom: "2rem", fontSize: 15 }}>
                🌐 Cursos a distancia en convenio con el{" "}
                <strong style={{ color: C.text }}>ISIV</strong> — aprendé desde cualquier lugar del país.
              </p>
              <div style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 20, padding: "2.5rem", maxWidth: 520, margin: "0 auto"
              }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🎓</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.text, margin: "0 0 1rem" }}>
                  Instituto Superior de Informática Virtual
                </h3>
                <p style={{ color: C.muted, lineHeight: 1.75, marginBottom: "1.5rem", fontSize: 15 }}>
                  Accedé a la plataforma educativa del ISIV con una amplia oferta de cursos y carreras
                  a distancia, con el respaldo de TESYSNET.
                </p>
                <a href={CONFIG.isiv} target="_blank" rel="noreferrer"
                  style={{
                    display: "inline-block",
                    background: `linear-gradient(135deg,${C.cyan},${C.green})`,
                    color: "#000", borderRadius: 10, padding: "13px 32px",
                    fontSize: 15, fontWeight: 700, textDecoration: "none"
                  }}>
                  Ir a ISIV.edu.ar →
                </a>
              </div>
            </div>
          )}
        </div>
      </FadeInSection>
    </section>
  );
}
