const TABS = [
  { id: "home",     icon: "⌂", label: "Home",     color: "#a78bfa" },
  { id: "search",   icon: "⌕", label: "Search",   color: "#60a5fa" },
  { id: "log",      icon: "◫", label: "My Log",   color: "#34d399" },
  { id: "contacts", icon: "☎", label: "Contacts", color: "#f472b6" },
];

export default function BottomNav({ active, onChange }) {
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20,
      padding: "8px 14px 20px",
      background: "linear-gradient(to top, rgba(6,4,15,0.97) 55%, transparent)",
    }}>
      <div style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "24px",
        padding: "9px 8px",
        display: "flex",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.45)",
      }}>
        {TABS.map(tab => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              style={{
                flex: 1,
                background: isActive
                  ? `linear-gradient(135deg, ${tab.color}22, ${tab.color}09)`
                  : "none",
                border: isActive ? `1px solid ${tab.color}32` : "1px solid transparent",
                borderRadius: "16px",
                color: isActive ? tab.color : "rgba(255,255,255,0.22)",
                cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
                padding: "7px 4px",
                transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                boxShadow: isActive ? `0 0 18px ${tab.color}22` : "none",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <span style={{ fontSize: "17px", lineHeight: 1 }}>{tab.icon}</span>
              <span style={{ fontSize: "9px", fontWeight: "600", letterSpacing: "0.08em" }}>{tab.label}</span>
              {isActive && (
                <div style={{
                  width: 14, height: 2, borderRadius: "1px",
                  background: tab.color,
                  boxShadow: `0 0 8px ${tab.color}`,
                }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
