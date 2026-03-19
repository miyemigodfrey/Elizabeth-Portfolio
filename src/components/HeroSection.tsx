import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

const HeroScene = lazy(() => import("./HeroScene"));

const transition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const HeroSection = () => (
  <section className="relative h-svh w-full flex items-center justify-center overflow-hidden">
    <Suspense fallback={<div className="absolute inset-0 bg-background" />}>
      <HeroScene />
    </Suspense>

    <div className="relative z-10 text-center pointer-events-none select-none">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...transition, delay: 0.2 }}
        className="font-display text-[15vw] md:text-[14vw] lg:text-[12vw] font-light leading-[0.85] tracking-[-0.04em] text-foreground"
      >
        ELIZABETH
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
        className="mt-2 md:mt-3 font-display text-lg md:text-2xl lg:text-3xl font-light tracking-[0.2em] text-foreground uppercase"
      >
        Frontend Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.6 }}
        className="mt-4 md:mt-6 text-base md:text-lg text-foreground max-w-md mx-auto"
      >
        Crafting immersive digital interfaces.
      </motion.p>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
    >
      <div className="w-[1px] h-12 bg-foreground/20 animate-pulse" />
    </motion.div>
  </section>
);

export default HeroSection;
