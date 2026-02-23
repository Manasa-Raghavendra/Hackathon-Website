import xypherLogo from "@/assets/logo.mp4";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Radial glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Floating logo with glow */}
        <div className="relative mb-6 md:mb-10 mt-16 md:mt-24">
          <div className="animate-float">               
            <video
              src={xypherLogo}
              autoPlay
              loop
              muted
              playsInline
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full drop-shadow-[0_0_40px_hsl(215,89%,52%,0.5)]"
            />  
          </div>
          {/* Soft pulsing glow ring */}
          <div className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animate-text-glow" style={{ animationDelay: "0.3s" }}>
          XYPHER
        </h1>


        <h4 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in-up animate-text-glow">
          Intelligence In Action
        </h4>


        <p className="text-muted-foreground text-lg md:text-xl mb-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          March 27 & 28 ,  2026 · Friday & Saturday
        </p>


        <p className="text-xl md:text-2xl font-bold glow-text animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          9:00 AM – 5:00 PM
        </p>


        <p className="text-muted-foreground text-base md:text-lg mb-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          2-Day Hackathon Event
        </p>


        <p className="text-muted-foreground text-base md:text-lg mb-2 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          Maharaja Institute of Technology Mysore
        </p>

       <div className="flex flex-col items-center gap-4 mb-8">
  
  <div className="flex flex-wrap items-center justify-center gap-3">
    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/15 text-primary border border-primary/30">
      Team Size: 3–4 Members
    </span>

    <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/15 text-primary border border-primary/30">
      Hackathon Fee: ₹200 per head
    </span>
  </div>

  <span className="px-6 py-2 rounded-full text-sm font-semibold bg-red-500/10 text-red-400 border border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
    ⚡ Limited Seats Available
  </span>

</div>

        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTKkIb9rSk63QLg5i2PDrAmpInX_3VEvxbFQ1EJW6D0hRVtA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold text-lg tracking-wider uppercase glow-box-strong hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
          <a
            href="#about"
            className="px-10 py-4 rounded-lg border border-primary/40 text-foreground font-heading font-semibold text-lg tracking-wider uppercase hover:bg-primary/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
