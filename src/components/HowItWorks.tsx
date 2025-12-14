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
    title: "Phase 1: MVP (Q1 2025)",
    description:
      "Core AI conversation engine with basic therapeutic frameworks. Beta testing with 100+ users for initial validation and feedback collection.",
  },
  {
    icon: <MapIcon />,
    title: "Phase 2: Clinical Validation (Q2 2025)",
    description:
      "Partner with clinical institutions for efficacy studies. Implement validated assessment tools and outcome measures for clinical-grade results.",
  },
  {
    icon: <PlaneIcon />,
    title: "Phase 3: Scale & Integration (Q3 2025)",
    description:
      "Healthcare provider partnerships, insurance integration. Advanced AI features with personalization engine and multi-language support.",
  },
  {
    icon: <GiftIcon />,
    title: "Phase 4: Platform Expansion (Q4 2025)",
    description:
      "Enterprise solutions for employers and health systems. API platform for third-party developers and comprehensive analytics dashboard.",
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
