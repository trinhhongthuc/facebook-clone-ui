import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import BoxWrapper from "../../../BoxWrapper/BoxWrapper";
import Input from "./../../../Input/Input";
import ChatItem from "./ChatItem/ChatItem";
import "./messageBox.scss";
import MessageBoxHeader from "./MessageBoxHeader/MessageBoxHeader";

export type Message = "read" | "see" | "not-see";

export interface DataType {
  src: string;
  description: string;
  name: string;
  readMessage: Message;
}

const messageList: DataType[] = [
  {
    src: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/273905626_105144378767346_3624029230192735631_n.jpg?stp=c0.33.100.100a_dst-jpg_p100x100&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=mh7eurgmKnoAX_dwgzH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan5-11.fna&oh=00_AT-mOLa4fhsWKgvEzbfmj-PsQI4QESKpE1OKquzU0NI7iA&oe=62B433A8",
    name: "Trương Tuyền",
    description: "Trêu tý mà",
    readMessage: "read",
  },
  {
    src: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/279866182_723120478872017_6767447134201521875_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=HMyBHBFgRqwAX_sUNUu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9h_W7EsAlsg5NUGxu6iwhq260ZdWhMDTHj74I7MoBSKg&oe=62B2F3EF",
    name: "Lệ Giang",
    description: "Đã bày tỏ cảm xúc về tin nhắn của bạn",
    readMessage: "see",
  },
  {
    src: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/222168898_4176525832439654_4735389887587378047_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=e-_nrnnNd9kAX_1Lb1T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-4.fna&oh=00_AT-1fIv-y77TY-s3q1SrIIrbvutZGx_i5OyN7ilXqr_YrQ&oe=62B38A12",
    name: "Diệu hiền",
    description: "Đã bày tỏ cảm xúc về tin nhắn của bạn",
    readMessage: "not-see",
  },
  {
    src: "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-1/138737961_10208018489815564_3450812044887147594_n.jpg?stp=dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Ta10_tWl8MEAX8Lix_U&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_ceZzAM1ylCLnwzQvuDgfBtX-SW47tPUP7XhqmSyUJDg&oe=62D4926F",
    name: "Trần Diễm My",
    description: "Đã bày tỏ cảm xúc về tin nhắn của bạn",
    readMessage: "read",
  },
  {
    src: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/235736589_2851175171812389_4113789913975959732_n.jpg?stp=c0.2.100.100a_dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sVqECXnyIJgAX8hgJqa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-UfwctjcPTT6MQNMD4w8uBZCPEeMasJkcAAwAuXRk95g&oe=62B3470C",
    name: "Anh Nguyễn",
    description: "Đã bày tỏ cảm xúc về tin nhắn của bạn",
    readMessage: "read",
  },
];

const MessageBox = () => {
  return (
    <BoxWrapper className="message__box">
      <MessageBoxHeader />
      <div className="message__box-search">
        <SearchIcon />
        <Input
          className="message__box-search-input"
          placeholder="Tìm kiếm trên Message"
        />
      </div>
      <div className="message__box-main">
        {messageList?.map(({ src, name, description, readMessage }, index) => (
          <ChatItem
            key={index}
            src={src}
            readMessage={readMessage}
            name={name}
            description={description}
          />
        ))}
      </div>
      <footer className="message__box-footer">
        <Link className="message__box-footer-link" to="">
          Xem tất cả trong message
        </Link>
      </footer>
    </BoxWrapper>
  );
};

export default MessageBox;
