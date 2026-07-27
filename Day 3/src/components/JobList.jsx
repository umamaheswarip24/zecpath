import jobs from "../data/jobs";
import JobCard from "./JobCard";

function JobList() {
  return (
    <div className="job-list">
      <h1>Available Jobs</h1>

      <div className="job-container">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            experience={job.experience}
            salary={job.salary}
          />
        ))}
      </div>
    </div>
  );
}

export default JobList;