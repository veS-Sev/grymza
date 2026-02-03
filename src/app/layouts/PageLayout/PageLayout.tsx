import { Suspense, type ReactNode } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Outlet } from "react-router-dom";
import { Spiner } from "../../../shared/ui/Spiner";

interface PageProps {
  className?: string;
  children?: ReactNode;
}

export const PageLayout = ({ className, children }: PageProps) => {
  return (
    <main className={classNames("PageLayout", [className])}>
      {children}
      <Suspense fallback={<Spiner/>}>
        <Outlet />
      </Suspense>
    </main>
  );
};
