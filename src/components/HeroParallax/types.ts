import type { HeroHighlightProps } from "@/components/HeroHighlight";
import type { MotionValue } from "motion/react";

interface Card {
  name: string;
  url: string;
  caption: string;
  path: string;
}

interface HeroParallaxProps {
  cards: Card[];
  title: string;
  highlight: string;
}

interface ParallaxCardProps {
  card: Card;
  translate: MotionValue<number>;
}

interface ParallaxHeaderProps
  extends Omit<HeroHighlightProps, "containerClassName" | "className"> {}

export type { Card, HeroParallaxProps, ParallaxCardProps, ParallaxHeaderProps };
