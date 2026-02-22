import { Sparkles, Code, Target, Presentation } from "lucide-react";

const criteria = [
  { icon: Sparkles, title: "Innovation", desc: "Originality and creativity of the idea. How unique is your approach to solving the problem?", weight: "25%" },
  { icon: Code, title: "Technical Implementation", desc: "Code quality, architecture, and effective use of technology stack.", weight: "30%" },
  { icon: Target, title: "Impact & Practicality", desc: "Real-world applicability, scalability, and potential social or business impact.", weight: "25%" },
  { icon: Presentation, title: "Presentation & Demo", desc: "Clarity of communication, demo quality, and team's ability to articulate the vision.", weight: "20%" },
];

const EvaluationSection = () => (
  <section id="evaluation" className="py-20 md:py-28 px-4 bg-card/50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Evaluation</h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">Judging Criteria</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {criteria.map((c) => (
          <div
            key={c.title}
            className="rounded-xl bg-card p-8 glow-border hover:glow-box-strong transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading text-xl font-bold">{c.title}</h4>
                  <span className="font-display text-sm text-primary">{c.weight}</span>
                </div>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EvaluationSection;
