import { useState } from "react";
import { TYPE_CONFIG } from "../data/typeConfig";

export default function RightCard({ right }) {
  const [expanded, setExpanded] = useState(false);
  const cfg = TYPE_CONFIG[right.type];

  return (
    <div style={{
      background: cfg.grad,
      backdropFilter: "blur(25px)",
      WebkitBackdropFilter: "blur(25px)",
      border: `1px solid ${cfg.border}`,
      borderLeft: `2.5px solid ${cfg.accent}`,
      boxShadow: `0 0 22px ${cfg.glow}, 0 0 0 1px rgba(255,255,255,0.03) inset`,
      borderRadius: "16px",
      padding: "14px 16px",
      marginBottom: "10px",
    }}>
      {/* Label pill */}
      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "10px" }}>
        <span style={{ fontSize: "12px", color: cfg.accent }}>{cfg.icon}</span>
        <span style={{
          fontSize: "9px", fontWeight: "700", color: cfg.accent,
          letterSpacing: "0.15em",
          background: cfg.pillBg, padding: "2px 8px", borderRadius: "5px",
          border: `1px solid ${cfg.pillBorder}`,
          fontFamily: "'DM Sans', sans-serif",
        }}>{cfg.label}</span>
      </div>

      {/* Main text */}
      <p style={{
        margin: "0 0 10px", fontSize: "14px",
        color: "rgba(255,255,255,0.86)", lineHeight: "1.62", fontWeight: "300",
      }}>{right.text}</p>

      {/* Plain explanation */}
      {right.plain && (
        <p style={{
          margin: "0 0 11px", fontSize: "12px",
          color: "rgba(255,255,255,0.45)", lineHeight: "1.55", fontStyle: "italic",
          paddingLeft: "10px", borderLeft: `2px solid ${cfg.accent}30`,
        }}>{right.plain}</p>
      )}

      {/* Legal basis toggle */}
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          background: `${cfg.accent}10`,
          border: `1px solid ${cfg.accent}22`,
          color: cfg.accent, fontSize: "10px",
          padding: "5px 11px", borderRadius: "8px",
          cursor: "pointer", fontWeight: "600", letterSpacing: "0.08em",
          fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
        }}
      >
        {expanded ? "▲ Hide" : "▼ Legal Basis"}
      </button>

      {expanded && (
        <div style={{
          marginTop: "10px",
          background: "rgba(0,0,0,0.32)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "10px", padding: "10px 13px",
        }}>
          <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", marginBottom: "5px", fontWeight: "600" }}>
            STATUTORY REFERENCE
          </div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.52)", fontStyle: "italic", lineHeight: "1.55" }}>
            {right.law}
          </div>
        </div>
      )}
    </div>
  );
}
