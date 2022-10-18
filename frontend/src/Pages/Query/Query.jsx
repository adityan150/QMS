import Navbar from "../../Components/Navbar/Navbar";
import NewQuery from "../../Components/NewQuery/NewQuery";
import SearchIcon from "@mui/icons-material/Search";
import "./query.scss";

function Query() {
  return (
    <div className="query">
      <Navbar current="query" />
      <div className="queryContainer">
        <div className="searchBar">
          <SearchIcon />
          <input type="search" name="searchQuery" id="query" />
        </div>
        <NewQuery />
      </div>
    </div>
  );
}

export default Query;
