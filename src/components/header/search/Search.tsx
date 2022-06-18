import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/images/logoHeader.svg";
import routes from "../../../routes";
import "./search.scss";
const Search = () => {
  const [activeInputSearch, setActiveInputSearch] = useState<string>("");

  const handleBack = () => {
    setActiveInputSearch("");
  };

  return (
    <div className={`search ${activeInputSearch}`}>
      <div className="search__logo">
        <Link to={`${routes.home}`}>
          <Logo className="search__logo-icon" />
        </Link>

        <ArrowBackIcon
          className="search__arrow-back"
          onClick={() => handleBack()}
        />
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
