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
    title: "Q1 2025: The Foundation",
    description:
      "Launch of 'The Process™' guided onboarding. Implementation of local-first encrypted storage. Release of the core Dream Analysis engine and pattern recognition system.",
  },
  {
    icon: <MapIcon />,
    title: "Q2 2025: Depth & Memory",
    description:
      "Reflective Memory upgrade: AI links current sessions to logs from 3+ months ago. Visual Archetype Mapping dashboard. Voice Mode for spoken reflection sessions.",
  },
  {
    icon: <PlaneIcon />,
    title: "Q3 2025: The Ecosystem",
    description:
      "Native iOS and Android mobile apps. 'Sanctuary' mode with audio-guided active imagination sessions. Community challenges for collective shadow work exploration.",
  },
  {
    icon: <GiftIcon />,
    title: "Q4 2025: Integration",
    description:
      "Wearable integration (Apple Health/Oura) to correlate sleep data with dream symbols. Advanced active imagination scenarios powered by multi-modal AI capabilities.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading">
        Platform{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Evolution{" "}
        </span>
        & Growth
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-muted-foreground font-sans leading-relaxed">
        Our focused product roadmap emphasizes depth psychology features and user experience improvements, building the most sophisticated platform for structured self-discovery.
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
