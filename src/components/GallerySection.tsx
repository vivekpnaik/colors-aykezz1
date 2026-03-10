import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Embroidered blouse" },
  { src: gallery2, alt: "Kids party dress" },
  { src: gallery3, alt: "Elegant saree" },
  { src: gallery4, alt: "Chudidar design" },
  { src: gallery5, alt: "Dance costume" },
  { src: gallery6, alt: "School uniform" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-foreground">
            Our <span className="text-gradient-rose-gold">Gallery</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            A glimpse of our handcrafted creations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setLightbox(i)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-card group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm p-4"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
