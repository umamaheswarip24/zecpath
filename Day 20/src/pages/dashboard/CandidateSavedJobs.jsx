import { useState } from "react";
import Button from "../../components/ui/Button";

export default function CandidateSavedJobs() {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      title: "Senior React Developer",
      company: "Innovate Tech",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $140k",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "CloudScale Systems",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110k - $130k",
    },
    {
      id: 3,
      title: "UI Developer",
      company: "Pixel Craft",
      location: "New York, NY",
      type: "Contract",
      salary: "$60 / hr",
    },
  ]);

  const handleRemove = (id) => {
    setSavedJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
      <p className="mt-1 text-sm text-gray-600">
        Review and manage the job listings you have bookmarked for later.
      </p>

      {savedJobs.length === 0 ? (
        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-8 text-center text-gray-500">
          No saved jobs found.
        </div>
      ) : (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {savedJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col justify-between transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 shrink-0">
                    {job.type}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-gray-600">{job.company}</p>
                <p className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                  📍 {job.location}
                </p>
                <p className="mt-1 text-xs font-semibold text-gray-900">{job.salary}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Button variant="primary" className="flex-1 text-center">
                  Apply Now
                </Button>
                <Button variant="outline" onClick={() => handleRemove(job.id)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}