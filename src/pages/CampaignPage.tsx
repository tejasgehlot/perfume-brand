import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, timeline } from "@/data/seed";
import smokeBg from "@/assets/smoke-bg.jpg";
import editorialLab from "@/assets/editorial-lab.jpg";

const CampaignPage = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={smokeBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="label-text mb-6"
          >
            The Autumn/Winter Trilogy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title text-5xl sm:text-7xl md:text-8xl mb-8"
          >
            THE TRILOGY
            <br />
            BOX
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-8 py-3 border border-foreground/30 text-foreground text-xs uppercase tracking-luxury hover:border-gold hover:text-gold transition-colors">
              Watch the Film
            </button>
            <button className="px-8 py-3 bg-gold text-primary-foreground text-xs uppercase tracking-luxury font-bold hover:bg-gold-light transition-colors">
              Secure Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* Launch Roadmap */}
      <section className="container px-6 py-24">
        <h2 className="font-display text-3xl text-ivory mb-2">Launch Roadmap</h2>
        <p className="label-text mb-12">Chronological availability of the numbered series</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.sku}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link to={`/product/${p.name.toLowerCase().replace(/\s+/g, "-")}`} className="group block">
                <div className="aspect-[3/4] bg-card border border-border rounded-sm overflow-hidden mb-4 relative">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  {p.tags[0] && (
                    <span className="absolute top-3 right-3 px-3 py-1 text-[10px] uppercase tracking-luxury font-bold bg-gold text-primary-foreground">
                      {p.tags[0] === "NEW" ? "Limited: 50 Units" : "Waitlist Open"}
                    </span>
                  )}
                </div>
                <p className="label-text mb-1">{i === 0 ? "Available Sept 24" : i === 1 ? "Coming Oct 12" : "Archival Drop"}</p>
                <h3 className="font-display text-lg text-ivory uppercase tracking-wide-luxury">{p.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Editorial */}
      <section className="bg-card border-t border-border">
        <div className="container px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] overflow-hidden rounded-sm border border-gold/20"
          >
            <img src={editorialLab} alt="Fragrance Note Lab" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="label-text mb-4">The Editorial</p>
            <h2 className="font-display text-3xl md:text-4xl text-gold mb-6 leading-snug">
              Behind the
              <br />
              Essence:
              <br />
              A Grasse Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our journey begins in the forgotten fields of Grasse, where scent is treated not as a product, but as architectural geometry. Each bottle contains a mathematical sequence of rare florals and mineral sediments, layered over forty-eight months of maturation.
            </p>

            <div>
              <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">Join the Laboratory Archive</p>
              <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="private@email.com"
                  className="bg-secondary text-foreground text-sm px-4 py-3 flex-1 border border-border focus:border-gold outline-none transition-colors placeholder:text-muted-foreground"
                />
                <button type="submit" className="px-6 py-3 text-xs uppercase tracking-luxury font-bold text-ivory border border-border border-l-0 hover:text-gold hover:border-gold transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CampaignPage;
