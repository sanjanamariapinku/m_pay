import React from "react";
import { FaLeaf, FaBolt, FaWater } from "react-icons/fa";

const Carbon: React.FC = () => {
  // Simulated usage
  const electricityUsage = 350; // kWh
  const waterUsage = 1200; // liters

  // Conversion factors
  const electricityCO2 = electricityUsage * 0.85; // kg CO2 per kWh
  const waterCO2 = waterUsage * 0.001; // kg CO2 per liter
  const totalCO2 = electricityCO2 + waterCO2;

  // Environmental score
  const score = totalCO2 < 100 ? "A" : totalCO2 < 200 ? "B" : "C";
  const ratingColors: Record<string, string> = { A: "#10b981", B: "#f59e0b", C: "#ef4444" };

  return (
    <div style={container}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={title}>Carbon Footprint Tracker</h1>
        <p style={subtitle}>Track your environmental impact and improve sustainability</p>
      </div>

      {/* Cards */}
      <div style={grid}>
        {/* Electricity CO2 */}
        <ImpactCard
          icon={<FaBolt size={28} color="#f59e0b" />}
          label="Electricity CO₂"
          value={`${electricityCO2.toFixed(1)} kg`}
          gradient="linear-gradient(135deg, #fef3c7, #fde68a)"
        />

        {/* Water CO2 */}
        <ImpactCard
          icon={<FaWater size={28} color="#3b82f6" />}
          label="Water CO₂"
          value={`${waterCO2.toFixed(2)} kg`}
          gradient="linear-gradient(135deg, #dbeafe, #bfdbfe)"
        />

        {/* Total CO2 */}
        <ImpactCard
          icon={<FaLeaf size={28} color="#10b981" />}
          label="Total CO₂"
          value={`${totalCO2.toFixed(1)} kg`}
          gradient="linear-gradient(135deg, #d1fae5, #6ee7b7)"
        />

        {/* Sustainability Rating */}
        <ImpactCard
          icon={<FaLeaf size={28} color={ratingColors[score]} />}
          label="Sustainability Rating"
          value={score}
          gradient={`linear-gradient(135deg, ${ratingColors[score]}33, ${ratingColors[score]}66)`}
        />
      </div>
    </div>
  );
};

// Reusable Card Component
interface ImpactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  gradient: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, label, value, gradient }) => {
  return (
    <div
      style={{
        ...card,
        background: gradient,
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 15px 30px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
      }}
    >
      <div style={cardHeader}>{icon}<h3 style={{ margin: 0 }}>{label}</h3></div>
      <p style={cardValue}>{value}</p>
    </div>
  );
};

// Styles
const container: React.CSSProperties = {
  padding: 24,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: "#f5f7fa",
  minHeight: "100vh",
};

const title: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 900,
  background: "linear-gradient(135deg, #6366f1, #10b981)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  marginBottom: 8,
};

const subtitle: React.CSSProperties = { fontSize: "1.2rem", color: "#555" };

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 24,
};

const card: React.CSSProperties = {
  borderRadius: 16,
  padding: 20,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
};

const cardHeader: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  marginBottom: 12,
};

const cardValue: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 700,
  color: "#111",
};

export default Carbon;