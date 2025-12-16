import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Why Not{" "}
                </span>
                ChatGPT?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>The "Agreeable Assistant" Problem:</strong> Public LLMs are trained to be helpful and polite, avoiding difficult truths. When you tell ChatGPT "I'm angry at my boss," it gives generic advice. Jung confronts you: <em>"What shadow aspect of yourself do you see in your boss? What pattern from childhood does this trigger?"</em>
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>The "Blank Page" Paralysis:</strong> 90% of people don't know how to start shadow work. ChatGPT offers a text box; Jung offers The Process™ - structured daily exercises, guided dream analysis, archetypal mapping, and progressive depth psychology that builds over months, not minutes.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>The Memory Moat:</strong> ChatGPT forgets your patterns. Jung remembers everything - connecting dots across months: <em>"You felt this same rage 3 months ago with your father. This is your recurring Shadow projection. Let's work on integration."</em> Your unconscious patterns become visible over time.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
