import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/seed";
import ProductCard from "@/components/ProductCard";

const olfactoryOptions = ["Woody", "Spicy", "Musky", "Oriental", "Floral"];
const collections = ["Eau de Parfum", "Extrait de Parfum"];

const CataloguePage = () => {
  const [selectedNotes, setSelectedNotes] = useState<string[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (selectedCollection && p.collection !== selectedCollection) return false;
      if (selectedNotes.length > 0 && !selectedNotes.some((n) => p.olfactoryNotes.includes(n))) return false;
      return true;
    });
  }, [selectedNotes, selectedCollection]);

  const toggleNote = (note: string) =>
    setSelectedNotes((prev) => (prev.includes(note) ? prev.filter((n) => n !== note) : [...prev, note]));

  return (
    <main className="pt-20">
      <div className="container px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar filters */}
          <aside className="lg:w-56 flex-shrink-0 space-y-8">
            {/* Collections */}
            <div>
              <p className="label-text mb-4">Collections</p>
              <div className="space-y-2">
                {collections.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCollection(selectedCollection === c ? null : c)}
                    className={`block text-sm transition-colors ${selectedCollection === c ? "text-ivory border-b border-ivory" : "text-muted-foreground hover:text-gold"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Olfactory notes */}
            <div>
              <p className="label-text mb-4">Olfactory Notes</p>
              <div className="flex flex-wrap gap-2">
                {olfactoryOptions.map((note) => (
                  <button
                    key={note}
                    onClick={() => toggleNote(note)}
                    className={`px-4 py-2 text-xs rounded-full border transition-colors ${
                      selectedNotes.includes(note)
                        ? "bg-gold text-primary-foreground border-gold"
                        : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                    }`}
                  >
                    {note}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-baseline justify-between mb-8">
              <div>
                <p className="label-text mb-2">Our Curation</p>
                <h1 className="font-display text-4xl md:text-5xl text-ivory">
                  Luxury
                  <br />
                  Fragrances
                </h1>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.sku} product={p} />
              ))}
              {filtered.length === 0 && (
                <p className="col-span-2 text-muted-foreground text-center py-12">No fragrances match your filters.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CataloguePage;
