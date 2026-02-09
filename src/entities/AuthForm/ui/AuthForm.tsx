import {classNames} from "../../../shared/lib/classNames/classNames"
import { Button } from "../../../shared/ui/Button"
import cls from "./AuthForm.module.scss"
import { useForm, type SubmitHandler } from "react-hook-form"


interface AuthFormProps{
  className?:string
  }
interface AuthFields{
  user: string,
  password: string
}

export const AuthForm = ({ className }: AuthFormProps) => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<AuthFields>();
  const onSubmit: SubmitHandler<AuthFields> = (data) =>
    console.log("111data", data);
return (
  <div className={classNames(cls.AuthForm, [className])}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("user", { required: true })} />
      <input {...register("password", { required: true, minLength: 4 })} />
      <Button type={"submit"}>{"Submit"}</Button>
    </form>
  </div>
);
}