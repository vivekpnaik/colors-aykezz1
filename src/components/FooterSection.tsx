import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, MapPin, MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-footer py-16 text-primary-foreground/80">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-3xl tracking-widest text-gradient-rose-gold mb-4">
              COLORS
            </h3>
            <p className="font-body text-base text-primary-foreground/60 leading-relaxed">
              Elegant tailoring for every woman. Crafting perfection stitch by stitch.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-lg tracking-wider mb-4 text-gold">
              Quick Links
            </h4>
            <div className="space-y-3 font-body">
              {["Categories", "Gallery", "About", "Enquiry"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-lg tracking-wider mb-4 text-gold">
              Contact Us
            </h4>
            <div className="space-y-3 font-body">
              <a href="tel:+919964454897" className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" /> +919964454897
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Colors, above Janatha Medicals, Sullia</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919964454897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center font-body text-sm text-primary-foreground/40">
          © 2026 COLORS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
