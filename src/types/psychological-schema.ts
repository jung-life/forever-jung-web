// Forever Jung - Psychological Data Schema
// This structure enables deep pattern recognition across time

export interface UserProfile {
  id: string;
  encryptionKey: string; // Generated locally, never leaves device
  createdAt: Date;
  jungianType: JungianType;
  currentPhase: "threshold" | "integration" | "mastery";
}

export interface JungianType {
  // From The Threshold assessment
  primaryFunction: "thinking" | "feeling" | "sensing" | "intuition";
  secondaryFunction: "thinking" | "feeling" | "sensing" | "intuition";
  attitude: "extravert" | "introvert";
  confidence: number; // 0-1, how certain we are of this typing
  assessedAt: Date;
}

export interface ArchetypalPattern {
  id: string;
  name: string; // e.g., "The Guardian at the Gate"
  description: string;
  archetype: "shadow" | "anima" | "animus" | "wise-old-man" | "great-mother" | "hero" | "trickster";
  triggers: string[]; // What activates this pattern
  manifestations: string[]; // How it shows up in behavior
  firstIdentified: Date;
  strengthScore: number; // 0-1, how dominant this pattern is
  integrationLevel: number; // 0-1, how well they've integrated it
  relatedEntries: string[]; // IDs of journal entries that evidence this pattern
}

export interface DreamEntry {
  id: string;
  title: string;
  content: string;
  recordedAt: Date;
  emotions: EmotionalState;
  symbols: DreamSymbol[];
  interpretation?: string;
  relatedPatterns: string[]; // IDs of patterns this dream relates to
  lucidity: "none" | "partial" | "full";
  significance: number; // 0-1, how meaningful this dream feels
}

export interface DreamSymbol {
  symbol: string; // e.g., "dark water", "flying", "dead parent"
  personalMeaning?: string; // User's association
  universalMeaning?: string; // Jungian interpretation
  frequency: number; // How often this appears in their dreams
  firstAppeared: Date;
}

export interface JournalEntry {
  id: string;
  type: "shadow-work" | "reflection" | "trigger-response" | "free-form";
  prompt: string; // The specific question that triggered this entry
  content: string;
  timestamp: Date;
  emotions: EmotionalState;
  insights: string[]; // Key realizations from this entry
  relatedPatterns: string[]; // Patterns this entry evidences/develops
  progressMarkers: ProgressMarker[];
}

export interface EmotionalState {
  primary: string; // anger, fear, sadness, joy, disgust, surprise
  intensity: number; // 0-10
  secondary?: string; // More nuanced emotion
  bodyLocation?: string; // "chest tight", "stomach knot", etc.
  triggers: string[]; // What caused this emotional state
}

export interface ProgressMarker {
  type: "breakthrough" | "integration" | "resistance" | "pattern-recognition";
  description: string;
  timestamp: Date;
  significance: number; // 0-1
}

export interface Ritual {
  id: string;
  name: string; // "Morning Dream Recording", "Shadow Trigger Check"
  frequency: "daily" | "weekly" | "lunar" | "custom";
  timeOfDay?: string; // "07:00", "21:30"
  prompt: string;
  completionStreak: number;
  lastCompleted?: Date;
  isActive: boolean;
}

export interface Session {
  id: string;
  startedAt: Date;
  endedAt?: Date;
  activities: SessionActivity[];
  moodBefore: EmotionalState;
  moodAfter?: EmotionalState;
  insights: string[];
  nextSteps: string[];
}

export interface SessionActivity {
  type: "dream-recording" | "shadow-work" | "reflection" | "pattern-review";
  duration: number; // minutes
  content: string;
  effectiveness: number; // 0-1, user's rating
}

// For the AI's pattern recognition engine
export interface PatternRecognition {
  detectedPatterns: {
    patternId: string;
    confidence: number; // 0-1
    supportingEvidence: string[]; // Entry IDs
    suggestedActions: string[];
  }[];
  cyclicalBehaviors: {
    pattern: string;
    frequency: "daily" | "weekly" | "monthly" | "seasonal";
    lastOccurrence: Date;
    predictedNext: Date;
  }[];
  shadowProjections: {
    target: string; // "boss", "partner", "father"
    projectedQuality: string; // "anger", "weakness", "authority"
    ownedQuality: string; // What they're actually seeing in themselves
    integrationSuggestion: string;
  }[];
}

// This enables the "Memory Moat" - connecting past to present
export interface MemoryLink {
  currentEntryId: string;
  relatedEntryId: string;
  linkType: "similar-emotion" | "same-pattern" | "growth-progression" | "recurring-symbol";
  strength: number; // 0-1
  insight: string; // What this connection reveals
}

// The core data structure
export interface PsychologicalProfile {
  user: UserProfile;
  patterns: ArchetypalPattern[];
  dreams: DreamEntry[];
  journal: JournalEntry[];
  rituals: Ritual[];
  sessions: Session[];
  recognitions: PatternRecognition;
  memoryLinks: MemoryLink[];

  // Computed fields for dashboard
  growthMetrics: {
    daysActive: number;
    patternsIdentified: number;
    patternsIntegrated: number;
    averageSessionDepth: number;
    consistencyScore: number; // 0-1
  };
}