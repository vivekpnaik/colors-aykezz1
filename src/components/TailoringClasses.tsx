import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Scissors, Ruler, PenTool, BookOpen, X } from "lucide-react";

const features = [
  { icon: Scissors, text: "Professional tailoring training" },
  { icon: PenTool, text: "Learn blouse stitching" },
  { icon: BookOpen, text: "Dress design basics" },
  { icon: Ruler, text: "Fabric cutting techniques" },
];

export default function TailoringClasses() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    place: "",
    qualification: "",
  });

  const handleSend = () => {
    const message = encodeURIComponent(
      `Hello, I want to join Tailoring Classes at COLORS.

Name: ${form.name}
Age: ${form.age}
Place: ${form.place}
Qualification: ${form.qualification}`
    );

    window.open(`https://wa.me/919964454897?text=${message}`, "_blank");
  };

  return (
    <>
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT GRAPHIC */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">

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

                {features.map((f, i) => {
                  const Icon = f.icon;
                  const angle = (i / features.length) * Math.PI * 2 - Math.PI / 2;
                  const x = Math.cos(angle) * 140;
                  const y = Math.sin(angle) * 140;

                  return (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2 + i * 0.5,
                        delay: i * 0.3,
                      }}
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

            {/* RIGHT CONTENT */}
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
                onClick={() => setOpen(true)}
                className="px-8 py-3 rounded-full font-body text-lg tracking-wider bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
              >
                Join Tailoring Classes
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POPUP FORM */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative shadow-xl"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 left-4"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl font-semibold mb-6 text-center">
                Tailoring Course Registration
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  type="text"
                  placeholder="Age"
                  value={form.age}
                  onChange={(e) =>
                    setForm({ ...form, age: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  type="text"
                  placeholder="Place"
                  value={form.place}
                  onChange={(e) =>
                    setForm({ ...form, place: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  type="text"
                  placeholder="Qualification"
                  value={form.qualification}
                  onChange={(e) =>
                    setForm({ ...form, qualification: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>

              <button
                onClick={handleSend}
                className="mt-6 w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
              >
                Send
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}