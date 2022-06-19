import { ReactComponent as IconCheckLight } from "../../../../../assets/images/icon-check-light.svg";
import { ReactComponent as IconCheckSolid } from "../../../../../assets/images/icon-check-solid.svg";
import { ReactComponent as ThreeDotHorizontal } from "../../../../../assets/images/three-dot-horizontal.svg";
import { DataType, Message } from "../MessageBox";
import Image from "./../../../../image/Image";
import "./chatItem.scss";

const ChatItem: React.FC<DataType> = ({
  src,
  readMessage,
  description,
  name,
}) => {
  const checkReadMessage = (read: Message) => {
    if (read === "read") return <Image src={src} width={16} height={16} />;
    else if (read === "see") return <IconCheckSolid />;
    else return <IconCheckLight />;
  };

  return (
    <div className="chat-item">
      <div className="chat-item__action">
        <ThreeDotHorizontal />
      </div>

      <div className="chat-item__avatar">
        <Image src={src} width={56} height={56} />
      </div>
      <div className="chat-item__info">
        <h5 className="chat-item__info-name">{name}</h5>
        <div className="chat-item__info-description">
          {description.length > 38
            ? description.slice(0, 38) + "..."
            : description}
        </div>
      </div>
      <div className="chat-item__icon-notification">
        {checkReadMessage(readMessage)}
      </div>
    </div>
  );
};

export default ChatItem;
