import { motion } from "framer-motion";
import tailorImage from "@/assets/Rajani.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={tailorImage}
                alt="Rajani - Founder of COLORS Tailoring Studio"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-gold/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full border-2 border-primary/20 -z-10" />
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-foreground mb-6">
              About <span className="text-gradient-rose-gold">COLORS</span>
            </h2>

            <div className="space-y-4">
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                With years of experience in women's tailoring, COLORS creates
                perfectly fitted outfits that combine style, comfort, and
                elegance. Every stitch is crafted with care and passion.
              </p>

              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                From traditional sarees to modern dresses, we bring your fashion
                vision to life with precision and artistry. Our studio is a space
                where creativity meets craftsmanship.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { num: "10+", label: "Years" },
                { num: "5000+", label: "Outfits" },
                { num: "100%", label: "Love" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl md:text-3xl text-gradient-rose-gold">
                    {stat.num}
                  </div>

                  <div className="font-body text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}