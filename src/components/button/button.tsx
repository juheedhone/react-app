import styles from "./button.module.css";

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles.btnPrimary].join(" ")}
      // className={`${styles.btn} ${styles.btnPrimary}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
