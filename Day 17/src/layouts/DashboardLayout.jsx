import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  const [role, setRole] = useState("candidate"); // Toggle between candidate and employer view

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar role={role} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar role={role} setRole={setRole} />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet context={{ role }} />
        </main>
      </div>
    </div>
  );
}