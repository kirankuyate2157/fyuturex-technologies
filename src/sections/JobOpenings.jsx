import React from 'react';
import { Briefcase } from 'lucide-react';

const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { title: "Backend Developer", location: "Pune, India", type: "Full-Time" },
  { title: "Product Manager", location: "Bangalore, India", type: "Contract" },
];

const JobOpenings = () => {
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-2">
        <Briefcase /> Open Positions
      </h2>
      <div className="space-y-4">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border hover:shadow-lg transition bg-white"
          >
            <h3 className="text-xl font-bold  text-gray-800 dark:text-gray-200  ">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.location} | {job.type}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;