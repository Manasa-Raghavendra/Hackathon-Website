import { Trophy, Utensils, Gift, Award } from "lucide-react";

const highlights = [
  { icon: Trophy, title: "₹50,000", subtitle: "Prize Pool", description: "Compete for a massive prize pool across multiple categories" },
  { icon: Utensils, title: "Free Meals", subtitle: "Both Days", description: "Complimentary breakfast, lunch, and snacks provided" },
  { icon: Gift, title: "Goodies", subtitle: "Swag & Merch", description: "Exclusive XYPHER 1.0 merchandise and tech goodies" },
  { icon: Award, title: "Certificates", subtitle: "For All", description: "Participation and achievement certificates for all teams" },
];

const HighlightsSection = () => (
  <section className="py-20 md:py-28 px-4 bg-card/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Highlights</h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">What Awaits You</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-xl bg-card p-8 text-center glow-border hover:glow-box-strong transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <h.icon className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-heading text-2xl font-bold mb-1">{h.title}</h4>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">{h.subtitle}</p>
            <p className="text-muted-foreground text-sm">{h.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
