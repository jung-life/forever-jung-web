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
    title: "Clinical-Grade AI vs Consumer Apps",
    description:
      "While competitors offer basic chatbots, Jung provides clinical-grade therapeutic interventions with validated outcome measures and safety protocols comparable to human therapists.",
    icon: <ChartIcon />,
  },
  {
    title: "Proprietary Training Data",
    description:
      "Exclusive partnerships with therapeutic institutions provide access to anonymized session data, creating superior AI models that competitors cannot replicate without similar clinical relationships.",
    icon: <WalletIcon />,
  },
  {
    title: "Privacy-First Moat",
    description:
      "Revolutionary federated learning approach allows continuous model improvement without exposing user data, addressing the fundamental privacy paradox in mental health AI.",
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
              Competitive{" "}
            </span>
            Advantages
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Jung's defensible moats and technological advantages that create sustainable competitive barriers in the mental health AI market.
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
