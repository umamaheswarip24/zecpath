import { Link } from "react-router-dom";

export default function Sidebar({ role }) {
  const candidateLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Applications", path: "/dashboard/applications" },
    { name: "Saved Jobs", path: "/dashboard/saved" },
  ];

  const employerLinks = [
    { name: "Overview", path: "/dashboard" },
    { name: "Post a Job", path: "/dashboard/post-job" },
    { name: "Listings", path: "/dashboard/listings" },
  ];

  const links = role === "candidate" ? candidateLinks : employerLinks;

  return (
    <aside className="flex flex-col border-r border-gray-200 bg-white w-36 md:w-64 transition-all duration-300 shrink-0">
      {/* Brand Header */}
      <div className="flex h-16 items-center border-b border-gray-200 px-4 md:px-6">
        <span className="text-base md:text-xl font-bold tracking-tight text-gray-900 truncate">
          Zecpath
        </span>
      </div>

      {/* Role Indicator */}
      <div className="px-4 md:px-6 py-3">
        <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 truncate">
          {role} Dashboard
        </p>
      </div>

      {/* Text-Only Navigation Links */}
      <nav className="flex-1 space-y-1 px-3 md:px-4 py-2">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="block rounded-lg px-3 py-2.5 text-xs md:text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <span className="truncate">{link.name}</span>
          </Link>
        ))}
      </nav>

      {/* Footer Link */}
      <div className="p-3 md:p-4 border-t border-gray-200">
        <Link
          to="/"
          className="block px-1 text-[11px] md:text-xs font-medium text-gray-500 hover:text-gray-900 truncate"
        >
          Home
        </Link>
      </div>
    </aside>
  );
}