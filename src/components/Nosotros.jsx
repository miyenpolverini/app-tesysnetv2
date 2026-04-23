import { useState, useEffect, useRef } from "react";
import { C, TESTIMONIALS, STATS } from "../data/constants";
import { SectionTitle, StatCard, FadeInSection } from "./ui/Shared";
import { useInView } from "../hooks/useInView";

export default function Nosotros() {
  const [testimonial, setTestimonial] = useState(0);
  const statsRef = useRef(null);
  const statsVisible = useInView(statsRef);

  useEffect(() => {
    const t = setInterval(() => setTestimonial(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* ── NOSOTROS ── */}
      <section id="nosotros" style={{ padding: "6rem 2rem", background: "#0a1628" }}>
        <FadeInSection>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <SectionTitle label="Nosotros" title="¿Quiénes somos?"
              sub="Una empresa familiar con más de 40 años de historia en General Rodríguez." />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "start" }}>
              <div>
                <p style={{ color: C.muted, lineHeight: 1.85, marginBottom: "1rem", fontSize: 16 }}>
                  TESYS es una empresa familiar fundada en General Rodríguez en el año{" "}
                  <strong style={{ color: C.text }}>1985</strong>, siendo el{" "}
                  <strong style={{ color: C.cyan }}>primer instituto de capacitación en informática</strong>{" "}
                  fundado en esta ciudad. Durante nuestra larga trayectoria hemos participado en importantes
                  proyectos educativos que luego se implementaron a nivel nacional.
                </p>
                <p style={{ color: C.muted, lineHeight: 1.85, marginBottom: "1rem", fontSize: 16 }}>
                  Con proyectos de alto contenido pedagógico como la <em>Informática Educativa</em> y la{" "}
                  <em>PC en el Aula</em>, TESYS promueve la implementación de talleres de computación en
                  distintas comunidades educativas.
                </p>
                <p style={{ color: C.muted, lineHeight: 1.85, margin: "0 0 1.5rem", fontSize: 16 }}>
                  Hemos firmado convenios de capacitación con instituciones como la{" "}
                  <strong style={{ color: C.text }}>UTN</strong> y la{" "}
                  <strong style={{ color: C.text }}>Universidad de Morón</strong>.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Fundada en 1985", "Convenio UTN", "Convenio U. Morón", "+3.000 alumnos"].map(t => (
                    <span key={t} style={{
                      background: "rgba(0,229,255,0.08)",
                      border: `1px solid ${C.darkBorder}`, color: C.cyan,
                      borderRadius: 999, padding: "6px 16px", fontSize: 13, fontWeight: 600
                    }}>
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonios */}
              <div style={{
                background: C.darkCard, border: `1px solid ${C.darkBorder}`,
                borderRadius: 20, padding: "2rem"
              }}>
                <div style={{
                  fontSize: 13, color: C.muted, fontWeight: 600,
                  textTransform: "uppercase", letterSpacing: 1, marginBottom: 16
                }}>
                  Lo que dicen nuestros clientes
                </div>
                <div style={{ fontSize: 32, color: C.cyan, lineHeight: 1, marginBottom: 12 }}>"</div>
                <p style={{ fontSize: 16, color: C.text, lineHeight: 1.75, margin: "0 0 1.5rem", minHeight: 80 }}>
                  {TESTIMONIALS[testimonial].text}
                </p>
                <div style={{ fontWeight: 700, color: C.cyan }}>— {TESTIMONIALS[testimonial].name}</div>
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  {TESTIMONIALS.map((_, i) => (
                    <button key={i} onClick={() => setTestimonial(i)}
                      style={{
                        width: i === testimonial ? 26 : 8, height: 8, borderRadius: 999,
                        padding: 0, border: "none", cursor: "pointer", transition: "all .3s",
                        background: i === testimonial ? C.cyan : "rgba(255,255,255,0.15)"
                      }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} style={{
        padding: "4rem 2rem",
        background: `linear-gradient(135deg,rgba(0,229,255,0.06),rgba(0,230,118,0.06)),${C.dark}`,
        borderTop: `1px solid ${C.darkBorder}`, borderBottom: `1px solid ${C.darkBorder}`,
      }}>
        <div style={{
          maxWidth: 900, margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 8
        }}>
          {STATS.map(s => <StatCard key={s.label} {...s} started={statsVisible} />)}
        </div>
      </section>
    </>
  );
}
