import BoxWrapper from "../../../BoxWrapper/BoxWrapper";
import "./messageBox.scss";
import MessageBoxHeader from "./MessageBoxHeader/MessageBoxHeader";

const MessageBox = () => {
  return (
    <BoxWrapper className="message__box">
      <MessageBoxHeader />
      <div className="message__box-main"></div>
      <footer className="message__box-footer"></footer>
    </BoxWrapper>
  );
};

export default MessageBox;
