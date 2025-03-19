import React from "react";

interface JobCardProps {
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  experience: string;
  locationType: string;
  salary: string;
  description: string;
}

const JobCard: React.FC<JobCardProps> = ({
  companyLogo,
  companyName,
  jobTitle,
  experience,
  locationType,
  salary,
  description,
}) => {
  return (
    <div className="w-[316px] shadow-[0_0_14px_rgba(211,211,211,0.15)] bg-white p-4 rounded-xl max-sm:w-full relative">
      <div className="w-[83px] h-[82px] flex items-center justify-center mb-[19px] rounded-[13px]">
        <img
          src={companyLogo}
          alt={companyName}
          className="w-[66px] h-[66px]"
        />
      </div>
      <div className="absolute text-sm bg-[#B0D9FF] px-2.5 py-[7px] rounded-[10px] right-4 top-4">
        24h Ago
      </div>
      <h2 className="text-xl font-bold text-black mb-4">{jobTitle}</h2>
      <div className="flex gap-4 mb-5">
        <div className="flex items-center gap-1 text-[#5A5A5A] text-base">
          <i className="ti ti-users" />
          <span>{experience}</span>
        </div>
        <div className="flex items-center gap-1 text-[#5A5A5A] text-base">
          <i className="ti ti-building" />
          <span>{locationType}</span>
        </div>
        <div className="flex items-center gap-1 text-[#5A5A5A] text-base">
          <i className="ti ti-stack" />
          <span>{salary}</span>
        </div>
      </div>
      <p className="text-sm text-[#555] mb-5">{description}</p>
      <button className="w-full text-white text-base font-bold cursor-pointer bg-[#0AF] p-3 rounded-[10px] border-[none]">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
