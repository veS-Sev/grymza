
import cls from './Button.module.scss'
import { classNames, type Mods } from '../../lib/classNames/classNames';
import { type ButtonProps } from './Button.types';


export const Button=(props:ButtonProps)=>{
  const { children, className,decor='outline',...others } = props
  const mods: Mods = {
  [cls[decor]]:true
}
  return (
    <button className={classNames(cls.Button, [className], mods)}{...others}>{ children}</button>
  )
}
