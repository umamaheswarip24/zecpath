import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

export default function DashboardLayout() {
  const [role, setRole] = useState("candidate");

  return (
    // Set canvas background to gray-50 here
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar role={role} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar role={role} setRole={setRole} />

        {/* Content canvas uses gray-50 so white cards pop */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          <Outlet context={{ role, setRole }} />
        </main>
      </div>
    </div>
  );
}