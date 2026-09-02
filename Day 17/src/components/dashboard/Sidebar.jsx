import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role = "candidate" }) {
  const location = useLocation();

  const candidateLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "My Applications", path: "/dashboard/applications" },
    { name: "Saved Jobs", path: "/dashboard/saved" },
  ];

  const employerLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "Post a Job", path: "/dashboard/post-job" },
    { name: "Manage Listings", path: "/dashboard/listings" },
  ];

  const links = role === "employer" ? employerLinks : candidateLinks;

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center px-6 border-b border-gray-100">
        <span className="text-xl font-bold text-blue-600">Zecpath <span className="text-xs font-semibold text-gray-500 uppercase">({role})</span></span>
      </div>
      <nav className="flex-1 space-y-1 px-4 py-6">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}