import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ role }) {
  const location = useLocation();

  const candidateLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "My Applications", path: "/dashboard/applications" },
    { name: "Saved Jobs", path: "/dashboard/saved" },
  ];

  const employerLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "Post a Job", path: "/dashboard/post-job" },
    { name: "My Listings", path: "/dashboard/listings" },
  ];

  const links = role === "candidate" ? candidateLinks : employerLinks;

  return (
    <aside className="w-64 border-r border-gray-200 bg-white p-6 flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900">Zecpath</h2>
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
            {role} Dashboard
          </span>
        </div>

        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-100 pt-4">
        <Link
          to="/"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          Back to Home
        </Link>
      </div>
    </aside>
  );
}