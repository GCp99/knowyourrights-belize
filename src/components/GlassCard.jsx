import { useState } from "react";

export default function GlassCard({ children, style = {}, glow = "rgba(129,140,248,0.12)", onClick, hoverable = false, className = "" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      onClick={onClick}
      onMouseEnter={() => hoverable && setHovered(true)}
      onMouseLeave={() => hoverable && setHovered(false)}
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: hovered
          ? `0 0 0 1px rgba(255,255,255,0.14) inset, 0 8px 36px ${glow}, 0 2px 0 rgba(255,255,255,0.05) inset`
          : `0 0 0 1px rgba(255,255,255,0.06) inset, 0 4px 24px ${glow}`,
        borderRadius: "20px",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered && hoverable ? "translateY(-2px) scale(1.005)" : "none",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
