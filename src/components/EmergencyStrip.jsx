import { useState, useEffect } from "react";

export default function EmergencyStrip({ onContactsClick }) {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setPulse(p => !p), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ position: "relative", zIndex: 10, margin: "0 14px 8px" }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(239,68,68,0.18), rgba(220,38,38,0.08))",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(239,68,68,0.3)",
        boxShadow: `0 0 20px rgba(239,68,68,0.13), 0 0 0 1px rgba(255,255,255,0.04) inset`,
        borderRadius: "16px",
        padding: "9px 13px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%", background: "#ef4444", flexShrink: 0,
            boxShadow: `0 0 ${pulse ? '14px' : '6px'} rgba(239,68,68,0.9)`,
            transition: "box-shadow 0.6s ease",
          }} />
          <span style={{ fontSize: "10px", fontWeight: "600", color: "rgba(252,165,165,0.9)", letterSpacing: "0.12em", fontFamily: "'DM Sans', sans-serif" }}>
            LEGAL AID BELIZE
          </span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <a href="tel:0800LEGALAID" style={{
            background: "linear-gradient(135deg, rgba(239,68,68,0.45), rgba(220,38,38,0.3))",
            border: "1px solid rgba(239,68,68,0.5)", color: "white",
            padding: "5px 11px", borderRadius: "10px", fontSize: "11px",
            cursor: "pointer", fontWeight: "600", letterSpacing: "0.04em",
            boxShadow: "0 2px 12px rgba(239,68,68,0.28)",
            textDecoration: "none", display: "inline-block",
          }}>📞 CALL</a>
          <button onClick={onContactsClick} style={{
            background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
            color: "rgba(252,165,165,0.7)", padding: "5px 11px", borderRadius: "10px",
            fontSize: "11px", cursor: "pointer", letterSpacing: "0.04em", fontFamily: "'DM Sans', sans-serif",
          }}>All Contacts</button>
        </div>
      </div>
    </div>
  );
}
