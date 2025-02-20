import type { PropsWithChildren } from "react";

interface HeroHighlightProps {
  title: string;
  highlight: string;
  className?: string;
  containerClassName?: string;
}

interface HighlightProps extends PropsWithChildren {
  className?: string;
}

export type { HeroHighlightProps, HighlightProps };
