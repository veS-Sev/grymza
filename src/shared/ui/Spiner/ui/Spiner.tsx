import {classNames} from "../../../lib/classNames/classNames"
import cls from "./Spiner.module.scss"

interface SpinerProps{
  className?:string,

  }


export const Spiner = (props: SpinerProps) => {
  const {className}=props
return(
<div className={classNames(cls.Spiner,[className],{})}>

</div>
)
}