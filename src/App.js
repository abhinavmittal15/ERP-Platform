// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import HR from "./pages/HR";
import Finance from "./pages/Finance";
import Reports from "./pages/Reports";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import Layout from "./components/Layout";


function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />

          <Route path="/inventory" element={<ProtectedRoute><Layout><Inventory /></Layout></ProtectedRoute>} />

          <Route path="/sales" element={<ProtectedRoute><Layout><Sales /></Layout></ProtectedRoute>} />

          <Route path="/purchases" element={<ProtectedRoute><Layout><Purchases /></Layout></ProtectedRoute>} />

          <Route path="/hr" element={<ProtectedRoute role="admin"><Layout><HR /></Layout></ProtectedRoute>} />

          <Route path="/finance" element={<ProtectedRoute role="admin"><Layout><Finance /></Layout></ProtectedRoute>} />

          <Route path="/reports" element={<ProtectedRoute role="admin"><Layout><Reports /></Layout></ProtectedRoute>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
