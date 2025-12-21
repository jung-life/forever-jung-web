import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Q1 2025: Public Beta Launch",
    description:
      "Complete comprehensive beta testing with 500+ participants. Framework validation completed. Launch with 3 wellness platform partners and 1,000 beta users.",
  },
  {
    icon: <MapIcon />,
    title: "Q2 2025: Regulatory & Revenue",
    description:
      "Submit FDA 510(k) application. Launch B2B2C partnerships with 2 major insurers. Achieve $50K MRR through direct-pay subscriptions. Expand to Spanish language support.",
  },
  {
    icon: <PlaneIcon />,
    title: "Q3 2025: Scale & Enterprise",
    description:
      "FDA clearance received. Enterprise API launch with $1M+ contracted ARR. Partnerships with top 3 EHR systems. International expansion to UK and Canada markets.",
  },
  {
    icon: <GiftIcon />,
    title: "Q4 2025: Market Leadership",
    description:
      "Series B funding ($15M) to capture market leadership. 10,000+ active guidance sessions daily. White-label solutions for wellness platforms. $5M+ ARR milestone achieved.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Development{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Roadmap{" "}
        </span>
        & Milestones
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our strategic 12-month development plan with clear milestones, funding requirements, and market validation checkpoints.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
