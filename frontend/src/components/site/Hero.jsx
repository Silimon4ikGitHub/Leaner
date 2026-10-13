import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { WHATSAPP_LINK } from "@/lib/constants";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/3bbf79ec-c34b-4056-a4c7-76732e44f73d/images/2a1d244c4665cbe854eaab35bc3f26c2214ef5b305db2759a8117e0ef88bdc89.png";

const REVEAL_EASE = [0.22, 1, 0.36, 1];

/** Masked line-by-line reveal for the hero H1 — the signature moment. */
const MaskedLine = ({ children, delay = 0, className = "", weight = 800, italic = false, muted = false }) => (
  <span className="block overflow-hidden pb-[0.18em]">
    <motion.span
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.05, delay, ease: REVEAL_EASE }}
      className={`block leading-[1.08] ${italic ? "italic" : ""} ${muted ? "text-white/85" : "text-white"} ${className}`}
      style={{ fontWeight: weight }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const { t } = useLanguage();
  const rootRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollY } = useScroll();
  // Subtle parallax on the hero background image (up to −80px on scroll)
  const bgY = useTransform(scrollY, [0, 700], [0, reduced ? 0 : -80]);
  const bgScale = useTransform(scrollY, [0, 700], [1, reduced ? 1 : 1.08]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [1, 0.85]);

  return (
    <section
      id="home"
      ref={rootRef}
      data-testid="hero-section"
      className="relative min-h-[92vh] w-full flex items-end overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${HERO_BG})`, y: bgY, scale: bgScale }}
      />
      {/* Overlay gradient (fades slightly on scroll for depth) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75"
        style={{ opacity: overlayOpacity }}
      />

      {/* Top-left subtle marker */}
      {null}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
        <div className="max-w-4xl">
          <motion.p
            data-testid="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: REVEAL_EASE }}
            className="text-xs tracking-[0.3em] uppercase text-white/80 mb-6"
          >
            — {t.hero.eyebrow}
          </motion.p>

          <h1
            data-testid="hero-title"
            className="font-heading text-white text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05]"
          >
            <MaskedLine delay={0.25} weight={800}>
              {t.hero.title_1}
            </MaskedLine>
            <MaskedLine delay={0.45} weight={300} italic muted>
              {t.hero.title_2}
            </MaskedLine>
          </h1>

          <motion.p
            data-testid="hero-subtitle"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: REVEAL_EASE }}
            className="mt-7 text-white/85 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: REVEAL_EASE }}
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              data-testid="hero-cta-primary"
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] px-7 py-4 text-sm tracking-wide hover:bg-[#003B5C] hover:text-white transition-all duration-300"
            >
              {t.hero.cta_primary}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              data-testid="hero-cta-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/70 text-white px-7 py-4 text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={16} />
              {t.hero.cta_secondary}
            </a>
          </motion.div>
        </div>

        {/* Philosophy quote — bottom right floating card */}
        <motion.div
          data-testid="hero-philosophy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 1, ease: REVEAL_EASE }}
          className="mt-16 lg:mt-20 lg:absolute lg:right-10 lg:bottom-20 lg:max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-7"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-white/70 mb-3">
            {t.hero.philosophyLabel}
          </p>
          <p className="text-white text-sm leading-relaxed font-light">
            "{t.hero.philosophy}"
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden
      >
        <span className="text-[10px] tracking-[0.35em] uppercase text-white/70">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-white/70 origin-top"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
