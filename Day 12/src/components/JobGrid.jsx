export default function JobGrid() {
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote", type: "Full-time" },
    { id: 2, title: "UI/UX Designer", company: "CreativeStudio", location: "New York, NY", type: "Contract" },
    { id: 3, title: "Backend Engineer", company: "DataFlow", location: "Remote", type: "Full-time" },
    { id: 4, title: "Product Manager", company: "InnovateInc", location: "San Francisco, CA", type: "Full-time" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Latest Job Openings
        </h2>
        <p className="text-gray-600">Find the perfect role from our latest listings.</p>
      </div>
      
      {/* Responsive CSS Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job) => (
          <div key={job.id} className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">{job.title}</h3>
              <p className="mb-4 text-sm text-gray-500">{job.company} &bull; {job.location}</p>
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {job.type}
              </span>
            </div>
            <button className="mt-6 w-full rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}