import React from "react";
import { FaFileInvoiceDollar } from "react-icons/fa";

// Simulated bill data
const bills = [
  { id: 1, month: "January", usage: 420, rate: 3.5, paid: true },
  { id: 2, month: "February", usage: 380, rate: 3.5, paid: false },
  { id: 3, month: "March", usage: 450, rate: 3.5, paid: false },
];

const Bills: React.FC = () => {
  // Total pending dues
  const totalDue = bills
    .filter((b) => !b.paid)
    .reduce((sum, b) => sum + b.usage * b.rate, 0);

  const handlePay = (bill: typeof bills[0]) => {
    // Open Google Pay in a new tab (simulation)
    window.open("https://pay.google.com", "_blank");
    alert(`Redirecting to GPay to pay ₹${bill.usage * bill.rate}`);
  };

  return (
    <div style={{ padding: 24, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#f5f7fa", minHeight: "100vh" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{
          fontSize: "3rem",
          fontWeight: 900,
          background: "linear-gradient(135deg, #6366f1, #10b981)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: 8,
        }}>
          Bill History
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Your monthly utility bills at a glance</p>
        {totalDue > 0 && (
          <p style={{ fontWeight: 700, color: "#f59e0b", marginTop: 8 }}>
            Total Pending Dues: ₹{totalDue}
          </p>
        )}
      </div>

      {/* Bill List */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 700, margin: "0 auto" }}>
        {bills.map((bill) => {
          const amount = bill.usage * bill.rate;
          return (
            <div key={bill.id} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 16,
              background: "white",
              borderRadius: 12,
              boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
            }}>
              <span style={{ fontWeight: 600 }}>{bill.month}</span>
              <span>{bill.usage} kWh</span>
              <span>₹{amount}</span>
              <span style={{ color: bill.paid ? "#10b981" : "#f59e0b", fontWeight: 600 }}>
                {bill.paid ? "Paid" : "Pending"}
              </span>
              {!bill.paid && (
                <button
                  onClick={() => handlePay(bill)}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "none",
                    background: "#6366f1",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  Pay Now
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bills;