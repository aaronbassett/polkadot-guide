import { cn } from "@/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("animate-pulse rounded-md bg-base-content/20", className)} {...props} />
  );
}

export { Skeleton };
