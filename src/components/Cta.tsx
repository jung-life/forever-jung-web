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
            Transform Mental Healthcare
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              with Jung{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            <strong>Seeking $2M Series A</strong> to scale clinically-validated AI therapy platform. Use of funds: Clinical trials completion (40%), engineering team expansion (35%), regulatory approval (15%), partnerships (10%). Pre-validated market with LOIs from 3 major health systems.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Book Investor Meeting</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            View Investment Deck
          </Button>
        </div>
      </div>
    </section>
  );
};
