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
    title: "Advanced AI Conversation Engine",
    description:
      "Proprietary LLM fine-tuned on 10,000+ therapeutic sessions. Real-time emotional analysis, contextual memory, and adaptive conversation flow using transformer architecture.",
    image: image4,
  },
  {
    title: "Clinical Validation Framework",
    description:
      "Evidence-based interventions from CBT, DBT, and ACT therapies. Validated outcome measures (PHQ-9, GAD-7) with automated progress tracking and risk assessment.",
    image: image3,
  },
  {
    title: "Privacy-First Architecture",
    description:
      "End-to-end encryption, on-device processing, zero-knowledge backend. HIPAA-compliant data handling with federated learning for model improvement without data exposure.",
    image: image,
  },
];

const featureList: string[] = [
  "LLM Fine-tuning",
  "Clinical Validation",
  "HIPAA Compliance",
  "Real-time Analytics",
  "Federated Learning",
  "Risk Assessment",
  "Outcome Tracking",
  "Multi-modal Input",
  "Scalable Architecture",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Revolutionary{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          AI Technology Stack
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
