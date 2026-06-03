import { useState } from "react";
import GlassCard from "../components/GlassCard";

const DISTRICTS = ["Belize City", "Belmopan", "San Ignacio", "Orange Walk", "Dangriga", "Punta Gorda", "Corozal", "San Pedro", "Other"];
const INCIDENT_TYPES = ["Traffic Stop", "Stop & Search", "Arrest", "Drug Search", "At Station", "Domestic", "Other"];

export default function LogScreen() {
  const [entries, setEntries] = useState(() => {
    try { return JSON.parse(localStorage.getItem("kyr_log") || "[]"); } catch { return []; }
  });
  const [form, setForm] = useState({ type: "", district: "", notes: "", badge: "" });
  const [showForm, setShowForm] = useState(false);

  const save = () => {
    if (!form.type) return;
    const entry = { ...form, id: Date.now(), timestamp: new Date().toISOString() };
    const updated = [entry, ...entries];
    setEntries(updated);
    try { localStorage.setItem("kyr_log", JSON.stringify(updated)); } catch {}
    setForm({ type: "", district: "", notes: "", badge: "" });
    setShowForm(false);
  };

  const remove = (id) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    try { localStorage.setItem("kyr_log", JSON.stringify(updated)); } catch {}
  };

  return (
    <div className="fade-up">
      <div style={{ padding: "14px 22px 18px" }}>
        <h2 style={{
          margin: "0 0 4px", fontSize: "22px", fontWeight: "700",
          background: "linear-gradient(90deg, #e8e4f8, #34d399)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em",
        }}>Incident Log</h2>
        <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.28)", fontWeight: "300" }}>
          Private record stored on your device
        </p>
      </div>

      <div style={{ padding: "0 14px 14px" }}>
        <button
          onClick={() => setShowForm(s => !s)}
          style={{
            width: "100%",
            background: showForm
              ? "linear-gradient(135deg, rgba(52,211,153,0.2), rgba(16,185,129,0.1))"
              : "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
            backdropFilter: "blur(20px)",
            border: showForm ? "1px solid rgba(52,211,153,0.35)" : "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px", color: showForm ? "#34d399" : "rgba(255,255,255,0.6)",
            padding: "13px", fontSize: "13px", cursor: "pointer", fontWeight: "600",
            fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em",
            transition: "all 0.25s",
          }}
        >
          {showForm ? "✕ Cancel" : "+ Log New Incident"}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div style={{ padding: "0 14px 16px", animation: "fadeUp 0.3s ease" }}>
          <GlassCard glow="rgba(52,211,153,0.12)" style={{ padding: "16px" }}>
            <FieldLabel>Incident Type</FieldLabel>
            <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
              style={selectStyle}>
              <option value="">Select type…</option>
              {INCIDENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>

            <FieldLabel>District</FieldLabel>
            <select value={form.district} onChange={e => setForm(f => ({ ...f, district: e.target.value }))}
              style={selectStyle}>
              <option value="">Select district…</option>
              {DISTRICTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>

            <FieldLabel>Officer Badge # (optional)</FieldLabel>
            <input
              placeholder="e.g. PC-1423"
              value={form.badge}
              onChange={e => setForm(f => ({ ...f, badge: e.target.value }))}
              style={{ ...inputStyle }}
            />

            <FieldLabel>Notes</FieldLabel>
            <textarea
              placeholder="What happened? Officer name, what was said, witnesses…"
              value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              rows={3}
              style={{ ...inputStyle, resize: "none", lineHeight: "1.5" }}
            />

            <button onClick={save} style={{
              width: "100%", marginTop: "4px",
              background: "linear-gradient(135deg, rgba(52,211,153,0.3), rgba(16,185,129,0.15))",
              border: "1px solid rgba(52,211,153,0.4)", color: "#34d399",
              padding: "12px", borderRadius: "12px", fontSize: "13px",
              cursor: "pointer", fontWeight: "600", fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 0 20px rgba(52,211,153,0.15)",
            }}>
              Save Entry
            </button>
          </GlassCard>
        </div>
      )}

      {/* Entries */}
      <div style={{ padding: "0 14px" }}>
        {entries.length === 0 && !showForm && (
          <GlassCard glow="rgba(255,255,255,0.03)" style={{ padding: "36px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>📋</div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", margin: 0, fontWeight: "300" }}>
              No entries yet. Log an incident to keep a private record.
            </p>
          </GlassCard>
        )}
        {entries.map((e, i) => (
          <div key={e.id} style={{ marginBottom: "9px", animation: `fadeUp 0.35s ease ${i * 0.05}s both` }}>
            <GlassCard glow="rgba(52,211,153,0.1)" style={{ padding: "14px 15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "5px", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: "10px", fontWeight: "700", color: "#34d399",
                      background: "rgba(52,211,153,0.12)", padding: "2px 8px", borderRadius: "5px",
                      border: "1px solid rgba(52,211,153,0.25)", fontFamily: "'DM Sans', sans-serif",
                    }}>{e.type}</span>
                    {e.district && <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>{e.district}</span>}
                    {e.badge && <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)" }}>Badge: {e.badge}</span>}
                  </div>
                  {e.notes && <p style={{ margin: "0 0 5px", fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: "1.5", fontWeight: "300" }}>{e.notes}</p>}
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)" }}>
                    {new Date(e.timestamp).toLocaleString("en-BZ")}
                  </span>
                </div>
                <button onClick={() => remove(e.id)} style={{
                  background: "rgba(251,113,133,0.1)", border: "1px solid rgba(251,113,133,0.2)",
                  color: "#fb7185", width: 28, height: 28, borderRadius: "8px",
                  cursor: "pointer", fontSize: "12px", flexShrink: 0, marginLeft: "8px",
                }}>✕</button>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}

const selectStyle = {
  width: "100%", background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px",
  color: "rgba(255,255,255,0.7)", padding: "9px 12px",
  fontSize: "13px", marginBottom: "12px", fontFamily: "'DM Sans', sans-serif",
  outline: "none", appearance: "none",
};

const inputStyle = {
  width: "100%", background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px",
  color: "rgba(255,255,255,0.7)", padding: "9px 12px",
  fontSize: "13px", marginBottom: "12px", fontFamily: "'DM Sans', sans-serif",
  outline: "none",
};

function FieldLabel({ children }) {
  return <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", fontWeight: "600", marginBottom: "6px", fontFamily: "'DM Sans', sans-serif" }}>{children}</div>;
}
