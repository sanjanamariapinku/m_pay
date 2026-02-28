import React from "react";

interface UsageAlertProps {
  usage: number;
  limit: number;
}

const UsageAlert: React.FC<UsageAlertProps> = ({ usage, limit }) => {
  if (usage <= limit) return null;

  return (
    <div style={{ background: "#ffdddd", padding: 10, borderRadius: 5, color: "red", marginTop: 10 }}>
      ⚠ Usage exceeded recommended limit!
    </div>
  );
};

export default UsageAlert;