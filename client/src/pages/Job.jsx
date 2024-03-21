import React from "react";
import Jobs from "../Components/JobDiv/Jobs";
import { GrAdd } from "react-icons/gr";

const Job = () => {
  return (
    <>
      <div className="flex justify-end m-10 p-5 ">
        <button
          type="submit"
          className=" hover:border-blue-600 hover:bg-blue-600 hover:text-white border-[3px] rounded-[10px] block p-[10px] w-75 text-[15px] font-semibold "
        >
          <GrAdd className="inline mr-2 text-[20px]" />
          Add Job
        </button>
      </div>
      <Jobs />

      <div className="flex justify-center mt-10">
        <button className=" hover:border-blue-600 hover:bg-blue-600 hover:text-white border-[3px] rounded-[11px] block p-[12px] w-75 text-[15px] font-semibold">
          Load More...
        </button>
      </div>
    </>
  );
};

export default Job;
