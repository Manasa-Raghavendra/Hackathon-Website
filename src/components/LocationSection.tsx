const LocationSection = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Location
        </h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">
          Find Us Here
        </h3>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden glow-border shadow-lg">
        <iframe
          title="Maharaja Institute of Technology Mysore"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.481093982606!2d76.6861864!3d12.3663906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71273625ff79%3A0xe21bc942801a6077!2sMaharaja%20Institute%20of%20Technology%20Mysore!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full"
        />
      </div>

      {/* Address */}
      <p className="text-center text-muted-foreground mt-6 text-sm md:text-base">
        Maharaja Institute of Technology, Belawadi, Srirangapatna Taluk,
        Mandya District, Karnataka – 571477
      </p>

      {/* Get Here Button */}
      <div className="text-center mt-6">
        <a
          href="https://www.google.com/maps/place/Maharaja+Institute+of+Technology+Mysore/@12.3663906,76.6861864,17z/data=!3m1!4b1!4m6!3m5!1s0x3baf71273625ff79:0xe21bc942801a6077!8m2!3d12.3663906!4d76.6887613!16s%2Fg%2F11gh4cvl_2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1"
        >
          Get Here →
        </a>
      </div>

    </div>
  </section>
);

export default LocationSection;