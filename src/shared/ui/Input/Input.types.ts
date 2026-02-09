export interface InputProps {
  className?: string;
  disabled: boolean;
  label?: string;
  placeholder?: string;
  onChange: (value:string) => void;
  value: string;
}
