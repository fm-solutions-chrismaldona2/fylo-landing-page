import { ReactNode, ButtonHTMLAttributes } from "react";

export interface SvgProps {
  className?: string;
  fill?: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "rounded";
  size?: "small" | "normal" | "big";
  children: React.ReactNode;
}
