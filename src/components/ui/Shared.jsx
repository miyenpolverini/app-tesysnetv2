import { useState, useRef } from "react";
import logo from "../../logoNew.png";
import { C, CONFIG } from "../../data/constants";
import { useCountUp } from "../../hooks/useCountUp";
import { useInView } from "../../hooks/useInView";

export function Logo({ size = 40 }) {
  return <img src={logo} alt="TESYSNET" style={{ height: size, width: "auto" }} />;
}

export function SectionLabel({ children }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "rgba(0,229,255,0.08)", border: `1px solid ${C.darkBorder}`,
      borderRadius: 999, padding: "5px 16px", fontSize: 12, fontWeight: 600,
      color: C.cyan, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16
    }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.cyan, display: "inline-block" }} />
      {children}
    </div>
  );
}

export function SectionTitle({ label, title, sub }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <SectionLabel>{label}</SectionLabel>
      <h2 style={{
        fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 800,
        color: C.text, margin: "0 0 1rem", lineHeight: 1.2
      }}>
        {title}
      </h2>
      {sub && <p style={{ color: C.muted, fontSize: 16, maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>{sub}</p>}
    </div>
  );
}

export function StatCard({ value, label, suffix, started }) {
  const n = useCountUp(value, started);
  return (
    <div style={{ textAlign: "center", padding: "1.5rem 1rem" }}>
      <div style={{
        fontSize: 44, fontWeight: 800, lineHeight: 1,
        background: `linear-gradient(135deg,${C.cyan},${C.green})`,
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
      }}>
        {n.toLocaleString()}{suffix}
      </div>
      <div style={{ marginTop: 8, fontSize: 14, color: C.muted }}>{label}</div>
    </div>
  );
}

const levelColor = l =>
  l === "Principiante" ? "#10b981" : l === "Intermedio" ? "#f59e0b" : "#8b5cf6";

export function CourseCard({ c, onContact }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background: C.darkCard, border: `1px solid ${C.darkBorder}`,
      borderRadius: 14, padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", gap: 10
    }}>
      <div style={{ fontWeight: 700, fontSize: 15, color: C.text }}>{c.name}</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 13, color: C.muted }}>⏱ {c.duration}</span>
        <span style={{
          fontSize: 11, fontWeight: 700, color: "#fff",
          background: levelColor(c.level), borderRadius: 999, padding: "2px 10px"
        }}>
          {c.level}
        </span>
      </div>
      {open && <p style={{ fontSize: 13, color: C.muted, lineHeight: 1.65, margin: 0 }}>{c.desc}</p>}
      <button onClick={() => setOpen(o => !o)}
        style={{
          background: "transparent", border: `1px solid ${C.darkBorder}`,
          color: C.cyan, borderRadius: 8, padding: "6px 0", fontSize: 13,
          fontWeight: 600, cursor: "pointer"
        }}>
        {open ? "Ocultar detalle ▲" : "Ver detalle ▼"}
      </button>
      <button onClick={onContact}
        style={{
          background: `linear-gradient(135deg,${C.cyan},${C.green})`,
          color: "#000", border: "none", borderRadius: 8, padding: "9px 0",
          fontSize: 13, fontWeight: 700, cursor: "pointer"
        }}>
        Inscribirme
      </button>
    </div>
  );
}

export function MapEmbed() {
  return (
    <iframe title="Ubicación TESYSNET" width="100%" height="340"
      style={{ border: 0, borderRadius: 14, filter: "invert(90%) hue-rotate(180deg)" }}
      loading="lazy" allowFullScreen
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${CONFIG.mapLng - 0.005}%2C${CONFIG.mapLat - 0.003}%2C${CONFIG.mapLng + 0.005}%2C${CONFIG.mapLat + 0.003}&layer=mapnik&marker=${CONFIG.mapLat}%2C${CONFIG.mapLng}`}
    />
  );
}

export function FadeInSection({ children }) {
  const ref = useRef(null);
  const isVisible = useInView(ref, 0.15);
  return (
    <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
