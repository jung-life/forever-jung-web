import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  chatgpt: string | boolean;
  foreverjung: string | boolean;
}

const comparisonData: ComparisonFeature[] = [
  {
    feature: "Response Quality",
    chatgpt: "Generic responses",
    foreverjung: "Specialized frameworks"
  },
  {
    feature: "Privacy",
    chatgpt: "Data used for training",
    foreverjung: "Encrypted & Private"
  },
  {
    feature: "Memory",
    chatgpt: "No long-term memory",
    foreverjung: "Connects patterns over months"
  },
  {
    feature: "Psychological Framework",
    chatgpt: false,
    foreverjung: true
  },
  {
    feature: "Structured Methodology",
    chatgpt: false,
    foreverjung: true
  },
  {
    feature: "Progress Tracking",
    chatgpt: false,
    foreverjung: true
  }
];

export const WhyPay = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Why Choose Forever Jung?
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Free tools give you conversations. We give you transformation.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Header */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold font-heading mb-4">Features</h3>
          </div>
          <div className="text-center">
            <Badge variant="outline" className="mb-2">Free</Badge>
            <h3 className="text-lg font-semibold">Public AI (ChatGPT)</h3>
          </div>
          <div className="text-center">
            <Badge className="mb-2 bg-primary">Premium</Badge>
            <h3 className="text-lg font-semibold">Forever Jung</h3>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map(({ feature, chatgpt, foreverjung }, index) => (
            <div key={feature} className="lg:contents">
              <div className="lg:hidden mb-6">
                <h4 className="font-semibold mb-2">{feature}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-muted/30">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm font-medium mb-2">ChatGPT</p>
                      {typeof chatgpt === 'boolean' ? (
                        chatgpt ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <p className="text-sm text-muted-foreground">{chatgpt}</p>
                      )}
                    </CardContent>
                  </Card>
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm font-medium mb-2">Forever Jung</p>
                      {typeof foreverjung === 'boolean' ? (
                        foreverjung ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <p className="text-sm">{foreverjung}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block py-4 border-b border-border">
                <p className="font-medium">{feature}</p>
              </div>
              <div className="hidden lg:block py-4 border-b border-border text-center">
                {typeof chatgpt === 'boolean' ? (
                  chatgpt ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <p className="text-muted-foreground">{chatgpt}</p>
                )}
              </div>
              <div className="hidden lg:block py-4 border-b border-border text-center">
                {typeof foreverjung === 'boolean' ? (
                  foreverjung ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <p>{foreverjung}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-heading mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground mb-6">
                ChatGPT is a brilliant general-purpose tool. Forever Jung is a specialized instrument for depth psychology and personal transformation. Choose based on your intention.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Choose ChatGPT if:</strong> You want quick answers and general assistance</p>
                <p><strong>Choose Forever Jung if:</strong> You want structured growth and lasting insight</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};