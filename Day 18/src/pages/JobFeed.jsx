import { useState } from "react";
import { mockJobs } from "../data/jobsData.js";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import JobCard from "../components/JobCard";

export default function JobFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleApplyClick = (job) => {
    alert(`Applying for ${job.title} at ${job.company}!`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Explore Job Openings</h1>
        <p className="mt-1 text-gray-600">Find your next career opportunity with top companies.</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="mb-8 grid gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-3">
        <div className="md:col-span-2">
          <Input 
            label="Search Jobs"
            placeholder="Search by job title or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div>
          <Select 
            label="Filter by Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            options={[
              { label: "All Categories", value: "all" },
              { label: "Frontend", value: "frontend" },
              { label: "Backend", value: "backend" },
              { label: "UI/UX Design", value: "design" },
              { label: "Full Stack", value: "fullstack" }
            ]}
          />
        </div>
      </div>

      {/* Job Listings Grid */}
      {filteredJobs.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onApply={handleApplyClick} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white py-12 text-center">
          <p className="text-lg font-medium text-gray-600">No jobs found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
            className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-500"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}