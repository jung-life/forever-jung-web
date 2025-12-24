import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

interface JungianChoice {
  id: string;
  text: string;
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  description: string;
}

const assessmentQuestions = [
  {
    id: 1,
    question: "In a crisis, your instinct is to:",
    choices: [
      {
        id: "crisis_action",
        text: "Take immediate action",
        type: "E" as const,
        description: "Lead through decisive movement"
      },
      {
        id: "crisis_analyze",
        text: "Withdraw to analyze",
        type: "I" as const,
        description: "Lead through strategic thinking"
      }
    ]
  },
  {
    id: 2,
    question: "You trust most:",
    choices: [
      {
        id: "trust_proven",
        text: "What is proven",
        type: "S" as const,
        description: "Concrete results and experience"
      },
      {
        id: "trust_possible",
        text: "What is possible",
        type: "N" as const,
        description: "Potential and innovation"
      }
    ]
  },
  {
    id: 3,
    question: "What drains your leadership energy more:",
    choices: [
      {
        id: "drain_conflict",
        text: "Interpersonal conflict",
        type: "F" as const,
        description: "People dynamics exhaust you"
      },
      {
        id: "drain_inefficiency",
        text: "Systemic inefficiency",
        type: "T" as const,
        description: "Logical problems frustrate you"
      }
    ]
  }
];

const shadowPredictions = {
  "EST": {
    persona: "The Decisive Executor",
    shadow: "The Chaotic Visionary",
    description: "You present as rational and action-oriented, but your shadow contains suppressed creativity and emotional spontaneity.",
    pattern: "The Rigid Controller"
  },
  "ESF": {
    persona: "The People-First Leader",
    shadow: "The Cold Analyst",
    description: "You lead with empathy and connection, but your shadow holds analytical detachment and tough decisions.",
    pattern: "The Harmony Keeper"
  },
  "ENT": {
    persona: "The Strategic Innovator",
    shadow: "The Sentimental Traditionalist",
    description: "You champion change and possibility, but your shadow craves stability and proven methods.",
    pattern: "The Restless Pioneer"
  },
  "ENF": {
    persona: "The Inspirational Catalyst",
    shadow: "The Cynical Realist",
    description: "You inspire through vision and possibility, but your shadow contains hard-nosed skepticism.",
    pattern: "The Idealistic Dreamer"
  },
  "IST": {
    persona: "The Methodical Strategist",
    shadow: "The Reckless Experimenter",
    description: "You lead through careful planning and proven systems, but your shadow desires bold experimentation.",
    pattern: "The Perfectionist Planner"
  },
  "ISF": {
    persona: "The Supportive Steward",
    shadow: "The Ruthless Competitor",
    description: "You lead by serving others and maintaining harmony, but your shadow holds fierce ambition.",
    pattern: "The Self-Sacrificing Guardian"
  },
  "INT": {
    persona: "The Visionary Architect",
    shadow: "The Emotional Connector",
    description: "You build through long-term strategy and systems thinking, but your shadow needs human warmth.",
    pattern: "The Isolated Genius"
  },
  "INF": {
    persona: "The Authentic Idealist",
    shadow: "The Pragmatic Enforcer",
    description: "You lead through values and authentic connection, but your shadow can be surprisingly ruthless.",
    pattern: "The Wounded Healer"
  }
};

