import { useState, useEffect } from "react";
import { C, CONFIG, NAV_LINKS } from "../data/constants";
import { Logo } from "./ui/Shared";
import { IcoInstagram, IcoFacebook, IcoMenu, IcoClose } from "./icons/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const scrollTo = id => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 68,
        background: scrolled ? "rgba(8,15,26,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.darkBorder}` : "none",
        padding: "0 2rem", display: "flex", alignItems: "center",
        justifyContent: "space-between", transition: "all .3s",
      }}>
        {/* Logo + nombre */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo size={34} />
          <span style={{
            fontWeight: 800, fontSize: 26, letterSpacing: -0.5,
            background: `linear-gradient(135deg,${C.cyan},${C.green})`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            TESYSNET
          </span>
        </div>

        {/* Links de navegación */}
        <div className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 16, color: C.muted, fontWeight: 500, transition: "color .2s", fontFamily: "system-ui,-apple-system,sans-serif",
              }}
              onMouseEnter={e => e.currentTarget.style.color = C.cyan}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}>
              {l.label}
            </button>
          ))}
        </div>

        {/* Iconos redes sociales */}
        <div className="desktop-social" style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <a href={CONFIG.instagram} target="_blank" rel="noreferrer"
            style={{ color: C.muted, textDecoration: "none", display: "flex", transition: "color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#e1306c"}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            <IcoInstagram size={22} />
          </a>
          <a href={CONFIG.facebook} target="_blank" rel="noreferrer"
            style={{ color: C.muted, textDecoration: "none", display: "flex", transition: "color .2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#1877f2"}
            onMouseLeave={e => e.currentTarget.style.color = C.muted}>
            <IcoFacebook size={22} />
          </a>
        </div>

        {/* Botón menú móvil */}
        <button className="mobile-nav-btn" onClick={() => setMobileMenuOpen(true)}>
          <IcoMenu size={32} />
        </button>
      </nav>

      {/* Menú Overlay Móvil */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <button onClick={() => setMobileMenuOpen(false)} 
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: C.text, cursor: "pointer" }}>
          <IcoClose size={40} />
        </button>
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <button key={`mob-${l.id}`} onClick={() => scrollTo(l.id)}
              style={{ background: "none", border: "none", color: "#fff", fontSize: 24, fontWeight: 700, cursor: "pointer", fontFamily: "system-ui,-apple-system,sans-serif" }}>
              {l.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 24, marginTop: "1rem" }}>
            <a href={CONFIG.instagram} target="_blank" rel="noreferrer" style={{ color: "#fff" }}><IcoInstagram size={30} /></a>
            <a href={CONFIG.facebook} target="_blank" rel="noreferrer" style={{ color: "#fff" }}><IcoFacebook size={30} /></a>
          </div>
        </div>
      </div>
    </>
  );
}
