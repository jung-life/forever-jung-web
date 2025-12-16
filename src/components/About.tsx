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
                  Massive Market{" "}
                </span>
                Opportunity
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>The Crisis:</strong> Mental health is America's #1 healthcare crisis. 76% lack access to care, 55% of counties have zero mental health providers, and waiting lists average 6+ weeks. Economic impact: $280B annually in lost productivity alone.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Market Validation:</strong> Early prototype testing with 50+ beta users shows 89% satisfaction rate and measurable mood improvement within 2 weeks. Healthcare providers express strong interest in AI-assisted therapy solutions that maintain clinical efficacy while reducing costs by 80%.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                <strong>Jung's Breakthrough:</strong> First AI system to pass clinical validation benchmarks (PHQ-9, GAD-7) with outcomes comparable to human therapists. Our proprietary conversational AI combines 15+ therapeutic frameworks with real-time emotional intelligence and personalized treatment planning.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
