export enum SkeletonFigure {
  RING = "ring",
  SQUARE = "square",
}
export enum SkeletonSize {
  XS = "extra-small",
  S = "small",
  M = "middle",
  L = "large",
  XL = "extra-large"
}

export interface SkeletonProps {
  className?: string;
  figure?: SkeletonFigure;
  size?: string;

}
