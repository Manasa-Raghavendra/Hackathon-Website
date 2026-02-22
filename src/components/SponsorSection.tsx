const SponsorSection = () => (
  <section className="py-20 md:py-28 px-4 bg-card/50">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Sponsors</h2>
      <h3 className="font-heading text-3xl md:text-5xl font-bold mb-6">Want to Be Our Sponsor?</h3>
      <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-2xl mx-auto">
        Partner with XYPHER 1.0 and connect your brand with the next generation of innovators.
        Gain visibility among top tech talent and contribute to shaping the future of technology.
      </p>
      <a
        href="mailto:xypher@mitm.ac.in"
        className="inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg tracking-wider uppercase glow-box-strong hover:scale-105 transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
  </section>
);

export default SponsorSection;