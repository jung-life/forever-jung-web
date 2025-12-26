import { Statistics } from "./Statistics";
import lighthouse from "../assets/lighthouse.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={lighthouse}
            alt="Lighthouse representing guidance and clarity"
            className="w-[280px] h-[280px] object-contain rounded-lg mx-auto"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Why Not{" "}
                </span>
                ChatGPT?
              </h2>
              <p className="text-lg text-muted-foreground mt-4 font-sans leading-normal">
                <strong>The "Agreeable Assistant" Problem:</strong> Public LLMs are trained to be helpful and polite, avoiding difficult truths. When you tell ChatGPT "I'm frustrated with my team," it gives generic management advice. Jung challenges you: "What leadership shadow are you projecting? What unintegrated aspect drives this reaction?"
              </p>
              <p className="text-lg text-muted-foreground mt-4 font-sans leading-normal">
                <strong>The "Blank Page" Paralysis:</strong> High-performers know they need deeper self-awareness but don't know where to start. ChatGPT offers a text box; Jung offers The Process™ - structured executive coaching protocols, systematic pattern recognition, and progressive leadership psychology that builds competence over months.
              </p>
              <p className="text-lg text-muted-foreground mt-4 font-sans leading-normal">
                <strong>The "Memory Moat":</strong> ChatGPT forgets your patterns. Jung tracks your leadership evolution - connecting behavioral patterns across quarters: "This decision paralysis matches your pattern from Q2. Your inner Perfectionist is blocking your Visionary. Let's integrate both." Executive growth becomes measurable over time.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
