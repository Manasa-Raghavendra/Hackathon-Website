import { Brain, Globe } from "lucide-react";

const techs = [
  {
    icon: Brain,
    title: "Machine Learning",
    subtitle: "Teach machines to think.",
    desc: "Build intelligent systems using classical ML algorithms, feature engineering, and model deployment. Focus on practical machine learning pipelines that solve real-world problems with clean data processing and robust model serving.",
    tags: [
      "ML Algorithms",
      "Feature Engineering",
      "Model Deployment",
      "Data Preprocessing",
      "Predictive Analytics",
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Build the future of the web.",
    desc: "Craft modern, performant, and accessible web experiences. From full-stack applications to real-time systems, shape the digital landscape with innovative solutions.",
    tags: [
      "Full-Stack Apps",
      "Progressive Web Apps",
      "Real-Time Systems",
      "API Design",
      "UI/UX Innovation",
    ],
  },
];

const TechnologiesSection = () => (
  <section id="technologies" className="py-20 md:py-28 px-4">
    <div className="max-w-6xl mx-auto">
      
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Technologies
        </h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">
          Allowed Domains
        </h3>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Theme:{" "}
          <span className="text-primary font-semibold">
            College Automation
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {techs.map((t) => (
          <div
            key={t.title}
            className="rounded-xl bg-card p-8 glow-border hover:glow-box-strong transition-all duration-500 hover:-translate-y-1 group"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <t.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Title */}
            <h4 className="font-heading text-xl font-bold mb-1">
              {t.title}
            </h4>

            {/* Subtitle (Green Italic Line) */}
            <p className="text-primary italic text-sm mb-3">
              {t.subtitle}
            </p>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {t.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;