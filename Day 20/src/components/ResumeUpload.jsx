import { useState } from "react";
import Button from "./ui/Button";

export default function ResumeUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
      setSuccess(false);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
      if (onUpload) onUpload(file);
    }, 1200);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900">Resume / CV</h3>
      <p className="mt-1 text-sm text-gray-600">Upload your latest resume (PDF or DOCX)</p>

      <div className="mt-4 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400">
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} 
          className="mb-2 text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-600 hover:file:bg-blue-100"
        />
        {file && <p className="text-sm font-medium text-gray-700">Selected: {file.name}</p>}
      </div>

      {file && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">Max file size: 5MB</span>
          <Button variant="primary" onClick={handleUpload} disabled={uploading}>
            {uploading ? "Uploading..." : success ? "Uploaded Successfully!" : "Upload Resume"}
          </Button>
        </div>
      )}
    </div>
  );
}