import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { CartItem } from "@/data/seed";

interface CartRailProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (sku: string, size: string, qty: number) => void;
  onRemove: (sku: string, size: string) => void;
}

const FREE_SHIPPING_THRESHOLD = 150;

const CartRail = ({ open, onClose, items, onUpdateQty, onRemove }: CartRailProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shippingProgress = Math.min(subtotal / FREE_SHIPPING_THRESHOLD, 1);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/60 z-50"
            onClick={onClose}
            aria-hidden
          />
          {/* Rail */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="font-display text-ivory text-lg">Cart ({items.length})</span>
              <button onClick={onClose} aria-label="Close cart" className="text-foreground hover:text-gold transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Shipping progress */}
            <div className="px-6 py-4 border-b border-border">
              <div className="flex justify-between text-xs uppercase tracking-luxury text-muted-foreground mb-2">
                <span>Complimentary shipping on orders over ${FREE_SHIPPING_THRESHOLD}</span>
                <span className="text-gold">${subtotal.toFixed(2)} / ${FREE_SHIPPING_THRESHOLD}</span>
              </div>
              <div className="h-0.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{ width: `${shippingProgress * 100}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.length === 0 && (
                <p className="text-muted-foreground text-sm text-center py-12">Your cart is empty</p>
              )}
              {items.map((item) => (
                <div key={`${item.sku}-${item.size}`} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-sm bg-secondary" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-luxury text-ivory font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Eau de Parfum • {item.size}</p>
                      </div>
                      <span className="text-sm text-ivory">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() => onUpdateQty(item.sku, item.size, Math.max(0, item.qty - 1))}
                          className="px-2 py-1 text-foreground hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm text-ivory" aria-live="polite">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.sku, item.size, item.qty + 1)}
                          className="px-2 py-1 text-foreground hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemove(item.sku, item.size)}
                        className="text-xs uppercase tracking-luxury text-muted-foreground hover:text-gold transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border space-y-4">
              <div className="flex justify-between text-xs uppercase tracking-luxury text-muted-foreground">
                <span>Subtotal</span>
                <span className="text-ivory" aria-live="polite">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs uppercase tracking-luxury text-muted-foreground">
                <span>Shipping</span>
                <span className="italic text-gold">Calculated at checkout</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="font-display text-lg text-ivory">Total</span>
                <span className="font-display text-xl text-ivory" aria-live="polite">${subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full py-4 bg-gold text-primary-foreground text-xs uppercase tracking-luxury font-bold hover:bg-gold-light transition-colors">
                Checkout Now
              </button>
              <button
                onClick={onClose}
                className="w-full py-3 text-xs uppercase tracking-luxury text-muted-foreground hover:text-gold transition-colors text-center"
              >
                Continue Shopping
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartRail;
