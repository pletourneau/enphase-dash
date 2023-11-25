import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
function App() {
  const systemId = "your-system-id"; // Set or obtain the system ID dynamically

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard systemId={systemId} />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;
