import { classNames, type Mods } from "../../../lib/classNames/classNames";
import cls from "./Skeleton.module.scss";
import { type SkeletonProps, SkeletonFigure, SkeletonSize } from "./Skeleton.types";

export const Skeleton = (props: SkeletonProps) => {
  const { className, figure = SkeletonFigure.SQUARE, size=SkeletonSize.M} = props;
  const mods: Mods = {
    [cls[figure]]: true,
    [cls[size]]: true
  };

  return <div className={classNames(cls.Skeleton, [className], mods)}></div>;
};
