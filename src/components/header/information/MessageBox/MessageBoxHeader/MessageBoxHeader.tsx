import "./messageBoxHeader.scss";

import { ReactComponent as Maximize } from "../../../../../assets/images/maximize.svg";
import { ReactComponent as PenEdit } from "../../../../../assets/images/pen-edit.svg";
import { ReactComponent as ThreeDot } from "../../../../../assets/images/three-dot-horizontal.svg";
const MessageBoxHeader = () => {
  return (
    <header className="message__box-header">
      <h3 className="message__box-header-title">Chat</h3>
      <div className="message__box-header-action">
        <span>
          <ThreeDot />
        </span>
        <span>
          <Maximize />
        </span>
        <span>
          <PenEdit />
        </span>
      </div>
    </header>
  );
};

export default MessageBoxHeader;
