export default function AmbientBackground() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {/* Animated neon orbs */}
      <div className="orb-1" style={{
        position: "absolute", top: "8%", left: "15%",
        width: 300, height: 300,
        background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(55px)",
      }} />
      <div className="orb-2" style={{
        position: "absolute", top: "45%", right: "-8%",
        width: 240, height: 240,
        background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(48px)",
      }} />
      <div className="orb-3" style={{
        position: "absolute", bottom: "18%", left: "5%",
        width: 200, height: 200,
        background: "radial-gradient(circle, rgba(232,121,249,0.14) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(42px)",
      }} />
      <div style={{
        position: "absolute", top: "70%", right: "20%",
        width: 160, height: 160,
        background: "radial-gradient(circle, rgba(244,114,182,0.12) 0%, transparent 70%)",
        borderRadius: "50%", filter: "blur(38px)",
      }} />
      {/* Scanline texture */}
      <div style={{
        position: "absolute", inset: 0,
        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.007) 2px, rgba(255,255,255,0.007) 4px)",
      }} />
      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
      }} />
    </div>
  );
}
