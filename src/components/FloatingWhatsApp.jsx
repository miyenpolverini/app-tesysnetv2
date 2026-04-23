import { CONFIG } from "../data/constants";
import { IcoWhatsapp } from "./icons/Icons";

export default function FloatingWhatsApp() {
  return (
    <a href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer"
      className="wa-fab"
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 300,
        background: "#25d366", width: 60, height: 60, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none", transition: "transform .2s"
      }}>
      <IcoWhatsapp size={30} />
    </a>
  );
}
