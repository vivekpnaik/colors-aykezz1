import { motion } from "framer-motion";
import catBlouse from "@/assets/cat-blouse.jpg";
import catKids from "@/assets/cat-kids.jpg";
import catUniform from "@/assets/cat-uniform.jpg";
import catDance from "@/assets/cat-dance.jpg";
import catSaree from "@/assets/cat-saree.jpg";
import catChudidar from "@/assets/cat-chudidar.jpg";

const categories = [
  { name: "Blouse", image: catBlouse, whatsapp: "Blouse" },
  { name: "Kids Dresses", image: catKids, whatsapp: "Kids Dresses" },
  { name: "School Uniform", image: catUniform, whatsapp: "School Uniform" },
  { name: "Dance Costume", image: catDance, whatsapp: "Dance Costume" },
  { name: "Saree Kutchu", image: catSaree, whatsapp: "Saree Kutchu" },
  { name: "Chudidar", image: catChudidar, whatsapp: "Chudidar" },
];

export default function CategoriesSection() {
  const openWhatsApp = (category: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to enquire about ${category} stitching from COLORS.`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <section id="categories" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-light tracking-wider text-foreground">
            Our <span className="text-gradient-rose-gold">Categories</span>
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Explore our range of expert tailoring services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openWhatsApp(cat.whatsapp)}
              className="cursor-pointer group bg-gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl tracking-wide text-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Tap to enquire via WhatsApp →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
