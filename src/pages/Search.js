import DisplayHosts from "../components/DisplayHosts";
import FilterOptions from "../components/Filter&Sort/FilterOptions";
import Map from "../components/Map/Map";
import ReactMap from "../components/Map/ReactMap";

function Search() {
  return (
    <div className="flex justify-between">
      <div className="flex w-full justify-between p-5">
        <FilterOptions />
        <DisplayHosts />
      </div>
      <ReactMap/>
    </div>
  );
}

export default Search;