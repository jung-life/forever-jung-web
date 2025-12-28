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
                  What Makes Jung Different{" "}
                </span>
                from Consumer AI?
              </h2>

              <div className="space-y-8 mt-6">
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-4 text-foreground">The Echo Chamber Problem</h3>
                  <p className="text-base text-muted-foreground font-sans leading-normal mb-3">
                    <span className="font-medium text-foreground">Consumer AI:</span> Designed to please. Ask about a difficult decision, get validation for what you've already decided.
                  </p>
                  <p className="text-base text-muted-foreground font-sans leading-normal">
                    <span className="font-medium text-foreground">Jung:</span> Designed to develop. "You've avoided this conversation with your CTO for three weeks. What are you protecting yourself from?"
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans mb-4 text-foreground">Snapshot vs. Growth Trajectory</h3>
                  <p className="text-base text-muted-foreground font-sans leading-normal mb-3">
                    <span className="font-medium text-foreground">Consumer AI:</span> Treats each conversation as isolated. Knows your title, not your journey.
                  </p>
                  <p className="text-base text-muted-foreground font-sans leading-normal">
                    <span className="font-medium text-foreground">Jung:</span> Maps your leadership evolution. "Your delegation improved 40% since Q1, but you're micromanaging again under pressure. Let's examine that pattern."
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-sans mb-4 text-foreground">The Generic Advice Problem</h3>
                  <p className="text-base text-muted-foreground font-sans leading-normal mb-3">
                    <span className="font-medium text-foreground">Consumer AI:</span> One-size-fits-all responses. You guess what questions to ask.
                  </p>
                  <p className="text-base text-muted-foreground font-sans leading-normal">
                    <span className="font-medium text-foreground">Jung:</span> Tailored for executive development. The Process™ guides you through 12 weeks of structured leadership transformation.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-muted/30 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold font-sans mb-6 text-center text-foreground">Executive Development vs. General AI</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-muted">
                          <th className="text-left py-3 font-sans font-medium text-sm text-foreground">Executive Need</th>
                          <th className="text-left py-3 font-sans font-medium text-sm text-foreground">Consumer AI</th>
                          <th className="text-left py-3 font-sans font-medium text-sm text-primary">Jung</th>
                        </tr>
                      </thead>
                      <tbody className="font-sans">
                        <tr className="border-b border-muted/50">
                          <td className="py-3 font-sans text-sm font-medium text-foreground">Leadership Blind Spots</td>
                          <td className="py-3 font-sans text-sm text-muted-foreground">Validates existing views</td>
                          <td className="py-3 font-sans text-sm text-foreground">Surfaces unconscious patterns</td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-3 font-sans text-sm font-medium text-foreground">Decision Quality</td>
                          <td className="py-3 font-sans text-sm text-muted-foreground">Information gathering</td>
                          <td className="py-3 font-sans text-sm text-foreground">Pattern-breaking insights</td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-3 font-sans text-sm font-medium text-foreground">Team Dynamics</td>
                          <td className="py-3 font-sans text-sm text-muted-foreground">Generic advice</td>
                          <td className="py-3 font-sans text-sm font-semibold text-foreground">Personalized leadership development</td>
                        </tr>
                        <tr className="border-b border-muted/50">
                          <td className="py-3 font-sans text-sm font-medium text-foreground">Confidentiality</td>
                          <td className="py-3 font-sans text-sm text-muted-foreground">Public model training</td>
                          <td className="py-3 font-sans text-sm font-semibold text-foreground">Private executive sanctuary</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-sans text-sm font-medium text-foreground">Development Path</td>
                          <td className="py-3 font-sans text-sm text-muted-foreground">Random conversations</td>
                          <td className="py-3 font-sans text-sm font-semibold text-foreground">Structured 12-week transformation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
