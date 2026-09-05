import { useState } from "react";
import Button from "../../components/ui/Button";

export default function EmployerListings() {
  const [listings, setListings] = useState([
    { id: 1, title: "Senior Frontend Developer", type: "Full-time", applicants: 4 },
    { id: 2, title: "Backend Node Engineer", type: "Full-time", applicants: 7 },
  ]);

  const handleDelete = (id) => {
    setListings(listings.filter(job => job.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Manage Job Listings</h1>
      <p className="mt-1 text-sm text-gray-600">Review and maintain your active company posts.</p>

      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {listings.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-3 font-semibold">Job Title</th>
                <th className="px-6 py-3 font-semibold">Type</th>
                <th className="px-6 py-3 font-semibold">Applicants</th>
                <th className="px-6 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {listings.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{job.title}</td>
                  <td className="px-6 py-4 text-gray-600">{job.type}</td>
                  <td className="px-6 py-4 text-gray-600">{job.applicants} candidates</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="danger" onClick={() => handleDelete(job.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-12 text-center text-gray-500">No active job listings found.</div>
        )}
      </div>
    </div>
  );
}