import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PsychologyPrincipleProps {
  icon: string;
  title: string;
  principle: string;
  application: string;
  outcome: string;
}

const psychologyPrinciples: PsychologyPrincipleProps[] = [
  {
    icon: "🌗",
    title: "Shadow Integration",
    principle: '"Until you make the unconscious conscious, it will direct your life and you will call it fate."',
    application: "Structured exercises identify and integrate rejected aspects of personality that sabotage leadership decisions.",
    outcome: "Leaders gain access to suppressed strengths and eliminate self-defeating patterns."
  },
  {
    icon: "🔄",
    title: "Individuation Process",
    principle: '"The privilege of a lifetime is to become who you truly are."',
    application: "Progressive psychological development through archetypal exploration and personal mythology work.",
    outcome: "Authentic leadership emergence beyond social conditioning and external expectations."
  },
  {
    icon: "🎭",
    title: "Persona & Authenticity",
    principle: '"Everything that irritates us about others can lead us to an understanding of ourselves."',
    application: "Recognition of false personas and projection patterns in professional relationships.",
    outcome: "Reduced interpersonal conflict and increased executive presence through authentic communication."
  },
  {
    icon: "🌊",
    title: "Unconscious Patterns",
    principle: '"Your vision becomes clear when you look into your heart. Who looks outside, dreams. Who looks inside, awakens."',
    application: "Pattern recognition algorithms track behavioral cycles and emotional triggers across decision-making contexts.",
    outcome: "Predictable leadership improvement through systematic unconscious pattern modification."
  },
  {
    icon: "⚡",
    title: "Active Imagination",
    principle: '"The creation of something new is not accomplished by the intellect alone."',
    application: "Guided visualization and dream analysis to access creative solutions beyond rational planning.",
    outcome: "Enhanced strategic thinking and breakthrough innovation through unconscious wisdom access."
  },
  {
    icon: "🔮",
    title: "Synchronicity Recognition",
    principle: '"Synchronicity is an ever-present reality for those who have eyes to see."',
    application: "Training in meaningful coincidence recognition to improve timing and opportunity awareness.",
    outcome: "Increased intuitive decision-making accuracy and market timing capabilities."
  },
];

export const Psychology = () => {
  return (
    <section
      id="psychology"
      className="container py-24 sm:py-32"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          The Psychology Behind{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            The Process™
          </span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
          Carl Jung's depth psychology provides the scientific foundation for systematic leadership development.
          Each principle has been adapted into structured exercises that produce measurable behavioral change.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologyPrinciples.map(({ icon, title, principle, application, outcome }: PsychologyPrincipleProps) => (
          <Card key={title} className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="text-4xl mb-3">{icon}</div>
              <CardTitle className="font-heading text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <blockquote className="text-sm italic text-muted-foreground border-l-4 border-primary/30 pl-4 font-serif">
                {principle}
                <footer className="text-xs mt-2 not-italic">— Carl Jung</footer>
              </blockquote>

              <div>
                <h4 className="font-semibold text-sm font-heading mb-2">Application:</h4>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">{application}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm font-heading mb-2">Executive Outcome:</h4>
                <p className="text-sm text-foreground font-sans leading-relaxed">{outcome}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-muted/30 border border-muted rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold mb-4">Why This Works for Executives</h3>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            Unlike generic coaching or meditation apps, Jung's methods are specifically designed for
            high-functioning individuals who need systematic approaches to psychological development.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Each principle translates directly into measurable business outcomes: better decision-making,
            reduced interpersonal conflict, enhanced creativity, and authentic leadership presence.
          </p>
        </div>
      </div>
    </section>
  );
};