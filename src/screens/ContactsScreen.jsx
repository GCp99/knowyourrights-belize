import GlassCard from "../components/GlassCard";
import { EMERGENCY_CONTACTS } from "../data/legalData";

const CATEGORY_COLORS = {
  emergency: "#fb7185",
  legal: "#a78bfa",
  rights: "#60a5fa",
  complaints: "#fbbf24",
  crisis: "#f472b6",
  immigration: "#34d399",
};

export default function ContactsScreen() {
  return (
    <div className="fade-up">
      <div style={{ padding: "14px 22px 20px" }}>
        <h2 style={{
          margin: "0 0 4px", fontSize: "22px", fontWeight: "700",
          background: "linear-gradient(90deg, #e8e4f8, #f472b6)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em",
        }}>Emergency Contacts</h2>
        <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.28)", fontWeight: "300" }}>
          Belize legal aid, rights, and crisis resources
        </p>
      </div>

      <div style={{ padding: "0 14px" }}>
        {EMERGENCY_CONTACTS.map((c, i) => {
          const color = CATEGORY_COLORS[c.category] || "#a78bfa";
          return (
            <div key={c.id} style={{ marginBottom: "9px", animation: `fadeUp 0.4s ease ${i * 0.07}s both` }}>
              <GlassCard glow={`${color}20`} style={{ padding: "15px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "5px" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: color, boxShadow: `0 0 7px ${color}`, flexShrink: 0 }} />
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.88)", fontFamily: "'Outfit', sans-serif" }}>
                        {c.name}
                      </span>
                    </div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "4px", paddingLeft: "13px" }}>
                      {c.note}
                    </div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.22)", paddingLeft: "13px" }}>
                      {c.available}
                    </div>
                  </div>
                  <a
                    href={`tel:${c.phone}`}
                    style={{
                      background: `linear-gradient(135deg, ${color}25, ${color}10)`,
                      border: `1px solid ${color}35`,
                      color: color, padding: "8px 13px",
                      borderRadius: "12px", fontSize: "12px",
                      fontWeight: "600", textDecoration: "none",
                      boxShadow: `0 0 14px ${color}18`,
                      whiteSpace: "nowrap", flexShrink: 0,
                      display: "flex", alignItems: "center", gap: "5px",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    📞 {c.phone}
                  </a>
                </div>
              </GlassCard>
            </div>
          );
        })}
      </div>

      {/* IPCC Note */}
      <div style={{ padding: "8px 14px 0" }}>
        <GlassCard glow="rgba(251,191,36,0.12)" style={{ padding: "14px 16px" }}>
          <div style={{ fontSize: "9px", color: "#fbbf24", letterSpacing: "0.15em", fontWeight: "600", marginBottom: "8px", fontFamily: "'DM Sans', sans-serif" }}>
            ◎ HOW TO FILE A POLICE COMPLAINT
          </div>
          <p style={{ margin: "0 0 6px", fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", fontWeight: "300" }}>
            If an officer violates your rights, you can file a formal complaint with the <strong style={{ color: "#fbbf24", fontWeight: "500" }}>Independent Police Complaints Commission (IPCC)</strong>.
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.38)", lineHeight: "1.5", fontWeight: "300" }}>
            Record: officer name, badge number, date, time, location, and witnesses. File as soon as possible after the incident.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
