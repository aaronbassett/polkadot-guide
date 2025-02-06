import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/utils";

export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-gray-50 px-4 py-1.5 font-medium text-sm shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]",
        className,
      )}
      {...props}
    >
      <div
        className={
          "![mask-composite:subtract] absolute inset-0 block h-full w-full animate-gradient bg-[length:var(--bg-size)_100%] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 p-[1px] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        }
      />

      {children}
    </div>
  );
}
