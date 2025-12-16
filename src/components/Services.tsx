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
    title: "B2B2C Healthcare Integration ($50/session)",
    description:
      "Partner with health systems, insurance providers, and employers as the AI therapy solution. Target 500M+ Americans with employer-sponsored health benefits and 150M+ Medicare/Medicaid recipients.",
    icon: <ChartIcon />,
  },
  {
    title: "Direct-Pay Consumer Model ($29/month)",
    description:
      "Premium subscription for individuals seeking immediate access. Positioned between $200/session traditional therapy and free mental health apps. Target market: 50M+ Americans paying out-of-pocket for mental health.",
    icon: <WalletIcon />,
  },
  {
    title: "Clinical Licensing & API ($10K+ enterprise)",
    description:
      "License our validated AI therapy engine to healthcare providers, telehealth platforms, and health tech companies. Recurring SaaS revenue from enterprise accounts with high switching costs.",
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
              Revenue{" "}
            </span>
            Model
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Multiple monetization streams targeting $30B+ addressable market with clear path to $100M+ ARR within 5 years through diversified B2B and B2C channels.
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
