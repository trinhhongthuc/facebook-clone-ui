import "./header.scss";
import Information from "./information/Information";
import Menu from "./menu/Menu";
import Search from "./search/Search";
const Header = () => {
  return (
    <div className="header">
      <Search />
      <Menu />
      <Information />
    </div>
  );
};

export default Header;
