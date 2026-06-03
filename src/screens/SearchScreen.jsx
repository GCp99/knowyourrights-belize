import { useState, useMemo } from "react";
import GlassCard from "../components/GlassCard";
import { CATEGORIES, SITUATIONS } from "../data/legalData";

export default function SearchScreen({ onSelectSituation, onSelectCategory }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    const q = query.toLowerCase();
    const out = [];
    CATEGORIES.forEach(cat => {
      const situations = SITUATIONS[cat.id] || [];
      situations.forEach(sit => {
        if (
          sit.title.toLowerCase().includes(q) ||
          sit.summary.toLowerCase().includes(q) ||
          sit.rights.some(r => r.text.toLowerCase().includes(q) || r.law.toLowerCase().includes(q))
        ) {
          out.push({ cat, sit });
        }
      });
    });
    return out.slice(0, 12);
  }, [query]);

  return (
    <div className="fade-up">
      <div style={{ padding: "14px 22px 18px" }}>
        <h2 style={{
          margin: "0 0 4px", fontSize: "22px", fontWeight: "700",
          background: "linear-gradient(90deg, #e8e4f8, #60a5fa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.03em",
        }}>Search</h2>
        <p style={{ margin: "0 0 16px", fontSize: "12px", color: "rgba(255,255,255,0.28)", fontWeight: "300" }}>
          Search across all rights, laws, and situations
        </p>

        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
          backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(96,165,250,0.25)", borderRadius: "14px",
          padding: "11px 15px", display: "flex", alignItems: "center", gap: "10px",
          boxShadow: "0 0 20px rgba(96,165,250,0.1), 0 0 0 1px rgba(255,255,255,0.04) inset",
        }}>
          <span style={{ color: "rgba(96,165,250,0.6)", fontSize: "16px" }}>⌕</span>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search rights, laws, situations…"
            style={{
              background: "none", border: "none", color: "rgba(255,255,255,0.8)",
              fontSize: "14px", outline: "none", flex: 1,
              fontFamily: "'DM Sans', sans-serif", fontWeight: "300",
            }}
          />
          {query && (
            <button onClick={() => setQuery("")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: "14px" }}>✕</button>
          )}
        </div>
      </div>

      <div style={{ padding: "0 14px" }}>
        {query.length > 1 && results.length === 0 && (
          <GlassCard glow="rgba(255,255,255,0.03)" style={{ padding: "32px 20px", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", margin: 0, fontWeight: "300" }}>
              No results for "{query}". Try different keywords.
            </p>
          </GlassCard>
        )}

        {results.map(({ cat, sit }, i) => (
          <div key={sit.id} style={{ marginBottom: "9px", animation: `fadeUp 0.3s ease ${i * 0.04}s both` }}>
            <GlassCard glow={cat.glow} hoverable onClick={() => { onSelectCategory(cat); onSelectSituation(sit); }}
              style={{ padding: "14px 15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                <span style={{ fontSize: "14px" }}>{cat.icon}</span>
                <span style={{ fontSize: "9px", color: cat.color, fontWeight: "600", letterSpacing: "0.12em", fontFamily: "'DM Sans', sans-serif" }}>
                  {cat.title.toUpperCase()}
                </span>
              </div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "rgba(255,255,255,0.85)", marginBottom: "4px", fontFamily: "'Outfit', sans-serif" }}>
                {sit.title}
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", lineHeight: "1.4" }}>
                {sit.summary.slice(0, 80)}…
              </div>
            </GlassCard>
          </div>
        ))}

        {!query && (
          <GlassCard glow="rgba(96,165,250,0.07)" style={{ padding: "32px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>⌕</div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", margin: 0, fontWeight: "300" }}>
              Type to search across all Belizean rights, laws, and situations.
            </p>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
