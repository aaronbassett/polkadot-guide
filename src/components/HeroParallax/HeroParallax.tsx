"use client";

import HeroHighlight from "@/components/HeroHighlight";
import HeroStats from "@/components/HeroStats";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { type FC } from "react";
import type { HeroParallaxProps, ParallaxCardProps, ParallaxHeaderProps } from "./types";

const HeroParallax: FC<HeroParallaxProps> = ({ cards, title, highlight }) => {
  // Take first 15 cards
  cards = cards.slice(0, 15);
  const firstRow = cards.slice(0, 5);
  const secondRow = cards.slice(5, 10);
  const thirdRow = cards.slice(10, 15);
  const ref = React.useRef(null);
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 300]), springConfig);

  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[170vh] overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]"
      >
        <motion.div
          ref={ref}
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="-mt-50 z-0"
        >
          <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
            {firstRow.map((card) => (
              <ParallaxCard card={card} translate={translateX} key={card.name} />
            ))}
          </motion.div>
          <motion.div className="mb-20 flex flex-row space-x-20">
            {secondRow.map((card) => (
              <ParallaxCard card={card} translate={translateXReverse} key={card.name} />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
            {thirdRow.map((card) => (
              <ParallaxCard card={card} translate={translateX} key={card.name} />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute top-0 right-0 left-0 z-50 h-[140vh]">
        <div className="sticky top-0 right-0 left-0">
          <div className="relative">
            <Header title={title} highlight={highlight} />
            <HeroStats />
          </div>
        </div>
      </div>
    </>
  );
};

const Header: FC<ParallaxHeaderProps> = ({ title, highlight }) => {
  return (
    <div className="relative top-0 left-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <HeroHighlight title={title} highlight={highlight} />
    </div>
  );
};

const ParallaxCard: FC<ParallaxCardProps> = ({ card, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={card.name}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Image
        src={`/${card.path}`}
        height="600"
        width="600"
        className="absolute inset-0 h-full w-full object-cover object-left-top opacity-20 blur-xs transition-all group-hover/product:brightness-60 group-hover/product:saturate-50"
        alt={card.name}
      />
      <div className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="absolute bottom-4 left-4 flex flex-col opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        <h2 className="font-bold font-polkadot text-secondary">
          <a href={card.url} target="_blank" rel="noopener noreferrer">
            {card.name}
          </a>
        </h2>
        <p className="font-bold font-display text-primary-content text-sm italic dark:text-primary">
          {card.caption}
        </p>
      </div>
    </motion.div>
  );
};

export default HeroParallax;
