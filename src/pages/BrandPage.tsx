import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { timeline } from "@/data/seed";
import founderPortrait from "@/assets/founder-portrait.jpg";
import editorialLab from "@/assets/editorial-lab.jpg";

const BrandPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="container px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="aspect-square overflow-hidden border border-gold/30 rounded-sm max-w-sm"
          >
            <img src={founderPortrait} alt="BHOPA Founder" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="pt-8"
          >
            <p className="label-text mb-4">The Visionary</p>
            <h1 className="font-display text-4xl md:text-5xl text-ivory mb-6">
              Crafting the
              <br />
              Invisible Essence
            </h1>
            <blockquote className="font-display text-lg md:text-xl text-ivory/80 italic mb-8 leading-relaxed">
              "Fragrance is the most intense form of memory. At BHOPA, we don't just create scents; we bottle the silent narratives of the soul."
            </blockquote>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-muted-foreground leading-relaxed">
              Born from a desire to bridge the gap between traditional alchemy and modern luxury, BHOPA stands as a testament to olfactory excellence. Every bottle contains a journey, meticulously crafted with rare botanicals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border">
        <div className="container px-6 py-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-luxury text-muted-foreground text-center mb-12"
          >
            The Path of Excellence
          </motion.p>

          <div className="space-y-20 max-w-4xl mx-auto">
            {timeline.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""}`}
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-ivory uppercase tracking-wide-luxury mb-3">{event.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold font-bold text-sm">{event.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="border-t border-border bg-card">
        <div className="container px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-5xl text-ivory mb-4"
              >
                Connect
                <br />
                With Us
              </motion.h2>
              <p className="text-muted-foreground mb-8">
                For inquiries regarding bespoke scent creation or retail partnerships, our concierge awaits.
              </p>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "Avenue des Parfums, Paris, FR" },
                  { icon: Mail, label: "Email", value: "concierge@bhopa.luxury" },
                  { icon: MessageSquare, label: "WhatsApp", value: "+33 1 23 45 67 89" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon size={18} className="text-gold mt-1" />
                    <div>
                      <p className="label-text mb-1">{label}</p>
                      <p className="text-ivory">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden rounded-sm border border-gold/20"
            >
              <img src={editorialLab} alt="Private Atelier" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandPage;
