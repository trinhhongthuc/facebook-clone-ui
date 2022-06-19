import React from "react";
import "./image.scss";

interface Props {
  src: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image: React.FC<Props> = ({
  src,
  className,
  width = 28,
  height = 28,
}) => {
  const style = {
    width: width + "px",
    height: height + "px",
  };

  return (
    <img className={`img ${className}`} style={style} src={src} alt={src} />
  );
};

export default Image;
