import React from "react";

const Hero = () => {
  return (
    <section className="w-full bg-white m-4 p-4 ">
      <div className="text-indigo-500 text-center">
        <h1 className="text-4xl font-bold mb-4 mt-10 text-indigo-500">
          Welcome to Job Portal
        </h1>
        <p className="text-lg mb-8">
          Find your desired jobs with our Job Portal and get your dream job.
        </p>

        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
          Find Jobs
        </button>
      </div>
    </section>
  );
};

export default Hero;
