import {
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  SVGProps,
} from "react";

export interface SvgProps extends SVGProps<SVGSVGElement> {
  className?: string;
  fill?: `#${string}`;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "rounded";
  size?: "small" | "normal" | "big";
  children: React.ReactNode;
}

export interface CustomLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: `#${string}`;
  underlineOnHover?: boolean;
  children: ReactNode;
  className?: string;
}

export interface Notification {
  message: string;
  type?: "success" | "warning" | "info" | "error";
}
