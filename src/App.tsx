import { useState, useCallback } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartRail from "@/components/CartRail";
import HomePage from "@/pages/HomePage";
import CataloguePage from "@/pages/CataloguePage";
import ProductPage from "@/pages/ProductPage";
import CampaignPage from "@/pages/CampaignPage";
import BrandPage from "@/pages/BrandPage";
import NotFound from "@/pages/NotFound";
import { products, type CartItem } from "@/data/seed";

const queryClient = new QueryClient();

const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((sku: string, size: string) => {
    const product = products.find((p) => p.sku === sku);
    if (!product) return;
    const variant = product.variants.find((v) => v.size === size);
    if (!variant) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.sku === sku && i.size === size);
      if (existing) {
        return prev.map((i) => (i.sku === sku && i.size === size ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { sku, name: product.name, image: product.image, size, price: variant.price, qty: 1 }];
    });
    setCartOpen(true);
    toast.success(`${product.name} (${size}) added to cart`);
  }, []);

  const updateQty = useCallback((sku: string, size: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) => prev.filter((i) => !(i.sku === sku && i.size === size)));
    } else {
      setCart((prev) => prev.map((i) => (i.sku === sku && i.size === size ? { ...i, qty } : i)));
    }
  }, []);

  const removeItem = useCallback((sku: string, size: string) => {
    setCart((prev) => prev.filter((i) => !(i.sku === sku && i.size === size)));
  }, []);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
          <CartRail open={cartOpen} onClose={() => setCartOpen(false)} items={cart} onUpdateQty={updateQty} onRemove={removeItem} />
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
            <Route path="/collections" element={<CataloguePage />} />
            <Route path="/product/:slug" element={<ProductPage onAddToCart={addToCart} />} />
            <Route path="/campaigns" element={<CampaignPage />} />
            <Route path="/brand" element={<BrandPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
