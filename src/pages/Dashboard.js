import React from "react";
import { useAuth } from "../auth/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Fetched from DashBoard Module= Welcome {user?.username} ({user?.role})</h1>
      {/* <h1> This is Dashboard Module</h1> */}
      <button onClick={logout} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">Logout</button>
    </div>
  );
};

export default Dashboard;