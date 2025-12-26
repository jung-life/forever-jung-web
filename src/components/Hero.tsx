import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold font-heading">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Forever Jung
            </span>{" "}
            The Structured Path
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              To Self-Discovery
            </span>
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0 font-sans leading-normal">
          Executive coaching for your unconscious. A structured program for high-performers seeking psychological depth. Private, systematic, transformative. Your inner work deserves the same rigor as your business strategy.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <a
            href="#about"
            className={`w-full md:w-1/3 ${buttonVariants({ variant: "outline" })}`}
          >
            Learn More
          </a>
          <a
            href="#threshold"
            className={`w-full md:w-1/3 ${buttonVariants()} bg-purple-600 hover:bg-purple-700`}
          >
            Try The Threshold
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
