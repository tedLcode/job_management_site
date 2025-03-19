
import React from "react";
import JobCard from "./JobCard";

// Sample job data
const jobsData = [
  {
    id: 1,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fd4213a9c827e98ca11e2bf8614b4bcb2311ed0b",
    companyName: "Amazon",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 2,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/31c25a3f5dd4188f5383c5c469f3af593b3dabab",
    companyName: "Tesla",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 3,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8efcb821b88ec04c2b6a273b28c963b8ff9c8f3",
    companyName: "Swiggy",
    jobTitle: "UX/UI Designer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 4,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fd4213a9c827e98ca11e2bf8614b4bcb2311ed0b",
    companyName: "Amazon",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 5,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/31c25a3f5dd4188f5383c5c469f3af593b3dabab",
    companyName: "Tesla",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 6,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8efcb821b88ec04c2b6a273b28c963b8ff9c8f3",
    companyName: "Swiggy",
    jobTitle: "UX/UI Designer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 7,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fd4213a9c827e98ca11e2bf8614b4bcb2311ed0b",
    companyName: "Amazon",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
  {
    id: 8,
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/31c25a3f5dd4188f5383c5c469f3af593b3dabab",
    companyName: "Tesla",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    locationType: "Onsite",
    salary: "12LPA",
    description:
      "A user-friendly interface lets you browse stunning photos and videos Filter destinations based on interests and travel style, and create personalized",
  },
];

const JobGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-16 py-8 max-md:px-8 max-sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobsData.map((job) => (
          <JobCard
            key={job.id}
            companyLogo={job.companyLogo}
            companyName={job.companyName}
            jobTitle={job.jobTitle}
            experience={job.experience}
            locationType={job.locationType}
            salary={job.salary}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
};

export default JobGrid;
