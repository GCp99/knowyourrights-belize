import { useState, useRef, useEffect } from "react";
import AmbientBackground from "./components/AmbientBackground";
import EmergencyStrip from "./components/EmergencyStrip";
import BottomNav from "./components/BottomNav";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SituationScreen from "./screens/SituationScreen";
import SearchScreen from "./screens/SearchScreen";
import LogScreen from "./screens/LogScreen";
import ContactsScreen from "./screens/ContactsScreen";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSituation, setSelectedSituation] = useState(null);
  const [subScreen, setSubScreen] = useState("home"); // home | category | situation
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [activeTab, subScreen]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setSelectedSituation(null);
    setSubScreen("category");
    setActiveTab("home");
  };

  const handleSelectSituation = (sit) => {
    setSelectedSituation(sit);
    setSubScreen("situation");
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "home") {
      setSubScreen("home");
      setSelectedCategory(null);
      setSelectedSituation(null);
    }
  };

  const renderContent = () => {
    if (activeTab === "search") {
      return <SearchScreen
        onSelectCategory={(cat) => { setSelectedCategory(cat); setSubScreen("category"); setActiveTab("home"); }}
        onSelectSituation={(sit) => { setSelectedSituation(sit); setSubScreen("situation"); setActiveTab("home"); }}
      />;
    }
    if (activeTab === "log") return <LogScreen />;
    if (activeTab === "contacts") return <ContactsScreen />;

    // Home tab sub-screens
    if (subScreen === "situation" && selectedSituation) {
      return <SituationScreen
        situation={selectedSituation}
        category={selectedCategory}
        onBack={() => setSubScreen("category")}
      />;
    }
    if (subScreen === "category" && selectedCategory) {
      return <CategoryScreen
        category={selectedCategory}
        onBack={() => { setSubScreen("home"); setSelectedCategory(null); }}
        onSelectSituation={handleSelectSituation}
      />;
    }
    return <HomeScreen onSelectCategory={handleSelectCategory} />;
  };

  return (
    <div style={{
      background: "#06040f",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "430px",
        height: "100vh",
        maxHeight: "900px",
        background: "linear-gradient(160deg, #0d0818 0%, #080612 40%, #06040f 100%)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow: "0 0 120px rgba(139,92,246,0.12), 0 0 60px rgba(6,182,212,0.08)",
      }}>
        <AmbientBackground />

        {/* Status bar */}
        <div style={{
          position: "relative", zIndex: 10,
          padding: "10px 22px 5px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.4)", letterSpacing: "0.02em" }}>9:41</span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i === 1 ? "#c084fc" : "rgba(255,255,255,0.18)" }} />
            ))}
          </div>
          <span style={{ fontSize: "11px", fontWeight: "300", color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>BZ ●</span>
        </div>

        <EmergencyStrip onContactsClick={() => handleTabChange("contacts")} />

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          style={{ flex: 1, overflowY: "auto", position: "relative", zIndex: 5, paddingBottom: "100px" }}
        >
          {renderContent()}
        </div>

        <BottomNav active={activeTab} onChange={handleTabChange} />
      </div>
    </div>
  );
}
