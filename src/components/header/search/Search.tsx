import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ReactComponent as Logo } from "../../../assets/images/logoHeader.svg";
import "./search.scss";
const Search = () => {
  const [activeInputSearch, setActiveInputSearch] = useState<string>("");

  return (
    <div className={`search ${activeInputSearch}`}>
      <div className="search__logo">
        <Logo className="search__logo-icon" />

        <ArrowBackIcon className="search__arrow-back" />
      </div>

      <div className="search__input">
        <span className="search__input-icon">
          <SearchIcon />
        </span>

        <input
          type="text"
          placeholder="Search on facebook"
          onFocus={() => setActiveInputSearch("active")}
          onBlur={() => setActiveInputSearch("")}
        />
        <div className="search__input-result">
          Không có kết quả tìm kiếm nào
        </div>
      </div>
    </div>
  );
};

export default Search;
