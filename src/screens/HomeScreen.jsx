import GlassCard from "../components/GlassCard";
import { CATEGORIES, ACTS_REFERENCED } from "../data/legalData";

export default function HomeScreen({ onSelectCategory }) {
  return (
    <div className="fade-up">
      {/* Hero */}
      <div style={{ padding: "14px 22px 18px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
          <h1 style={{
            margin: 0, fontSize: "26px", fontWeight: "700",
            background: "linear-gradient(90deg, #e8e4f8 0%, #c084fc 50%, #67e8f9 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            letterSpacing: "-0.04em", lineHeight: 1,
            fontFamily: "'Outfit', sans-serif",
          }}>KnowYourRights</h1>
          <span style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.22), rgba(6,182,212,0.08))",
            border: "1px solid rgba(6,182,212,0.4)", color: "#67e8f9",
            fontSize: "9px", padding: "3px 8px", borderRadius: "6px",
            fontWeight: "600", letterSpacing: "0.15em",
            boxShadow: "0 0 12px rgba(6,182,212,0.2)",
            fontFamily: "'DM Sans', sans-serif",
          }}>BELIZE</span>
        </div>
        <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)", fontWeight: "300", letterSpacing: "0.02em" }}>
          Plain-language guide to your rights under Belizean law
        </p>
      </div>

      {/* Constitutional Quote */}
      <div style={{ padding: "0 14px 18px" }}>
        <GlassCard glow="rgba(139,92,246,0.18)" style={{ padding: "15px 17px" }}>
          <div style={{ fontSize: "9px", color: "#a78bfa", letterSpacing: "0.15em", fontWeight: "600", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
            ✦ CONSTITUTION OF BELIZE — S.3
          </div>
          <p style={{ margin: "0 0 9px", fontSize: "13px", color: "rgba(255,255,255,0.78)", lineHeight: "1.62", fontWeight: "300", fontStyle: "italic" }}>
            "Every person in Belize is entitled to the fundamental rights and freedoms of the individual — regardless of race, place of origin, political opinion, colour, creed or sex."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ height: 1, flex: 1, background: "linear-gradient(90deg, rgba(167,139,250,0.4), transparent)" }} />
            <span style={{ fontSize: "9px", color: "rgba(167,139,250,0.4)", letterSpacing: "0.1em" }}>CHAPTER II</span>
          </div>
        </GlassCard>
      </div>

      {/* Search hint */}
      <div style={{ padding: "0 14px 18px" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02))",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.09)", borderRadius: "14px",
          padding: "11px 15px", display: "flex", alignItems: "center", gap: "10px",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
        }}>
          <span style={{ color: "rgba(255,255,255,0.22)", fontSize: "15px" }}>⌕</span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.18)", fontWeight: "300", letterSpacing: "0.02em" }}>
            What is happening right now?
          </span>
        </div>
      </div>

      {/* Section header */}
      <SectionHeader label="SELECT SITUATION" />

      {/* Category grid */}
      <div style={{ padding: "0 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px" }}>
        {CATEGORIES.map((cat, i) => (
          <div key={cat.id} className="fade-up" style={{ animationDelay: `${i * 0.04}s`, animationFillMode: "both" }}>
            <GlassCard glow={cat.glow} hoverable onClick={() => onSelectCategory(cat)} style={{ padding: "15px 13px" }}>
              <div style={{
                width: 34, height: 34, borderRadius: "11px", marginBottom: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `linear-gradient(135deg, ${cat.color}22, ${cat.color}0a)`,
                border: `1px solid ${cat.color}30`, fontSize: "17px",
                boxShadow: `0 0 14px ${cat.glow}`,
              }}>{cat.icon}</div>
              <div style={{ fontSize: "12px", fontWeight: "600", color: "rgba(255,255,255,0.87)", lineHeight: "1.2", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>
                {cat.title}
              </div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.28)", lineHeight: "1.4" }}>{cat.desc}</div>
              <div style={{ marginTop: "9px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ height: "1px", width: "55%", background: `linear-gradient(90deg, ${cat.color}40, transparent)` }} />
                <span style={{ color: cat.color, fontSize: "13px", opacity: 0.65 }}>›</span>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      {/* Acts referenced */}
      <div style={{ padding: "22px 14px 0" }}>
        <SectionHeader label="ACTS REFERENCED" />
        <GlassCard glow="rgba(96,165,250,0.07)" style={{ padding: "4px 0" }}>
          {ACTS_REFERENCED.map((act, i) => (
            <div key={act.name} style={{
              display: "flex", alignItems: "center", padding: "10px 15px",
              borderBottom: i < ACTS_REFERENCED.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              gap: "11px",
            }}>
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(96,165,250,0.45)", flexShrink: 0 }} />
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", fontWeight: "300" }}>{act.name}</span>
              <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.18)", marginLeft: "auto" }}>{act.chapter}</span>
            </div>
          ))}
        </GlassCard>
      </div>

      {/* Disclaimer */}
      <div style={{ padding: "16px 14px 6px" }}>
        <GlassCard glow="rgba(255,255,255,0.02)" style={{ padding: "12px 15px" }}>
          <p style={{ margin: 0, fontSize: "10px", color: "rgba(255,255,255,0.25)", lineHeight: "1.6", fontWeight: "300", textAlign: "center" }}>
            This app provides general legal information only — not legal advice. Laws may change. Always verify at <span style={{ color: "rgba(96,165,250,0.6)" }}>laws.gov.bz</span> or consult a licensed Belizean attorney.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

function SectionHeader({ label }) {
  return (
    <div style={{ padding: "0 22px 11px", display: "flex", alignItems: "center", gap: "12px" }}>
      <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", fontWeight: "600", fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }} />
    </div>
  );
}
