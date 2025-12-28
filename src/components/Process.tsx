import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProcessPhaseProps {
  phase: string;
  weeks: string;
  title: string;
  description: string;
  exercises: string[];
  outcomes: string[];
  icon: string;
}

const processPhases: ProcessPhaseProps[] = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1-4",
    title: "Shadow Integration",
    description: "Identify and integrate the unconscious patterns that sabotage executive decision-making.",
    exercises: [
      "Leadership Shadow Assessment - map your triggers and blind spots",
      "Projection Recognition - identify what you disown in others",
      "Pattern Tracking - systematic logging of emotional reactions",
      "Executive Persona Analysis - understand your professional masks"
    ],
    outcomes: [
      "Eliminate self-sabotaging leadership behaviors",
      "Reduce interpersonal conflict by 40%+",
      "Access suppressed strengths and capabilities",
      "Gain objective perspective on team dynamics"
    ],
    icon: "🌗"
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 5-8",
    title: "Authentic Leadership",
    description: "Develop genuine executive presence beyond social conditioning and role expectations.",
    exercises: [
      "Archetypal Leadership Mapping - discover your authentic style",
      "Communication Pattern Analysis - optimize influence strategies",
      "Team Dynamic Restructuring - apply individuation to management",
      "Decision-Making Authenticity - align choices with true values"
    ],
    outcomes: [
      "Increase team trust and engagement",
      "Communicate with greater impact and clarity",
      "Make decisions aligned with authentic values",
      "Lead from personal authority, not just position"
    ],
    icon: "👑"
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 9-12",
    title: "Strategic Innovation",
    description: "Access unconscious wisdom for breakthrough thinking and market timing intuition.",
    exercises: [
      "Active Imagination Sessions - creative problem-solving beyond logic",
      "Synchronicity Training - recognize meaningful market patterns",
      "Dream Analysis for Strategy - tap unconscious business insights",
      "Intuitive Decision Framework - integrate rational and intuitive thinking"
    ],
    outcomes: [
      "Generate breakthrough innovations and solutions",
      "Improve market timing and opportunity recognition",
      "Enhance strategic thinking capabilities",
      "Develop reliable business intuition"
    ],
    icon: "⚡"
  }
];

export const Process = () => {
  return (
    <section
      id="process"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            The Process™
          </span>{" "}
          Methodology
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
          A structured 12-week executive transformation based on Carl Jung's depth psychology.
          Unlike generic coaching, each phase builds systematically toward measurable leadership breakthroughs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {processPhases.map(({ phase, weeks, title, description, exercises, outcomes, icon }: ProcessPhaseProps) => (
          <Card key={phase} className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-6">
              <div className="text-4xl mb-3">{icon}</div>
              <div className="text-sm font-medium text-primary mb-2 font-sans">{phase}</div>
              <div className="text-xs text-muted-foreground mb-3 font-sans">{weeks}</div>
              <CardTitle className="font-heading text-xl">{title}</CardTitle>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-3">{description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm font-heading mb-3 text-foreground">Key Exercises:</h4>
                <ul className="space-y-2">
                  {exercises.map((exercise, index) => (
                    <li key={index} className="text-sm text-muted-foreground font-sans leading-relaxed flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{exercise}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm font-heading mb-3 text-foreground">Executive Outcomes:</h4>
                <ul className="space-y-2">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="text-sm text-foreground font-sans leading-relaxed flex items-start">
                      <span className="text-green-600 mr-2 mt-1">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <div className="bg-muted/30 border border-muted rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold mb-4">Why 12 Weeks?</h3>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            Neuroplasticity research shows that meaningful behavioral change requires 66-90 days of consistent practice.
            The Process™ is designed around this timeline, with each phase building on unconscious insights from the previous.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-6">
            Unlike weekend workshops or quick fixes, depth psychology transformation happens in layers.
            Your unconscious reveals its patterns slowly, then suddenly — but only with sustained, structured engagement.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">Week 1</div>
              <div className="text-sm text-muted-foreground font-sans">First insights emerge</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">Week 6</div>
              <div className="text-sm text-muted-foreground font-sans">Pattern recognition solidifies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">Week 12</div>
              <div className="text-sm text-muted-foreground font-sans">Transformation integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};