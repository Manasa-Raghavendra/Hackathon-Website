import { Phone, Linkedin } from "lucide-react";
import deptLogo from "@/assets/dept-logo.png";
import collegeLogo from "@/assets/college-logo.png";

const coordinators = [
  { name: "Student Coordinator 1", phone: "+91 98765 43210" },
  { name: "Student Coordinator 2", phone: "+91 98765 43211" },
  { name: "Student Coordinator 3", phone: "+91 98765 43212" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 px-4 bg-card/50">
    <div className="max-w-5xl mx-auto">
      
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">
          Contact
        </h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">
          For Any Queries
        </h3>
      </div>

      {/* Coordinators */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {coordinators.map((c) => (
          <div
            key={c.name}
            className="rounded-xl bg-card p-6 text-center glow-border hover:glow-box-strong transition-all duration-500"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>

            <h4 className="font-heading text-lg font-semibold mb-1">
              {c.name}
            </h4>

            <p className="text-muted-foreground text-sm">
              {c.phone}
            </p>
          </div>
        ))}
      </div>

      {/* LinkedIn + Logos Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/company/cse-ai-mitm"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg border border-primary/40 text-foreground font-heading font-semibold tracking-wider uppercase hover:bg-primary/10 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5 text-primary" />
          Department LinkedIn
        </a>

        {/* Logos Container */}
        <div className="flex items-center gap-10">

          {/* Dept Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full overflow-hidden glow-box-strong animate-pulse-glow hover:scale-105 transition-all duration-300">
              <img
                src={deptLogo}
                alt="Department of CSE AI"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-heading text-sm text-muted-foreground tracking-wider uppercase">
              Dept of CSE - AI
            </span>
          </div>

          {/* College Logo */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full overflow-hidden glow-box-strong animate-pulse-glow hover:scale-105 transition-all duration-300">
              <img
                src={collegeLogo}
                alt="MIT Mysore"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-heading text-sm text-muted-foreground tracking-wider uppercase">
              MIT Mysore
            </span>
          </div>

        </div>

      </div>
    </div>
  </section>
);

export default ContactSection;