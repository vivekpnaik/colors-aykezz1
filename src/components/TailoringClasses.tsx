import { motion } from "framer-motion";
import { Scissors, Ruler, PenTool, BookOpen } from "lucide-react";

const features = [
  { icon: Scissors, text: "Professional tailoring training" },
  { icon: PenTool, text: "Learn blouse stitching" },
  { icon: BookOpen, text: "Dress design basics" },
  { icon: Ruler, text: "Fabric cutting techniques" },
];

export default function TailoringClasses() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Animated graphics */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 rounded-full border border-dashed border-gold/20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-40 h-40 rounded-full bg-rose-light flex items-center justify-center shadow-elegant"
                >
                  <Scissors className="w-16 h-16 text-primary" />
                </motion.div>
              </div>

              {/* Floating icons */}
              {features.map((f, i) => {
                const Icon = f.icon;
                const angle = (i / features.length) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * 140;
                const y = Math.sin(angle) * 140;
                return (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.5, delay: i * 0.3 }}
                    className="absolute w-12 h-12 rounded-xl bg-background shadow-card flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${x}px - 24px)`,
                      top: `calc(50% + ${y}px - 24px)`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-foreground mb-6">
              Learn Tailoring with{" "}
              <span className="text-gradient-rose-gold">COLORS</span>
            </h2>

            <div className="space-y-5 mb-8">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-rose-light flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-body text-lg text-foreground">{f.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const msg = encodeURIComponent(
                  "Hello, I would like to join Tailoring Classes at COLORS."
                );
                window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
              }}
              className="px-8 py-3 rounded-full font-body text-lg tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
            >
              Join Tailoring Classes
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
