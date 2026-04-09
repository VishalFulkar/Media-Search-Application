import SearchBar from "../components/SearchBar";
import Tab from "../components/Tab";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div className="min-h-screen bg-[#050505]  bg-combined-pattern text-gray-200">
      <Navbar/>
      <div className="h-11 w-full p-10"></div>
      <SearchBar />

      {query != ''?(<div className="max-w-7xl mx-auto px-4">
          <Tab />
          <ResultGrid />
        </div>):''}
      
    </div>
  );
};

export default HomePage;
