import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center lg:text-start space-y-8">
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Executive Focused
          </div>
          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></span>
            12-Week Structure
          </div>
          <div className="flex items-center gap-2 bg-muted/50 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></span>
            Private & Encrypted
          </div>
        </div>

        <main className="text-5xl md:text-6xl font-bold font-heading leading-tight">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Forever Jung
            </span>{" "}
            <br className="hidden md:block" />
            The Structured Path
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              To Self-Discovery
            </span>
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0 font-sans leading-relaxed">
          Executive coaching for your unconscious. A structured program for high-performers seeking psychological depth.
          <span className="font-medium text-foreground"> Private, systematic, transformative.</span> Your inner work deserves the same rigor as your business strategy.
        </p>

        {/* Social proof numbers */}
        <div className="flex justify-center lg:justify-start gap-8 py-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Psychology Frameworks</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Months Memory</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Privacy</div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <a
            href="#onboarding"
            className={`group w-full md:w-1/2 ${buttonVariants()} bg-purple-600 hover:bg-purple-700 text-lg py-4 relative overflow-hidden`}
          >
            <span className="relative z-10">Begin The Process™</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#about"
            className={`w-full md:w-1/3 ${buttonVariants({ variant: "outline" })} hover:bg-muted transition-colors duration-300`}
          >
            Learn More
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
