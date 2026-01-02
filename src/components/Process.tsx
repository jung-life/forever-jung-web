import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProcessPhaseProps {
  phase: string;
  focus: string;
  title: string;
  description: string;
  conversations: string[];
  outcomes: string[];
  icon: string;
}

const processPhases: ProcessPhaseProps[] = [
  {
    phase: "Foundation",
    focus: "Ongoing Discovery",
    title: "Shadow Integration",
    description: "Through ongoing conversations, identify and integrate unconscious patterns that create recurring challenges in your life.",
    conversations: [
      "\"I keep having the same conflicts with people\" - exploring projection patterns",
      "\"I react strongly to certain behaviors\" - understanding triggers and blind spots",
      "\"I feel different around different people\" - examining persona masks",
      "\"I judge others for things I do too\" - recognizing disowned aspects"
    ],
    outcomes: [
      "Recognize self-sabotaging patterns in real-time",
      "Reduce reactive responses to difficult people",
      "Access suppressed strengths and capabilities",
      "Gain objective perspective on relationships"
    ],
    icon: "🌗"
  },
  {
    phase: "Development",
    focus: "Authentic Expression",
    title: "Individuation Journey",
    description: "Develop genuine self-expression beyond social conditioning through meaningful dialogue and self-reflection.",
    conversations: [
      "\"I don't know who I really am anymore\" - discovering authentic identity",
      "\"I feel pressured to be someone I'm not\" - exploring authentic values",
      "\"I want to make decisions from my true self\" - aligning choices with core identity",
      "\"I struggle to express my real thoughts\" - developing authentic communication"
    ],
    outcomes: [
      "Increase confidence in authentic self-expression",
      "Make decisions aligned with true values",
      "Communicate with greater honesty and clarity",
      "Develop genuine relationships based on authenticity"
    ],
    icon: "👑"
  },
  {
    phase: "Integration",
    focus: "Creative Wisdom",
    title: "Unconscious Intelligence",
    description: "Access unconscious wisdom for creative problem-solving and intuitive insight through guided exploration.",
    conversations: [
      "\"I had this interesting dream...\" - exploring symbolic messages",
      "\"I keep noticing these patterns...\" - recognizing synchronicities",
      "\"I have this gut feeling about...\" - developing intuitive decision-making",
      "\"I'm stuck on this problem...\" - accessing creative solutions through imagination"
    ],
    outcomes: [
      "Generate creative solutions to complex problems",
      "Develop reliable intuitive decision-making",
      "Recognize meaningful patterns and connections",
      "Access wisdom beyond rational thinking"
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
          Journey
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-sans leading-relaxed">
          A continuous journey of self-discovery through meaningful conversations with your AI companion.
          Unlike generic chatbots, Jung remembers your story and guides you through Jung's depth psychology.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {processPhases.map(({ phase, focus, title, description, conversations, outcomes, icon }: ProcessPhaseProps) => (
          <Card key={phase} className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-6">
              <div className="text-4xl mb-3">{icon}</div>
              <div className="text-sm font-medium text-primary mb-2 font-sans">{phase}</div>
              <div className="text-xs text-muted-foreground mb-3 font-sans">{focus}</div>
              <CardTitle className="font-heading text-xl">{title}</CardTitle>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed mt-3">{description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm font-heading mb-3 text-foreground">Example Conversations:</h4>
                <ul className="space-y-2">
                  {conversations.map((conversation, index) => (
                    <li key={index} className="text-sm text-muted-foreground font-sans leading-relaxed flex items-start">
                      <span className="text-primary mr-2 mt-1">💬</span>
                      <span>{conversation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm font-heading mb-3 text-foreground">Personal Outcomes:</h4>
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
          <h3 className="text-xl font-heading font-bold mb-4">Why Continuous Conversation?</h3>
          <p className="text-muted-foreground font-sans leading-relaxed mb-4">
            Unlike traditional therapy sessions or structured courses, depth psychology unfolds through ongoing dialogue.
            Jung remembers every conversation, building a complete picture of your psychological patterns over time.
          </p>
          <p className="text-muted-foreground font-sans leading-relaxed mb-6">
            Your unconscious doesn't operate on schedules — insights emerge when you're ready, connections form gradually,
            and breakthrough moments happen naturally through sustained, meaningful conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">24/7</div>
              <div className="text-sm text-muted-foreground font-sans">Available when insights strike</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">∞</div>
              <div className="text-sm text-muted-foreground font-sans">Memory spans all conversations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary font-heading">🧠</div>
              <div className="text-sm text-muted-foreground font-sans">Learns your unique patterns</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};