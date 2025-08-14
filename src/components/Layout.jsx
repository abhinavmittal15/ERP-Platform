import React from "react";
import Sidebar from "./Sidebar";
import { useAuth } from "../auth/AuthContext";

const Layout = ({ children }) => {
    const { user, logout } = useAuth();

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-semibold">
                        Welcome {user?.username} ({user?.role})
                    </h1>
                    <button
                        onClick={logout}
                        className="px-4 py-2 bg-red-500 text-white rounded"
                    >
                        Logout
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Layout;
