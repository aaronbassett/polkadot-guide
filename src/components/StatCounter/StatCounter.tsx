"use client";

import { Percent, Plus } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import type { FC } from "react";
import { useEffect, useRef } from "react";

import { cn } from "@/utils";
import type { StatCounterProps } from "./types";

const StatCounter: FC<StatCounterProps> = ({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  type = "exact",
  ...props
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    duration: 2500,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <div className="flex min-h-12 items-center justify-center whitespace-pre-wrap font-bold font-display text-2xl text-primary tabular-nums tracking-tighter">
      <span ref={ref} className={cn("inline-block", className)} {...props} />
      {type !== "exact" && (
        <motion.span
          initial={{
            opacity: 0,
            x: 20,
            rotate: 50,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.39, 0.24, 0.3, 1],
            delay: 0.5,
          }}
        >
          {type === "rounded" && <Plus className="ml-1 h-6 w-6" />}
          {type === "percentage" && <Percent className="-mt-1 ml-1 h-4 w-4" />}
        </motion.span>
      )}
    </div>
  );
};

export default StatCounter;
