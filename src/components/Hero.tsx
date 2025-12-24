import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Don't just chat. Follow a structured path to self-discovery. Privacy-first Shadow Work, Dream Analysis, and Stoic Resilience. Your data stays encrypted. Your progress stays tracked.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="#about"
            className={`w-full md:w-1/3 ${buttonVariants()}`}
          >
            Request Demo
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/jung-life/Jung/tree/beta-jung"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            View Technical Roadmap
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
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
