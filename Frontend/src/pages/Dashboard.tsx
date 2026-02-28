import { FaBolt, FaWater, FaFileInvoiceDollar, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerContainer}>
        <h1 style={headerTitle}>M-Pay Dashboard</h1>
        <p style={headerSubtitle}>Track your utility usage and payments effortlessly</p>
      </div>

      {/* Cards Grid */}
      <div style={gridStyle}>
        {/* Electricity Card */}
        <UtilityCard
          icon={<FaBolt color="#f59e0b" size={28} />}
          title="Electricity Usage"
          value="350 kWh"
          imgUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60"
          gradient="linear-gradient(135deg, #fef3c7, #fde68a)"
        />

        {/* Water Card */}
        <UtilityCard
          icon={<FaWater color="#3b82f6" size={28} />}
          title="Water Usage"
          value="1200 liters"
          imgUrl="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=60"
          gradient="linear-gradient(135deg, #dbeafe, #bfdbfe)"
        />

        {/* Bills Card */}
        <UtilityCard
          icon={<FaFileInvoiceDollar color="#10b981" size={28} />}
          title="Bills Paid"
          value="3 bills"
          imgUrl="https://images.pexels.com/photos/12920746/pexels-photo-12920746.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
          gradient="linear-gradient(135deg, #d1fae5, #6ee7b7)"
        />

        {/* Analytics Card */}
        <UtilityCard
          icon={<FaChartLine color="#6366f1" size={28} />}
          title="Usage Analytics"
          value=""
          imgUrl=""
          gradient="linear-gradient(135deg, #ede9fe, #c7d2fe)"
          placeholderChart
        />
      </div>
    </div>
  );
};

// Reusable Utility Card Component
interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  imgUrl: string;
  gradient: string;
  placeholderChart?: boolean;
}

const UtilityCard: React.FC<UtilityCardProps> = ({ icon, title, value, imgUrl, gradient, placeholderChart }) => {
  return (
    <div
      style={{
        ...cardStyle,
        background: gradient,
        transition: "all 0.3s ease",
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
      <div style={cardHeader}>{icon}<h3 style={{ margin: 0 }}>{title}</h3></div>
      {placeholderChart ? (
        <div style={chartPlaceholder}>Chart Placeholder</div>
      ) : (
        <>
          {imgUrl && <img src={imgUrl} style={cardImage} />}
          <p style={cardText}>{value}</p>
        </>
      )}
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  padding: 24,
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  background: "#f5f7fa",
  minHeight: "100vh",
};

const headerContainer: React.CSSProperties = { textAlign: "center", marginBottom: 40 };
const headerTitle: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 900,
  background: "linear-gradient(135deg, #6366f1, #10b981)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  marginBottom: 8,
};
const headerSubtitle: React.CSSProperties = { fontSize: "1.2rem", color: "#555" };

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 24,
};

const cardStyle: React.CSSProperties = {
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

const cardImage: React.CSSProperties = {
  width: "100%",
  height: 140,
  objectFit: "cover",
  borderRadius: 12,
};

const cardText: React.CSSProperties = {
  marginTop: 12,
  fontSize: 14,
  color: "#555",
  textAlign: "center",
  fontWeight: 600,
};

const chartPlaceholder: React.CSSProperties = {
  width: "100%",
  height: 150,
  borderRadius: 12,
  background: "rgba(0,0,0,0.05)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#4f46e5",
  fontWeight: 600,
  marginTop: 12,
};

export default Dashboard;