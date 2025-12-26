import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import jungLogo from "../assets/jung-app-log.png";
import lighthouse from "../assets/lighthouse.png";
import appIcon from "../assets/app-icon.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "The Jung Method™ - Structured Depth Psychology",
    description:
      "Not general conversation, but systematic unconscious exploration. Proprietary framework guides users through Shadow Work stages, Anima/Animus integration, and Dream Symbol tracking that ChatGPT cannot replicate without years of specific training.",
    image: jungLogo,
  },
  {
    title: "Reflective Memory & Pattern Recognition",
    description:
      "Unlike episodic chatbots, Jung builds your psychological profile over months. Recognizes recurring themes, triggers, and growth patterns. 'You avoid conflict every Tuesday - this connects to your father dynamic from childhood.'",
    image: appIcon,
  },
  {
    title: "The Sanctuary Experience vs Office Tool",
    description:
      "Designed for introspection, not productivity. Meditative pacing, archetypal imagery, ritual-like interactions. Your unconscious needs sacred space, not Slack. Environment matters for depth work - ChatGPT feels like work; Jung feels like reflective guidance.",
    image: lighthouse,
  },
];

const featureList: string[] = [
  "Shadow Work Process™",
  "Dream Symbol Tracking",
  "Archetype Mapping",
  "Pattern Recognition",
  "Reflective Memory",
  "Sanctuary UX Design",
  "Privacy-First Vault",
  "Structured Psychology",
  "Depth over Breadth",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading md:text-center">
        What ChatGPT{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Cannot Replicate
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="font-heading text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground font-sans leading-normal">{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Feature illustration"
                className="w-[240px] h-[180px] object-contain mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
