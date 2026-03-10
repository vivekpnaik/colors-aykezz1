import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

interface IntroAnimationProps {
  onEnter: () => void;
}

export default function IntroAnimation({ onEnter }: IntroAnimationProps) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-hero"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ParticleBackground />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Glowing circle logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-glow" />
              <div className="relative w-28 h-28 rounded-full border-2 border-gold/50 flex items-center justify-center backdrop-blur-sm">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="font-display text-3xl text-gold tracking-widest"
                >
                  C
                </motion.span>
              </div>
            </motion.div>

            {/* Shop name */}
            <motion.h1
              initial={{ opacity: 0, y: 30, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl font-light tracking-[0.3em] text-primary-foreground"
            >
              COLORS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="font-body text-lg text-gold/80 tracking-widest uppercase"
            >
              Elegant Tailoring Studio
            </motion.p>

            {/* Enter button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleEnter}
              className="mt-6 px-10 py-3 border border-gold/50 rounded-full font-body text-lg tracking-wider text-gold/90 hover:bg-gold/10 transition-colors duration-300 backdrop-blur-sm"
            >
              Enter the Studio
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
