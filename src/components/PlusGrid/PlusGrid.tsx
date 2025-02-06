import { clsx } from "clsx";
import type { FC } from "react";
import type {
  PlusGridIconProps,
  PlusGridItemProps,
  PlusGridProps,
  PlusGridRowProps,
} from "./types";

const PlusGrid: FC<PlusGridProps> = ({ className = "", children }) => {
  return <div className={className}>{children}</div>;
};

const PlusGridRow: FC<PlusGridRowProps> = ({ className = "", children }) => {
  return (
    <div
      className={clsx(
        className,
        "group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]",
      )}
    >
      <div
        aria-hidden="true"
        className="-z-10 -translate-x-1/2 absolute inset-y-0 left-1/2 w-screen"
      >
        <div className="absolute inset-x-0 top-0 border-black/5 border-t dark:border-white/5" />
        <div className="absolute inset-x-0 top-2 border-black/5 border-t dark:border-white/5" />
        <div className="absolute inset-x-0 bottom-0 hidden border-black/5 border-b group-last/row:block dark:border-white/5" />
        <div className="absolute inset-x-0 bottom-2 hidden border-black/5 border-b group-last/row:block dark:border-white/5" />
      </div>
      {children}
    </div>
  );
};

const PlusGridItem: FC<PlusGridItemProps> = ({ className = "", children }) => {
  return (
    <div className={clsx(className, "group/item relative")}>
      <PlusGridIcon placement="top left" className="hidden group-first/item:block" />
      <PlusGridIcon placement="top right" />
      <PlusGridIcon
        placement="bottom left"
        className="hidden group-first/item:group-last/row:block"
      />
      <PlusGridIcon placement="bottom right" className="hidden group-last/row:block" />
      {children}
    </div>
  );
};

const PlusGridIcon: FC<PlusGridIconProps> = ({ className = "", placement }) => {
  const [yAxis, xAxis] = placement.split(" ");

  const yClass = yAxis === "top" ? "-top-2" : "-bottom-2";
  const xClass = xAxis === "left" ? "-left-2" : "-right-2";

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        "absolute size-[15px] fill-black/10 dark:fill-white/10",
        yClass,
        xClass,
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  );
};

export { PlusGrid, PlusGridIcon, PlusGridItem, PlusGridRow };
