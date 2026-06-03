import GlassCard from "../components/GlassCard";
import { SITUATIONS } from "../data/legalData";

export default function CategoryScreen({ category, onBack, onSelectSituation }) {
  const situations = SITUATIONS[category.id] || [];

  return (
    <div className="fade-up">
      {/* Header */}
      <div style={{ padding: "14px 22px 18px" }}>
        <button onClick={onBack} style={{
          background: "none", border: "none", color: "#60a5fa",
          fontSize: "13px", cursor: "pointer", padding: "0 0 14px 0",
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'DM Sans', sans-serif",
        }}>← Back</button>

        <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "10px" }}>
          <div style={{
            width: 50, height: 50, borderRadius: "17px",
            display: "flex", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${category.color}25, ${category.color}0a)`,
            border: `1px solid ${category.color}38`, fontSize: "24px", flexShrink: 0,
            boxShadow: `0 0 24px ${category.glow}`,
          }}>{category.icon}</div>
          <div>
            <h2 style={{
              margin: "0 0 3px", fontSize: "21px", fontWeight: "700",
              color: "rgba(255,255,255,0.92)", fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-0.03em",
            }}>{category.title}</h2>
            <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.28)" }}>{category.desc}</p>
          </div>
        </div>

        {/* Intro text */}
        <GlassCard glow={category.glow} style={{ padding: "12px 15px" }}>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6", fontWeight: "300" }}>
            {category.intro}
          </p>
        </GlassCard>
      </div>

      {/* Situations */}
      <div style={{ padding: "0 0 8px", }}>
        <div style={{ padding: "0 22px 11px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em", fontWeight: "600", fontFamily: "'DM Sans', sans-serif" }}>CHOOSE YOUR SITUATION</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }} />
        </div>

        <div style={{ padding: "0 14px" }}>
          {situations.length === 0 ? (
            <GlassCard glow="rgba(139,92,246,0.1)" style={{ padding: "40px 20px", textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>⏳</div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", margin: 0, fontWeight: "300" }}>
                Legal team is preparing this module. Coming soon.
              </p>
            </GlassCard>
          ) : (
            situations.map((sit, i) => (
              <div key={sit.id} style={{ marginBottom: "9px", animation: `fadeUp 0.4s ease ${i * 0.08}s both` }}>
                <GlassCard
                  glow={category.glow}
                  hoverable
                  onClick={() => onSelectSituation(sit)}
                  style={{ padding: "16px 15px" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontSize: "14px", fontWeight: "600",
                        color: "rgba(255,255,255,0.87)", marginBottom: "5px",
                        fontFamily: "'Outfit', sans-serif", lineHeight: "1.3",
                      }}>{sit.title}</div>
                      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                        <div style={{ width: 4, height: 4, borderRadius: "50%", background: category.color, boxShadow: `0 0 5px ${category.color}` }} />
                        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.26)" }}>
                          {sit.rights.length} rights &amp; rules
                        </span>
                      </div>
                    </div>
                    <div style={{
                      width: 28, height: 28, borderRadius: "9px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: `${category.color}14`, border: `1px solid ${category.color}28`, flexShrink: 0,
                    }}>
                      <span style={{ color: category.color, fontSize: "15px" }}>›</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
