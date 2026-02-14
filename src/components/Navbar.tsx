import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "The Atelier", href: "/brand" },
  { label: "Campaigns", href: "/campaigns" },
];

const Navbar = ({ cartCount, onCartOpen }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container flex items-center justify-between h-16 px-6" aria-label="Main navigation">
        {/* Left nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs uppercase tracking-luxury font-body transition-colors duration-200 ${
                location.pathname === link.href ? "text-gold" : "text-foreground hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <span className="font-display text-xl tracking-luxury text-ivory">B H O P A</span>
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-foreground hover:text-gold transition-colors">
            <Search size={18} />
          </button>
          <button
            aria-label={`Cart with ${cartCount} items`}
            className="relative text-foreground hover:text-gold transition-colors"
            onClick={onCartOpen}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 text-[10px] flex items-center justify-center rounded-full bg-gold text-primary-foreground font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button
            aria-label="Menu"
            className="md:hidden text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-luxury text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
