import Jobs from "../Components/JobDiv/Jobs";
import Search from "../Components/SearchDiv/Search";
import Value from "../Components/ValueDiv/Value";

const Home = () => {
  return (
    <div className="w-[85%] m-auto bg-[white]">
      <Search />
      <Jobs />
      <Value />
    </div>
  );
};

export default Home;
