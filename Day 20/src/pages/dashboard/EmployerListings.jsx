export default function EmployerListings() {
  const listings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      type: "Full-time",
      applicants: 4,
      status: "Active",
    },
    {
      id: 2,
      title: "Backend Node Engineer",
      type: "Full-time",
      applicants: 7,
      status: "Active",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Manage Job Listings</h1>
      <p className="mt-1 text-sm text-gray-600">
        Review and maintain your active company job posts.
      </p>

      {/* Added overflow-x-auto to ensure the table scrolls horizontally on small screens */}
      <div className="mt-6 w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Job Title
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Type
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Applicants
              </th>
              <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {listings.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                  {job.type}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {job.applicants} candidates
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap flex items-center gap-2">
                  <button className="rounded-lg bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-100 transition-colors">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}