import type { FC } from "react";

import StatCounter from "@/components/StatCounter";
import type { StatCounterProps } from "@/components/StatCounter/types";
import { BadgePercent, BookText, Code, Star } from "lucide-react";
import React from "react";

interface Stats extends StatCounterProps {
  name: React.ReactNode;
  icon: React.ReactNode;
}

const HeroStats: FC = () => {
  const stats: Stats[] = [
    {
      name: "lines of code",
      value: 50000,
      type: "rounded",
      icon: <Code />,
    },
    {
      name: "words written",
      value: 13000,
      type: "rounded",
      icon: <BookText />,
    },
    {
      name: "stars on GitHub",
      value: 2,
      type: "exact",
      icon: <Star />,
    },
    {
      name: "of guide finished",
      value: 60,
      type: "percentage",
      icon: <BadgePercent />,
    },
  ];

  return (
    <dl className="-mt-20 mx-auto grid max-w-[66%] grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={`${stat.name}-${stat.value}`}
          className="relative flex flex-col bg-white/75 p-4 dark:bg-gray-800/75"
        >
          {stat.icon && (
            <div className="absolute top-1/2 left-1/2" aria-hidden="true">
              {React.cloneElement(stat.icon as React.ReactElement, {
                className: "-translate-x-1/2 -translate-y-1/2 -rotate-12 text-base-content/5",
                size: 80,
              })}
            </div>
          )}
          <dt className="relative font-semibold text-base-content/50 text-sm/6">{stat.name}</dt>
          <dd className="-mb-3 relative order-first">
            <StatCounter value={stat.value} type={stat.type} />
          </dd>
        </div>
      ))}
    </dl>
  );
};

export default HeroStats;
