import { useEffect, useState } from "react";
import JobCard from "./JobCard";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getJobs() {
    try {
      setLoading(true);

      const response = await fetch(
        "https://www.arbeitnow.com/api/job-board-api"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const result = await response.json();

      setJobs(result.data.slice(0, 6));
      setError("");

    } catch (error) {
      setError("Unable to load jobs.");

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Fetch jobs when the page loads
    getJobs();

    // Refresh jobs every 30 seconds
    const interval = setInterval(() => {
      getJobs();
    }, 30000);

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

        <button onClick={getJobs}>
          Try Again
        </button>
      </div>
    );
  }

  // Job list
  return (
    <section className="job-list" id="jobs">
      <h1>Available Jobs</h1>

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