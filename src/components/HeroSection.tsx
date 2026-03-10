import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticleBackground />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-wider text-primary-foreground leading-tight">
            <span className="text-gradient-rose-gold">COLORS</span>
          </h1>
          <p className="mt-4 font-display text-lg sm:text-xl md:text-2xl text-gold/80 tracking-wider font-light italic">
            Elegant Tailoring for Every Woman
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 max-w-2xl mx-auto font-body text-base sm:text-lg md:text-xl text-primary-foreground/70 leading-relaxed"
        >
          Custom stitching designed with perfection, elegance, and creativity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("enquiry")}
            className="px-8 py-3 rounded-full font-body text-lg tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
          >
            Order Now
          </button>
          <button
            onClick={() => scrollTo("categories")}
            className="px-8 py-3 rounded-full font-body text-lg tracking-wider border border-gold/50 text-gold hover:bg-gold/10 transition-colors"
          >
            View Categories
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
