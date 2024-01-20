import React from 'react';

const AppliedJob = ({ title, company, status }) => (
  <div className="p-4 bg-white border mb-4">
    <div className="flex justify-between">
        <div className="text-xl font-bold">{title}</div>
        <div className="flex items-center space-x-2 px-2 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
        <span className="font-bold">{status}</span></div>
    </div>
    <div className="text-left text-bottom">Company: {company}</div>
    
  </div>
);

const AppliedJobs = () => {
  const appliedJobs = [
    { title: 'Software Engineer', company: 'Acme Inc.', status: 'Applied' },
    { title: 'Web Developer', company: 'Stark Industries', status: 'Interview Scheduled' },
    { title: 'Data Analyst', company: 'LexCorp', status: 'Reviewing Applications' },
    { title: 'Software Engineer', company: 'Acme Inc.', status: 'Applied' },
    { title: 'Web Developer', company: 'Stark Industries', status: 'Interview Scheduled' },
    { title: 'Data Analyst', company: 'LexCorp', status: 'Reviewing Applications' },
    { title: 'Software Engineer', company: 'Acme Inc.', status: 'Applied' },
    { title: 'Web Developer', company: 'Stark Industries', status: 'Interview Scheduled' },
    { title: 'Data Analyst', company: 'LexCorp', status: 'Reviewing Applications' },
    
  ];

  return (
    <div className="p-2 bg-gray-50 border rounded shadow-md w-full">
     <div className="user-list-container" style={{ height:'650px',maxHeight: '650px',overflowY: 'auto',scrollbarWidth: 'thin', scrollbarColor: 'black black'  }}>
        {appliedJobs.map((job, index) => (
          <AppliedJob key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
