export default function CandidateApplications() {
  const applications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      appliedDate: "Oct 12, 2026",
      status: "Interviewing",
      type: "Full-time",
    },
    {
      id: 2,
      title: "React JS Developer",
      company: "WebScale Solutions",
      appliedDate: "Sep 28, 2026",
      status: "Pending",
      type: "Remote",
    },
    {
      id: 3,
      title: "UI/UX Engineer",
      company: "DesignHub",
      appliedDate: "Sep 15, 2026",
      status: "Rejected",
      type: "Contract",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Interviewing":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Pending":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Rejected":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
      <p className="mt-1 text-sm text-gray-600">
        Track the status and history of your submitted job applications.
      </p>

      {/* Added overflow-x-auto to make the table scrollable on small screens */}
      <div className="mt-6 w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Job Title
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Company
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Applied Date
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {applications.map((app) => (
              <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {app.title}
                  <span className="block text-xs font-normal text-gray-500">
                    {app.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {app.company}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {app.appliedDate}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap">
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${getStatusBadge(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}