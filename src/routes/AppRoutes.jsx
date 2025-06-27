import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/regenpitchdeck.jsx";

// AppRoutes Component
// Defines the application's main routing structure using React Router
function AppRoutes() {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
