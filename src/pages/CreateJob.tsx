
import React from "react";
import Header from "@/components/layout/Header";
import JobForm from "@/components/job/JobForm";

const CreateJob: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;600;700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.30.0/tabler-icons.min.css"
      />
      <main className="max-w-none min-h-screen w-full bg-[#FBFBFF] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-[#303030] mb-8">Create Job Opening</h1>
          <JobForm />
        </div>
      </main>
    </>
  );
};

export default CreateJob;
