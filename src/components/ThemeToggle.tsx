import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={() => setDark(!dark)}
      className="w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center bg-background/60 backdrop-blur-sm hover:border-coral transition-all duration-300 cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <span className="text-xs text-foreground/60">
        {dark ? "☀" : "●"}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
