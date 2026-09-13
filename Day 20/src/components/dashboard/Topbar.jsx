import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Topbar({ role, setRole }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-4 md:px-6 shadow-sm">
      {/* Left side info or breadcrumb */}
      <div className="text-xs md:text-sm font-medium text-gray-700 truncate">
        Portal Workspace
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Role Switcher */}
        <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 p-1 border border-gray-200">
          <button
            onClick={() => setRole(role === "candidate" ? "employer" : "candidate")}
            className="rounded-md bg-white px-2.5 py-1 text-[11px] md:text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100 truncate"
          >
            Switch to <span className="capitalize">{role === "candidate" ? "Employer" : "Candidate"}</span>
          </button>
        </div>

        {/* User Profile Info */}
        <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
          <div className="text-right">
            <p className="text-xs font-semibold text-gray-900 leading-tight">John Doe</p>
            <p className="text-[9px] text-gray-500 capitalize leading-tight">{role}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-200 px-2.5 py-1 text-[11px] md:text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}