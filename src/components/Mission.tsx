import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Mission = () => {
  return (
    <section
      id="mission"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Mission
        </span>
      </h2>

      <p className="mt-4 mb-16 text-xl text-muted-foreground text-center max-w-3xl mx-auto">
        Built with intention, not exploitation. Technology that serves your growth, not corporate algorithms.
      </p>

      <div className="max-w-4xl mx-auto">
        <Card className="bg-muted/50 border-primary/20">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-heading text-primary">
              The Alchemist's Promise
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-lg">
            <div className="text-center">
              <p className="text-xl font-medium mb-6">
                Built by a solo developer in Detroit who believes technology should serve the psyche, not the algorithm.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-primary font-heading">What We Believe</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Your data is sacred, not sellable</li>
                  <li>• Depth over dopamine hits</li>
                  <li>• Structure beats endless scrolling</li>
                  <li>• Privacy is a prerequisite for vulnerability</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-primary font-heading">What We Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Zero-knowledge encryption</li>
                  <li>• No data training or selling</li>
                  <li>• Systematic, progressive methodology</li>
                  <li>• Authentic psychological frameworks</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-primary/20">
              <p className="font-medium text-foreground">
                Because the journey inward deserves better than surveillance capitalism.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};