import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import Analysis from "./pages/Analysis";
import Carbon from "./pages/Carbon";
import Chatbot from "./pages/Chatbot";
import Receipt from "./pages/Receipt";

/* Layout Wrapper to hide Navbar on Login page */
const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {/* Hide Navbar on Login page */}
      {location.pathname !== "/" && <Navbar />}

      <div style={{ padding: "20px" }}>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />

          {/* After Login Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/carbon" element={<Carbon />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;