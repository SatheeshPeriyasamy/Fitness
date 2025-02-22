import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Register from "../pages/Register";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
  </Router>
);

export default AppRoutes;
