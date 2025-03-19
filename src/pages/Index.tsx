import React from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/job/SearchBar";
import JobGrid from "@/components/job/JobGrid";

const Index: React.FC = () => {
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
        <SearchBar />
        <JobGrid />
      </main>
    </>
  );
};

export default Index;
