import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Topbar({ role, setRole }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-500">Switch View:</span>
        <button 
          onClick={() => setRole(role === "candidate" ? "employer" : "candidate")}
          className="rounded-lg border border-gray-300 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50"
        >
          Toggle to {role === "candidate" ? "Employer" : "Candidate"}
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm font-bold text-gray-900">John Doe</p>
          <p className="text-xs text-gray-500 capitalize">{role} Account</p>
        </div>
        <Button variant="secondary" onClick={handleLogout}>Log out</Button>
      </div>
    </header>
  );
}