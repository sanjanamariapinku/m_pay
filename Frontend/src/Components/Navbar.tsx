import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "15px", background: "#1976d2" }}>
      <Link style={{ marginRight: 15, color: "white" }} to="/">Dashboard</Link>
      <Link style={{ marginRight: 15, color: "white" }} to="/bills">Bills</Link>
      <Link style={{ marginRight: 15, color: "white" }} to="/analysis">Analysis</Link>
      <Link style={{ marginRight: 15, color: "white" }} to="/carbon">Carbon</Link>
      <Link style={{ marginRight: 15, color: "white" }} to="/chatbot">AI</Link>
      <Link style={{ color: "white" }} to="/receipt">Receipt</Link>
    </nav>
  );
};

export default Navbar;