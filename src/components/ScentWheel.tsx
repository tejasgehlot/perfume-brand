import { motion } from "framer-motion";

interface ScentWheelProps {
  notes: { top: string; heart: string; base: string };
}

const ScentWheel = ({ notes }: ScentWheelProps) => {
  const positions = [
    { label: "Top", note: notes.top, x: 50, y: 10, delay: 0 },
    { label: "Heart", note: notes.heart, x: 15, y: 70, delay: 0.15 },
    { label: "Base", note: notes.base, x: 85, y: 70, delay: 0.3 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-square" role="img" aria-label={`Scent notes: Top - ${notes.top}, Heart - ${notes.heart}, Base - ${notes.base}`}>
      {/* Connecting arcs */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="45" r="30" stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {positions.map((pos) => (
        <motion.div
          key={pos.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: pos.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute flex flex-col items-center gap-2"
          style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: "translate(-50%, -50%)" }}
        >
          <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${pos.label === "Heart" ? "border-gold bg-gold/10" : "border-border bg-secondary"} transition-all duration-300 hover:border-gold hover:bg-gold/10`}>
            <span className="text-lg">
              {pos.label === "Top" ? "🍊" : pos.label === "Heart" ? "🌀" : "🪵"}
            </span>
          </div>
          <span className={`text-xs uppercase tracking-luxury font-bold ${pos.label === "Heart" ? "text-gold" : "text-muted-foreground"}`}>
            {pos.note}
          </span>
        </motion.div>
      ))}

      {/* Center label */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">Olfactory</p>
        <p className="text-[10px] uppercase tracking-luxury text-muted-foreground">Architecture</p>
      </div>
    </div>
  );
};

export default ScentWheel;
