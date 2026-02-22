const Footer = () => (
  <footer className="py-10 px-4 border-t border-border">
    <div className="max-w-6xl mx-auto text-center">
      <p className="font-display text-sm tracking-[0.2em] text-primary mb-2">XYPHER 1.0</p>
      <p className="text-muted-foreground text-sm mb-4">
        Maharaja Institute of Technology Mysore
      </p>
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} XYPHER 1.0 — Department of CSE(AI). All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
