import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", usage: 400 },
  { month: "Feb", usage: 300 },
  { month: "Mar", usage: 500 },
  { month: "Apr", usage: 450 },
];

const Analysis: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Energy Usage Analysis</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="usage" stroke="#1976d2" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analysis;