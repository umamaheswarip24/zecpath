import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 text-center">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to your Dashboard!</h1>
        <p className="mt-2 text-gray-600">You are successfully authenticated via local storage token persistence.</p>
        <div className="mt-6 flex justify-center">
          <Button variant="danger" onClick={handleLogout}>Log out</Button>
        </div>
      </div>
    </div>
  );
}