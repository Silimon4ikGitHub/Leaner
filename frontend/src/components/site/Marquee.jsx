import { motion } from "framer-motion";

/**
 * Slow editorial marquee — one long line looping horizontally.
 * Not a hard "banner": subtle, low-key premium rhythm between sections.
 */
const Marquee = ({
  items = [],
  speed = 55, // seconds per full loop
  dark = false,
  className = "",
}) => {
  const list = items.length ? items : ["Leaner"];
  // Repeat items so the loop feels seamless
  const repeated = [...list, ...list, ...list, ...list];

  return (
    <div
      data-testid="editorial-marquee"
      className={`relative overflow-hidden select-none ${
        dark ? "bg-[#0F172A] text-white" : "bg-white text-[#0F172A]"
      } ${className}`}
    >
      <div className="py-8 lg:py-10">
        <motion.div
          className="flex whitespace-nowrap gap-14 lg:gap-20 font-heading tracking-tight"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ willChange: "transform" }}
        >
          {repeated.map((item, i) => (
            <span
              key={i}
              className="text-4xl sm:text-5xl lg:text-6xl italic font-light opacity-80"
            >
              {item}
              <span className={`mx-8 lg:mx-14 inline-block align-middle w-2.5 h-2.5 rounded-full ${
                dark ? "bg-[#16C47F]" : "bg-[#003B5C]"
              }`} />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
