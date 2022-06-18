import { useMemo } from "react";
import { ReactComponent as Friend } from "../../../assets/images/friend.svg";
import { ReactComponent as FriendActive } from "../../../assets/images/friendActive.svg";
import { ReactComponent as Game } from "../../../assets/images/game.svg";
import { ReactComponent as GameActive } from "../../../assets/images/gameActive.svg";
import { ReactComponent as Group } from "../../../assets/images/group.svg";
import { ReactComponent as GroupActive } from "../../../assets/images/groupActive.svg";
import { ReactComponent as Home } from "../../../assets/images/home.svg";
import { ReactComponent as HomeActive } from "../../../assets/images/homeActive.svg";
import { ReactComponent as Watch } from "../../../assets/images/watch.svg";
import { ReactComponent as WatchActive } from "../../../assets/images/watchActive.svg";

import "./menu.scss";
import MenuItem from "./MenuItem";
const Menu = () => {
  const dataMenu = useMemo(() => {
    return [
      {
        icon: <Home />,
        iconActive: <HomeActive />,
        active: "home",
        path: "/home",
      },
      {
        icon: <Friend />,
        iconActive: <FriendActive />,
        active: "friend",
        path: "/friend",
      },
      {
        icon: <Watch />,
        iconActive: <WatchActive />,
        active: "watch",
        path: "/watch",
      },
      {
        icon: <Group />,
        iconActive: <GroupActive />,
        active: "group",
        path: "/group",
      },
      {
        icon: <Game />,
        iconActive: <GameActive />,
        active: "game",
        path: "/game",
      },
    ];
  }, []);

  return (
    <nav className="menu">
      <ul className="menu__list">
        {dataMenu?.map((item, index) => (
          <MenuItem
            to={item.path}
            className="menu__list-item"
            key={index}
            icon={item.icon}
            iconActive={item.iconActive}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
