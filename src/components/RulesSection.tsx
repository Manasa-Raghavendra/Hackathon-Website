import { Users, ShieldCheck, Clock, Code, Monitor, AlertTriangle, Laptop, Gavel, FileCheck, UtensilsCrossed } from "lucide-react";

const rules = [
  { icon: Users, title: "Team Size", desc: "Each team must consist of 3 to 4 members." },
  { icon: FileCheck, title: "Valid ID Required", desc: "All team members must be currently enrolled students with valid college ID." },
  { icon: ShieldCheck, title: "Original Work Only", desc: "Plagiarism or use of pre-built projects will lead to disqualification." },
  { icon: AlertTriangle, title: "Code of Conduct", desc: "Maintain professional behavior at all times. Misconduct leads to disqualification." },
  { icon: Clock, title: "Event Timing", desc: "Strictly 9:00 AM – 5:00 PM on both days. Participants must adhere to the schedule." },
  { icon: Code, title: "Open-Source Allowed", desc: "Open-source libraries and APIs are permitted, but core logic must be original." },
  { icon: Monitor, title: "Working Demo", desc: "Teams must present a working demo at the end of Day 2." },
  { icon: Gavel, title: "Final Decisions", desc: "Judges' decisions are final and binding." },
  { icon: Laptop, title: "Bring Your Gear", desc: "Teams are encouraged to bring their own laptops and development tools." },
];

const RulesSection = () => (
  <section id="rules" className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">Rules</h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">Rules & Regulations</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rules.map((r) => (
          <div
            key={r.title}
            className="rounded-xl bg-card p-6 glow-border hover:glow-box-strong transition-all duration-500 hover:-translate-y-1 group"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-heading text-lg font-bold mb-2">{r.title}</h4>
            <p className="text-muted-foreground text-sm">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RulesSection;
