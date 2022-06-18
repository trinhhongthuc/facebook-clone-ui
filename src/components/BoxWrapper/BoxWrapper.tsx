import React from "react";
import "./boxWrapper.scss";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const BoxWrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={`box-wrapper ${className}`}>{children}</div>;
};

export default BoxWrapper;