export const ThresholdFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [choices, setChoices] = useState<Record<string, JungianChoice>>({});
  const [personalityType, setPersonalityType] = useState<string>('');
  const [shadowResponse, setShadowResponse] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    'Privacy Ritual',
    'Archetypal Assessment',
    'Shadow Recognition',
    'Integration Homework'
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const generatePersonalityType = () => {
    const choiceValues = Object.values(choices);
    const eCount = choiceValues.filter(c => c.type === 'E').length;
    const iCount = choiceValues.filter(c => c.type === 'I').length;
    const sCount = choiceValues.filter(c => c.type === 'S').length;
    const nCount = choiceValues.filter(c => c.type === 'N').length;
    const tCount = choiceValues.filter(c => c.type === 'T').length;
    const fCount = choiceValues.filter(c => c.type === 'F').length;

    const e_i = eCount > iCount ? 'E' : 'I';
    const s_n = sCount > nCount ? 'S' : 'N';
    const t_f = tCount > fCount ? 'T' : 'F';

    return `${e_i}${s_n}${t_f}`;
  };

  const handleChoice = (questionId: number, choice: JungianChoice) => {
    setChoices(prev => ({...prev, [questionId]: choice}));

    if (Object.keys(choices).length + 1 === assessmentQuestions.length) {
      setTimeout(() => {
        const type = generatePersonalityType();
        setPersonalityType(type);
        setCurrentStep(2);
      }, 500);
    }
  };

  const generateKey = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentStep(1);
    }, 3000);
  };

  const handleShadowInput = (response: string) => {
    setShadowResponse(response);
  };

  const completeThreshold = () => {
    setIsComplete(true);
  };

  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl bg-gray-900 border-gray-800">
          <CardContent className="p-12 text-center space-y-8">
            <h1 className="text-3xl font-heading font-bold">The Threshold</h1>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                What you write here leaves your device encrypted.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We cannot read it. We cannot sell it.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Only you hold the key.
              </p>
            </div>

            {isAnimating && (
              <div className="space-y-4">
                <div className="w-32 h-32 mx-auto border-2 border-purple-500 rounded-full animate-spin">
                  <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse opacity-30"></div>
                </div>
                <p className="text-purple-400 animate-pulse">Generating your private key...</p>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                </div>
              </div>
            )}

            {!isAnimating && (
              <Button
                onClick={generateKey}
                className="px-8 py-4 text-lg bg-purple-600 hover:bg-purple-700"
              >
                Generate My Private Key
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  if (currentStep === 1) {
    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Progress value={progress} className="w-full max-w-md mx-auto" />
            <h2 className="text-2xl font-heading font-bold">The Archetypal Baseline</h2>
            <p className="text-gray-400">Before we descend, I need to know the face you show the world.</p>
          </div>

          <div className="space-y-8">
            {assessmentQuestions.map((question) => {
              const hasAnswered = choices[question.id];

              return (
                <Card key={question.id} className="bg-gray-900 border-gray-800">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl text-center">
                      {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {question.choices.map((choice) => (
                        <Button
                          key={choice.id}
                          onClick={() => handleChoice(question.id, choice)}
                          variant={hasAnswered?.id === choice.id ? "default" : "outline"}
                          className="h-auto p-6 text-left flex-col items-start space-y-2"
                          disabled={hasAnswered && hasAnswered.id !== choice.id}
                        >
                          <div className="font-semibold">{choice.text}</div>
                          <div className="text-sm text-gray-400">{choice.description}</div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    const shadowData = shadowPredictions[personalityType as keyof typeof shadowPredictions];

    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Progress value={progress} className="w-full max-w-md mx-auto" />
            <h2 className="text-2xl font-heading font-bold">The Shadow Recognition</h2>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-heading font-bold text-purple-400">
                  {shadowData?.persona}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  You present yourself as a <strong>{shadowData?.persona}</strong>.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This usually means your Shadow—the part you hide—is <strong className="text-red-400">{shadowData?.shadow}</strong>.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {shadowData?.description}
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-4">Tell me about a recent moment when you felt an emotion that didn't fit your '{shadowData?.persona}' self:</h4>
                <textarea
                  value={shadowResponse}
                  onChange={(e) => handleShadowInput(e.target.value)}
                  placeholder="Was it sudden anger? Unexpected vulnerability? Decision paralysis? Be specific about the situation and your internal reaction..."
                  className="w-full h-32 bg-gray-900 border border-gray-700 rounded p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <Button
                onClick={() => setCurrentStep(3)}
                disabled={shadowResponse.length < 50}
                className="w-full py-4 text-lg"
              >
                Reveal My Pattern
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    const shadowData = shadowPredictions[personalityType as keyof typeof shadowPredictions];

    return (
      <div className="min-h-screen bg-black text-white p-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <Progress value={progress} className="w-full max-w-md mx-auto" />
            <h2 className="text-2xl font-heading font-bold">Pattern Integration</h2>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-8 space-y-6">
              <div className="bg-purple-950 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-heading font-bold text-purple-400 mb-4">
                  Pattern Identified: "{shadowData?.pattern}"
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Your response reveals a classic {shadowData?.pattern} dynamic. This emotion wasn't random—it was your {shadowData?.shadow} aspect breaking through your {shadowData?.persona} control.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We will call this pattern <strong>"{shadowData?.pattern}"</strong> and track how it manifests in your leadership decisions.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-4">Your Integration Assignment:</h4>
                <div className="space-y-3 text-gray-300">
                  <p>• <strong>Tonight:</strong> Pay attention to your dreams. Your unconscious is already working on this pattern.</p>
                  <p>• <strong>This Week:</strong> Notice when "{shadowData?.pattern}" activates in meetings or decisions.</p>
                  <p>• <strong>Integration Goal:</strong> Instead of suppressing your {shadowData?.shadow} side, find ways to channel it constructively.</p>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h4 className="font-heading font-bold mb-4">Set Your Dream Recording Time:</h4>
                <p className="text-gray-400 mb-4">What time do you typically wake up? I'll be waiting to capture your dream before logic washes it away.</p>
                <input
                  type="time"
                  className="bg-gray-900 border border-gray-700 rounded p-3 text-white"
                  defaultValue="07:00"
                />
              </div>

              <Button
                onClick={completeThreshold}
                className="w-full py-4 text-lg bg-purple-600 hover:bg-purple-700"
              >
                Begin The Process™
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl bg-gray-900 border-gray-800">
          <CardContent className="p-12 text-center space-y-8">
            <div className="w-24 h-24 mx-auto bg-green-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-heading font-bold">The Threshold Crossed</h1>
              <p className="text-lg text-gray-300">
                We have identified your first pattern. The session is closed.
              </p>
              <p className="text-lg text-gray-300">
                Rest well. Your unconscious will work tonight.
              </p>
              <p className="text-sm text-gray-500 mt-8">
                The app will lock until your morning dream recording window.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return null;
};