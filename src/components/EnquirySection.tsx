import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const categoryOptions = [
  "Blouse",
  "Kids Dresses",
  "School Uniform",
  "Dance Costume",
  "Saree Kutchu",
  "Chudidar",
];

export default function EnquirySection() {
  const [selected, setSelected] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    details: "",
  });

  const phoneNumber = "9964454897";

  const handleCategoryClick = (cat) => {
    setSelected(cat);
    setShowForm(true);
  };

  const handleBack = () => {
    setShowForm(false);
    setSelected("");
    setFormData({ name: "", phone: "", details: "" });
  };

  /* ---------- VALIDATION ---------- */

  const handleNameChange = (e) => {
    const value = e.target.value;

    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFormData({ ...formData, name: value });
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  const isValid = formData.name && formData.phone.length === 10;

  /* ---------- SEND WHATSAPP ---------- */

  const handleSend = () => {
    const message = encodeURIComponent(
`Hello, I would like to enquire about ${selected} stitching from COLORS.

Name: ${formData.name}
Phone: ${formData.phone}
Details: ${formData.details}`
    );

    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, "_blank");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello, I would like to enquire about tailoring services from COLORS.`
    );

    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="enquiry" className="py-24 bg-gradient-to-b from-muted/40 to-muted/10">

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >

          <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
            Order <span className="text-pink-500">Enquiry</span>
          </h2>

          {!showForm && (
            <>
              <p className="text-muted-foreground text-lg mb-10">
                Select a category and connect instantly on WhatsApp
              </p>

              {/* CATEGORY BUTTONS */}

              <div className="flex flex-wrap justify-center gap-4 mb-12">

                {categoryOptions.map((cat) => (
                  <motion.button
                    key={cat}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCategoryClick(cat)}
                    className="px-6 py-3 rounded-full border border-gray-300
                    hover:border-pink-400 hover:text-pink-500
                    transition-all duration-300 shadow-sm bg-white"
                  >
                    {cat}
                  </motion.button>
                ))}

              </div>

              {/* DIRECT WHATSAPP */}

              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-3 px-10 py-4
                rounded-full bg-[#25D366] text-white text-lg
                shadow-lg hover:shadow-xl transition"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </motion.button>
            </>
          )}

          {/* FORM */}

          {showForm && (

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
            >

              <h3 className="text-2xl font-semibold mb-6 text-center">
                {selected} Enquiry
              </h3>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleNameChange}
                  className="w-full px-4 py-3 border rounded-lg
                  focus:ring-2 focus:ring-pink-400 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full px-4 py-3 border rounded-lg
                  focus:ring-2 focus:ring-pink-400 outline-none"
                />

                <textarea
                  placeholder="Stitching Details"
                  rows={4}
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg
                  focus:ring-2 focus:ring-pink-400 outline-none"
                />

              </div>

              {/* BUTTONS */}

              <div className="flex justify-center gap-4 mt-8">

                <button
                  disabled={!isValid}
                  onClick={handleSend}
                  className={`px-8 py-3 rounded-full text-white transition
                  ${isValid
                    ? "bg-[#25D366] hover:opacity-90"
                    : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Send
                </button>

                <button
                  onClick={handleBack}
                  className="px-8 py-3 rounded-full border
                  hover:bg-gray-100 transition"
                >
                  Back
                </button>

              </div>

            </motion.div>

          )}

        </motion.div>

      </div>

    </section>
  );
}