import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { getProductBySlug, products } from "@/data/seed";
import ScentWheel from "@/components/ScentWheel";

interface ProductPageProps {
  onAddToCart: (sku: string, size: string) => void;
}

const ProductPage = ({ onAddToCart }: ProductPageProps) => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [selectedVariant, setSelectedVariant] = useState(1); // default to 50ML

  if (!product) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </main>
    );
  }

  const variant = product.variants[selectedVariant];
  const related = products.filter((p) => p.sku !== product.sku).slice(0, 2);

  return (
    <main className="pt-20">
      {/* PDP Hero */}
      <section className="container px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] bg-card border border-border rounded-sm overflow-hidden"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="label-text mb-2">The {product.collection.split(" ").pop()} Collection</p>
            <h1 className="font-display text-5xl md:text-6xl text-ivory mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-2xl text-ivory">${variant.price.toFixed(2)}</span>
              <span className="text-border">|</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-gold text-gold" : "text-muted"} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-luxury">
                ({product.reviews} Curated Reviews)
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Variants */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-4">Select Presentation</p>
              <div className="flex gap-3">
                {product.variants.map((v, i) => (
                  <button
                    key={v.size}
                    onClick={() => setSelectedVariant(i)}
                    className={`flex-1 py-4 border text-center transition-colors ${
                      selectedVariant === i
                        ? "border-gold bg-gold/10 text-ivory"
                        : "border-border text-muted-foreground hover:border-gold"
                    }`}
                  >
                    <span className="block text-sm font-bold">{v.size}</span>
                    <span className="block text-[10px] uppercase tracking-luxury mt-1">{v.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => onAddToCart(product.sku, variant.size)}
              disabled={product.stock === 0}
              className="w-full py-4 bg-gold text-primary-foreground text-xs uppercase tracking-luxury font-bold hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed mb-4"
            >
              {product.stock === 0 ? "Out of Stock" : "Claim Your Scent"}
            </button>

            <button className="w-full py-4 border border-border text-foreground text-xs uppercase tracking-luxury font-bold hover:border-gold hover:text-gold transition-colors">
              Discover Olfactory Notes
            </button>

            {/* Scent Wheel */}
            <div className="mt-12 border-t border-border pt-8">
              <ScentWheel notes={product.notes} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="container px-6 py-16 border-t border-border">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl text-ivory">Explore the Shadows</h2>
            <p className="text-xs uppercase tracking-luxury text-muted-foreground mt-2">Complements to your collection</p>
          </div>
          <Link to="/collections" className="text-xs uppercase tracking-luxury text-gold hover:text-gold-light transition-colors">
            View All Collection
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((p) => (
            <Link
              key={p.sku}
              to={`/product/${p.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex gap-6 bg-card border border-border rounded-sm p-4 hover-lift"
            >
              <img src={p.image} alt={p.name} className="w-28 h-28 object-cover rounded-sm" loading="lazy" />
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-xl text-ivory">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 mb-3">{p.description.slice(0, 80)}…</p>
                <span className="label-text">Explore Scent</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
