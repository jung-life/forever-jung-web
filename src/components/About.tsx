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
                  Why Not Just Use{" "}
                </span>
                ChatGPT?
              </h2>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-xl font-bold font-heading mb-3">The "Sycophant" Problem</h3>
                  <p className="text-lg text-muted-foreground font-sans leading-normal">
                    <strong>ChatGPT:</strong> Trained using RLHF to be helpful, polite, and agreeable. Tell it "I'm right and my team is wrong," and it validates your ego to keep you happy.
                  </p>
                  <p className="text-lg text-muted-foreground mt-2 font-sans leading-normal">
                    <strong>Forever Jung:</strong> Trained to be objective and challenging. We don't want your approval. We want your growth. Jung confronts you: "You say your team is the problem, but this is the third time you've felt betrayed this month. What is your role in this pattern?"
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading mb-3">"Episodic" vs "Reflective" Memory</h3>
                  <p className="text-lg text-muted-foreground font-sans leading-normal">
                    <strong>ChatGPT:</strong> Has "Fact Memory." It remembers what you said (e.g., "I am a CEO"). It treats every session as a new task with context attached.
                  </p>
                  <p className="text-lg text-muted-foreground mt-2 font-sans leading-normal">
                    <strong>Forever Jung:</strong> Has "Trajectory Tracking." It remembers who you are becoming. It graphs your psychological evolution: "Your anxiety dropped 15% since Q1 shadow work, but conflict avoidance increased. Let's examine that."
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading mb-3">The "Blank Page" Paralysis</h3>
                  <p className="text-lg text-muted-foreground font-sans leading-normal">
                    <strong>ChatGPT:</strong> A generalist tool waiting for your prompt. Requires you to be the expert on what you need.
                  </p>
                  <p className="text-lg text-muted-foreground mt-2 font-sans leading-normal">
                    <strong>Forever Jung:</strong> A specialist program with a Directed Protocol. You don't guess what to do next. We guide you through The Process™ - a structured 12-week arc of individuation.
                  </p>
                </div>

                {/* Comparison Table */}
                <div className="bg-muted/30 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold font-heading mb-4 text-center">The Technical Difference</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 font-heading">Feature</th>
                          <th className="text-left py-3 font-heading">ChatGPT / Claude</th>
                          <th className="text-left py-3 font-heading text-primary">Forever Jung</th>
                        </tr>
                      </thead>
                      <tbody className="font-sans">
                        <tr className="border-b">
                          <td className="py-3 font-medium">Primary Goal</td>
                          <td className="py-3 text-muted-foreground">Task Completion & Assistance</td>
                          <td className="py-3">Self-Discovery & Integration</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Response Style</td>
                          <td className="py-3 text-muted-foreground">Polite, Agreeable, Generic</td>
                          <td className="py-3">Challenging, Deep, Specific</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Memory Type</td>
                          <td className="py-3 text-muted-foreground">Episodic (Stores facts)</td>
                          <td className="py-3 font-semibold">Reflective (Tracks patterns)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Data Privacy</td>
                          <td className="py-3 text-muted-foreground">Trains on data (Default)</td>
                          <td className="py-3 font-semibold">Local-First Encryption</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Framework</td>
                          <td className="py-3 text-muted-foreground">None (User must prompt)</td>
                          <td className="py-3 font-semibold">The Jung Process™</td>
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
