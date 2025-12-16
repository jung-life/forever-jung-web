import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "The Process™ vs Generic Prompts",
    description:
      "Jung provides structured psychological frameworks that guide users through proven depth psychology methods. ChatGPT gives advice; Jung reveals unconscious patterns through systematic exploration that builds over time.",
    icon: <ChartIcon />,
  },
  {
    title: "Therapeutic Memory vs Episodic Chat",
    description:
      "Unlike public LLMs that forget context, Jung maintains your complete psychological profile. Recognizes patterns across months: 'This anger matches your pattern from 3 months ago - let's explore the deeper archetype.'",
    icon: <WalletIcon />,
  },
  {
    title: "Sacred Space vs Office Tool",
    description:
      "Environment shapes consciousness. Jung creates a sanctuary for inner work with meditative pacing and archetypal design. ChatGPT feels like Excel; Jung feels like a temple. Your unconscious knows the difference.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Defensible{" "}
            </span>
            Advantages
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Jung's competitive moats that create sustainable barriers against both public LLMs and copycat apps. It's not just AI therapy - it's a proprietary psychological methodology.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
