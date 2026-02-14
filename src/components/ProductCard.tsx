import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Product } from "@/data/seed";

interface ProductCardProps {
  product: Product;
  onQuickView?: (sku: string) => void;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const slug = product.name.toLowerCase().replace(/\s+/g, "-");
  const outOfStock = product.stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/product/${slug}`}
        className={`group block bg-card border border-border rounded-sm overflow-hidden hover-lift ${outOfStock ? "opacity-50" : ""}`}
      >
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.tags[0] && (
            <span className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-luxury font-bold bg-gold text-primary-foreground rounded-sm">
              {product.tags[0]}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-ivory mb-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-3">{product.tagline}</p>
          <p className="text-gold font-display text-lg">
            {outOfStock ? <span className="text-muted-foreground line-through">${product.price.toFixed(2)}</span> : `$${product.price.toFixed(2)}`}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
