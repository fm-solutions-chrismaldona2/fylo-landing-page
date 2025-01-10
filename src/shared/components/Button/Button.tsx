import { ButtonProps } from "@shared/types";
import clsx from "clsx";
import styles from "./Button.module.css";

const Button = ({
  variant = "default",
  size = "normal",
  children,
  disabled,
  className,
  ...props
}: ButtonProps) => {
  const btnClassName = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    disabled && styles["button--disabled"],
    className
  );

  return (
    <button className={btnClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
