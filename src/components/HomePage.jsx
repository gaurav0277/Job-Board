import React, { useState } from 'react';

function HomePage() {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', applied: false },
    { id: 2, title: 'Backend Developer', applied: false },
  ]);

  const applyForJob = (id) => {
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, applied: true } : job
    );
    setJobs(updatedJobs);
  };

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} - {job.applied ? 'Applied' : 'Open'}
            <button onClick={() => applyForJob(job.id)}>Apply</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
