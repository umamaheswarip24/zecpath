import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  const [role, setRole] = useState("candidate"); // Toggle between candidate and employer view

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
        <Topbar role={role} setRole={setRole} />
        
        {/* Main scrollable area */}
        <main className="flex-1 overflow-y-auto p-8 flex flex-col justify-between">
          <div className="flex-1">
            <Outlet context={{ role }} />
          </div>
          
          {/* Dashboard Footer */}
          <footer className="mt-12 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Zecpath JobPortal. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}