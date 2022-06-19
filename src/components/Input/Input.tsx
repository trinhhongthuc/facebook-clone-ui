import "./input.scss";

interface Props {
  className?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ className, placeholder, ...rest }) => {
  return (
    <input
      className={`input ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
