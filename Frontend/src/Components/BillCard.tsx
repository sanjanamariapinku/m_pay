import React from "react";

interface BillCardProps {
  month: string;
  amount: number;
  status: string;
}

const BillCard: React.FC<BillCardProps> = ({ month, amount, status }) => {
  return (
    <div style={{ padding: 15, margin: 10, background: "#f5f5f5", borderRadius: 10 }}>
      <h3>{month}</h3>
      <p>Amount: ₹{amount}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default BillCard;