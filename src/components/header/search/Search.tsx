import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as Logo } from "../../../assets/images/logoHeader.svg";
import "./search.scss";
const Search = () => {
  return (
    <div className="search">
      <div className="search__logo">
        <Logo />
      </div>

      <div className="search__input">
        <span className="search__input-icon">
          <SearchIcon />
        </span>

        <input type="text" placeholder="Search on facebook" />
      </div>
    </div>
  );
};

export default Search;
