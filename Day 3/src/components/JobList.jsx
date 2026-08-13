import { useEffect, useState } from "react";
import getJobs from "../services/jobService";
import JobCard from "./JobCard";
import { REFRESH_TIME } from "../constants/constants";
import SearchBar from "./SearchBar";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadJobs() {
  try {
    setLoading(true);

    const data = await getJobs();

    setJobs(data);
    setError("");

  } catch (error) {
    setError("Unable to load jobs.");

  } finally {
    setLoading(false);
  }
}

  useEffect(() => {
    // Fetch jobs when the page loads
    loadJobs();

    // Refresh jobs every 30 seconds
    const interval = setInterval(() => {
      loadJobs();
    }, REFRESH_TIME);

    // Stop interval when component is removed
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading jobs...</p>
      </div>
    );
  }

  // Error UI
  if (error) {
    return (
      <div className="error-container">
        <h2>Something went wrong!</h2>

        <p>{error}</p>

        <button onClick={loadJobs}>
          Try Again
        </button>
      </div>
    );
  }

  // Job list
  return (
    <section className="job-list" id="jobs">
      <h1>Available Jobs</h1>
      <section className="job-list" id="jobs">
  <h1>Available Jobs</h1>

  <SearchBar />

  <div className="job-container">
    {/* Job cards */}
  </div>
</section>

      <div className="job-container">
        {jobs.map((job) => (
          <JobCard
            key={job.slug}
            title={job.title}
            company={job.company_name}
            experience="Not specified"
            salary="Not specified"
          />
        ))}
      </div>
    </section>
  );
}

export default JobList;