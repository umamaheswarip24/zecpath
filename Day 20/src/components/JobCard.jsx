import Button from "./ui/Button";

export default function JobCard({ job, onApply }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">{job.type}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-gray-700">
          {job.company} • <span className="text-gray-500">{job.location}</span>
        </p>
        <p className="mt-4 text-sm text-gray-600">{job.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="font-semibold text-gray-900">{job.salary}</span>
        <Button variant="primary" onClick={() => onApply(job)}>Apply Now</Button>
      </div>
    </div>
  );
}