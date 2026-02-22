import { Lightbulb, Briefcase, Trophy, Users, Cpu } from "lucide-react";

const whyCards = [
  { icon: Lightbulb, text: "Learn, collaborate, and grow as a developer" },
  { icon: Briefcase, text: "Build your portfolio with impactful projects" },
  { icon: Trophy, text: "Win exciting prizes and gain recognition" },
  { icon: Users, text: "Network with industry mentors and fellow innovators" },
  { icon: Cpu, text: "Solve real-world challenges with cutting-edge technology" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">About</h2>
      <h3 className="font-heading text-3xl md:text-5xl font-bold mb-8">The Future of Innovation</h3>
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
       XYPHER is a 2-day hackathon organized by Maharaja Institute of Technology Mysore. Open to all students, XYPHER is designed to push creative and technical boundaries, inviting coders, designers, and innovators to build solutions that matter.

Whether you are an ML enthusiast engineering intelligent features or a web developer crafting seamless digital experiences, XYPHER is the arena where your ideas take flight.
      </p>
    </div>

    {/* Why Participate */}
    <div className="max-w-5xl mx-auto mt-16 md:mt-20">
      <h3 className="font-heading text-2xl md:text-4xl font-bold text-center mb-10">
        Why <span className="text-primary">Participate?</span>
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyCards.map((card) => (
          <div
            key={card.text}
            className="rounded-xl bg-card p-6 glow-border hover:glow-box-strong transition-all duration-500 hover:-translate-y-1 group flex items-start gap-4"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <card.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed pt-2">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
