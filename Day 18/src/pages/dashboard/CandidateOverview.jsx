export default function CandidateOverview() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Candidate Dashboard</h1>
      <p className="mt-1 text-sm text-gray-600">Track your job applications and saved listings.</p>
      
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Active Applications</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">4</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Saved Jobs</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Profile Views</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">48</p>
        </div>
      </div>
    </div>
  );
}