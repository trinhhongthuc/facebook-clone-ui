import React from "react";
import "./image.scss";

interface Props {
  src: string;
}

const Image: React.FC<Props> = ({ src }) => {
  return <img className="img" src={src} alt={src} />;
};

export default Image;
