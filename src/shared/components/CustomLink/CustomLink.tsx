import { CustomLinkProps } from "@shared/types";
import clsx from "clsx";
import styles from "./CustomLink.module.css";

const CustomLink = ({
  color,
  underlineOnHover,
  children,
  className,
  ...props
}: CustomLinkProps) => {
  const linkClassName = clsx(
    styles.link,
    {
      [styles["link--hover-underlined"]]: underlineOnHover,
    },
    className
  );

  return (
    <a
      {...props}
      className={linkClassName}
      style={color && ({ "--text-color": color } as React.CSSProperties)}
    >
      {children}
    </a>
  );
};

export default CustomLink;
