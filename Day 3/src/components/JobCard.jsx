function JobCard({ title, company, experience, salary }) {
  return (
    <div className="job-card">
      <h2>{title}</h2>

      <p>
        <strong>Company:</strong> {company}
      </p>

      <p>
        <strong>Experience:</strong> {experience}
      </p>

      <p>
        <strong>Salary:</strong> {salary}
      </p>

      <button className="apply-btn">Apply</button>
    </div>
  );
}

export default JobCard;