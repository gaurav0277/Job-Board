import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';

function JobDetailsPage() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <JobApplicationForm jobId={job.id} />
    </div>
  );
}

export default JobDetailsPage;
