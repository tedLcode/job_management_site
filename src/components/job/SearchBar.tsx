
import React, { useState } from "react";
import RangeSlider from "../ui/RangeSlider";

const SearchBar: React.FC = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState(60); // Default to 60% of the range

  const handleSalaryChange = (value: number) => {
    setSalaryRange(value);
  };

  return (
    <div className="flex justify-center px-16 py-4">
      <form className="flex items-center gap-4 border shadow-[0_0_20px_rgba(127,127,127,0.15)] w-full max-w-[980px] bg-white px-[26px] py-4 rounded-[122px] border-solid border-[#FCFCFC] max-md:flex-col max-md:w-full max-sm:p-4">
        <div className="flex items-center gap-2 p-2 border-r-2 border-r-[#EAEAEA] border-solid max-md:w-full max-md:border-r-[none] max-md:border-b-2 max-md:border-b-[#EAEAEA] max-md:border-solid">
          <i className="ti ti-search" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="text-base text-[#686868] w-[200px] border-[none] outline-none"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 p-2 border-r-2 border-r-[#EAEAEA] border-solid max-md:w-full max-md:border-r-[none] max-md:border-b-2 max-md:border-b-[#EAEAEA] max-md:border-solid">
          <i className="ti ti-map-pin" />
          <input
            type="text"
            placeholder="Preferred Location"
            className="text-base text-[#686868] w-[200px] border-[none] outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <i className="ti ti-chevron-down" />
        </div>
        <div className="flex items-center gap-2 p-2 border-r-2 border-r-[#EAEAEA] border-solid max-md:w-full max-md:border-r-[none] max-md:border-b-2 max-md:border-b-[#EAEAEA] max-md:border-solid">
          <i className="ti ti-user" />
          <input
            type="text"
            placeholder="Job type"
            className="text-base text-[#686868] w-[200px] border-[none] outline-none"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />
          <i className="ti ti-chevron-down" />
        </div>
        <div className="flex flex-col gap-1 min-w-[250px]">
          <div className="text-base font-bold text-[#222]">
            Salary Per Month
          </div>
          <div className="text-base text-[#222] whitespace-nowrap">₹50k - ₹80k</div>
          <RangeSlider value={salaryRange} onChange={handleSalaryChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
