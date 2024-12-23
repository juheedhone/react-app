import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
