import { buttonVariants } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            ChatGPT Gives Answers
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Jung Finds Questions{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            <strong>The difference:</strong> Generic AI therapy = "Have you tried meditation?" Jung's depth psychology = "What childhood wound is this anger protecting? Which archetype is running your life?" Experience structured unconscious exploration, not helpful suggestions.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a
            href="#features"
            className={`w-full md:mr-4 md:w-auto ${buttonVariants()}`}
          >
            Experience Jung Demo
          </a>
          <a
            href="#about"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Why Not ChatGPT?
          </a>
        </div>
      </div>
    </section>
  );
};
