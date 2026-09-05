import { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import ResumeUpload from "../../components/ResumeUpload";

export default function CandidateProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    title: "Frontend React Developer",
    location: "San Francisco, CA",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 234-5678",
    bio: "Passionate frontend developer with 3+ years of experience building responsive, accessible web applications using React, Tailwind CSS, and modern JavaScript.",
    skills: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git", "REST APIs"]
  });
  const [newSkill, setNewSkill] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile((prev) => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setProfile((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s !== skillToRemove)
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12">
      {/* Header Card */}
      <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
          <p className="text-md font-medium text-blue-600">{profile.title}</p>
          <p className="mt-1 text-sm text-gray-500">{profile.location} • {profile.email}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant={isEditing ? "outline" : "primary"} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      {isEditing ? (
        <form onSubmit={handleSave} className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">Edit Profile Information</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Full Name" name="name" value={profile.name} onChange={handleChange} />
            <Input label="Professional Title" name="title" value={profile.title} onChange={handleChange} />
            <Input label="Location" name="location" value={profile.location} onChange={handleChange} />
            <Input label="Phone Number" name="phone" value={profile.phone} onChange={handleChange} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio / Summary</label>
            <textarea 
              name="bio" 
              rows={4} 
              value={profile.bio} 
              onChange={handleChange} 
              className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Skills Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Manage Skills</label>
            <div className="mt-2 flex gap-2">
              <input 
                type="text" 
                placeholder="Add a skill..." 
                value={newSkill} 
                onChange={(e) => setNewSkill(e.target.value)}
                className="flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
              />
              <Button type="button" variant="primary" onClick={handleAddSkill}>Add Skill</Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-800">
                  {skill}
                  <button type="button" onClick={() => handleRemoveSkill(skill)} className="ml-2 text-gray-500 hover:text-red-600">×</button>
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-gray-100 pt-4">
            <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button type="submit" variant="primary">Save Changes</Button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          {/* Bio Section */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">About Me</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{profile.bio}</p>
          </div>

          {/* Skills Display */}
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Upload Module */}
          <ResumeUpload />
        </div>
      )}
    </div>
  );
}