import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  const links = [
    { path: "/", label: "Dashboard" },
    { path: "/inventory", label: "Inventory" },
    { path: "/sales", label: "Sales" },
    { path: "/purchases", label: "Purchases" },
  ];

  if (user?.role === "admin") {
    links.push(
      { path: "/hr", label: "HR" },
      { path: "/finance", label: "Finance" },
      { path: "/reports", label: "Reports" }
    );
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">ERP Panel</h2>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="mb-3 hover:bg-gray-700 px-3 py-2 rounded"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
