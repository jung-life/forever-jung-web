import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Mood Tracking & Analytics",
    description:
      "Track your daily mood patterns with location-aware insights and comprehensive analytics to understand your emotional wellbeing over time.",
    image: image4,
  },
  {
    title: "AI-Guided Journaling",
    description:
      "Engage with intelligent conversation guides including The Deep Thinker, Life Coach, Wise Sage, and Breakthrough Coach for meaningful self-reflection.",
    image: image3,
  },
  {
    title: "Therapeutic Insights",
    description:
      "Get personalized mental health insights, cognitive distortion checking, and thought pattern analysis to support your personal growth journey.",
    image: image,
  },
];

const featureList: string[] = [
  "Mood Tracking",
  "AI Conversation Guides",
  "Daily Journaling",
  "Cognitive Assessment",
  "Therapeutic Insights",
  "Voice Notes",
  "Personal Dashboard",
  "Privacy Focused",
  "Cross-Platform",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Powerful{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Mental Health Features
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
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
