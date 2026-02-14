import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    {/* Newsletter */}
    <div className="container px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <span className="font-display text-lg text-ivory tracking-wide-luxury">Join the Inner Circle</span>
      <form className="flex gap-0 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="your@email.com"
          className="bg-secondary text-foreground text-sm px-4 py-3 flex-1 md:w-64 border border-border focus:border-gold outline-none transition-colors placeholder:text-muted-foreground"
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gold text-primary-foreground text-xs uppercase tracking-luxury font-bold hover:bg-gold-light transition-colors"
        >
          →
        </button>
      </form>
    </div>

    {/* Links */}
    <div className="container px-6 pb-8 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
      <div>
        <p className="label-text mb-4">Collections</p>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <Link to="/collections" className="hover:text-gold transition-colors">The Icons</Link>
          <Link to="/collections" className="hover:text-gold transition-colors">Shadow Trilogy</Link>
          <Link to="/collections" className="hover:text-gold transition-colors">Discovery Sets</Link>
        </div>
      </div>
      <div>
        <p className="label-text mb-4">Company</p>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <Link to="/brand" className="hover:text-gold transition-colors">Our Philosophy</Link>
          <Link to="/brand" className="hover:text-gold transition-colors">Craftsmanship</Link>
          <Link to="/brand" className="hover:text-gold transition-colors">Careers</Link>
        </div>
      </div>
      <div>
        <p className="label-text mb-4">Contact</p>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <span>Privacy & Legal</span>
          <span>Sustainability</span>
          <span>Press Inquiries</span>
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="container px-6 py-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
      <span className="font-display text-gold tracking-luxury">B H O P A</span>
      <span>© 2024 BHOPA. Designed for the invisible essence.</span>
    </div>
  </footer>
);

export default Footer;
