import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Alert = ({ children }: Props) => {
  return <div className="Alert Alert-primary">{children}</div>;
};

export default Alert;
