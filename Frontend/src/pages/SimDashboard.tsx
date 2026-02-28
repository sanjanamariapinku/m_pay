
import { generateMonthlyReadings, calculateBill } from "../utils/simulatorreadings";
import React, { useState, useEffect } from "react";
import { FaBolt, FaWater, FaFileInvoiceDollar, FaChartLine, FaTimes } from "react-icons/fa";

interface Bill {
  id: string;
  type: string;
  amount: number;
  date: string;
  status: "paid" | "unpaid";
}

const SimDashboard = () => {
  const [bills, setBills] = useState<Bill[]>([]);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Simulate bills (replace with Firebase later)
  useEffect(() => {
    const simulatedBills: Bill[] = [
      { id: "1", type: "Electricity", amount: 45.5, date: "2026-02-28", status: "unpaid" },
      { id: "2", type: "Water", amount: 20.0, date: "2026-02-28", status: "paid" },
    ];
    setBills(simulatedBills);

    if (simulatedBills.some((b) => b.status === "unpaid")) {
      setShowModal(true);
    }
  }, []);

  const handlePay = (billId: string) => {
    setBills((prev) =>
      prev.map((b) => (b.id === billId ? { ...b, status: "paid" } : b))
    );
    alert("Payment successful! ✅");
  };

  return (
    <div style={{ padding: 24, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#f5f7fa", minHeight: "100vh" }}>
      {/* Modern Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 900,
            background: "linear-gradient(135deg, #6366f1, #10b981)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            marginBottom: 8,
          }}
        >
          M-Pay Sim Dashboard
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Track your utility usage and pay bills instantly</p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}
      >
        {/* Electricity Card */}
        <div style={cardStyle}>
          <div style={headerStyle}>
            <FaBolt color="#f59e0b" size={28} />
            <h3>Electricity Usage</h3>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=60"
            style={imageStyle}
          />
          <p style={textStyle}>Your electricity consumption this month: <strong>350 kWh</strong></p>
        </div>

        {/* Water Card */}
        <div style={cardStyle}>
          <div style={headerStyle}>
            <FaWater color="#3b82f6" size={28} />
            <h3>Water Usage</h3>
          </div>
          <img
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=60"
            style={imageStyle}
          />
          <p style={textStyle}>Your water consumption this month: <strong>1200 liters</strong></p>
        </div>

        {/* Bills Card */}
        <div style={cardStyle}>
          <div style={headerStyle}>
            <FaFileInvoiceDollar color="#10b981" size={28} />
            <h3>Bills Paid</h3>
          </div>
          <p style={textStyle}>
            {bills.filter((b) => b.status === "paid").length} bills paid this year
          </p>
        </div>

        {/* Analytics Card */}
        <div style={cardStyle}>
          <div style={headerStyle}>
            <FaChartLine color="#6366f1" size={28} />
            <h3>Usage Analytics</h3>
          </div>
          <div
            style={{
              height: 150,
              background: "#e0e7ff",
              borderRadius: 12,
              marginTop: 12,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#4f46e5",
              fontWeight: 600,
            }}
          >
            Chart Placeholder
          </div>
        </div>
      </div>

      {/* Modal for Unpaid Bills */}
      {showModal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0,
          width: "100%", height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 9999
        }}>
          <div style={{ background: "white", borderRadius: 16, padding: 32, width: 400, textAlign: "center", position: "relative" }}>
            <FaTimes
              style={{ position: "absolute", top: 16, right: 16, cursor: "pointer" }}
              size={20}
              onClick={() => setShowModal(false)}
            />
            <h2 style={{ marginBottom: 16 }}>Unpaid Bills Detected</h2>
            {bills.filter(b => b.status === "unpaid").map(bill => (
              <div key={bill.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span>{bill.type}</span>
                <span>${bill.amount.toFixed(2)}</span>
                <button
                  onClick={() => handlePay(bill.id)}
                  style={{
                    background: "#10b981",
                    color: "white",
                    border: "none",
                    padding: "4px 12px",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  Pay
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const cardStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 16,
  padding: 20,
  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "transform 0.2s, box-shadow 0.2s",
  cursor: "pointer",
};
const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  marginBottom: 12,
  color: "#111",
};
const imageStyle: React.CSSProperties = {
  width: "100%",
  height: 140,
  objectFit: "cover",
  borderRadius: 12,
};
const textStyle: React.CSSProperties = {
  marginTop: 12,
  fontSize: 14,
  color: "#555",
  textAlign: "center",
};

export default SimDashboard;