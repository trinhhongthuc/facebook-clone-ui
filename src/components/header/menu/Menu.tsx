import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Friend } from "../../../assets/images/friend.svg";
import { ReactComponent as Game } from "../../../assets/images/game.svg";
import { ReactComponent as Group } from "../../../assets/images/group.svg";
import { ReactComponent as Home } from "../../../assets/images/home.svg";
import { ReactComponent as Watch } from "../../../assets/images/watch.svg";

import "./menu.scss";
const Menu = () => {
  const [active, setActive] = useState<string>("home");

  const navigate = useNavigate();

  const dataMenu = useMemo(() => {
    return [
      {
        icon: <Home />,
        active: "home",
        path: "/home",
      },
      {
        icon: <Friend />,
        active: "friend",
        path: "/friend",
      },
      {
        icon: <Watch />,
        active: "watch",
        path: "/watch",
      },
      {
        icon: <Group />,
        active: "group",
        path: "/group",
      },
      {
        icon: <Game />,
        active: "game",
        path: "/game",
      },
    ];
  }, []);

  return (
    <nav className="menu">
      <ul className="menu__list">
        {dataMenu?.map((item, index) => (
          <li
            className={`menu__list-item ${
              item.active === active ? "active" : ""
            }`}
            onClick={() => {
              setActive(item.active);
              navigate(item.path);
            }}
          >
            {item.icon}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
