export default function CandidateOverview() {
  const stats = [
    { label: "Active Applications", value: 4 },
    { label: "Saved Jobs", value: 12 },
    { label: "Profile Views", value: 48 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Candidate Dashboard</h1>
      <p className="mt-1 text-sm text-gray-600">
        Track your job applications and saved listings.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}