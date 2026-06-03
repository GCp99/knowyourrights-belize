import GlassCard from "../components/GlassCard";
import RightCard from "../components/RightCard";
import { TYPE_CONFIG } from "../data/typeConfig";

export default function SituationScreen({ situation, category, onBack }) {
  return (
    <div className="fade-up">
      {/* Header */}
      <div style={{ padding: "14px 22px 16px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#60a5fa",
          fontSize: "13px", cursor: "pointer", padding: "0 0 13px 0",
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'DM Sans', sans-serif",
        }}>← Back</button>

        <h2 style={{
          margin: "0 0 12px", fontSize: "19px", fontWeight: "700",
          color: "rgba(255,255,255,0.92)",
          fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em", lineHeight: "1.25",
        }}>{situation.title}</h2>

        {/* Summary */}
        <GlassCard glow="rgba(96,165,250,0.14)" style={{ padding: "13px 15px" }}>
          <div style={{ fontSize: "9px", color: "#60a5fa", letterSpacing: "0.15em", fontWeight: "600", marginBottom: "7px", fontFamily: "'DM Sans', sans-serif" }}>
            ◈ SITUATION OVERVIEW
          </div>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.62)", lineHeight: "1.62", fontWeight: "300" }}>
            {situation.summary}
          </p>
        </GlassCard>
      </div>

      {/* Legend */}
      <div style={{ padding: "0 14px 13px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {Object.entries(TYPE_CONFIG).map(([k, v]) => (
          <span key={k} style={{
            fontSize: "9px", padding: "3px 8px", borderRadius: "6px",
            background: v.pillBg, border: `1px solid ${v.pillBorder}`,
            color: v.accent, fontWeight: "600", letterSpacing: "0.1em",
            boxShadow: `0 0 8px ${v.glow}`,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            {v.icon} {v.label}
          </span>
        ))}
      </div>

      {/* Rights Cards */}
      <div style={{ padding: "0 14px" }}>
        {situation.rights.map((r, i) => (
          <div key={i} style={{ animation: `fadeUp 0.35s ease ${i * 0.06}s both` }}>
            <RightCard right={r} />
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "6px 14px 8px" }}>
        <GlassCard glow="rgba(255,255,255,0.02)" style={{ padding: "12px 15px" }}>
          <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)", letterSpacing: "0.13em", marginBottom: "5px", fontWeight: "600", fontFamily: "'DM Sans', sans-serif" }}>DISCLAIMER</div>
          <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.26)", lineHeight: "1.6", fontWeight: "300" }}>
            This is general legal information, not legal advice. It does not create a lawyer-client relationship. For your specific situation, contact a licensed attorney or Legal Aid Belize. Laws may be amended — verify at laws.gov.bz.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
