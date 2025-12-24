import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How is Forever Jung different from ChatGPT?",
    answer: "ChatGPT is a general assistant that forgets your patterns. Forever Jung is a structured program that builds your psychological profile over months, recognizing recurring themes and shadow projections. It's not just AI—it's The Process™.",
    value: "item-1",
  },
  {
    question: "Is my data truly private?",
    answer: "Yes. Your entries are encrypted locally on your device. We cannot read your data, sell it, or use it for training. You hold the only key to your psychological vault. Your unconscious deserves encryption, not exploitation.",
    value: "item-2",
  },
  {
    question: "What is Shadow Work exactly?",
    answer: "Shadow Work is Carl Jung's method for integrating the parts of yourself you've disowned. Instead of generic therapy, our structured approach identifies your specific patterns, triggers, and archetypal dynamics through guided exercises and dream analysis.",
    value: "item-3",
  },
  {
    question: "Do I need to know anything about psychology to start?",
    answer: "No. The Process™ guides you step-by-step. We eliminate 'blank page paralysis' with structured daily exercises, progressive depth psychology, and archetypal mapping. Jung meets you where you are and builds from there.",
    value: "item-4",
  },
  {
    question: "How long before I see results?",
    answer: "Unlike quick fixes, depth psychology builds over months. Most users report meaningful insights within the first week, with profound pattern recognition emerging after consistent practice. Your unconscious reveals itself slowly, then suddenly.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
