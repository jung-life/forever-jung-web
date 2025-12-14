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
    title: "Download & Setup",
    description:
      "Download Jung from the App Store or Google Play. Create your secure account and complete your personalized wellness profile.",
  },
  {
    icon: <MapIcon />,
    title: "Track Your Mood",
    description:
      "Begin daily mood tracking with location-aware insights. Record your emotional state and let Jung learn your patterns.",
  },
  {
    icon: <PlaneIcon />,
    title: "Journal with AI",
    description:
      "Engage with our AI conversation guides - The Deep Thinker, Life Coach, Wise Sage, and Breakthrough Coach for meaningful self-reflection.",
  },
  {
    icon: <GiftIcon />,
    title: "Gain Insights",
    description:
      "Receive personalized therapeutic insights, cognitive assessments, and track your mental health progress over time.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Jung{" "}
        </span>
        Works
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Your journey to better mental health starts here. Follow these simple steps to begin your personalized wellbeing experience.
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
