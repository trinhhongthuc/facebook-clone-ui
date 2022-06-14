import { ReactComponent as Friend } from "../../../assets/images/friend.svg";
import { ReactComponent as Game } from "../../../assets/images/game.svg";
import { ReactComponent as Group } from "../../../assets/images/group.svg";
import { ReactComponent as Home } from "../../../assets/images/home.svg";
import { ReactComponent as Watch } from "../../../assets/images/watch.svg";

import "./menu.scss";
const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__list-item">
          <Home />
        </li>
        <li className="menu__list-item">
          <Friend />
        </li>
        <li className="menu__list-item">
          <Watch />
        </li>
        <li className="menu__list-item">
          <Group />
        </li>
        <li className="menu__list-item">
          <Game />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
