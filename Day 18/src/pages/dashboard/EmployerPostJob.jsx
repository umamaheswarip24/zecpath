import { useState } from "react";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";

export default function EmployerPostJob() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    category: "frontend",
    description: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
    setFormData({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      salary: "",
      category: "frontend",
      description: "",
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">Post a New Job Opening</h1>
      <p className="mt-1 text-sm text-gray-600">Fill out the details below to publish a listing for candidates.</p>
      
      {successMessage && (
        <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-800">
          Job listing published successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">
          <Input label="Job Title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. Senior Frontend Engineer" required />
          <Input label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. TechCorp" required />
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Input label="Location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Remote / New York" required />
          <Select 
            label="Employment Type" 
            name="type" 
            value={formData.type} 
            onChange={handleChange}
            options={[
              { label: "Full-time", value: "Full-time" },
              { label: "Part-time", value: "Part-time" },
              { label: "Contract", value: "Contract" }
            ]} 
          />
          <Select 
            label="Category" 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            options={[
              { label: "Frontend", value: "frontend" },
              { label: "Backend", value: "backend" },
              { label: "UI/UX Design", value: "design" },
              { label: "Full Stack", value: "fullstack" }
            ]} 
          />
        </div>

        <Input label="Salary Range" name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. $120k - $140k" required />

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">Job Description</label>
          <textarea 
            name="description" 
            rows="4" 
            value={formData.description} 
            onChange={handleChange}
            placeholder="Describe role requirements, responsibilities, and tech stack..."
            className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex justify-end">
          <Button variant="primary" type="submit">Publish Job Listing</Button>
        </div>
      </form>
    </div>
  );
}