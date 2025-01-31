"use client";

import AnimatedButton from "@/components/AnimatedButton";
import AnimatedTitle from "@/components/AnimatedTitle";
import { Skeleton } from "@/components/ui/skeleton";
import useCount from "@/state/count";
import { useEffect, useState } from "react";

const Page = () => {
  const { count, inc } = useCount();
  const [isLoading, setIsLoading] = useState(count === 0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <div className="w-2xl space-y-4 text-center">
      <Skeleton className="h-28 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="btn btn-lg mx-auto w-1/4" />
      <Skeleton className="mx-auto h-6 w-5/6" />
    </div>
  ) : (
    <div className="space-y-4 text-center">
      <AnimatedTitle />

      <h1 className="mb-4 font-bold text-xl">
        Next.js + React + Biome + Tailwind + daisyUI + Motion + shadcn/ui + zustand
      </h1>

      <AnimatedButton onTap={inc}>count is {count}</AnimatedButton>
      <p className="text-xs">
        Edit <code>src/app/page.tsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Page;
