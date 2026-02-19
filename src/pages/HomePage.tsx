import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/seed";
import heroBg from "@/assets/hero-bg.jpg";

interface HomePageProps {
  onAddToCart: (sku: string, size: string) => void;
}

const HomePage = ({ onAddToCart }: HomePageProps) => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="relative z-10 text-center px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="label-text mb-6"
          >
            Your Signature Inner Icon & Chase
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title text-6xl sm:text-8xl md:text-9xl mb-8"
          >
            OWN THE
            <br />
            NIGHT
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              to="/collections"
              className="px-10 py-4 bg-gold text-primary-foreground text-xs uppercase tracking-luxury font-bold hover:bg-gold-light transition-colors min-w-[200px]"
            >
              Claim Your Scent
            </Link>
            <Link
              to="/collections"
              className="px-10 py-4 border border-foreground/30 text-foreground text-xs uppercase tracking-luxury font-bold hover:border-gold hover:text-gold transition-colors min-w-[200px]"
            >
              Order Sampler
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-xs text-muted-foreground uppercase tracking-luxury"
          >
            Free Sampler on First Order &nbsp;•&nbsp; 3–5 Day Shipping
          </motion.p>
        </div>
      </section>

      {/* Featured bottles */}
      <section className="container px-6 py-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="label-text mb-4"
        >
          The Collection
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl text-ivory mb-12"
        >
          Signature Fragrances
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => {
            const slug = product.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <motion.div
                key={product.sku}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/product/${slug}`} className="group block hover-lift">
                  <div className="aspect-[3/4] overflow-hidden bg-card border border-border rounded-sm mb-4 flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105 ${product.sku === "BHOPA-MM-004" ? "scale-150" : ""}`}
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-lg text-ivory">{product.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{product.tagline}</p>
                  <p className="text-gold font-display mt-2">${product.price.toFixed(2)}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Brand teaser */}
      <section className="border-t border-border bg-card">
        <div className="container px-6 py-24 text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label-text mb-6"
          >
            The House
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl text-ivory mb-6 italic"
          >
            "Fragrance is the most intense form of memory."
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-8 leading-relaxed"
          >
            At BHOPA, we don't just create scents; we bottle the silent narratives of the soul. Born from rare Himalayan botanicals and the craft of master perfumers.
          </motion.p>
          <Link
            to="/brand"
            className="inline-block text-xs uppercase tracking-luxury text-gold border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors"
          >
            Discover Our Story
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
