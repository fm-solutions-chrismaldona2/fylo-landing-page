import { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./UnderlinedLink.module.css";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: `#${string}`;
  children: ReactNode;
}

const UnderlinedLink = ({ color, children, ...props }: LinkProps) => {
  return (
    <a
      {...props}
      className={styles.link}
      style={color && ({ "--text-color": color } as React.CSSProperties)}
    >
      {children}
    </a>
  );
};

export default UnderlinedLink;
