import { type TapHandlers, motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

const AnimatedButton: FC<PropsWithChildren<{ onTap?: TapHandlers["onTap"] }>> = ({
  children,
  onTap,
}) => {
  return (
    <motion.button
      className="btn btn-primary btn-lg"
      style={{
        boxShadow: "0px 0px 40px 3px rgba(255, 255, 255, 0.2)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 40px 10px rgba(255, 255, 255, 0.3)" }}
      whileTap={{ scale: 1, boxShadow: "0px 0px 40px 3px rgba(255, 255, 255, 0.2)" }}
      onTap={onTap}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
