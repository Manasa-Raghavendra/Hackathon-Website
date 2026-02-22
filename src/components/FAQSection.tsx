import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is eligible to participate?",
    a: "XYPHER is open to all students currently enrolled in any recognized educational institution. You don't need to be from MIT Mysore to participate.",
  },
  {
    q: "What is the team size?",
    a: "Each team must have 3 to 4 members. Solo participation is not allowed. If you don't have a team, reach out to us and we'll help you find one.",
  },
  {
    q: "Can I participate in both domains?",
    a: "No, each team can only register for one domain — either Machine Learning or Web Development. Choose the track that best aligns with your team's strengths.",
  },
  {
    q: "What is the submission format?",
    a: "Teams will present their projects to a panel of judges on the final day. You'll need to demo your working prototype and explain your approach, architecture, and impact.",
  },
  {
    q: "Is there a registration fee?",
    a: "Yes, the registration fee is ₹200 per head. This covers event materials, refreshments, and access to all hackathon resources.",
  },
  {
    q: "Is accommodation provided for outstation participants?",
    a: "Accommodation details will be shared with registered outstation participants. Please indicate your requirement during registration.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-28 px-4">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-sm tracking-[0.3em] uppercase text-primary mb-4">
          FAQ
        </h2>
        <h3 className="font-heading text-3xl md:text-5xl font-bold">
          Frequently Asked Questions
        </h3>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl bg-card glow-border px-6 border-none"
          >
            <AccordionTrigger className="font-heading text-lg text-left hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
