"use client";
import { cn } from "@/utils";
import { toApTitleCase } from "@/utils/typography";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { FC } from "react";
import type { HeroHighlightProps, HighlightProps } from "./types";

const HeroHighlight: FC<HeroHighlightProps> = ({
  title,
  highlight,
  className,
  containerClassName,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const headline = toApTitleCase(title);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const renderHighlightedText = () => {
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = headline.split(regex);

    return parts.map((part, i) =>
      // biome-ignore lint/suspicious/noArrayIndexKey: there's no unique identifier for the part
      regex.test(part) ? <Highlight key={i}>{part}</Highlight> : part,
    );
  };

  return (
    <div
      className={cn(
        "group relative mt-24 flex max-w-[70%] items-center justify-center",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0" />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto px-4 font-display font-extrabold text-2xl text-neutral-700 italic leading-relaxed md:text-4xl lg:text-5xl lg:leading-snug dark:text-neutral-50 "
        >
          {renderHighlightedText()}
        </motion.h1>
      </div>
    </div>
  );
};

const Highlight: FC<HighlightProps> = ({ className, children }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        "relative inline-block bg-gradient-to-r from-[#ffb6cc] to-[#f1b3f1] px-1 pb-1 text-neutral-700 dark:from-[#ff0a54] dark:to-[#d100d1] dark:text-neutral-50",
        className,
      )}
    >
      {children}
    </motion.span>
  );
};

export default HeroHighlight;
