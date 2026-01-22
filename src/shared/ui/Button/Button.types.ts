import { type ButtonHTMLAttributes, type ReactNode } from "react";


export enum ButtonDecor {
  LIGHT = "light",
  DARK = "dark",
  MEDIUM = "medium",
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  decor?: ButtonDecor;
}
