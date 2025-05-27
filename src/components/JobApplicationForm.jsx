import React, { useState } from 'react';

function JobApplicationForm({ jobId }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationData = { name, email, phone, coverLetter, jobId };
    
    try {
      const response = await fetch('http://localhost:5000/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
      
      if (response.ok) {
        setStatus('Application submitted successfully!');
      } else {
        setStatus('There was an error submitting your application.');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Apply for this Job</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Cover Letter:</label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          required
        />
        <button type="submit">Submit Application</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default JobApplicationForm;
