import { useId } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./Input.module.scss";
import type { InputProps } from "./Input.types";

export const Input = (props: InputProps) => {
  const { disabled, className, label, placeholder, onChange, value } = props;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const id = useId();
  return (
    <div className={classNames(cls.Input, [className])}>
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={inputHandler}
        disabled={disabled}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};
