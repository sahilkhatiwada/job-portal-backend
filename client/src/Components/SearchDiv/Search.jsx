import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Search = () => {
  return (
    <div className="">
      <div className="searchDiv grid gap-7 bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex justify-between items-center  gap-[70px] bg-white p-5 shadow-lg shadow-greyIsh-700 border border-solid border-blue-200 rounded-md">
            <div className="flex gap-2 items-center border border-solid border-blue-400 rounded-md">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search Job Here"
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <div className="flex gap-2 items-center border border-solid border-blue-400 rounded-md">
              <BsHouseDoor className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search by Company"
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
            </div>

            <div className="flex gap-2 items-center border border-solid border-blue-400 ">
              <CiLocationOn className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
                placeholder="Search by Location"
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon " />
            </div>

            <button className="bg-blue-700 h-full p-3 px-10 rounded-[10px] text-white cursor-pointer  hover:bg-blue-600 ">
              Search
            </button>
          </div>
        </form>

        <div className="secDiv flex items-center gap-10 justify-center">
          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1 "
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="type" className="text-[#808080] font-semibold">
              Type:
            </label>
            <select
              name=""
              id="type"
              className="bg-white rounded-[3px] px-4 py-1 "
            >
              <option value="">Full-time</option>
              <option value="">Part-time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
            </select>
          </div>

          <div className="singleSearch flex items-center gap-2">
            <label htmlFor="level" className="text-[#808080] font-semibold">
              Level
            </label>
            <select
              name=""
              id="level"
              className="bg-white rounded-[3px] px-4 py-1 "
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advocate</option>
            </select>
          </div>

          <span className="cursor-pointer text-indigo-400">Clear All</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
