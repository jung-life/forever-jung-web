import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Join the
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Mental Health{" "}
            </span>
            Revolution
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Seeking $500K seed funding to complete MVP development and clinical validation. Early-stage opportunity to disrupt a $240B market with proven AI technology.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Schedule Investor Demo</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Download Pitch Deck
          </Button>
        </div>
      </div>
    </section>
  );
};
