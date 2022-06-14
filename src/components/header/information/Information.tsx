import "./information.scss";

import { ReactComponent as Droparrowbottom } from "../../../assets/images/droparrowbottom.svg";
import { ReactComponent as Menu } from "../../../assets/images/menu.svg";
import { ReactComponent as Message } from "../../../assets/images/message.svg";
import { ReactComponent as Notification } from "../../../assets/images/notification.svg";
import Image from "../../image/Image";

const Information = () => {
  return (
    <div className="info">
      <div className="info__user">
        <Image src="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p80x80&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZmBTQu88z58AX97yX8V&_nc_ht=scontent.fdad3-1.fna&oh=00_AT-SphXlhW1cgxYXrRAETNqI4ifVlNJ2gY1n4Zmf_sxeRw&oe=62CE6C78" />
        <span>thức</span>
      </div>

      <ul className="info__list">
        <li>
          <Menu />
        </li>
        <li>
          <Message />
        </li>
        <li>
          <Notification />
        </li>
        <li>
          <Droparrowbottom />
        </li>
      </ul>
    </div>
  );
};

export default Information;
