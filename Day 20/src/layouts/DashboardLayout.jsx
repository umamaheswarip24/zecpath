import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  // Lift the role state here so it persists across dashboard navigation
  const [role, setRole] = useState("candidate");

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Persistent Sidebar */}
      <Sidebar role={role} />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Persistent Topbar with role switcher */}
        <Topbar role={role} setRole={setRole} />

        {/* Main Content Area: Responsive mobile padding */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet context={{ role, setRole }} />
        </main>
      </div>
    </div>
  );
}