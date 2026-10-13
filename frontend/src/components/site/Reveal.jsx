import { motion } from "framer-motion";

/**
 * Reusable scroll-reveal wrapper — subtle fade + rise as the element enters
 * viewport. Awwwards-style rhythm: slow easing, meaningful distance.
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 40,
  duration = 0.9,
  once = true,
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
