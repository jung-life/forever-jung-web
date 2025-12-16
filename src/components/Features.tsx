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
    title: "Breakthrough AI Therapy Engine",
    description:
      "First AI to achieve clinical-grade therapeutic outcomes. Proprietary transformer model trained on 50,000+ therapy sessions with real-time emotional intelligence, contextual memory spanning months, and personalized treatment plan generation.",
    image: image4,
  },
  {
    title: "FDA-Ready Clinical Validation",
    description:
      "IRB-approved clinical trials with 500+ participants showing non-inferiority to human therapists on validated scales (PHQ-9, GAD-7, Beck scales). Clear regulatory pathway as Software as Medical Device (SaMD).",
    image: image3,
  },
  {
    title: "Unbreachable Privacy Technology",
    description:
      "Revolutionary federated learning with differential privacy ensures zero patient data exposure while continuously improving AI models. Patent-pending architecture addresses the fundamental privacy-performance trade-off in healthcare AI.",
    image: image,
  },
];

const featureList: string[] = [
  "Clinical-Grade AI",
  "FDA Regulatory Path",
  "Patent-Pending Tech",
  "IRB-Approved Trials",
  "Zero-Knowledge Privacy",
  "Real-time Risk Detection",
  "Multi-Language Support",
  "Enterprise APIs",
  "Healthcare Integration",
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
