import type { ComponentPropsWithoutRef } from "react";

interface StatCounterProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  direction?: "up" | "down";
  delay?: number; // delay in s
  decimalPlaces?: number;
  type?: "exact" | "rounded" | "percentage";
}

export type { StatCounterProps };
