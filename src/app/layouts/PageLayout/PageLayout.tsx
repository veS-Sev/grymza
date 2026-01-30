import { Suspense, type ReactNode } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Outlet } from "react-router-dom";

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const PageLayout = ({ className, children }: PageProps) => {
  return (
    <main className={classNames("PageLayout", [className])}>
      {children}
      <Suspense fallback={"LOADING..."}>
        <Outlet />
      </Suspense>
    </main>
  );
};
